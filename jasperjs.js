function slice (a, b, c) {
    return [].slice.call(a, b, c)
}

var reps = {"<": "_lt", "+": "_p", "=": "_eq", "`": "_qq", "|": "_pipe", "_": "__"};
var wholereps = {"if": "_if"};

function munge (x) {
    if (x.constructor != String || x[0] == "\"") {
	return x
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
    rep = wholereps[x];
    if (rep) {
	return rep
    }
    return res
}

function emptymac (x) {return slice(arguments, 0)}

function def (name, args) {
    var body = ["returnmac", ["do"].concat(slice(arguments, 2, arguments.length))];
    if (args[args.length - 1][0] == "'") {
	body = ["do", ["var=", args[args.length - 1][1],
		       ["slice", "arguments", args.length - 1]],
		body];
	args = args.slice(0, args.length - 1);
    }
    return ["rawdef", name, args, body]
}

function returnmac (a) {
    a = macex(macs, a);
    if (a.constructor == Array) {
	if (a[0] == "do") {
	    var res = slice(a);
	    res[res.length - 1] = ["returnmac", res[res.length - 1]]
	    return res
	} else if (a[0] == "if") {
	    return ["if", a[1], ["returnmac", a[2]], ["returnmac", a[3]]]
	}
    }
    return ["return", a]
}

var macs = {"def": def, "returnmac": returnmac};

function _p (a) {
    return (a !== undefined) ? a + _p.apply(null, slice(arguments, 1)) : 0
}

function sp (a) {
    return (a !== undefined) ? a + sp.apply(null, slice(arguments, 1)) : ""
}

function block () {
    var res = "{\n";
    for (var i = 0; i < arguments.length; i++) {
	res = sp("", res, macex(strmacs, arguments[i]), ";\n");
    }
    return res + "}\n"
}

function arglist (code) {
    var res = "(";
    for (var i = 0; i < code.length; i++) {
	res = sp(res, macex(strmacs, munge(code[i])), (i < code.length - 1? ", " : ""));
    }
    return res + ")"
}

function rawdef (name, args, body) {
    return sp("function ", munge(name), " ", arglist(args), " ", block(body))
}

function forloop (a, b, c) {
    return "for (" + macex(strmacs, a) + "; " + macex(strmacs, b) + "; " +
	macex(strmacs, c) + ") " + block.apply(null, slice(arguments, 3))
}

function funcall (name) {
    return name + arglist(slice(arguments, 1))
}

function vareq (name, val) {
    return "var " + name + " = " + macex(strmacs, val)
}

function plus (a, b) {
    return a ? macex(strmacs, a) + (b ? " + " + plus.apply(null, slice(arguments, 1)) : "") : "0"
}

function eq (a, b) {
    if(b[0] == "r")
	throw new Error(b)
    return macex(strmacs, a) + " = " + macex(strmacs, b)
}

function get (a, b) {
    return macex(strmacs, a) + "[" + macex(strmacs, b) + "]"
}

function quote (a) {
    return JSON.stringify(a)
}

var strmacs = {"rawdef": rawdef, "do": block, "macnotfound": funcall, "for": forloop, "var=": vareq,
	       "=": eq, "get": get, "+": plus, "'": quote}

infixops = [".", "<"];

function makeinfixop (name, op) {
    if (!op) {
	op = name
    }
    strmacs[name] = function (a, b) {
	return macex(strmacs, a) + op + macex(strmacs, b)
    };
}

makeinfixop("is", "===");

for (var i = 0; i < infixops.length; i++) {
    makeinfixop(infixops[i]);
}

function macex (macs, code) {
    if (code.constructor === Array) {
	code[0] = macex(macs, code[0]);
	var mac = macs[code[0]];
	if (mac) {
	    return macex(macs, mac.apply(null, code.slice(1)))
	} else {
	    mac = macs["macnotfound"];
	    if (mac) {
		code = mac.apply(null, code);
	    }
	    if (code.constructor == Array) {
		for (var i = 1; i < code.length; i++) {
		    code[i] = macex(macs, code[i]);
		}
	    }
	    return code
	}
    } else {
	if (code.constructor !== String && code.constructor !== Number) {
	    throw new Error("not a string: " + JSON.stringify(arguments[i]))
	}
	return code
    }
}

