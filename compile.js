var fs = require("fs");

var lib = require("./jasperjs")

var env = {"macex": lib.macex, "require": require};

var input = ""

process.stdin.on("data", function (data) {
    input = input + data;
});

function evalWith (code, env) {
    var names = [], vals = [];
    for (var i in env) {
	names.push(i);
	vals.push(env[i]);
    }
    return Function(names, code).apply(null, vals);
}

process.stdin.on("end", function () {
    var code = JSON.parse(input)
    for (var i = 0; i < code.length; i++) {
	var foo = lib.macex(lib.macs, code[i]);
	if (foo[0] == "assign") {
	    var name = foo[1];
	    var value = foo[2];
	    env[name] = evalWith(lib.rendst(["return", foo[2]]), env);
	    console.log(lib.rendst(foo));
	} else if (foo[0] == "assign-mac") {
	    var name = foo[1];
	    var value = foo[2];
	    lib.macs[name] = evalWith(lib.rendst(["return", foo[2]]), env);
	} else {
	    console.log(lib.rendst(foo));
	}
    }
});
