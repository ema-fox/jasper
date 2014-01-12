fs = require("fs");

var jj = "" + fs.readFileSync("jasperjs.js");

var doeval = true;

eval(jj);

var input = ""

process.stdin.on("data", function (data) {
    input = input + data;
});

process.stdin.on("end", function () {
    console.log(jj);
    var code = JSON.parse(input)
    var res = []
    for (var i = 0; i < code.length; i++) {
	var foo = macex(macs, code[i]);
	//console.log(foo);
	res = macex(strmacs, foo);
	console.log(res)
	if (doeval) {
	    eval(res);
	}
    }
});
