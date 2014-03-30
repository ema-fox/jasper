"use strict";
var slice = ((function  () {
    return ((function slice (xs, start, end) {
    return (((([].slice.call)(xs, start, end))))
}))
})());
var list = ((function  () {
    return ((function list () {
    var xs_g1, g_g0_g2;
    return (((g_g0_g2 = arguments), ((xs_g1 = (slice(g_g0_g2, 0, ((g_g0_g2.length) - 0)))), xs_g1)))
}))
})());
"((function  () {\n    return ((function mac (name) {\n    var argsnbody_g4, g_g3_g5;\n    return (((g_g3_g5 = arguments), ((argsnbody_g4 = (slice(g_g3_g5, 1, ((g_g3_g5.length) - 0)))), (list((\"assign-mac\"), name, (((list((\"fun\"), name)).concat)(argsnbody_g4)))))))\n}))\n})())";
"((function  () {\n    return ((function def (name) {\n    var argsnbody_g7, g_g6_g8;\n    return (((g_g6_g8 = arguments), ((argsnbody_g7 = (slice(g_g6_g8, 1, ((g_g6_g8.length) - 0)))), (list((\"assign\"), name, (((list((\"fun\"), name)).concat)(argsnbody_g7)))))))\n}))\n})())";
var idfn = ((function  () {
    return ((function idfn (x) {
    return ((x))
}))
})());
var cat = ((function  () {
    return ((function cat () {
    return (((([].concat.apply)([], arguments))))
}))
})());
var join = ((function  () {
    return ((function join (xs, x) {
    return (((([].join.call)(xs, x))))
}))
})());
var str = ((function  () {
    return ((function str () {
    var xs_g10, g_g9_g11;
    return (((g_g9_g11 = arguments), ((xs_g10 = (slice(g_g9_g11, 0, ((g_g9_g11.length) - 0)))), (join(xs_g10, (""))))))
}))
})());
var alist = ((function  () {
    return ((function alist (x) {
    return (((x ? ((x.constructor) === Array) : undefined)))
}))
})());
var astr = ((function  () {
    return ((function astr (x) {
    return ((((typeof(x)) === ("string"))))
}))
})());
var anumber = ((function  () {
    return ((function anumber (x) {
    return ((((typeof(x)) === ("number"))))
}))
})());
var afunction = ((function  () {
    return ((function afunction (x) {
    return ((((typeof(x)) === ("function"))))
}))
})());
var apply = ((function  () {
    return ((function apply (f) {
    var argsa_g13, argsb_g14, g_g12_g15;
    return (((g_g12_g15 = arguments), ((argsb_g14 = (g_g12_g15[((g_g12_g15.length) - 1)])), ((argsa_g13 = (slice(g_g12_g15, 1, ((g_g12_g15.length) - 1)))), ((f.apply)(null, (cat(argsa_g13, argsb_g14))))))))
}))
})());
"((function  () {\n    return ((function $br () {\n    var body_g17, g_g16_g18;\n    return (((g_g16_g18 = arguments), ((body_g17 = (slice(g_g16_g18, 0, ((g_g16_g18.length) - 0)))), (list((\"fun\"), (\"\"), (list((\"_\"))), body_g17)))))\n}))\n})())";
var map1 = ((function  () {
    return ((function map1 (f, xs) {
    return (((([].map.call)(xs, (function  (_) {
    return (((f(_))))
})))))
}))
})());
var map = ((function  () {
    return ((function map (f) {
    var g_g20_g21, i_g22, ys_g23, length_g24, xss_g25, g_g19_g26;
    return (((g_g19_g26 = arguments), ((xss_g25 = (slice(g_g19_g26, 1, ((g_g19_g26.length) - 0)))), (((g_g20_g21 = ((xss_g25.length) === 1)), (((alist(g_g20_g21)) && ((g_g20_g21.length) === 0)) ? false : ((g_g20_g21 === 0) ? true : g_g20_g21))) ? (map1(f, (xss_g25[0]))) : ((length_g24 = (apply((Math.min), (map1((function  (_) {
    return (((_.length)))
}), xss_g25))))), ((ys_g23 = []), ((i_g22 = 0), (function () {while ((i_g22 < length_g24)) {
    ((ys_g23.push)((apply(f, (map1((function  (_) {
    return (((_[i_g22])))
}), xss_g25)))))), (++i_g22);
}}())), ys_g23))))))
}))
})());
var sfy = ((function  () {
    return ((function sfy (x) {
    var g_g27_g30, g_g28_g31, g_g29_g32;
    return (((((g_g27_g30 = (x === null)), (((alist(g_g27_g30)) && ((g_g27_g30.length) === 0)) ? false : ((g_g27_g30 === 0) ? true : g_g27_g30))) ? ("null") : (((g_g28_g31 = (x === undefined)), (((alist(g_g28_g31)) && ((g_g28_g31.length) === 0)) ? false : ((g_g28_g31 === 0) ? true : g_g28_g31))) ? ("undefined") : (((g_g29_g32 = (alist(x))), (((alist(g_g29_g32)) && ((g_g29_g32.length) === 0)) ? false : ((g_g29_g32 === 0) ? true : g_g29_g32))) ? (str(("("), (join((map(sfy, x)), (" "))), (")"))) : (str(x)))))))
}))
})());
var prn = ((function  () {
    return ((function prn (a) {
    var as_g34, g_g33_g35;
    return (((g_g33_g35 = arguments), ((as_g34 = (slice(g_g33_g35, 1, ((g_g33_g35.length) - 0)))), (apply((console.log), (sfy(a)), (map(sfy, as_g34)))), a)))
}))
})());
var mapcat = ((function  () {
    return ((function mapcat (f) {
    var xss_g37, g_g36_g38;
    return (((g_g36_g38 = arguments), ((xss_g37 = (slice(g_g36_g38, 1, ((g_g36_g38.length) - 0)))), (apply(cat, (apply(map, f, xss_g37)))))))
}))
})());
var quote = ((function  () {
    return ((function quote (a) {
    return ((((JSON.stringify)(a))))
}))
})());
var catmac = ((function  () {
    return ((function catmac (xs) {
    var g_g39_g42;
    return (((((g_g39_g42 = ((xs.every)((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("list")))))
})))), (((alist(g_g39_g42)) && ((g_g39_g42.length) === 0)) ? false : ((g_g39_g42 === 0) ? true : g_g39_g42))) ? (cat((["list"]), (mapcat((function  (sub_g40) {
    var __g43, ys_g44, g_g41_g45;
    return ((((g_g41_g45 = sub_g40), ((ys_g44 = (slice(g_g41_g45, 1, ((g_g41_g45.length) - 0)))), ((__g43 = (g_g41_g45[0])), ys_g44)))))
}), xs)))) : (cat((["cat"]), xs)))))
}))
})());
var runqq = ((function  () {
    return ((function runqq (a) {
    var g_g46_g49, g_g47_g50, g_g48_g51;
    return (((((g_g46_g49 = (alist(a))), (((alist(g_g46_g49)) && ((g_g46_g49.length) === 0)) ? false : ((g_g46_g49 === 0) ? true : g_g46_g49))) ? (((g_g47_g50 = ((a[0]) === (",@"))), (((alist(g_g47_g50)) && ((g_g47_g50.length) === 0)) ? false : ((g_g47_g50 === 0) ? true : g_g47_g50))) ? (a[1]) : (((g_g48_g51 = ((a[0]) === (","))), (((alist(g_g48_g51)) && ((g_g48_g51.length) === 0)) ? false : ((g_g48_g51 === 0) ? true : g_g48_g51))) ? (list(("list"), (a[1]))) : (list(("list"), (catmac((map(runqq, a)))))))) : (cat((["list"]), (quote(a)))))))
}))
})());
"((function  () {\n    return ((function $qq (a) {\n    var g_g52_g53, xs_g54;\n    return ((((xs_g54 = (runqq(a))), (((g_g52_g53 = ((alist(xs_g54)) && ((xs_g54[0]) === (\"list\")))), (((alist(g_g52_g53)) && ((g_g52_g53.length) === 0)) ? false : ((g_g52_g53 === 0) ? true : g_g52_g53))) ? (xs_g54[1]) : (list((\"get\"), xs_g54, 0))))))\n}))\n})())";
"((function  () {\n    return ((function fn (args) {\n    var body_g56, g_g55_g57;\n    return (((g_g55_g57 = arguments), ((body_g56 = (slice(g_g55_g57, 1, ((g_g55_g57.length) - 0)))), (cat((list(\"fun\")), (list(\"\")), (list(args)), body_g56)))))\n}))\n})())";
"((function  () {\n    return ((function when (cond) {\n    var body_g59, g_g58_g60;\n    return (((g_g58_g60 = arguments), ((body_g59 = (slice(g_g58_g60, 1, ((g_g58_g60.length) - 0)))), (list(\"if\", cond, (cat((list(\"do\")), body_g59)))))))\n}))\n})())";
"((function  () {\n    return ((function land () {\n    var g_g62_g64, g_g63_g65, xs_g66, g_g61_g67;\n    return (((g_g61_g67 = arguments), ((xs_g66 = (slice(g_g61_g67, 0, ((g_g61_g67.length) - 0)))), (((g_g62_g64 = ((xs_g66.length) === 0)), (((alist(g_g62_g64)) && ((g_g62_g64.length) === 0)) ? false : ((g_g62_g64 === 0) ? true : g_g62_g64))) ? true : (((g_g63_g65 = ((xs_g66.length) === 1)), (((alist(g_g63_g65)) && ((g_g63_g65.length) === 0)) ? false : ((g_g63_g65 === 0) ? true : g_g63_g65))) ? (xs_g66[0]) : (list(\"if\", (xs_g66[0]), (cat((list(\"land\")), (slice(xs_g66, 1)))))))))))\n}))\n})())";
var subsname = ((function  () {
    return ((function subsname (name, sub, code) {
    var g_g68_g71, g_g69_g72, g_g70_g73;
    return (((((g_g68_g71 = (alist(code))), (((alist(g_g68_g71)) && ((g_g68_g71.length) === 0)) ? false : ((g_g68_g71 === 0) ? true : g_g68_g71))) ? (((g_g69_g72 = ((code[0]) === ("."))), (((alist(g_g69_g72)) && ((g_g69_g72.length) === 0)) ? false : ((g_g69_g72 === 0) ? true : g_g69_g72))) ? (cat((list(".")), (list((subsname(name, sub, (code[1]))))), (slice(code, 2)))) : (map((function  (x) {
    return (((subsname(name, sub, x))))
}), code))) : (((g_g70_g73 = (code === name)), (((alist(g_g70_g73)) && ((g_g70_g73.length) === 0)) ? false : ((g_g70_g73 === 0) ? true : g_g70_g73))) ? sub : code))))
}))
})());
var first = ((function  () {
    return ((function first (sub_g74) {
    var a_g76, __g77, g_g75_g78;
    return ((((g_g75_g78 = sub_g74), ((__g77 = (g_g75_g78[1])), ((a_g76 = (g_g75_g78[0])), a_g76)))))
}))
})());
var second = ((function  () {
    return ((function second (sub_g79) {
    var __g81, a_g82, g_g80_g83;
    return ((((g_g80_g83 = sub_g79), ((a_g82 = (g_g80_g83[1])), ((__g81 = (g_g80_g83[0])), a_g82)))))
}))
})());
"((function  () {\n    return ((function with_ (bindings) {\n    var g_g85_g86, body_g87, g_g84_g88;\n    return (((g_g84_g88 = arguments), ((body_g87 = (slice(g_g84_g88, 1, ((g_g84_g88.length) - 0)))), (((g_g85_g86 = ((bindings.length) === 0)), (((alist(g_g85_g86)) && ((g_g85_g86.length) === 0)) ? false : ((g_g85_g86 === 0) ? true : g_g85_g86))) ? (cat((list(\"do\")), body_g87)) : (list(\"let\", (first(bindings)), (second(bindings)), (cat((list(\"with\")), (list((slice(bindings, 2)))), body_g87))))))))\n}))\n})())";
"((function  () {\n    return ((function aif (expr, then, else_) {\n    return (((list(\"let\", \"it\", expr, (list(\"if\", \"it\", then, else_))))))\n}))\n})())";
"((function  () {\n    return ((function laif (expr, then, else_) {\n    return (((list(\"let\", \"it\", expr, (list(\"if\", \"it\", then, else_))))))\n}))\n})())";
"((function  () {\n    return ((function afn (args) {\n    var body_g90, g_g89_g91;\n    return (((g_g89_g91 = arguments), ((body_g90 = (slice(g_g89_g91, 1, ((g_g89_g91.length) - 0)))), (cat((list(\"fun\")), (list(\"self\")), (list(args)), body_g90)))))\n}))\n})())";
"((function  () {\n    return ((function awhile (cond) {\n    var body_g93, g_g92_g94;\n    return (((g_g92_g94 = arguments), ((body_g93 = (slice(g_g92_g94, 1, ((g_g92_g94.length) - 0)))), (list(\"let\", \"it\", \"undefined\", (cat((list(\"while\")), (list((list(\"=\", \"it\", cond)))), body_g93)))))))\n}))\n})())";
var listify = ((function  () {
    return ((function listify (x) {
    var g_g95_g96;
    return (((((g_g95_g96 = (alist(x))), (((alist(g_g95_g96)) && ((g_g95_g96.length) === 0)) ? false : ((g_g95_g96 === 0) ? true : g_g95_g96))) ? x : (list(x)))))
}))
})());
"((function  () {\n    return ((function w$suniq (names) {\n    var body_g98, g_g97_g99;\n    return (((g_g97_g99 = arguments), ((body_g98 = (slice(g_g97_g99, 1, ((g_g97_g99.length) - 0)))), (cat((list(\"with\")), (list((mapcat((function  (_) {\n    return (((list(_, (list(\"gensym\", (list(\"'\", _))))))))\n}), (listify(names)))))), body_g98)))))\n}))\n})())";
"((function  () {\n    return ((function zap (f, place) {\n    var args_g101, g_g100_g102;\n    return (((g_g100_g102 = arguments), ((args_g101 = (slice(g_g100_g102, 2, ((g_g100_g102.length) - 0)))), (list(\"=\", place, (cat((list(f)), (list(place)), args_g101)))))))\n}))\n})())";
var pair = ((function  () {
    return ((function pair (xs) {
    var g_g103_g104, i_g105, ys_g106;
    return ((((ys_g106 = []), ((i_g105 = 0), ((function () {while ((i_g105 < (xs.length))) {
    (((g_g103_g104 = ((i_g105 + 1) < (xs.length))), (((alist(g_g103_g104)) && ((g_g103_g104.length) === 0)) ? false : ((g_g103_g104 === 0) ? true : g_g103_g104))) ? ((ys_g106.push)((list((xs[i_g105]), (xs[(i_g105 + 1)]))))) : ((ys_g106.push)((list((xs[i_g105])))))), (i_g105 = (i_g105 + 2));
}}()), ys_g106)))))
}))
})());
"((function  () {\n    return ((function case_ (expr) {\n    var g_g109, args_g110, g_g107_g111;\n    return (((g_g107_g111 = arguments), ((args_g110 = (slice(g_g107_g111, 1, ((g_g107_g111.length) - 0)))), ((g_g109 = (gensym((\"g\")))), ((list(\"let\", g_g109, expr, (cat((list(\"if\")), (mapcat((function  (_) {\n    var g_g108_g112;\n    return (((((g_g108_g112 = ((_.length) === 2)), (((alist(g_g108_g112)) && ((g_g108_g112.length) === 0)) ? false : ((g_g108_g112 === 0) ? true : g_g108_g112))) ? (list((list(\"is\", g_g109, (list(\"'\", (_[0]))))), (_[1]))) : _)))\n}), (pair(args_g110)))))))))))))\n}))\n})())";
"((function  () {\n    return ((function dbg () {\n    var g_g114, xs_g115, g_g113_g116;\n    return (((g_g113_g116 = arguments), ((xs_g115 = (slice(g_g113_g116, 0, ((g_g113_g116.length) - 0)))), ((g_g114 = (gensym((\"g\")))), ((list(\"let\", g_g114, xs_g115, (list(\"prn\", (list(\"'\", xs_g115)), (list(\"'\", \":\")), g_g114)), g_g114)))))))\n}))\n})())";
"((function  () {\n    return ((function lor () {\n    var g_g118_g119, g_g120, xs_g121, g_g117_g122;\n    return (((g_g117_g122 = arguments), ((xs_g121 = (slice(g_g117_g122, 0, ((g_g117_g122.length) - 0)))), (((g_g118_g119 = xs_g121), (((alist(g_g118_g119)) && ((g_g118_g119.length) === 0)) ? false : ((g_g118_g119 === 0) ? true : g_g118_g119))) ? ((g_g120 = (gensym((\"g\")))), ((list(\"let\", g_g120, (xs_g121[0]), (list(\"if\", g_g120, g_g120, (cat((list(\"lor\")), (slice(xs_g121, 1)))))))))) : null))))\n}))\n})())";
"((function  () {\n    return ((function do1 (x) {\n    var g_g124, xs_g125, g_g123_g126;\n    return (((g_g123_g126 = arguments), ((xs_g125 = (slice(g_g123_g126, 1, ((g_g123_g126.length) - 0)))), ((g_g124 = (gensym((\"g\")))), ((cat((list(\"let\")), (list(g_g124)), (list(x)), xs_g125, (list(g_g124)))))))))\n}))\n})())";
var list2obj = ((function  () {
    return ((function list2obj (args) {
    var res_g129;
    return ((((res_g129 = ((Object.create)(null))), (map((function  (sub_g127) {
    var k_g130, v_g131, g_g128_g132;
    return ((((g_g128_g132 = sub_g127), ((v_g131 = (g_g128_g132[1])), ((k_g130 = (g_g128_g132[0])), ((res_g129[k_g130]) = v_g131))))))
}), args)), res_g129)))
}))
})());
"((function  () {\n    return ((function obj () {\n    var args_g136, g_g133_g137;\n    return (((g_g133_g137 = arguments), ((args_g136 = (slice(g_g133_g137, 0, ((g_g133_g137.length) - 0)))), (list(\"list2obj\", (cat((list(\"list\")), (map((function  (sub_g134) {\n    var k_g138, v_g139, g_g135_g140;\n    return ((((g_g135_g140 = sub_g134), ((v_g139 = (g_g135_g140[1])), ((k_g138 = (g_g135_g140[0])), (list(\"list\", (list(\"'\", k_g138)), v_g139)))))))\n}), (pair(args_g136)))))))))))\n}))\n})())";
"((function  () {\n    return ((function each_while (iv, xs, cond) {\n    var g_g142_g143, v_g144, i_g145, body_g146, g_g141_g147;\n    return (((g_g141_g147 = arguments), ((body_g146 = (slice(g_g141_g147, 3, ((g_g141_g147.length) - 0)))), ((i_g145 = null), ((v_g144 = null), ((((g_g142_g143 = (alist(iv))), (((alist(g_g142_g143)) && ((g_g142_g143.length) === 0)) ? false : ((g_g142_g143 === 0) ? true : g_g142_g143))) ? ((i_g145 = (first(iv))), (v_g144 = (second(iv)))) : ((i_g145 = (gensym(i_g145))), (v_g144 = iv))), (list(\"let\", i_g145, 0, (cat((list(\"while\")), (list((list(\"and\", (list(\"<\", i_g145, (list(\".\", xs, \"length\")))), cond)))), (subsname(v_g144, (list(\"get\", xs, i_g145)), body_g146)), (list((list(\"++\", i_g145))))))))))))))\n}))\n})())";
"((function  () {\n    return ((function each (iv, xs) {\n    var body_g149, g_g148_g150;\n    return (((g_g148_g150 = arguments), ((body_g149 = (slice(g_g148_g150, 2, ((g_g148_g150.length) - 0)))), (cat((list(\"each-while\")), (list(iv)), (list(xs)), (list(\"true\")), body_g149)))))\n}))\n})())";
var testify = ((function  () {
    return ((function testify (test) {
    var g_g151_g152;
    return (((((g_g151_g152 = (afunction(test))), (((alist(g_g151_g152)) && ((g_g151_g152.length) === 0)) ? false : ((g_g151_g152 === 0) ? true : g_g151_g152))) ? test : (function  (_) {
    return (((test === _)))
}))))
}))
})());
"((function  () {\n    return ((function no (x) {\n    return (((list(\"if\", x, \"false\", \"true\"))))\n}))\n})())";
var index_by = ((function  () {
    return ((function index_by (test, xs) {
    var g_g153_g155, g_g154_g156, i_g157, index_g158, f_g159;
    return ((((f_g159 = (testify(test))), ((index_g158 = false), (((i_g157 = 0), (function () {while (((i_g157 < (xs.length)) && (((g_g153_g155 = index_g158), (((alist(g_g153_g155)) && ((g_g153_g155.length) === 0)) ? false : ((g_g153_g155 === 0) ? true : g_g153_g155))) ? false : true))) {
    (((g_g154_g156 = (f_g159((xs[i_g157])))), (((alist(g_g154_g156)) && ((g_g154_g156.length) === 0)) ? false : ((g_g154_g156 === 0) ? true : g_g154_g156))) ? (index_g158 = i_g157) : null), (++i_g157);
}}())), index_g158)))))
}))
})());
var find = ((function  () {
    return ((function find (test, xs) {
    var g_g160_g161, it_g162;
    return ((((it_g162 = (index_by(test, xs))), (((g_g160_g161 = it_g162), (((alist(g_g160_g161)) && ((g_g160_g161.length) === 0)) ? false : ((g_g160_g161 === 0) ? true : g_g160_g161))) ? (xs[it_g162]) : undefined))))
}))
})());
var split_by = ((function  () {
    return ((function split_by (f, xs) {
    var g_g163_g164, i_g165;
    return ((((i_g165 = (index_by(f, xs))), (((g_g163_g164 = (i_g165 === false)), (((alist(g_g163_g164)) && ((g_g163_g164.length) === 0)) ? false : ((g_g163_g164 === 0) ? true : g_g163_g164))) ? (list(xs, [])) : (list((slice(xs, 0, i_g165)), (slice(xs, i_g165))))))))
}))
})());
var some = ((function  () {
    return ((function some (test, xs) {
    var g_g167_g169, g_g168_g170, it_g171, _g166_g172, res_g173, f_g174;
    return ((((f_g174 = (testify(test))), ((res_g173 = false), (((_g166_g172 = 0), (function () {while (((_g166_g172 < (xs.length)) && (((g_g167_g169 = res_g173), (((alist(g_g167_g169)) && ((g_g167_g169.length) === 0)) ? false : ((g_g167_g169 === 0) ? true : g_g167_g169))) ? false : true))) {
    ((it_g171 = (f_g174((xs[_g166_g172])))), (((g_g168_g170 = it_g171), (((alist(g_g168_g170)) && ((g_g168_g170.length) === 0)) ? false : ((g_g168_g170 === 0) ? true : g_g168_g170))) ? (res_g173 = it_g171) : undefined)), (++_g166_g172);
}}())), res_g173)))))
}))
})());
var all = ((function  () {
    return ((function all (test, xs) {
    var f_g175;
    return ((((f_g175 = (testify(test))), (!((some((function  (_) {
    return (((!((f_g175(_))))))
}), xs)))))))
}))
})());
var iso = ((function  () {
    return ((function iso (x, y) {
    return ((((x === y) || ((alist(x)) && (alist(y)) && ((x.length) === (y.length)) && (all(true, (map(iso, x, y))))))))
}))
})());
"((function  () {\n    return ((function callback (to, from) {\n    var body_g177, g_g176_g178;\n    return (((g_g176_g178 = arguments), ((body_g177 = (slice(g_g176_g178, 2, ((g_g176_g178.length) - 0)))), (cat(to, (list((cat((list(\"fn\")), (list(from)), body_g177)))))))))\n}))\n})())";
"((function  () {\n    return ((function defp (name, args) {\n    var body_g180, g_g179_g181;\n    return (((g_g179_g181 = arguments), ((body_g180 = (slice(g_g179_g181, 2, ((g_g179_g181.length) - 0)))), (list(\"def\", name, args, (cat((list(\"fn\")), (list((list(\"xs\", \"i\")))), body_g180)))))))\n}))\n})())";
"((function  () {\n    return ((function defletp (name, args, varname, val) {\n    var body_g183, g_g182_g184;\n    return (((g_g182_g184 = arguments), ((body_g183 = (slice(g_g182_g184, 4, ((g_g182_g184.length) - 0)))), (list(\"def\", name, args, (list(\"let\", varname, val, (cat((list(\"fn\")), (list((list(\"xs\", \"i\")))), body_g183)))))))))\n}))\n})())";
var eof = ((function  () {
    return ((function  (xs, i) {
    var g_g185_g186;
    return (((((g_g185_g186 = ((xs.length) === i)), (((alist(g_g185_g186)) && ((g_g185_g186.length) === 0)) ? false : ((g_g185_g186 === 0) ? true : g_g185_g186))) ? (list(true, i)) : ([["no-eof"]]))))
}))
})());
var one_of = ((function  () {
    return ((function one_of (ys) {
    var err_g188;
    return ((((err_g188 = (list((list("one-of", ys))))), (function  (xs, i) {
    var g_g187_g189, x_g190;
    return ((((x_g190 = (xs[i])), (((g_g187_g189 = (some(x_g190, ys))), (((alist(g_g187_g189)) && ((g_g187_g189.length) === 0)) ? false : ((g_g187_g189 === 0) ? true : g_g187_g189))) ? (list(x_g190, (i + 1))) : err_g188))))
}))))
}))
})());
var none_of = ((function  () {
    return ((function none_of (ys) {
    var err_g192;
    return ((((err_g192 = (list((list("none-of", ys))))), (function  (xs, i) {
    var g_g191_g193, x_g194;
    return ((((x_g194 = (xs[i])), (((g_g191_g193 = (!((some(x_g194, ys))))), (((alist(g_g191_g193)) && ((g_g191_g193.length) === 0)) ? false : ((g_g191_g193 === 0) ? true : g_g191_g193))) ? (list(x_g194, (i + 1))) : err_g192))))
}))))
}))
})());
var por = ((function  () {
    return ((function por () {
    var fs_g202, g_g195_g203;
    return (((g_g195_g203 = arguments), ((fs_g202 = (slice(g_g195_g203, 0, ((g_g195_g203.length) - 0)))), (function  (xs, i) {
    var g_g196_g204, g_g197_g205, foo_g206, g_g199_g207, g_g201_g208, g_g200_g209, g_g198_g210, res_g211, j_g212, errs_g213;
    return ((((errs_g213 = []), ((j_g212 = 0), ((res_g211 = false), ((function () {while (((j_g212 < (fs_g202.length)) && (((g_g196_g204 = res_g211), (((alist(g_g196_g204)) && ((g_g196_g204.length) === 0)) ? false : ((g_g196_g204 === 0) ? true : g_g196_g204))) ? false : true))) {
    ((foo_g206 = ((fs_g202[j_g212])(xs, i))), (((g_g197_g205 = (foo_g206[1])), (((alist(g_g197_g205)) && ((g_g197_g205.length) === 0)) ? false : ((g_g197_g205 === 0) ? true : g_g197_g205))) ? (res_g211 = foo_g206) : (((errs_g213.push)((foo_g206[0]))), (++j_g212))));
}}()), ((g_g198_g210 = res_g211), (((g_g199_g207 = g_g198_g210), (((alist(g_g199_g207)) && ((g_g199_g207.length) === 0)) ? false : ((g_g199_g207 === 0) ? true : g_g199_g207))) ? g_g198_g210 : ((g_g200_g209 = (list((cat((list("or")), errs_g213))))), (((g_g201_g208 = g_g200_g209), (((alist(g_g201_g208)) && ((g_g201_g208.length) === 0)) ? false : ((g_g201_g208 === 0) ? true : g_g201_g208))) ? g_g200_g209 : null))))))))))
}))))
}))
})());
var chain = ((function  () {
    return ((function chain () {
    var fs_g217, g_g214_g218;
    return (((g_g214_g218 = arguments), ((fs_g217 = (slice(g_g214_g218, 0, ((g_g214_g218.length) - 0)))), (function  (xs, i) {
    var res_g219;
    return ((((res_g219 = []), ((function self (fs_g217) {
    var g_g215_g220, g_g216_g221, foo_g222;
    return (((((g_g215_g220 = fs_g217), (((alist(g_g215_g220)) && ((g_g215_g220.length) === 0)) ? false : ((g_g215_g220 === 0) ? true : g_g215_g220))) ? ((foo_g222 = ((fs_g217[0])(xs, i))), (((g_g216_g221 = ((foo_g222.length) === 2)), (((alist(g_g216_g221)) && ((g_g216_g221.length) === 0)) ? false : ((g_g216_g221 === 0) ? true : g_g216_g221))) ? (((res_g219.push)((foo_g222[0]))), (i = (foo_g222[1])), (self((slice(fs_g217, 1))))) : (list((cat((list("at")), (list(i)), foo_g222)))))) : (list(res_g219, i)))))
})(fs_g217)))))
}))))
}))
})());
var pstr = ((function  () {
    return ((function pstr (s) {
    var err_g224;
    return ((((err_g224 = (list((list(s))))), (function  (xs, i) {
    var g_g223_g225;
    return (((((g_g223_g225 = (((xs.substr)(i, (s.length))) === s)), (((alist(g_g223_g225)) && ((g_g223_g225.length) === 0)) ? false : ((g_g223_g225 === 0) ? true : g_g223_g225))) ? (list(s, (i + (s.length)))) : err_g224)))
}))))
}))
})());
var many = ((function  () {
    return ((function many (f) {
    return (((function  (xs, i) {
    var foo_g226, res_g227;
    return ((((res_g227 = []), ((foo_g226 = undefined), ((function () {while (((foo_g226 = (f(xs, i))), ((foo_g226.length) === 2))) {
    ((res_g227.push)((foo_g226[0]))), (i = (foo_g226[1]));
}}()), (list(res_g227, i)))))))
})))
}))
})());
var transform = ((function  () {
    return ((function transform (f, p) {
    return (((function  (xs, i) {
    var g_g228_g229, foo_g230;
    return ((((foo_g230 = (p(xs, i))), (((g_g228_g229 = ((foo_g230.length) === 2)), (((alist(g_g228_g229)) && ((g_g228_g229.length) === 0)) ? false : ((g_g228_g229 === 0) ? true : g_g228_g229))) ? (list((f((foo_g230[0]))), (foo_g230[1]))) : foo_g230))))
})))
}))
})());
"((function  () {\n    return ((function transp (arg, body, p) {\n    return (((list(\"transform\", (list(\"fn\", (list(arg)), body)), p))))\n}))\n})())";
var many1 = ((function  () {
    return ((function many1 (f) {
    return (((transform((function  (sub_g231) {
    var x_g233, xs_g234, g_g232_g235;
    return ((((g_g232_g235 = sub_g231), ((xs_g234 = (g_g232_g235[1])), ((x_g233 = (g_g232_g235[0])), (cat((list(x_g233)), xs_g234)))))))
}), (chain(f, (many(f))))))))
}))
})());
var pnothing = ((function  () {
    return ((function  (xs, i) {
    return (((list(null, i))))
}))
})());
var optional = ((function  () {
    return ((function optional (f) {
    return (((por(f, pnothing))))
}))
})());
var sep_by1 = ((function  () {
    return ((function sep_by1 (fa, fb) {
    return (((transform((function  (sub_g236) {
    var x_g238, xs_g239, g_g237_g240;
    return ((((g_g237_g240 = sub_g236), ((xs_g239 = (g_g237_g240[1])), ((x_g238 = (g_g237_g240[0])), (cat((list(x_g238)), (map(second, xs_g239)))))))))
}), (chain(fa, (many((chain(fb, fa))))))))))
}))
})());
var sep_by = ((function  () {
    return ((function sep_by (fa, fb) {
    return (((por((sep_by1(fa, fb)), (transform((function  (sub_g241) {
    return ((([])))
}), pnothing))))))
}))
})());
var prange = ((function  () {
    return ((function prange (a, b) {
    var err_g245;
    return ((((err_g245 = (list((list("range", a, b))))), (function  (xs, i) {
    var g2_g244_g246, g1_g243_g247, g_g242_g248, x_g249;
    return ((((x_g249 = (xs[i])), (((g_g242_g248 = ((g1_g243_g247 = a), ((g2_g244_g246 = x_g249), (((g1_g243_g247 <= g2_g244_g246) && (g2_g244_g246 <= b)))))), (((alist(g_g242_g248)) && ((g_g242_g248.length) === 0)) ? false : ((g_g242_g248 === 0) ? true : g_g242_g248))) ? (list(x_g249, (i + 1))) : err_g245))))
}))))
}))
})());
var dbgp = ((function  () {
    return ((function dbgp (f) {
    return (((function  (xs, i) {
    var foo_g250;
    return ((((foo_g250 = (f(xs, i))), (prn(xs, i, foo_g250)), foo_g250)))
})))
}))
})());
var alpha = ((function  () {
    return ((por((prange(("a"), ("z"))), (prange(("A"), ("Z"))))))
})());
var digit = ((function  () {
    return ((prange(("0"), ("9"))))
})());
var symbol_char = ((function  () {
    return ((por(alpha, (one_of(("!/%-$<>_+*="))))))
})());
var symbol = ((function  () {
    return ((por((transform((function  (sub_g251) {
    var x_g253, xs_g254, g_g252_g255;
    return ((((g_g252_g255 = sub_g251), ((xs_g254 = (g_g252_g255[1])), ((x_g253 = (g_g252_g255[0])), (apply(str, x_g253, xs_g254)))))))
}), (chain(symbol_char, (many((por(symbol_char, digit)))))))), (one_of(("."))))))
})());
var between = ((function  () {
    return ((function between (a, b, c) {
    return (((transform((function  (sub_g256) {
    var __g258, x_g259, __g260, g_g257_g261;
    return ((((g_g257_g261 = sub_g256), ((__g260 = (g_g257_g261[2])), ((x_g259 = (g_g257_g261[1])), ((__g258 = (g_g257_g261[0])), x_g259))))))
}), (chain(a, c, b))))))
}))
})());
var start_sep_end = ((function  () {
    return ((function start_sep_end (fa, fb) {
    return (((between(fb, fb, (sep_by(fa, fb))))))
}))
})());
var pthunk = ((function  () {
    return ((function pthunk (f) {
    return (((function  (xs, i) {
    return ((((f())(xs, i))))
})))
}))
})());
var escaped = ((function  () {
    return ((transform((function  (sub_g262) {
    var __g264, x_g265, g_g263_g266;
    return ((((g_g263_g266 = sub_g262), ((x_g265 = (g_g263_g266[1])), ((__g264 = (g_g263_g266[0])), x_g265)))))
}), (chain((one_of(("\\"))), (por((transform((function  () {
    return ((("\n")))
}), (one_of(("n"))))), (transform((function  () {
    return ((("\t")))
}), (one_of(("t"))))), (one_of(("\\\"|"))))))))))
})());
var string = ((function  () {
    return ((transform((function  (xs) {
    return (((list(("'"), (apply(str, xs))))))
}), (between((one_of(("\""))), (one_of(("\""))), (many((por(escaped, (none_of(("\\\""))))))))))))
})());
var piped_symbol = ((function  () {
    return ((transform((function  (xs) {
    return (((apply(str, xs))))
}), (between((one_of(("|"))), (one_of(("|"))), (many((por(escaped, (none_of(("\\|"))))))))))))
})());
var number = ((function  () {
    return ((transform((function  (sub_g267) {
    var g_g270_g279, g_g272_g280, g_g271_g281, g_g269_g282, g_g274_g283, g_g276_g284, g_g275_g285, g_g273_g286, sign_g287, a_g288, b_g289, g_g268_g290;
    return ((((g_g268_g290 = sub_g267), ((b_g289 = (g_g268_g290[2])), ((a_g288 = (g_g268_g290[1])), ((sign_g287 = (g_g268_g290[0])), (sign_g287 = ((g_g269_g282 = sign_g287), (((g_g270_g279 = g_g269_g282), (((alist(g_g270_g279)) && ((g_g270_g279.length) === 0)) ? false : ((g_g270_g279 === 0) ? true : g_g270_g279))) ? g_g269_g282 : ((g_g271_g281 = ("+")), (((g_g272_g280 = g_g271_g281), (((alist(g_g272_g280)) && ((g_g272_g280.length) === 0)) ? false : ((g_g272_g280 === 0) ? true : g_g272_g280))) ? g_g271_g281 : null))))), (b_g289 = ((g_g273_g286 = b_g289), (((g_g274_g283 = g_g273_g286), (((alist(g_g274_g283)) && ((g_g274_g283.length) === 0)) ? false : ((g_g274_g283 === 0) ? true : g_g274_g283))) ? g_g273_g286 : ((g_g275_g285 = ("")), (((g_g276_g284 = g_g275_g285), (((alist(g_g276_g284)) && ((g_g276_g284.length) === 0)) ? false : ((g_g276_g284 === 0) ? true : g_g276_g284))) ? g_g275_g285 : null))))), (+(str(sign_g287, (apply(str, a_g288)), b_g289)))))))))
}), (chain((optional((one_of(("+-"))))), (many1(digit)), (optional((transform((function  (sub_g277) {
    var dot_g291, digits_g292, g_g278_g293;
    return ((((g_g278_g293 = sub_g277), ((digits_g292 = (g_g278_g293[1])), ((dot_g291 = (g_g278_g293[0])), (apply(str, dot_g291, digits_g292)))))))
}), (chain((one_of(("."))), (many(digit)))))))))))))
})());
var modifer = ((function  () {
    return ((function modifer (s) {
    return (((por((chain((pstr(s)), (pthunk((function  () {
    return ((expression2))
}))))), (pstr(s))))))
}))
})());
var expression = ((function  () {
    return ((apply(por, number, symbol, string, (pthunk((function  () {
    return ((plist))
}))), (pthunk((function  () {
    return ((bracket_list))
}))), piped_symbol, (map((function  (_) {
    return (((modifer(_))))
}), (["'","`",",@",","]))))))
})());
var expression2 = ((function  () {
    return ((transform((function  (xs) {
    var g_g294_g295;
    return (((((g_g294_g295 = ((xs.length) === 1)), (((alist(g_g294_g295)) && ((g_g294_g295.length) === 0)) ? false : ((g_g294_g295 === 0) ? true : g_g294_g295))) ? (xs[0]) : (cat((list(".")), xs)))))
}), (sep_by1(expression, (one_of(("."))))))))
})());
var sep = ((function  () {
    return ((many((one_of(("\n\t "))))))
})());
var expressions = ((function  () {
    return ((start_sep_end(expression2, sep)))
})());
var plist = ((function  () {
    return ((between((one_of(("("))), (one_of((")"))), expressions)))
})());
var bracket_list = ((function  () {
    return ((transform((function  (xs) {
    return (((cat((list("[")), xs))))
}), (between((one_of(("["))), (one_of(("]"))), expressions)))))
})());
var pfile = ((function  () {
    return ((transform((function  (sub_g296) {
    var file_g298, __g299, g_g297_g300;
    return ((((g_g297_g300 = sub_g296), ((__g299 = (g_g297_g300[1])), ((file_g298 = (g_g297_g300[0])), file_g298)))))
}), (chain(expressions, eof)))))
})());
var fs = ((function  () {
    return ((require(("fs"))))
})());
var gensym_counter = ((function  () {
    return (0)
})());
var gensym = ((function  () {
    return ((function gensym (prefix) {
    var g_g301_g302;
    return ((((g_g301_g302 = (str((prefix || ("")), ("_g"), gensym_counter))), (++gensym_counter), g_g301_g302)))
}))
})());
var reps = ((function  () {
    return ((list2obj((list((list(("<"), ("$lt"))), (list(("+"), ("$p"))), (list(("="), ("$eq"))), (list(("`"), ("$qq"))), (list(("*"), ("$st"))), (list(("-"), ("_"))), (list(("/"), ("$s"))), (list(("["), ("$br"))), (list(("$"), ("$$"))))))))
})());
var wholereps = ((function  () {
    return ((list2obj((list((list(("if"), ("if_"))), (list(("else"), ("else_"))), (list(("with"), ("with_"))), (list(("var"), ("var_"))), (list(("case"), ("case_"))))))))
})());
var munge = ((function  () {
    return ((function munge (x) {
    var g_g303_g304;
    return (((((g_g303_g304 = ((!((astr(x)))) || ((x[0]) === ("\"")))), (((alist(g_g303_g304)) && ((g_g303_g304.length) === 0)) ? false : ((g_g303_g304 === 0) ? true : g_g303_g304))) ? x : ((wholereps[x]) || (join((map((function  (_) {
    return ((((reps[_]) || _)))
}), x)), ("")))))))
}))
})());
var letmac = ((function  () {
    return ((function letmac (name, val) {
    var g_g306_g314, g_g307_g315, g_g308_g316, g_g311_g317, g_g312_g318, i_g319, g_g313_g320, i_g321, g_g322, rest_g323, before_g324, rest_g325, after_g326, g_g310_g327, g_g309_g328, offset_g329, body_g330, g_g305_g331;
    return (((g_g305_g331 = arguments), ((body_g330 = (slice(g_g305_g331, 2, ((g_g305_g331.length) - 0)))), (((g_g306_g314 = (alist(name))), (((alist(g_g306_g314)) && ((g_g306_g314.length) === 0)) ? false : ((g_g306_g314 === 0) ? true : g_g306_g314))) ? ((offset_g329 = (((g_g307_g315 = (anumber((first(name))))), (((alist(g_g307_g315)) && ((g_g307_g315.length) === 0)) ? false : ((g_g307_g315 === 0) ? true : g_g307_g315))) ? ((g_g308_g316 = (first(name))), (name = (slice(name, 1))), g_g308_g316) : 0)), ((g_g309_g328 = (split_by((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("'")))))
}), name))), ((g_g310_g327 = (g_g309_g328[1])), ((after_g326 = (slice(g_g310_g327, 1, ((g_g310_g327.length) - 0)))), ((rest_g325 = (g_g310_g327[0])), ((before_g324 = (g_g309_g328[0])), ((rest_g323 = (((g_g311_g317 = rest_g325), (((alist(g_g311_g317)) && ((g_g311_g317.length) === 0)) ? false : ((g_g311_g317 === 0) ? true : g_g311_g317))) ? (second(rest_g325)) : false)), ((((g_g312_g318 = ((name.length) === 0)), (((alist(g_g312_g318)) && ((g_g312_g318.length) === 0)) ? false : ((g_g312_g318 === 0) ? true : g_g312_g318))) ? (cat((list("do")), body_g330)) : ((g_g322 = (gensym(("g")))), (((i_g319 = 0), (function () {while (((i_g319 < (before_g324.length)) && true)) {
    (body_g330 = (list((cat((list("let")), (list((before_g324[i_g319]))), (list((list("get", g_g322, (offset_g329 + i_g319))))), body_g330))))), (++i_g319);
}}())), (((g_g313_g320 = rest_g323), (((alist(g_g313_g320)) && ((g_g313_g320.length) === 0)) ? false : ((g_g313_g320 === 0) ? true : g_g313_g320))) ? ((body_g330 = (list((cat((list("let")), (list(rest_g323)), (list((list("slice", g_g322, (offset_g329 + (before_g324.length)), (list("-", (list(".", g_g322, "length")), (after_g326.length))))))), body_g330))))), ((i_g321 = 0), (function () {while (((i_g321 < (after_g326.length)) && true)) {
    (body_g330 = (list((cat((list("let")), (list((after_g326[i_g321]))), (list((list("get", g_g322, (list("-", (list(".", g_g322, "length")), ((after_g326.length) - i_g321))))))), body_g330))))), (++i_g321);
}}()))) : null), (cat((list("let")), (list(g_g322)), (list(val)), body_g330))))))))))))) : (cat((list("rawlet")), (list(name)), (list(val)), body_g330))))))
}))
})());
var fun = ((function  () {
    return ((function fun (name, args) {
    var g_g335_g336, sub_g337, _g334_g338, before_g339, restnafter_g340, g_g333_g341, body_g342, g_g332_g343;
    return (((g_g332_g343 = arguments), ((body_g342 = (slice(g_g332_g343, 2, ((g_g332_g343.length) - 0)))), ((g_g333_g341 = (split_by((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("'")))))
}), args))), ((restnafter_g340 = (g_g333_g341[1])), ((before_g339 = (g_g333_g341[0])), ((_g334_g338 = 0), (function () {while (((_g334_g338 < (before_g339.length)) && true)) {
    (((g_g335_g336 = (alist((before_g339[_g334_g338])))), (((alist(g_g335_g336)) && ((g_g335_g336.length) === 0)) ? false : ((g_g335_g336 === 0) ? true : g_g335_g336))) ? (((sub_g337 = (gensym(("sub")))), ((body_g342 = (list((cat((list("let")), (list((before_g339[_g334_g338]))), (list(sub_g337)), body_g342))))), ((before_g339[_g334_g338]) = sub_g337)))) : null), (++_g334_g338);
}}())), (list("rawfun", name, before_g339, (cat((list("let")), (list((cat((list((before_g339.length))), restnafter_g340)))), (list("arguments")), body_g342))))))))))
}))
})());
var asbool = ((function  () {
    return ((function asbool (x) {
    var g_g344;
    return ((((g_g344 = (gensym(("g")))), ((list("let", g_g344, x, (list("rawif", (list("and", (list("alist", g_g344)), (list("is", (list(".", g_g344, "length")), 0)))), "false", (list("rawif", (list("is", g_g344, 0)), "true", g_g344))))))))))
}))
})());
var ifmac = ((function  () {
    return ((function ifmac (cond, then) {
    var g_g346_g348, g_g347_g349, rest_g350, g_g345_g351;
    return (((g_g345_g351 = arguments), ((rest_g350 = (slice(g_g345_g351, 2, ((g_g345_g351.length) - 0)))), (list("rawif", (asbool(cond)), then, (((g_g346_g348 = ((rest_g350.length) === 0)), (((alist(g_g346_g348)) && ((g_g346_g348.length) === 0)) ? false : ((g_g346_g348 === 0) ? true : g_g346_g348))) ? null : (((g_g347_g349 = ((rest_g350.length) === 1)), (((alist(g_g347_g349)) && ((g_g347_g349.length) === 0)) ? false : ((g_g347_g349 === 0) ? true : g_g347_g349))) ? (rest_g350[0]) : (cat((list("if")), rest_g350)))))))))
}))
})());
var macs = ((function  () {
    return ((list2obj((list((list(("fun"), fun)), (list(("let"), letmac)), (list(("if"), ifmac)))))))
})());
var commaop = ((function  () {
    return ((function commaop () {
    var code_g353, g_g352_g354;
    return (((g_g352_g354 = arguments), ((code_g353 = (slice(g_g352_g354, 0, ((g_g352_g354.length) - 0)))), (join((map(rendex, code_g353)), (", "))))))
}))
})());
var delet = ((function  () {
    return ((function delet (code) {
    var g_g355_g360, g_g356_g361, sub_g362, vars_g363, name_g364, val_g365, body_g366, g_g358_g367, g_g357_g368, g_g359_g369, foo_g370;
    return (((((g_g355_g360 = (alist(code))), (((alist(g_g355_g360)) && ((g_g355_g360.length) === 0)) ? false : ((g_g355_g360 === 0) ? true : g_g355_g360))) ? (((g_g356_g361 = ((code[0]) === ("rawlet"))), (((alist(g_g356_g361)) && ((g_g356_g361.length) === 0)) ? false : ((g_g356_g361 === 0) ? true : g_g356_g361))) ? ((g_g357_g368 = (delet((slice(code, 1))))), ((g_g358_g367 = (g_g357_g368[1])), ((body_g366 = (slice(g_g358_g367, 2, ((g_g358_g367.length) - 0)))), ((val_g365 = (g_g358_g367[1])), ((name_g364 = (g_g358_g367[0])), ((vars_g363 = (g_g357_g368[0])), ((sub_g362 = (gensym(name_g364))), ((list((cat(vars_g363, (list(sub_g362)))), (cat((list("do")), (list((list("=", sub_g362, val_g365)))), (subsname(name_g364, sub_g362, body_g366)))))))))))))) : (((g_g359_g369 = ((code[0]) === ("rawfun"))), (((alist(g_g359_g369)) && ((g_g359_g369.length) === 0)) ? false : ((g_g359_g369 === 0) ? true : g_g359_g369))) ? (list([], code)) : ((foo_g370 = (map(delet, code))), (list((mapcat(first, foo_g370)), (map(second, foo_g370))))))) : (list([], code)))))
}))
})());
var rawif = ((function  () {
    return ((function rawif (cond, then, else_) {
    return (((str((rendex(cond)), (" ? "), (rendex(then)), (" : "), (rendex(else_))))))
}))
})());
var rawwhile = ((function  () {
    return ((function rawwhile (cond) {
    var body_g372, g_g371_g373;
    return (((g_g371_g373 = arguments), ((body_g372 = (slice(g_g371_g373, 1, ((g_g371_g373.length) - 0)))), (str(("function () {while ("), (rendex(cond)), (") {\n    "), (apply(commaop, body_g372)), (";\n}}()"))))))
}))
})());
var rawcatch = ((function  () {
    return ((function rawcatch (name, form) {
    var body_g375, g_g374_g376;
    return (((g_g374_g376 = arguments), ((body_g375 = (slice(g_g374_g376, 2, ((g_g374_g376.length) - 0)))), (str(("function () {try{\n    return "), (rendex(form)), ("} catch ("), (rendex(name)), (") {\n    return "), (apply(commaop, body_g375)), (";\n}}()"))))))
}))
})());
var funcall = ((function  () {
    return ((function funcall (name, args) {
    return (((str((rendex(name)), ("("), (apply(commaop, args)), (")")))))
}))
})());
var rawget = ((function  () {
    return ((function rawget (a, b) {
    return (((str((rendex(a)), ("["), (rendex(b)), ("]")))))
}))
})());
var quote = ((function  () {
    return ((function quote (a) {
    return ((((JSON.stringify)(a))))
}))
})());
var pp = ((function  () {
    return ((function pp (a) {
    return (((str(("++"), (rendex(a))))))
}))
})());
var r_asnumber = ((function  () {
    return ((function r_asnumber (a) {
    return (((str(("+"), (rendex(a))))))
}))
})());
var rawfun = ((function  () {
    return ((function rawfun (name, args) {
    var g_g379_g380, names_g381, body_g382, g_g378_g383, body_g384, g_g377_g385;
    return (((g_g377_g385 = arguments), ((body_g384 = (slice(g_g377_g385, 2, ((g_g377_g385.length) - 0)))), ((g_g378_g383 = (delet((cat((["do"]), body_g384))))), ((body_g382 = (g_g378_g383[1])), ((names_g381 = (g_g378_g383[0])), (str(("function "), (munge(name)), (" ("), (apply(commaop, args)), (") {\n"), (((g_g379_g380 = ((names_g381.length) === 0)), (((alist(g_g379_g380)) && ((g_g379_g380.length) === 0)) ? false : ((g_g379_g380 === 0) ? true : g_g379_g380))) ? ("") : (str(("    var "), (apply(commaop, names_g381)), (";\n")))), ("    return "), (rendex(body_g382)), ("\n}")))))))))
}))
})());
var exprenderers = ((function  () {
    return ((list2obj((list((list(("get"), rawget)), (list(("rawfun"), rawfun)), (list(("'"), quote)), (list(("++"), pp)), (list(("while"), rawwhile)), (list(("rawif"), rawif)), (list(("do"), commaop)), (list(("asnumber"), r_asnumber)), (list(("catch"), rawcatch)))))))
})());
((function  () {
    return ((map((function  (sub_g386) {
    var name_g390, op_g391, id_g392, g_g387_g393;
    return ((((g_g387_g393 = sub_g386), ((id_g392 = (g_g387_g393[2])), ((op_g391 = (g_g387_g393[1])), ((name_g390 = (g_g387_g393[0])), ((exprenderers[name_g390]) = (function  () {
    var g_g389_g394, xs_g395, g_g388_g396;
    return (((g_g388_g396 = arguments), ((xs_g395 = (slice(g_g388_g396, 0, ((g_g388_g396.length) - 0)))), (((g_g389_g394 = ((xs_g395.length) === 0)), (((alist(g_g389_g394)) && ((g_g389_g394.length) === 0)) ? false : ((g_g389_g394 === 0) ? true : g_g389_g394))) ? id_g392 : (join((map(rendex, xs_g395)), op_g391))))))
}))))))))
}), ([[".",".","null"],["+"," + ",0],["%"," % ",0],["-"," - ",0],["/"," / ",1],["and"," && ","true"],["or"," || ","false"],["raw<"," < ","true"],["raw<="," <= ","true"],["="," = ","null"],["rawis"," === ","true"]]))))
})());
((function  () {
    return ((map((function  (sub_g397) {
    var name_g402, op_g403, g_g398_g404;
    return ((((g_g398_g404 = sub_g397), ((op_g403 = (g_g398_g404[1])), ((name_g402 = (g_g398_g404[0])), ((macs[name_g402]) = (function  () {
    var g_g400_g405, g_g401_g406, g2_g407, g1_g408, xs_g409, g_g399_g410;
    return (((g_g399_g410 = arguments), ((xs_g409 = (slice(g_g399_g410, 0, ((g_g399_g410.length) - 0)))), (((g_g400_g405 = ((xs_g409.length) < 2)), (((alist(g_g400_g405)) && ((g_g400_g405.length) === 0)) ? false : ((g_g400_g405 === 0) ? true : g_g400_g405))) ? true : (((g_g401_g406 = ((xs_g409.length) === 2)), (((alist(g_g401_g406)) && ((g_g401_g406.length) === 0)) ? false : ((g_g401_g406 === 0) ? true : g_g401_g406))) ? (list(op_g403, (xs_g409[0]), (xs_g409[1]))) : ((g1_g408 = (gensym(("g1")))), ((g2_g407 = (gensym(("g2")))), ((list("with", (list(g1_g408, (xs_g409[0]), g2_g407, (xs_g409[1]))), (list("and", (list(op_g403, g1_g408, g2_g407)), (cat((list(name_g402)), (list(g2_g407)), (slice(xs_g409, 2))))))))))))))))
})))))))
}), ([["<","raw<"],["<=","raw<="],["is","rawis"]]))))
})());
var rendex = ((function  () {
    return ((function rendex (code) {
    var g_g411_g416, g_g412_g417, g_g413_g418, it_g419, g_g414_g420, g_g415_g421;
    return (((((g_g411_g416 = (alist(code))), (((alist(g_g411_g416)) && ((g_g411_g416.length) === 0)) ? false : ((g_g411_g416 === 0) ? true : g_g411_g416))) ? (((g_g412_g417 = ((code.length) === 0)), (((alist(g_g412_g417)) && ((g_g412_g417.length) === 0)) ? false : ((g_g412_g417 === 0) ? true : g_g412_g417))) ? ("[]") : (str(("("), ((it_g419 = (exprenderers[(code[0])])), (((g_g413_g418 = it_g419), (((alist(g_g413_g418)) && ((g_g413_g418.length) === 0)) ? false : ((g_g413_g418 === 0) ? true : g_g413_g418))) ? (apply(it_g419, (slice(code, 1)))) : (funcall((code[0]), (slice(code, 1)))))), (")")))) : (((g_g414_g420 = (code === null)), (((alist(g_g414_g420)) && ((g_g414_g420.length) === 0)) ? false : ((g_g414_g420 === 0) ? true : g_g414_g420))) ? ("null") : (((g_g415_g421 = (code === undefined)), (((alist(g_g415_g421)) && ((g_g415_g421.length) === 0)) ? false : ((g_g415_g421 === 0) ? true : g_g415_g421))) ? ("undefined") : (munge(code)))))))
}))
})());
var macex = ((function  () {
    return ((function macex (macs, code) {
    var g_g422_g424, g_g423_g425, it_g426;
    return (((((g_g422_g424 = ((alist(code)) && (code[0]) && (!(((code[0]) === ("'")))))), (((alist(g_g422_g424)) && ((g_g422_g424.length) === 0)) ? false : ((g_g422_g424 === 0) ? true : g_g422_g424))) ? (((code[0]) = (macex(macs, (code[0])))), ((it_g426 = (macs[(code[0])])), (((g_g423_g425 = it_g426), (((alist(g_g423_g425)) && ((g_g423_g425.length) === 0)) ? false : ((g_g423_g425 === 0) ? true : g_g423_g425))) ? (macex(macs, (apply(it_g426, (slice(code, 1)))))) : (map((function  (_) {
    return (((macex(macs, _))))
}), code))))) : code)))
}))
})());
var env = ((function  () {
    return ((list((list(("gensym"), gensym)), (list(("require"), require)))))
})());
var eval_with = ((function  () {
    return ((function eval_with (code, env) {
    return (((apply((Function((map(first, env)), code)), (map(second, env))))))
}))
})());
var eval_form = ((function  () {
    return ((function eval_form (verb, arg, code) {
    var g_g428_g431, g_g429_g432, g_g430_g433, g_g427_g434;
    return (((((g_g427_g434 = verb), (((g_g428_g431 = (g_g427_g434 === ("assign"))), (((alist(g_g428_g431)) && ((g_g428_g431.length) === 0)) ? false : ((g_g428_g431 === 0) ? true : g_g428_g431))) ? (function  (_) {
    return ((((env.push)((list((munge(arg)), _))))))
}) : (((g_g429_g432 = (g_g427_g434 === ("assign-mac"))), (((alist(g_g429_g432)) && ((g_g429_g432.length) === 0)) ? false : ((g_g429_g432 === 0) ? true : g_g429_g432))) ? (function  (_) {
    return ((((macs[arg]) = _)))
}) : (((g_g430_g433 = (g_g427_g434 === ("run"))), (((alist(g_g430_g433)) && ((g_g430_g433.length) === 0)) ? false : ((g_g430_g433 === 0) ? true : g_g430_g433))) ? idfn : null))))((eval_with((str(("return "), code)), env))))))
}))
})());
var only_compile_form = ((function  () {
    return ((function only_compile_form (verb, arg, code) {
    var g_g436_g439, g_g437_g440, g_g438_g441, g_g435_g442;
    return (((str((((g_g435_g442 = verb), (((g_g436_g439 = (g_g435_g442 === ("assign"))), (((alist(g_g436_g439)) && ((g_g436_g439.length) === 0)) ? false : ((g_g436_g439 === 0) ? true : g_g436_g439))) ? (function  (_) {
    return (((str(("var "), (munge(arg)), (" = "), _))))
}) : (((g_g437_g440 = (g_g435_g442 === ("assign-mac"))), (((alist(g_g437_g440)) && ((g_g437_g440.length) === 0)) ? false : ((g_g437_g440 === 0) ? true : g_g437_g440))) ? (JSON.stringify) : (((g_g438_g441 = (g_g435_g442 === ("run"))), (((alist(g_g438_g441)) && ((g_g438_g441.length) === 0)) ? false : ((g_g438_g441 === 0) ? true : g_g438_g441))) ? idfn : null))))(code)), (";\n")))))
}))
})());
var compile_helper = ((function  () {
    return ((function compile_helper (code) {
    var g_g444_g445, jscode_g446, verb_g447, arg_g448, bar_g449, g_g443_g450, foo_g451;
    return ((((foo_g451 = (macex(macs, code))), ((g_g443_g450 = (((g_g444_g445 = (some((foo_g451[0]), (["assign","assign-mac"])))), (((alist(g_g444_g445)) && ((g_g444_g445.length) === 0)) ? false : ((g_g444_g445 === 0) ? true : g_g444_g445))) ? foo_g451 : (list(("run"), null, foo_g451)))), ((bar_g449 = (g_g443_g450[2])), ((arg_g448 = (g_g443_g450[1])), ((verb_g447 = (g_g443_g450[0])), ((jscode_g446 = (rendex((list((list("rawfun", "", (list()), bar_g449))))))), ((list(verb_g447, arg_g448, jscode_g446)))))))))))
}))
})());
var compile_form = ((function  () {
    return ((function compile_form (code) {
    var g_g453_g454, g_g452_g455, foo_g456;
    return ((((foo_g456 = (compile_helper(code))), (((g_g452_g455 = (((g_g453_g454 = ((foo_g456[0]) === ("run"))), (((alist(g_g453_g454)) && ((g_g453_g454.length) === 0)) ? false : ((g_g453_g454 === 0) ? true : g_g453_g454))) ? false : true)), (((alist(g_g452_g455)) && ((g_g452_g455.length) === 0)) ? false : ((g_g452_g455 === 0) ? true : g_g452_g455))) ? (apply(eval_form, foo_g456)) : null), (apply(only_compile_form, foo_g456)))))
}))
})());
var compile = ((function  () {
    return ((function compile (code) {
    return (((join((cat((list("\"use strict\";\n")), (map(compile_form, code)))), ("")))))
}))
})());
var parse = ((function  () {
    return ((function parse (data, f) {
    var g_g457_g458, foo_g459;
    return ((((foo_g459 = (pfile((str(data)), 0))), (((g_g457_g458 = (second(foo_g459))), (((alist(g_g457_g458)) && ((g_g457_g458.length) === 0)) ? false : ((g_g457_g458 === 0) ? true : g_g457_g458))) ? (f((first(foo_g459)))) : (prn((first(foo_g459))))))))
}))
})());
var read_first_file = ((function  () {
    return ((function read_first_file (paths, f) {
    return ((((function self (ps) {
    var g_g460_g462;
    return (((((g_g460_g462 = ((ps.length) === 0)), (((alist(g_g460_g462)) && ((g_g460_g462.length) === 0)) ? false : ((g_g460_g462 === 0) ? true : g_g460_g462))) ? (f(null)) : ((fs.readFile)((first(ps)), (function  (err, data) {
    var g_g461_g463;
    return (((((g_g461_g463 = err), (((alist(g_g461_g463)) && ((g_g461_g463.length) === 0)) ? false : ((g_g461_g463 === 0) ? true : g_g461_g463))) ? (self((slice(ps, 1)))) : (f(data)))))
}))))))
})(paths))))
}))
})());
var gather_callbacks = ((function  () {
    return ((function gather_callbacks (cbs, f) {
    var res_g465;
    return ((((res_g465 = (map((function  () {
    return ((undefined))
}), cbs))), ((cbs.map)((function  (cb, i) {
    return (((cb((function  (x) {
    var g_g464_g466;
    return ((((res_g465[i]) = x), (((g_g464_g466 = ((res_g465.every)((function  (_) {
    return (((!((_ === undefined)))))
})))), (((alist(g_g464_g466)) && ((g_g464_g466.length) === 0)) ? false : ((g_g464_g466 === 0) ? true : g_g464_g466))) ? (f(res_g465)) : null)))
})))))
}))))))
}))
})());
var run_repl = ((function  () {
    return ((((process.argv)[2]) === ("-i")))
})());
var files = ((function  () {
    var g_g467_g468;
    return ((slice((process.argv), (((g_g467_g468 = run_repl), (((alist(g_g467_g468)) && ((g_g467_g468.length) === 0)) ? false : ((g_g467_g468 === 0) ? true : g_g467_g468))) ? 3 : 2))))
})());
var now = ((function  () {
    return ((function now () {
    return ((((((new(Date)).getTime)()) / 1000)))
}))
})());
var repl = ((function  () {
    return ((function repl () {
    var rl_g471;
    return ((((rl_g471 = (((require(("readline"))).createInterface)((list2obj((list((list(("input"), (process.stdin))), (list(("output"), (process.stdout)))))))))), ((rl_g471.setPrompt)(("¿ "))), ((rl_g471.prompt)()), ((rl_g471.on)(("line"), (function  (line) {
    return (((parse(line, (function  (sub_g469) {
    var code_g472, g_g470_g473;
    return ((((g_g470_g473 = sub_g469), ((code_g472 = (g_g470_g473[0])), (prn((function () {try{
    return (apply(eval_form, (compile_helper(code_g472))))} catch (e) {
    return (e.stack);
}}()))), ((rl_g471.prompt)())))))
})))))
}))))))
}))
})());
var start = ((function  () {
    return ((now()))
})());
((function  () {
    return ((gather_callbacks((map((function  (file) {
    return (((function  (f) {
    return ((((fs.readFile)(file, (function  (err, data) {
    var g_g474_g478;
    return (((((g_g474_g478 = err), (((alist(g_g474_g478)) && ((g_g474_g478.length) === 0)) ? false : ((g_g474_g478 === 0) ? true : g_g474_g478))) ? (prn(err)) : (parse(data, f)))))
})))))
})))
}), (cat((list((str(__dirname, ("/jasper.jpr"))))), files)))), (function  (codes) {
    var g_g476_g479, g_g475_g480, output_g481, code_g482, g_g477_g483;
    return (((prn(((now()) - start))), ((code_g482 = (apply(cat, codes))), ((output_g481 = (compile(code_g482))), ((((g_g475_g480 = (((g_g476_g479 = run_repl), (((alist(g_g476_g479)) && ((g_g476_g479.length) === 0)) ? false : ((g_g476_g479 === 0) ? true : g_g476_g479))) ? false : true)), (((alist(g_g475_g480)) && ((g_g475_g480.length) === 0)) ? false : ((g_g475_g480 === 0) ? true : g_g475_g480))) ? ((fs.writeFileSync)((str((files[((files.length) - 1)]), (".js"))), output_g481)) : null)))), (prn(((now()) - start))), (((g_g477_g483 = run_repl), (((alist(g_g477_g483)) && ((g_g477_g483.length) === 0)) ? false : ((g_g477_g483 === 0) ? true : g_g477_g483))) ? (repl()) : null)))
}))))
})());
