var fs = require("fs");

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
    for (var index = 0; index < code.length; index++) {
	var foo____ = macex(macs, code[index]);
	var res____ = rendst(foo____);
	console.log(res____)
	if (doeval) {
	    eval(res____);
	}
    }
});
