var gensymCounter = 0;

function gensym (prefix) {
    return (prefix ? prefix : "") + "_g" + gensymCounter++
}

function slice (a, b, c) {
    return [].slice.call(a, b, c)
}

function join (xs, y) {
    if (xs.length > 0) {
	res = xs[0];
	for (var i = 1; i < xs.length; i++) {
	    res = res + y + xs[i];
	}
	return res
    }
    return ""
}

function sfy (x) {
    if (!x)
	return "" + x
    if (x.constructor === Array) {
	return "(" + join(x.map(sfy),  " ") + ")"
    } else if (x.constructor === Object) {
	return "a(" + join(slice(x).map(sfy),  " ") + ")"
    } else {
	return x.toString()
    }
}

function dbg (y, x) {
    console.warn(sfy(y), sfy(x));
    return x
}

var reps = {"<": "_lt", "+": "_p", "=": "_eq", "`": "_qq", "|": "_pipe", "*": "_st", "-": "_d", "_": "__"};
var wholereps = {"if": "_if"};

function munge (x) {
    if (x.constructor !== String || x[0] == "\"") {
	return x
    }
    if (wholereps.hasOwnProperty(x)) {
	return wholereps[x]
    }
    res = "";
    for (var i = 0; i < x.length; i++) {
	rep = reps[x[i]];
	if (rep) {
	    res = res + rep;
	} else {
	    res = res + x[i];
	}
    }
    return res
}

function fun (name, args) {
    var body = slice(arguments, 2);
    var pre = []
    function addArg (name, val) {
	pre.push(["var=", name, val]);
    }
    var restArgIndex = false;
    var restArg;
    var afterArgs;
    for (var i = 0; i < args.length; i++) {
	if (args[i].constructor === Array && args[i][0] === "'") {
	    restArgIndex = i;
	}
    }
    if (restArgIndex !== false) {
	restArg = args[restArgIndex][1];
	afterArgs = slice(args, restArgIndex + 1, args.length);
	args = slice(args, 0, restArgIndex);
    }
    for (var i = 0; i < args.length; i++) {
	if (args[i].constructor === Array) {
	    var arg = gensym();
	    for (var j = 0; j < args[i].length; j++) {
		addArg(args[i][j], ["get", arg, j]);
	    }
	    args[i] = arg;
	}
    }
    if (restArgIndex !== false) {
	addArg(restArg,
	       ["slice", "arguments", restArgIndex,
		["-", [".", "arguments", "length"], afterArgs.length]]);
	for (var i = 0; i < afterArgs.length; i++) {
	    var foo = ["get", "arguments", ["-", [".", "arguments", "length"],
					    afterArgs.length - i]];
	    if (afterArgs[i].constructor === Array) {
		for (var j = 0; j < afterArgs[i].length; j++) {
		    addArg(afterArgs[i][j], ["get", foo, j]);
		}
	    } else {
		addArg(afterArgs[i], foo);
	    }
	}
    }
    return ["rawfun", name, args,
	    ["returnmac", ["do"].concat(pre).concat(body)]]
}

function returnmac (a) {
    a = macex(macs, a);
    if (a.constructor == Array) {
	if (a[0] == "block") {
	    var res = slice(a);
	    res[res.length - 1] = ["returnmac", res[res.length - 1]]
	    return res
	} else if (a[0] == "rawif") {
	    return ["rawif", a[1], ["returnmac", a[2]], ["returnmac", a[3]]]
	}
    }
    return ["return", a]
}

function dom () {
    var res = ["block"];
    for (var i = 0; i < arguments.length; i++) {
	if (arguments[i][0] == "do") {
	    res.concat(slice(arguments[i], 1));
	} else {
	    res.push(arguments[i]);
	}
    }
    return res
}

function ifmac () {
    if (arguments.length === 2) {
	return ["rawif"].concat(slice(arguments), ["null"])
    } else if (arguments.length === 3) {
	return ["rawif"].concat(slice(arguments))
    } else {
	return ["rawif", arguments[0], arguments[1], ifmac.apply(null, slice(arguments, 2))]
    }
}

var macs = {"if": ifmac, "fun": fun, "returnmac": returnmac, "do": dom, "symmacs": {}};

