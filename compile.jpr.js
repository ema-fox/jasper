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
    return (((x && ((x.constructor) === Array))))
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
    var i_g20, ys_g21, length_g22, xss_g23, g_g19_g24;
    return (((g_g19_g24 = arguments), ((xss_g23 = (slice(g_g19_g24, 1, ((g_g19_g24.length) - 0)))), (((xss_g23.length) === 1) ? (map1(f, (xss_g23[0]))) : ((length_g22 = (apply((Math.min), (map1((function  (_) {
    return (((_.length)))
}), xss_g23))))), ((ys_g21 = []), ((i_g20 = 0), (function () {while ((i_g20 < length_g22)) {
    ((ys_g21.push)((apply(f, (map1((function  (_) {
    return (((_[i_g20])))
}), xss_g23)))))), (++i_g20);
}}())), ys_g21))))))
}))
})());
var sfy = ((function  () {
    return ((function sfy (x) {
    return ((((x === null) ? ("null") : ((x === undefined) ? ("undefined") : ((alist(x)) ? (str(("("), (join((map(sfy, x)), (" "))), (")"))) : (str(x)))))))
}))
})());
var prn = ((function  () {
    return ((function prn (a) {
    var as_g26, g_g25_g27;
    return (((g_g25_g27 = arguments), ((as_g26 = (slice(g_g25_g27, 1, ((g_g25_g27.length) - 0)))), (apply((console.log), (sfy(a)), (map(sfy, as_g26)))), a)))
}))
})());
var mapcat = ((function  () {
    return ((function mapcat (f) {
    var xss_g29, g_g28_g30;
    return (((g_g28_g30 = arguments), ((xss_g29 = (slice(g_g28_g30, 1, ((g_g28_g30.length) - 0)))), (apply(cat, (apply(map, f, xss_g29)))))))
}))
})());
var quote = ((function  () {
    return ((function quote (a) {
    return ((((JSON.stringify)(a))))
}))
})());
var catmac = ((function  () {
    return ((function catmac (xs) {
    return (((((xs.every)((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("list")))))
}))) ? (cat((["list"]), (mapcat((function  (sub_g31) {
    var __g33, ys_g34, g_g32_g35;
    return ((((g_g32_g35 = sub_g31), ((ys_g34 = (slice(g_g32_g35, 1, ((g_g32_g35.length) - 0)))), ((__g33 = (g_g32_g35[0])), ys_g34)))))
}), xs)))) : (cat((["cat"]), xs)))))
}))
})());
var runqq = ((function  () {
    return ((function runqq (a) {
    return ((((alist(a)) ? (((a[0]) === (",@")) ? (a[1]) : (((a[0]) === (",")) ? (list(("list"), (a[1]))) : (list(("list"), (catmac((map(runqq, a)))))))) : (cat((["list"]), (quote(a)))))))
}))
})());
"((function  () {\n    return ((function $qq (a) {\n    var xs_g36;\n    return ((((xs_g36 = (runqq(a))), (((alist(xs_g36)) && ((xs_g36[0]) === (\"list\"))) ? (xs_g36[1]) : (list((\"get\"), xs_g36, 0))))))\n}))\n})())";
"((function  () {\n    return ((function fn (args) {\n    var body_g38, g_g37_g39;\n    return (((g_g37_g39 = arguments), ((body_g38 = (slice(g_g37_g39, 1, ((g_g37_g39.length) - 0)))), (cat((list(\"fun\")), (list(\"\")), (list(args)), body_g38)))))\n}))\n})())";
"((function  () {\n    return ((function when (cond) {\n    var body_g41, g_g40_g42;\n    return (((g_g40_g42 = arguments), ((body_g41 = (slice(g_g40_g42, 1, ((g_g40_g42.length) - 0)))), (list(\"if\", cond, (cat((list(\"do\")), body_g41)))))))\n}))\n})())";
"((function  () {\n    return ((function land () {\n    var g_g44_g46, g_g45_g47, xs_g48, g_g43_g49;\n    return (((g_g43_g49 = arguments), ((xs_g48 = (slice(g_g43_g49, 0, ((g_g43_g49.length) - 0)))), (((g_g44_g46 = ((xs_g48.length) === 0)), (((alist(g_g44_g46)) && ((g_g44_g46.length) === 0)) ? false : ((g_g44_g46 === 0) ? true : g_g44_g46))) ? true : (((g_g45_g47 = ((xs_g48.length) === 1)), (((alist(g_g45_g47)) && ((g_g45_g47.length) === 0)) ? false : ((g_g45_g47 === 0) ? true : g_g45_g47))) ? (xs_g48[0]) : (list(\"lif\", (xs_g48[0]), (cat((list(\"land\")), (slice(xs_g48, 1)))))))))))\n}))\n})())";
var subsname = ((function  () {
    return ((function subsname (name, sub, code) {
    return ((((alist(code)) ? (((code[0]) === (".")) ? (cat((list(".")), (list((subsname(name, sub, (code[1]))))), (slice(code, 2)))) : (map((function  (x) {
    return (((subsname(name, sub, x))))
}), code))) : ((code === name) ? sub : code))))
}))
})());
var first = ((function  () {
    return ((function first (sub_g50) {
    var a_g52, __g53, g_g51_g54;
    return ((((g_g51_g54 = sub_g50), ((__g53 = (g_g51_g54[1])), ((a_g52 = (g_g51_g54[0])), a_g52)))))
}))
})());
var second = ((function  () {
    return ((function second (sub_g55) {
    var __g57, a_g58, g_g56_g59;
    return ((((g_g56_g59 = sub_g55), ((a_g58 = (g_g56_g59[1])), ((__g57 = (g_g56_g59[0])), a_g58)))))
}))
})());
"((function  () {\n    return ((function with_ (bindings) {\n    var body_g61, g_g60_g62;\n    return (((g_g60_g62 = arguments), ((body_g61 = (slice(g_g60_g62, 1, ((g_g60_g62.length) - 0)))), (((bindings.length) === 0) ? (cat((list(\"do\")), body_g61)) : (list(\"let\", (first(bindings)), (second(bindings)), (cat((list(\"with\")), (list((slice(bindings, 2)))), body_g61))))))))\n}))\n})())";
"((function  () {\n    return ((function aif (expr, then, else_) {\n    return (((list(\"let\", \"it\", expr, (list(\"if\", \"it\", then, else_))))))\n}))\n})())";
"((function  () {\n    return ((function laif (expr, then, else_) {\n    return (((list(\"let\", \"it\", expr, (list(\"lif\", \"it\", then, else_))))))\n}))\n})())";
"((function  () {\n    return ((function afn (args) {\n    var body_g64, g_g63_g65;\n    return (((g_g63_g65 = arguments), ((body_g64 = (slice(g_g63_g65, 1, ((g_g63_g65.length) - 0)))), (cat((list(\"fun\")), (list(\"self\")), (list(args)), body_g64)))))\n}))\n})())";
"((function  () {\n    return ((function awhile (cond) {\n    var body_g67, g_g66_g68;\n    return (((g_g66_g68 = arguments), ((body_g67 = (slice(g_g66_g68, 1, ((g_g66_g68.length) - 0)))), (list(\"let\", \"it\", \"undefined\", (cat((list(\"while\")), (list((list(\"=\", \"it\", cond)))), body_g67)))))))\n}))\n})())";
var listify = ((function  () {
    return ((function listify (x) {
    return ((((alist(x)) ? x : (list(x)))))
}))
})());
"((function  () {\n    return ((function w$suniq (names) {\n    var body_g70, g_g69_g71;\n    return (((g_g69_g71 = arguments), ((body_g70 = (slice(g_g69_g71, 1, ((g_g69_g71.length) - 0)))), (cat((list(\"with\")), (list((mapcat((function  (_) {\n    return (((list(_, (list(\"gensym\", (list(\"'\", _))))))))\n}), (listify(names)))))), body_g70)))))\n}))\n})())";
"((function  () {\n    return ((function zap (f, place) {\n    var args_g73, g_g72_g74;\n    return (((g_g72_g74 = arguments), ((args_g73 = (slice(g_g72_g74, 2, ((g_g72_g74.length) - 0)))), (list(\"=\", place, (cat((list(f)), (list(place)), args_g73)))))))\n}))\n})())";
var pair = ((function  () {
    return ((function pair (xs) {
    var i_g75, ys_g76;
    return ((((ys_g76 = []), ((i_g75 = 0), ((function () {while ((i_g75 < (xs.length))) {
    (((i_g75 + 1) < (xs.length)) ? ((ys_g76.push)((list((xs[i_g75]), (xs[(i_g75 + 1)]))))) : ((ys_g76.push)((list((xs[i_g75])))))), (i_g75 = (i_g75 + 2));
}}()), ys_g76)))))
}))
})());
"((function  () {\n    return ((function case_ (expr) {\n    var g_g78, args_g79, g_g77_g80;\n    return (((g_g77_g80 = arguments), ((args_g79 = (slice(g_g77_g80, 1, ((g_g77_g80.length) - 0)))), ((g_g78 = (gensym((\"g\")))), ((list(\"let\", g_g78, expr, (cat((list(\"if\")), (mapcat((function  (_) {\n    return (((((_.length) === 2) ? (list((list(\"is\", g_g78, (list(\"'\", (_[0]))))), (_[1]))) : _)))\n}), (pair(args_g79)))))))))))))\n}))\n})())";
"((function  () {\n    return ((function dbg () {\n    var g_g82, xs_g83, g_g81_g84;\n    return (((g_g81_g84 = arguments), ((xs_g83 = (slice(g_g81_g84, 0, ((g_g81_g84.length) - 0)))), ((g_g82 = (gensym((\"g\")))), ((list(\"let\", g_g82, xs_g83, (list(\"prn\", (list(\"'\", xs_g83)), (list(\"'\", \":\")), g_g82)), g_g82)))))))\n}))\n})())";
"((function  () {\n    return ((function lor () {\n    var g_g86_g87, g_g88, xs_g89, g_g85_g90;\n    return (((g_g85_g90 = arguments), ((xs_g89 = (slice(g_g85_g90, 0, ((g_g85_g90.length) - 0)))), (((g_g86_g87 = xs_g89), (((alist(g_g86_g87)) && ((g_g86_g87.length) === 0)) ? false : ((g_g86_g87 === 0) ? true : g_g86_g87))) ? ((g_g88 = (gensym((\"g\")))), ((list(\"let\", g_g88, (xs_g89[0]), (list(\"lif\", g_g88, g_g88, (cat((list(\"lor\")), (slice(xs_g89, 1)))))))))) : null))))\n}))\n})())";
"((function  () {\n    return ((function do1 (x) {\n    var g_g92, xs_g93, g_g91_g94;\n    return (((g_g91_g94 = arguments), ((xs_g93 = (slice(g_g91_g94, 1, ((g_g91_g94.length) - 0)))), ((g_g92 = (gensym((\"g\")))), ((cat((list(\"let\")), (list(g_g92)), (list(x)), xs_g93, (list(g_g92)))))))))\n}))\n})())";
var list2obj = ((function  () {
    return ((function list2obj (args) {
    var res_g97;
    return ((((res_g97 = ((Object.create)(null))), (map((function  (sub_g95) {
    var k_g98, v_g99, g_g96_g100;
    return ((((g_g96_g100 = sub_g95), ((v_g99 = (g_g96_g100[1])), ((k_g98 = (g_g96_g100[0])), ((res_g97[k_g98]) = v_g99))))))
}), args)), res_g97)))
}))
})());
"((function  () {\n    return ((function obj () {\n    var args_g104, g_g101_g105;\n    return (((g_g101_g105 = arguments), ((args_g104 = (slice(g_g101_g105, 0, ((g_g101_g105.length) - 0)))), (list(\"list2obj\", (cat((list(\"list\")), (map((function  (sub_g102) {\n    var k_g106, v_g107, g_g103_g108;\n    return ((((g_g103_g108 = sub_g102), ((v_g107 = (g_g103_g108[1])), ((k_g106 = (g_g103_g108[0])), (list(\"list\", (list(\"'\", k_g106)), v_g107)))))))\n}), (pair(args_g104)))))))))))\n}))\n})())";
"((function  () {\n    return ((function each (iv, xs) {\n    var v_g110, i_g111, body_g112, g_g109_g113;\n    return (((g_g109_g113 = arguments), ((body_g112 = (slice(g_g109_g113, 2, ((g_g109_g113.length) - 0)))), ((i_g111 = null), ((v_g110 = null), (((alist(iv)) ? ((i_g111 = (first(iv))), (v_g110 = (second(iv)))) : ((i_g111 = (gensym(i_g111))), (v_g110 = iv))), (list(\"let\", i_g111, 0, (cat((list(\"while\")), (list((list(\"<\", i_g111, (list(\".\", xs, \"length\")))))), (subsname(v_g110, (list(\"get\", xs, i_g111)), body_g112)), (list((list(\"++\", i_g111))))))))))))))\n}))\n})())";
var testify = ((function  () {
    return ((function testify (test) {
    return ((((afunction(test)) ? test : (function  (_) {
    return (((test === _)))
}))))
}))
})());
"((function  () {\n    return ((function no (x) {\n    return (((list(\"lif\", x, \"false\", \"true\"))))\n}))\n})())";
var index_by = ((function  () {
    return ((function index_by (test, xs) {
    var g_g116_g117, g_g115_g118, g_g114_g119, i_g120, index_g121, f_g122;
    return ((((f_g122 = (testify(test))), ((index_g121 = false), (((i_g120 = 0), (function () {while ((i_g120 < (xs.length))) {
    (((g_g114_g119 = (((g_g115_g118 = (((g_g116_g117 = index_g121), (((alist(g_g116_g117)) && ((g_g116_g117.length) === 0)) ? false : ((g_g116_g117 === 0) ? true : g_g116_g117))) ? false : true)), (((alist(g_g115_g118)) && ((g_g115_g118.length) === 0)) ? false : ((g_g115_g118 === 0) ? true : g_g115_g118))) ? (f_g122((xs[i_g120]))) : null)), (((alist(g_g114_g119)) && ((g_g114_g119.length) === 0)) ? false : ((g_g114_g119 === 0) ? true : g_g114_g119))) ? (index_g121 = i_g120) : null), (++i_g120);
}}())), index_g121)))))
}))
})());
var split_by = ((function  () {
    return ((function split_by (f, xs) {
    var i_g123;
    return ((((i_g123 = (index_by(f, xs))), ((i_g123 === false) ? (list(xs, [])) : (list((slice(xs, 0, i_g123)), (slice(xs, i_g123))))))))
}))
})());
var some = ((function  () {
    return ((function some (test, xs) {
    var g_g125_g127, g_g126_g128, it_g129, _g124_g130, res_g131, f_g132;
    return ((((f_g132 = (testify(test))), ((res_g131 = false), (((_g124_g130 = 0), (function () {while ((_g124_g130 < (xs.length))) {
    ((it_g129 = (((g_g125_g127 = (!(res_g131))), (((alist(g_g125_g127)) && ((g_g125_g127.length) === 0)) ? false : ((g_g125_g127 === 0) ? true : g_g125_g127))) ? (f_g132((xs[_g124_g130]))) : null)), (((g_g126_g128 = it_g129), (((alist(g_g126_g128)) && ((g_g126_g128.length) === 0)) ? false : ((g_g126_g128 === 0) ? true : g_g126_g128))) ? (res_g131 = it_g129) : undefined)), (++_g124_g130);
}}())), res_g131)))))
}))
})());
var all = ((function  () {
    return ((function all (test, xs) {
    var f_g133;
    return ((((f_g133 = (testify(test))), (!((some((function  (_) {
    return (((!((f_g133(_))))))
}), xs)))))))
}))
})());
var iso = ((function  () {
    return ((function iso (x, y) {
    return ((((x === y) || ((alist(x)) && (alist(y)) && ((x.length) === (y.length)) && (all(true, (map(iso, x, y))))))))
}))
})());
"((function  () {\n    return ((function callback (to, from) {\n    var body_g135, g_g134_g136;\n    return (((g_g134_g136 = arguments), ((body_g135 = (slice(g_g134_g136, 2, ((g_g134_g136.length) - 0)))), (cat(to, (list((cat((list(\"fn\")), (list(from)), body_g135)))))))))\n}))\n})())";
((function  () {
    return (("non core:"))
})());
var sqrt = ((function  () {
    return ((Math.sqrt))
})());
var $st$st = ((function  () {
    return ((Math.pow))
})());
var distance = ((function  () {
    return ((function distance (sub_g137, sub_g138) {
    var pa0_g141, pa1_g142, g_g140_g143, pb0_g144, pb1_g145, g_g139_g146;
    return ((((g_g139_g146 = sub_g138), ((pb1_g145 = (g_g139_g146[1])), ((pb0_g144 = (g_g139_g146[0])), ((g_g140_g143 = sub_g137), ((pa1_g142 = (g_g140_g143[1])), ((pa0_g141 = (g_g140_g143[0])), (sqrt((($st$st((pb0_g144 - pa0_g141), 2)) + ($st$st((pb1_g145 - pa1_g142), 2)))))))))))))
}))
})());
var plus = ((function  () {
    return ((function plus (sub_g147, sub_g148) {
    var pa0_g151, pa1_g152, g_g150_g153, pb0_g154, pb1_g155, g_g149_g156;
    return ((((g_g149_g156 = sub_g148), ((pb1_g155 = (g_g149_g156[1])), ((pb0_g154 = (g_g149_g156[0])), ((g_g150_g153 = sub_g147), ((pa1_g152 = (g_g150_g153[1])), ((pa0_g151 = (g_g150_g153[0])), (list((pa0_g151 + pb0_g154), (pa1_g152 + pb1_g155)))))))))))
}))
})());
var ngbroffsets = ((function  () {
    return ((list((list(1, 0)), (list(0, 1)), (list(-1, 0)), (list(0, -1)))))
})());
"((function  () {\n    return ((function defp (name, args) {\n    var body_g158, g_g157_g159;\n    return (((g_g157_g159 = arguments), ((body_g158 = (slice(g_g157_g159, 2, ((g_g157_g159.length) - 0)))), (list(\"def\", name, args, (cat((list(\"fn\")), (list((list(\"xs\", \"i\")))), body_g158)))))))\n}))\n})())";
"((function  () {\n    return ((function defletp (name, args, varname, val) {\n    var body_g161, g_g160_g162;\n    return (((g_g160_g162 = arguments), ((body_g161 = (slice(g_g160_g162, 4, ((g_g160_g162.length) - 0)))), (list(\"def\", name, args, (list(\"let\", varname, val, (cat((list(\"fn\")), (list((list(\"xs\", \"i\")))), body_g161)))))))))\n}))\n})())";
var eof = ((function  () {
    return ((function  (xs, i) {
    var g_g163_g164;
    return (((((g_g163_g164 = ((xs.length) === i)), (((alist(g_g163_g164)) && ((g_g163_g164.length) === 0)) ? false : ((g_g163_g164 === 0) ? true : g_g163_g164))) ? (list(true, i)) : ([["no-eof"]]))))
}))
})());
var one_of = ((function  () {
    return ((function one_of (ys) {
    var err_g165;
    return ((((err_g165 = (list((list("one-of", ys))))), (function  (xs, i) {
    var x_g166;
    return ((((x_g166 = (xs[i])), ((some(x_g166, ys)) ? (list(x_g166, (i + 1))) : err_g165))))
}))))
}))
})());
var none_of = ((function  () {
    return ((function none_of (ys) {
    var err_g167;
    return ((((err_g167 = (list((list("none-of", ys))))), (function  (xs, i) {
    var x_g168;
    return ((((x_g168 = (xs[i])), ((!((some(x_g168, ys)))) ? (list(x_g168, (i + 1))) : err_g167))))
}))))
}))
})());
var por = ((function  () {
    return ((function por () {
    var fs_g176, g_g169_g177;
    return (((g_g169_g177 = arguments), ((fs_g176 = (slice(g_g169_g177, 0, ((g_g169_g177.length) - 0)))), (function  (xs, i) {
    var g_g170_g178, g_g171_g179, foo_g180, g_g173_g181, g_g175_g182, g_g174_g183, g_g172_g184, res_g185, j_g186, errs_g187;
    return ((((errs_g187 = []), ((j_g186 = 0), ((res_g185 = false), ((function () {while (((j_g186 < (fs_g176.length)) && (((g_g170_g178 = res_g185), (((alist(g_g170_g178)) && ((g_g170_g178.length) === 0)) ? false : ((g_g170_g178 === 0) ? true : g_g170_g178))) ? false : true))) {
    ((foo_g180 = ((fs_g176[j_g186])(xs, i))), (((g_g171_g179 = (foo_g180[1])), (((alist(g_g171_g179)) && ((g_g171_g179.length) === 0)) ? false : ((g_g171_g179 === 0) ? true : g_g171_g179))) ? (res_g185 = foo_g180) : (((errs_g187.push)((foo_g180[0]))), (++j_g186))));
}}()), ((g_g172_g184 = res_g185), (((g_g173_g181 = g_g172_g184), (((alist(g_g173_g181)) && ((g_g173_g181.length) === 0)) ? false : ((g_g173_g181 === 0) ? true : g_g173_g181))) ? g_g172_g184 : ((g_g174_g183 = (list((cat((list("or")), errs_g187))))), (((g_g175_g182 = g_g174_g183), (((alist(g_g175_g182)) && ((g_g175_g182.length) === 0)) ? false : ((g_g175_g182 === 0) ? true : g_g175_g182))) ? g_g174_g183 : null))))))))))
}))))
}))
})());
var chain = ((function  () {
    return ((function chain () {
    var fs_g190, g_g188_g191;
    return (((g_g188_g191 = arguments), ((fs_g190 = (slice(g_g188_g191, 0, ((g_g188_g191.length) - 0)))), (function  (xs, i) {
    var res_g192;
    return ((((res_g192 = []), ((function self (fs_g190) {
    var g_g189_g193, foo_g194;
    return (((((g_g189_g193 = fs_g190), (((alist(g_g189_g193)) && ((g_g189_g193.length) === 0)) ? false : ((g_g189_g193 === 0) ? true : g_g189_g193))) ? ((foo_g194 = ((fs_g190[0])(xs, i))), (((foo_g194.length) === 2) ? (((res_g192.push)((foo_g194[0]))), (i = (foo_g194[1])), (self((slice(fs_g190, 1))))) : (list((cat((list("at")), (list(i)), foo_g194)))))) : (list(res_g192, i)))))
})(fs_g190)))))
}))))
}))
})());
var pstr = ((function  () {
    return ((function pstr (s) {
    var err_g195;
    return ((((err_g195 = (list((list(s))))), (function  (xs, i) {
    return ((((((xs.substr)(i, (s.length))) === s) ? (list(s, (i + (s.length)))) : err_g195)))
}))))
}))
})());
var many = ((function  () {
    return ((function many (f) {
    return (((function  (xs, i) {
    var foo_g196, res_g197;
    return ((((res_g197 = []), ((foo_g196 = undefined), ((function () {while (((foo_g196 = (f(xs, i))), ((foo_g196.length) === 2))) {
    ((res_g197.push)((foo_g196[0]))), (i = (foo_g196[1]));
}}()), (list(res_g197, i)))))))
})))
}))
})());
var transform = ((function  () {
    return ((function transform (f, p) {
    return (((function  (xs, i) {
    var foo_g198;
    return ((((foo_g198 = (p(xs, i))), (((foo_g198.length) === 2) ? (list((f((foo_g198[0]))), (foo_g198[1]))) : foo_g198))))
})))
}))
})());
"((function  () {\n    return ((function transp (arg, body, p) {\n    return (((list(\"transform\", (list(\"fn\", (list(arg)), body)), p))))\n}))\n})())";
var many1 = ((function  () {
    return ((function many1 (f) {
    return (((transform((function  (sub_g199) {
    var x_g201, xs_g202, g_g200_g203;
    return ((((g_g200_g203 = sub_g199), ((xs_g202 = (g_g200_g203[1])), ((x_g201 = (g_g200_g203[0])), (cat((list(x_g201)), xs_g202)))))))
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
    return (((transform((function  (sub_g204) {
    var x_g206, xs_g207, g_g205_g208;
    return ((((g_g205_g208 = sub_g204), ((xs_g207 = (g_g205_g208[1])), ((x_g206 = (g_g205_g208[0])), (cat((list(x_g206)), (map(second, xs_g207)))))))))
}), (chain(fa, (many((chain(fb, fa))))))))))
}))
})());
var sep_by = ((function  () {
    return ((function sep_by (fa, fb) {
    return (((por((sep_by1(fa, fb)), (transform((function  (sub_g209) {
    return ((([])))
}), pnothing))))))
}))
})());
var prange = ((function  () {
    return ((function prange (a, b) {
    var err_g212;
    return ((((err_g212 = (list((list("range", a, b))))), (function  (xs, i) {
    var g2_g211_g213, g1_g210_g214, x_g215;
    return ((((x_g215 = (xs[i])), (((g1_g210_g214 = a), ((g2_g211_g213 = x_g215), (((g1_g210_g214 <= g2_g211_g213) && (g2_g211_g213 <= b))))) ? (list(x_g215, (i + 1))) : err_g212))))
}))))
}))
})());
var dbgp = ((function  () {
    return ((function dbgp (f) {
    return (((function  (xs, i) {
    var foo_g216;
    return ((((foo_g216 = (f(xs, i))), (prn(xs, i, foo_g216)), foo_g216)))
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
    return ((por((transform((function  (sub_g217) {
    var x_g219, xs_g220, g_g218_g221;
    return ((((g_g218_g221 = sub_g217), ((xs_g220 = (g_g218_g221[1])), ((x_g219 = (g_g218_g221[0])), (apply(str, x_g219, xs_g220)))))))
}), (chain(symbol_char, (many((por(symbol_char, digit)))))))), (one_of(("."))))))
})());
var between = ((function  () {
    return ((function between (a, b, c) {
    return (((transform((function  (sub_g222) {
    var __g224, x_g225, __g226, g_g223_g227;
    return ((((g_g223_g227 = sub_g222), ((__g226 = (g_g223_g227[2])), ((x_g225 = (g_g223_g227[1])), ((__g224 = (g_g223_g227[0])), x_g225))))))
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
    return ((transform((function  (sub_g228) {
    var __g230, x_g231, g_g229_g232;
    return ((((g_g229_g232 = sub_g228), ((x_g231 = (g_g229_g232[1])), ((__g230 = (g_g229_g232[0])), x_g231)))))
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
    return ((transform((function  (sub_g233) {
    var g_g236_g245, g_g238_g246, g_g237_g247, g_g235_g248, g_g240_g249, g_g242_g250, g_g241_g251, g_g239_g252, sign_g253, a_g254, b_g255, g_g234_g256;
    return ((((g_g234_g256 = sub_g233), ((b_g255 = (g_g234_g256[2])), ((a_g254 = (g_g234_g256[1])), ((sign_g253 = (g_g234_g256[0])), (sign_g253 = ((g_g235_g248 = sign_g253), (((g_g236_g245 = g_g235_g248), (((alist(g_g236_g245)) && ((g_g236_g245.length) === 0)) ? false : ((g_g236_g245 === 0) ? true : g_g236_g245))) ? g_g235_g248 : ((g_g237_g247 = ("+")), (((g_g238_g246 = g_g237_g247), (((alist(g_g238_g246)) && ((g_g238_g246.length) === 0)) ? false : ((g_g238_g246 === 0) ? true : g_g238_g246))) ? g_g237_g247 : null))))), (b_g255 = ((g_g239_g252 = b_g255), (((g_g240_g249 = g_g239_g252), (((alist(g_g240_g249)) && ((g_g240_g249.length) === 0)) ? false : ((g_g240_g249 === 0) ? true : g_g240_g249))) ? g_g239_g252 : ((g_g241_g251 = ("")), (((g_g242_g250 = g_g241_g251), (((alist(g_g242_g250)) && ((g_g242_g250.length) === 0)) ? false : ((g_g242_g250 === 0) ? true : g_g242_g250))) ? g_g241_g251 : null))))), (+(str(sign_g253, (apply(str, a_g254)), b_g255)))))))))
}), (chain((optional((one_of(("+-"))))), (many1(digit)), (optional((transform((function  (sub_g243) {
    var dot_g257, digits_g258, g_g244_g259;
    return ((((g_g244_g259 = sub_g243), ((digits_g258 = (g_g244_g259[1])), ((dot_g257 = (g_g244_g259[0])), (apply(str, dot_g257, digits_g258)))))))
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
    return (((((xs.length) === 1) ? (xs[0]) : (cat((list(".")), xs)))))
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
    return ((transform((function  (sub_g260) {
    var file_g262, __g263, g_g261_g264;
    return ((((g_g261_g264 = sub_g260), ((__g263 = (g_g261_g264[1])), ((file_g262 = (g_g261_g264[0])), file_g262)))))
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
    var g_g265_g266;
    return ((((g_g265_g266 = (str((prefix || ("")), ("_g"), gensym_counter))), (++gensym_counter), g_g265_g266)))
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
    return (((((!((astr(x)))) || ((x[0]) === ("\""))) ? x : ((wholereps[x]) || (join((map((function  (_) {
    return ((((reps[_]) || _)))
}), x)), ("")))))))
}))
})());
var letmac = ((function  () {
    return ((function letmac (name, val) {
    var g_g268_g271, i_g272, i_g273, g_g274, rest_g275, before_g276, rest_g277, after_g278, g_g270_g279, g_g269_g280, offset_g281, body_g282, g_g267_g283;
    return (((g_g267_g283 = arguments), ((body_g282 = (slice(g_g267_g283, 2, ((g_g267_g283.length) - 0)))), ((alist(name)) ? ((offset_g281 = ((anumber((first(name)))) ? ((g_g268_g271 = (first(name))), (name = (slice(name, 1))), g_g268_g271) : 0)), ((g_g269_g280 = (split_by((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("'")))))
}), name))), ((g_g270_g279 = (g_g269_g280[1])), ((after_g278 = (slice(g_g270_g279, 1, ((g_g270_g279.length) - 0)))), ((rest_g277 = (g_g270_g279[0])), ((before_g276 = (g_g269_g280[0])), ((rest_g275 = (rest_g277 ? (second(rest_g277)) : false)), ((((name.length) === 0) ? (cat((list("do")), body_g282)) : ((g_g274 = (gensym(("g")))), (((i_g272 = 0), (function () {while ((i_g272 < (before_g276.length))) {
    (body_g282 = (list((cat((list("let")), (list((before_g276[i_g272]))), (list((list("get", g_g274, (offset_g281 + i_g272))))), body_g282))))), (++i_g272);
}}())), (rest_g275 ? ((body_g282 = (list((cat((list("let")), (list(rest_g275)), (list((list("slice", g_g274, (offset_g281 + (before_g276.length)), (list("-", (list(".", g_g274, "length")), (after_g278.length))))))), body_g282))))), ((i_g273 = 0), (function () {while ((i_g273 < (after_g278.length))) {
    (body_g282 = (list((cat((list("let")), (list((after_g278[i_g273]))), (list((list("get", g_g274, (list("-", (list(".", g_g274, "length")), ((after_g278.length) - i_g273))))))), body_g282))))), (++i_g273);
}}()))) : null), (cat((list("let")), (list(g_g274)), (list(val)), body_g282))))))))))))) : (cat((list("rawlet")), (list(name)), (list(val)), body_g282))))))
}))
})());
var fun = ((function  () {
    return ((function fun (name, args) {
    var sub_g287, _g286_g288, before_g289, restnafter_g290, g_g285_g291, body_g292, g_g284_g293;
    return (((g_g284_g293 = arguments), ((body_g292 = (slice(g_g284_g293, 2, ((g_g284_g293.length) - 0)))), ((g_g285_g291 = (split_by((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("'")))))
}), args))), ((restnafter_g290 = (g_g285_g291[1])), ((before_g289 = (g_g285_g291[0])), ((_g286_g288 = 0), (function () {while ((_g286_g288 < (before_g289.length))) {
    ((alist((before_g289[_g286_g288]))) ? (((sub_g287 = (gensym(("sub")))), ((body_g292 = (list((cat((list("let")), (list((before_g289[_g286_g288]))), (list(sub_g287)), body_g292))))), ((before_g289[_g286_g288]) = sub_g287)))) : null), (++_g286_g288);
}}())), (list("rawfun", name, before_g289, (cat((list("let")), (list((cat((list((before_g289.length))), restnafter_g290)))), (list("arguments")), body_g292))))))))))
}))
})());
var asbool = ((function  () {
    return ((function asbool (x) {
    var g_g294;
    return ((((g_g294 = (gensym(("g")))), ((list("let", g_g294, x, (list("if", (list("and", (list("alist", g_g294)), (list("is", (list(".", g_g294, "length")), 0)))), "false", (list("if", (list("is", g_g294, 0)), "true", g_g294))))))))))
}))
})());
var ifmac = ((function  () {
    return ((function ifmac (cond, then) {
    var rest_g296, g_g295_g297;
    return (((g_g295_g297 = arguments), ((rest_g296 = (slice(g_g295_g297, 2, ((g_g295_g297.length) - 0)))), (list("rawif", cond, then, (((rest_g296.length) === 0) ? null : (((rest_g296.length) === 1) ? (rest_g296[0]) : (cat((list("if")), rest_g296)))))))))
}))
})());
var lifmac = ((function  () {
    return ((function lifmac (cond, then) {
    var rest_g299, g_g298_g300;
    return (((g_g298_g300 = arguments), ((rest_g299 = (slice(g_g298_g300, 2, ((g_g298_g300.length) - 0)))), (list("rawif", (asbool(cond)), then, (((rest_g299.length) === 0) ? null : (((rest_g299.length) === 1) ? (rest_g299[0]) : (cat((list("lif")), rest_g299)))))))))
}))
})());
var macs = ((function  () {
    return ((list2obj((list((list(("if"), ifmac)), (list(("fun"), fun)), (list(("let"), letmac)), (list(("lif"), lifmac)))))))
})());
var commaop = ((function  () {
    return ((function commaop () {
    var code_g302, g_g301_g303;
    return (((g_g301_g303 = arguments), ((code_g302 = (slice(g_g301_g303, 0, ((g_g301_g303.length) - 0)))), (join((map(rendex, code_g302)), (", "))))))
}))
})());
var delet = ((function  () {
    return ((function delet (code) {
    var sub_g306, vars_g307, name_g308, val_g309, body_g310, g_g305_g311, g_g304_g312, foo_g313;
    return ((((alist(code)) ? (((code[0]) === ("rawlet")) ? ((g_g304_g312 = (delet((slice(code, 1))))), ((g_g305_g311 = (g_g304_g312[1])), ((body_g310 = (slice(g_g305_g311, 2, ((g_g305_g311.length) - 0)))), ((val_g309 = (g_g305_g311[1])), ((name_g308 = (g_g305_g311[0])), ((vars_g307 = (g_g304_g312[0])), ((sub_g306 = (gensym(name_g308))), ((list((cat(vars_g307, (list(sub_g306)))), (cat((list("do")), (list((list("=", sub_g306, val_g309)))), (subsname(name_g308, sub_g306, body_g310)))))))))))))) : (((code[0]) === ("rawfun")) ? (list([], code)) : ((foo_g313 = (map(delet, code))), (list((mapcat(first, foo_g313)), (map(second, foo_g313))))))) : (list([], code)))))
}))
})());
var rawif = ((function  () {
    return ((function rawif (cond, then, else_) {
    return (((str((rendex(cond)), (" ? "), (rendex(then)), (" : "), (rendex(else_))))))
}))
})());
var rawwhile = ((function  () {
    return ((function rawwhile (cond) {
    var body_g315, g_g314_g316;
    return (((g_g314_g316 = arguments), ((body_g315 = (slice(g_g314_g316, 1, ((g_g314_g316.length) - 0)))), (str(("function () {while ("), (rendex(cond)), (") {\n    "), (apply(commaop, body_g315)), (";\n}}()"))))))
}))
})());
var rawcatch = ((function  () {
    return ((function rawcatch (name, form) {
    var body_g318, g_g317_g319;
    return (((g_g317_g319 = arguments), ((body_g318 = (slice(g_g317_g319, 2, ((g_g317_g319.length) - 0)))), (str(("function () {try{\n    return "), (rendex(form)), ("} catch ("), (rendex(name)), (") {\n    return "), (apply(commaop, body_g318)), (";\n}}()"))))))
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
    var names_g322, body_g323, g_g321_g324, body_g325, g_g320_g326;
    return (((g_g320_g326 = arguments), ((body_g325 = (slice(g_g320_g326, 2, ((g_g320_g326.length) - 0)))), ((g_g321_g324 = (delet((cat((["do"]), body_g325))))), ((body_g323 = (g_g321_g324[1])), ((names_g322 = (g_g321_g324[0])), (str(("function "), (munge(name)), (" ("), (apply(commaop, args)), (") {\n"), (((names_g322.length) === 0) ? ("") : (str(("    var "), (apply(commaop, names_g322)), (";\n")))), ("    return "), (rendex(body_g323)), ("\n}")))))))))
}))
})());
var exprenderers = ((function  () {
    return ((list2obj((list((list(("get"), rawget)), (list(("rawfun"), rawfun)), (list(("'"), quote)), (list(("++"), pp)), (list(("while"), rawwhile)), (list(("rawif"), rawif)), (list(("do"), commaop)), (list(("asnumber"), r_asnumber)), (list(("catch"), rawcatch)))))))
})());
((function  () {
    return ((map((function  (sub_g327) {
    var name_g330, op_g331, id_g332, g_g328_g333;
    return ((((g_g328_g333 = sub_g327), ((id_g332 = (g_g328_g333[2])), ((op_g331 = (g_g328_g333[1])), ((name_g330 = (g_g328_g333[0])), ((exprenderers[name_g330]) = (function  () {
    var xs_g334, g_g329_g335;
    return (((g_g329_g335 = arguments), ((xs_g334 = (slice(g_g329_g335, 0, ((g_g329_g335.length) - 0)))), (((xs_g334.length) === 0) ? id_g332 : (join((map(rendex, xs_g334)), op_g331))))))
}))))))))
}), ([[".",".","null"],["+"," + ",0],["%"," % ",0],["-"," - ",0],["/"," / ",1],["and"," && ","true"],["or"," || ","false"],["raw<"," < ","true"],["raw<="," <= ","true"],["="," = ","null"],["rawis"," === ","true"]]))))
})());
((function  () {
    return ((map((function  (sub_g336) {
    var name_g339, op_g340, g_g337_g341;
    return ((((g_g337_g341 = sub_g336), ((op_g340 = (g_g337_g341[1])), ((name_g339 = (g_g337_g341[0])), ((macs[name_g339]) = (function  () {
    var g2_g342, g1_g343, xs_g344, g_g338_g345;
    return (((g_g338_g345 = arguments), ((xs_g344 = (slice(g_g338_g345, 0, ((g_g338_g345.length) - 0)))), (((xs_g344.length) < 2) ? true : (((xs_g344.length) === 2) ? (list(op_g340, (xs_g344[0]), (xs_g344[1]))) : ((g1_g343 = (gensym(("g1")))), ((g2_g342 = (gensym(("g2")))), ((list("with", (list(g1_g343, (xs_g344[0]), g2_g342, (xs_g344[1]))), (list("and", (list(op_g340, g1_g343, g2_g342)), (cat((list(name_g339)), (list(g2_g342)), (slice(xs_g344, 2))))))))))))))))
})))))))
}), ([["<","raw<"],["<=","raw<="],["is","rawis"]]))))
})());
var rendex = ((function  () {
    return ((function rendex (code) {
    var it_g346;
    return ((((alist(code)) ? (((code.length) === 0) ? ("[]") : (str(("("), ((it_g346 = (exprenderers[(code[0])])), (it_g346 ? (apply(it_g346, (slice(code, 1)))) : (funcall((code[0]), (slice(code, 1)))))), (")")))) : ((code === null) ? ("null") : ((code === undefined) ? ("undefined") : (munge(code)))))))
}))
})());
var macex = ((function  () {
    return ((function macex (macs, code) {
    var it_g347;
    return (((((alist(code)) && (code[0]) && (!(((code[0]) === ("'"))))) ? (((code[0]) = (macex(macs, (code[0])))), ((it_g347 = (macs[(code[0])])), (it_g347 ? (macex(macs, (apply(it_g347, (slice(code, 1)))))) : (map((function  (_) {
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
    var g_g348_g349;
    return (((((g_g348_g349 = verb), ((g_g348_g349 === ("assign")) ? (function  (_) {
    return ((((env.push)((list((munge(arg)), _))))))
}) : ((g_g348_g349 === ("assign-mac")) ? (function  (_) {
    return ((((macs[arg]) = _)))
}) : ((g_g348_g349 === ("run")) ? idfn : null))))((eval_with((str(("return "), code)), env))))))
}))
})());
var only_compile_form = ((function  () {
    return ((function only_compile_form (verb, arg, code) {
    var g_g350_g351;
    return (((str((((g_g350_g351 = verb), ((g_g350_g351 === ("assign")) ? (function  (_) {
    return (((str(("var "), (munge(arg)), (" = "), _))))
}) : ((g_g350_g351 === ("assign-mac")) ? (JSON.stringify) : ((g_g350_g351 === ("run")) ? idfn : null))))(code)), (";\n")))))
}))
})());
var compile_helper = ((function  () {
    return ((function compile_helper (code) {
    var jscode_g353, verb_g354, arg_g355, bar_g356, g_g352_g357, foo_g358;
    return ((((foo_g358 = (macex(macs, code))), ((g_g352_g357 = ((some((foo_g358[0]), (["assign","assign-mac"]))) ? foo_g358 : (list(("run"), null, foo_g358)))), ((bar_g356 = (g_g352_g357[2])), ((arg_g355 = (g_g352_g357[1])), ((verb_g354 = (g_g352_g357[0])), ((jscode_g353 = (rendex((list((list("rawfun", "", (list()), bar_g356))))))), ((list(verb_g354, arg_g355, jscode_g353)))))))))))
}))
})());
var compile_form = ((function  () {
    return ((function compile_form (code) {
    var g_g359_g360, foo_g361;
    return ((((foo_g361 = (compile_helper(code))), ((((g_g359_g360 = ((foo_g361[0]) === ("run"))), (((alist(g_g359_g360)) && ((g_g359_g360.length) === 0)) ? false : ((g_g359_g360 === 0) ? true : g_g359_g360))) ? false : true) ? (apply(eval_form, foo_g361)) : null), (apply(only_compile_form, foo_g361)))))
}))
})());
var compile = ((function  () {
    return ((function compile (code) {
    return (((join((cat((list("\"use strict\";\n")), (map(compile_form, code)))), ("")))))
}))
})());
var parse = ((function  () {
    return ((function parse (data, f) {
    var g_g362_g363, foo_g364;
    return ((((foo_g364 = (pfile((str(data)), 0))), (((g_g362_g363 = (second(foo_g364))), (((alist(g_g362_g363)) && ((g_g362_g363.length) === 0)) ? false : ((g_g362_g363 === 0) ? true : g_g362_g363))) ? (f((first(foo_g364)))) : (prn((first(foo_g364))))))))
}))
})());
var read_first_file = ((function  () {
    return ((function read_first_file (paths, f) {
    return ((((function self (ps) {
    return (((((ps.length) === 0) ? (f(null)) : ((fs.readFile)((first(ps)), (function  (err, data) {
    return (((err ? (self((slice(ps, 1)))) : (f(data)))))
}))))))
})(paths))))
}))
})());
var gather_callbacks = ((function  () {
    return ((function gather_callbacks (cbs, f) {
    var res_g365;
    return ((((res_g365 = (map((function  () {
    return ((undefined))
}), cbs))), ((cbs.map)((function  (cb, i) {
    return (((cb((function  (x) {
    return ((((res_g365[i]) = x), (((res_g365.every)((function  (_) {
    return (((!((_ === undefined)))))
}))) ? (f(res_g365)) : null)))
})))))
}))))))
}))
})());
var run_repl = ((function  () {
    return ((((process.argv)[2]) === ("-i")))
})());
var files = ((function  () {
    return ((slice((process.argv), (run_repl ? 3 : 2))))
})());
var now = ((function  () {
    return ((function now () {
    return ((((((new(Date)).getTime)()) / 1000)))
}))
})());
var repl = ((function  () {
    return ((function repl () {
    var rl_g368;
    return ((((rl_g368 = (((require(("readline"))).createInterface)((list2obj((list((list(("input"), (process.stdin))), (list(("output"), (process.stdout)))))))))), ((rl_g368.setPrompt)(("¿ "))), ((rl_g368.prompt)()), ((rl_g368.on)(("line"), (function  (line) {
    return (((parse(line, (function  (sub_g366) {
    var code_g369, g_g367_g370;
    return ((((g_g367_g370 = sub_g366), ((code_g369 = (g_g367_g370[0])), (prn((function () {try{
    return (apply(eval_form, (compile_helper(code_g369))))} catch (e) {
    return (e.stack);
}}()))), ((rl_g368.prompt)())))))
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
    return (((err ? (prn(err)) : (parse(data, f)))))
})))))
})))
}), (cat((list((str(__dirname, ("/jasper.jpr"))))), files)))), (function  (codes) {
    var g_g371_g372, output_g373, code_g374;
    return (((prn(((now()) - start))), ((code_g374 = (apply(cat, codes))), ((output_g373 = (compile(code_g374))), (((((g_g371_g372 = run_repl), (((alist(g_g371_g372)) && ((g_g371_g372.length) === 0)) ? false : ((g_g371_g372 === 0) ? true : g_g371_g372))) ? false : true) ? ((fs.writeFileSync)((str((files[((files.length) - 1)]), (".js"))), output_g373)) : null)))), (prn(((now()) - start))), (run_repl ? (repl()) : null)))
}))))
})());