function _p (a) {
    return (a !== undefined) ? a + _p.apply(null, slice(arguments, 1)) : 0
}

function str (a) {
    return (a !== undefined) ? a + str.apply(null, slice(arguments, 1)) : ""
}

function block () {
    var res = "{\n";
    for (var i = 0; i < arguments.length; i++) {
	res = str(res, rendst(arguments[i]).replace(/^(.)/mg, "    $1"));
	// do not replace on last line
    }
    return res + "}\n"
}

function rendexl (code) {
    var l = []
    for (var i = 0; i < code.length; i++) {
	l.push(rendex(code[i]));
    }
    return l
}

function arglist (code) {
    return "(" + join(rendexl(code), ", ") + ")"
}

function rawfun (name, args, body) {
    return str("(function ", munge(name), " ", arglist(args), " ", block(body), ")")
}

function rawif (cond, then, elseclause) {
    return "if (" + rendex(cond) + ")" + block(then) + " else " + block(elseclause)
}

function forloop (a, b, c) {
    return "for (" + rendst(a) + rendex(b) + "; " +
	rendex(c) + ") " + block.apply(null, slice(arguments, 3))
}

function funcall (name, args) {
    return rendex(name) + arglist(args)
}

function vareq (name, val) {
    return "var " + rendex(name) + " = " + rendex(val) + ";\n"
}

function get (a, b) {
    return rendex(a) + "[" + rendex(b) + "]"
}

function quote (a) {
    return JSON.stringify(a)
}

function pp (a) {
    return "++" + rendex(a)
}

var strenderers = {"block": block, "for": forloop,
		    "var=": vareq, "rawif": rawif, "assign": vareq};

var exprenderers = {"get": get, "rawfun": rawfun, "'": quote, "++": pp}

function makeciop (name, op, id) {
    if (!op) {
	op = name
    }
    exprenderers[name] = function (a) {
	return a ? join(rendexl(arguments), op) : id
    };
}

makeciop(".");
makeciop("+", " + ", "0")
makeciop("%", " % ", "0")
makeciop("/", " / ", "1")
makeciop("-", " - ", "0")
makeciop("and", " && ", "true")
makeciop("or", " || ", "false")

var infixops = ["<", "="];

function makeinfixop (name, op) {
    if (!op) {
	op = name
    }
    exprenderers[name] = function (a, b) {
	return rendex(a) + op + rendex(b)
    };
}

makeinfixop("is", "===");
makeinfixop("iso", "==");

for (var i = 0; i < infixops.length; i++) {
    makeinfixop(infixops[i]);
}

function rendex (code) {
    if (code.constructor === Array) {
	if (code.length > 0) {
	    renderer = exprenderers[code[0]];
	    if (renderer) {
		return renderer.apply(null, slice(code, 1))
	    } else {
		return funcall(code[0], slice(code, 1))
	    }
	} else {
	    return "[]"
	}
    } else if (code.constructor === String) {
	return munge(code.toString())
    } else {
	return (code)
    }
}

function rendst (code) {
    if (code.constructor === Array && code[0]) {
	renderer = strenderers[code[0]];
	if (renderer) {
	    return renderer.apply(null, code.slice(1))
	} else {
	    return rendex(code) + ";\n"
	}
    } else {
	return rendex(code) + ";\n"
    }
}

function macex (macs, code) {
    if (code.constructor === Array && code[0]) {
	code[0] = macex(macs, code[0]);
	var mac = macs[code[0]];
	if (mac) {
	    return macex(macs, mac.apply(null, code.slice(1)))
	} else {
	    if (code.constructor == Array) {
		for (var i = 1; i < code.length; i++) {
		    code[i] = macex(macs, code[i]);
		}
	    }
	    return code
	}
    } else {
	if (code.constructor === String) {
	    var mac = macs["symmacs"][code];
	    if (mac) {
		return mac(code)
	    }
	} 
	if (code.constructor !== String && code.constructor !== Number) {
	    //throw new Error("not a string: " + JSON.stringify(arguments[i]))
	}
	return code
    }
}

exports.dbg = dbg;
exports.macex = macex;
exports.rendst = rendst;
exports.macs = macs;
