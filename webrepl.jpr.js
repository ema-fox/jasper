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
var apply_method = ((function  () {
    return ((function apply_method (f, o) {
    var argsa_g17, argsb_g18, g_g16_g19;
    return (((g_g16_g19 = arguments), ((argsb_g18 = (g_g16_g19[((g_g16_g19.length) - 1)])), ((argsa_g17 = (slice(g_g16_g19, 2, ((g_g16_g19.length) - 1)))), ((f.apply)(o, (cat(argsa_g17, argsb_g18))))))))
}))
})());
"((function  () {\n    return ((function $br () {\n    var body_g21, g_g20_g22;\n    return (((g_g20_g22 = arguments), ((body_g21 = (slice(g_g20_g22, 0, ((g_g20_g22.length) - 0)))), (list((\"fun\"), (\"\"), (list((\"_\"))), body_g21)))))\n}))\n})())";
var map1 = ((function  () {
    return ((function map1 (f, xs) {
    return (((([].map.call)(xs, (function  (_) {
    return (((f(_))))
})))))
}))
})());
var map = ((function  () {
    return ((function map (f) {
    var g_g24_g25, i_g26, ys_g27, length_g28, xss_g29, g_g23_g30;
    return (((g_g23_g30 = arguments), ((xss_g29 = (slice(g_g23_g30, 1, ((g_g23_g30.length) - 0)))), (((g_g24_g25 = ((xss_g29.length) === 1)), (((alist(g_g24_g25)) && ((g_g24_g25.length) === 0)) ? false : ((g_g24_g25 === 0) ? true : g_g24_g25))) ? (map1(f, (xss_g29[0]))) : ((length_g28 = (apply((Math.min), (map1((function  (_) {
    return (((_.length)))
}), xss_g29))))), ((ys_g27 = []), ((i_g26 = 0), (function () {while ((i_g26 < length_g28)) {
    ((ys_g27.push)((apply(f, (map1((function  (_) {
    return (((_[i_g26])))
}), xss_g29)))))), (++i_g26);
}}())), ys_g27))))))
}))
})());
var sfy = ((function  () {
    return ((function sfy (x) {
    var g_g31_g34, g_g32_g35, g_g33_g36;
    return (((((g_g31_g34 = (x === null)), (((alist(g_g31_g34)) && ((g_g31_g34.length) === 0)) ? false : ((g_g31_g34 === 0) ? true : g_g31_g34))) ? ("null") : (((g_g32_g35 = (x === undefined)), (((alist(g_g32_g35)) && ((g_g32_g35.length) === 0)) ? false : ((g_g32_g35 === 0) ? true : g_g32_g35))) ? ("undefined") : (((g_g33_g36 = (alist(x))), (((alist(g_g33_g36)) && ((g_g33_g36.length) === 0)) ? false : ((g_g33_g36 === 0) ? true : g_g33_g36))) ? (str(("("), (join((map(sfy, x)), (" "))), (")"))) : (str(x)))))))
}))
})());
var prn = ((function  () {
    return ((function prn (a) {
    var as_g38, g_g37_g39;
    return (((g_g37_g39 = arguments), ((as_g38 = (slice(g_g37_g39, 1, ((g_g37_g39.length) - 0)))), (apply_method((console.log), console, (sfy(a)), (map(sfy, as_g38)))), a)))
}))
})());
var mapcat = ((function  () {
    return ((function mapcat (f) {
    var xss_g41, g_g40_g42;
    return (((g_g40_g42 = arguments), ((xss_g41 = (slice(g_g40_g42, 1, ((g_g40_g42.length) - 0)))), (apply(cat, (apply(map, f, xss_g41)))))))
}))
})());
var quote = ((function  () {
    return ((function quote (a) {
    return ((((JSON.stringify)(a))))
}))
})());
var catmac = ((function  () {
    return ((function catmac (xs) {
    var g_g43_g46;
    return (((((g_g43_g46 = ((xs.every)((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("list")))))
})))), (((alist(g_g43_g46)) && ((g_g43_g46.length) === 0)) ? false : ((g_g43_g46 === 0) ? true : g_g43_g46))) ? (cat((["list"]), (mapcat((function  (sub_g44) {
    var __g47, ys_g48, g_g45_g49;
    return ((((g_g45_g49 = sub_g44), ((ys_g48 = (slice(g_g45_g49, 1, ((g_g45_g49.length) - 0)))), ((__g47 = (g_g45_g49[0])), ys_g48)))))
}), xs)))) : (cat((["cat"]), xs)))))
}))
})());
var runqq = ((function  () {
    return ((function runqq (a) {
    var g_g50_g53, g_g51_g54, g_g52_g55;
    return (((((g_g50_g53 = (alist(a))), (((alist(g_g50_g53)) && ((g_g50_g53.length) === 0)) ? false : ((g_g50_g53 === 0) ? true : g_g50_g53))) ? (((g_g51_g54 = ((a[0]) === (",@"))), (((alist(g_g51_g54)) && ((g_g51_g54.length) === 0)) ? false : ((g_g51_g54 === 0) ? true : g_g51_g54))) ? (a[1]) : (((g_g52_g55 = ((a[0]) === (","))), (((alist(g_g52_g55)) && ((g_g52_g55.length) === 0)) ? false : ((g_g52_g55 === 0) ? true : g_g52_g55))) ? (list(("list"), (a[1]))) : (list(("list"), (catmac((map(runqq, a)))))))) : (cat((["list"]), (quote(a)))))))
}))
})());
"((function  () {\n    return ((function $qq (a) {\n    var g_g56_g57, xs_g58;\n    return ((((xs_g58 = (runqq(a))), (((g_g56_g57 = ((alist(xs_g58)) && ((xs_g58[0]) === (\"list\")))), (((alist(g_g56_g57)) && ((g_g56_g57.length) === 0)) ? false : ((g_g56_g57 === 0) ? true : g_g56_g57))) ? (xs_g58[1]) : (list((\"get\"), xs_g58, 0))))))\n}))\n})())";
"((function  () {\n    return ((function fn (args) {\n    var body_g60, g_g59_g61;\n    return (((g_g59_g61 = arguments), ((body_g60 = (slice(g_g59_g61, 1, ((g_g59_g61.length) - 0)))), (cat((list(\"fun\")), (list(\"\")), (list(args)), body_g60)))))\n}))\n})())";
"((function  () {\n    return ((function when (cond) {\n    var body_g63, g_g62_g64;\n    return (((g_g62_g64 = arguments), ((body_g63 = (slice(g_g62_g64, 1, ((g_g62_g64.length) - 0)))), (list(\"if\", cond, (cat((list(\"do\")), body_g63)))))))\n}))\n})())";
"((function  () {\n    return ((function land () {\n    var g_g66_g68, g_g67_g69, xs_g70, g_g65_g71;\n    return (((g_g65_g71 = arguments), ((xs_g70 = (slice(g_g65_g71, 0, ((g_g65_g71.length) - 0)))), (((g_g66_g68 = ((xs_g70.length) === 0)), (((alist(g_g66_g68)) && ((g_g66_g68.length) === 0)) ? false : ((g_g66_g68 === 0) ? true : g_g66_g68))) ? true : (((g_g67_g69 = ((xs_g70.length) === 1)), (((alist(g_g67_g69)) && ((g_g67_g69.length) === 0)) ? false : ((g_g67_g69 === 0) ? true : g_g67_g69))) ? (xs_g70[0]) : (list(\"if\", (xs_g70[0]), (cat((list(\"land\")), (slice(xs_g70, 1)))))))))))\n}))\n})())";
var subsname = ((function  () {
    return ((function subsname (name, sub, code) {
    var g_g72_g75, g_g73_g76, g_g74_g77;
    return (((((g_g72_g75 = (alist(code))), (((alist(g_g72_g75)) && ((g_g72_g75.length) === 0)) ? false : ((g_g72_g75 === 0) ? true : g_g72_g75))) ? (((g_g73_g76 = ((code[0]) === ("."))), (((alist(g_g73_g76)) && ((g_g73_g76.length) === 0)) ? false : ((g_g73_g76 === 0) ? true : g_g73_g76))) ? (cat((list(".")), (list((subsname(name, sub, (code[1]))))), (slice(code, 2)))) : (map((function  (x) {
    return (((subsname(name, sub, x))))
}), code))) : (((g_g74_g77 = (code === name)), (((alist(g_g74_g77)) && ((g_g74_g77.length) === 0)) ? false : ((g_g74_g77 === 0) ? true : g_g74_g77))) ? sub : code))))
}))
})());
var first = ((function  () {
    return ((function first (sub_g78) {
    var a_g80, __g81, g_g79_g82;
    return ((((g_g79_g82 = sub_g78), ((__g81 = (g_g79_g82[1])), ((a_g80 = (g_g79_g82[0])), a_g80)))))
}))
})());
var second = ((function  () {
    return ((function second (sub_g83) {
    var __g85, a_g86, g_g84_g87;
    return ((((g_g84_g87 = sub_g83), ((a_g86 = (g_g84_g87[1])), ((__g85 = (g_g84_g87[0])), a_g86)))))
}))
})());
"((function  () {\n    return ((function with_ (bindings) {\n    var g_g89_g90, body_g91, g_g88_g92;\n    return (((g_g88_g92 = arguments), ((body_g91 = (slice(g_g88_g92, 1, ((g_g88_g92.length) - 0)))), (((g_g89_g90 = ((bindings.length) === 0)), (((alist(g_g89_g90)) && ((g_g89_g90.length) === 0)) ? false : ((g_g89_g90 === 0) ? true : g_g89_g90))) ? (cat((list(\"do\")), body_g91)) : (list(\"let\", (first(bindings)), (second(bindings)), (cat((list(\"with\")), (list((slice(bindings, 2)))), body_g91))))))))\n}))\n})())";
"((function  () {\n    return ((function aif (expr, then, else_) {\n    return (((list(\"let\", \"it\", expr, (list(\"if\", \"it\", then, else_))))))\n}))\n})())";
"((function  () {\n    return ((function laif (expr, then, else_) {\n    return (((list(\"let\", \"it\", expr, (list(\"if\", \"it\", then, else_))))))\n}))\n})())";
"((function  () {\n    return ((function afn (args) {\n    var body_g94, g_g93_g95;\n    return (((g_g93_g95 = arguments), ((body_g94 = (slice(g_g93_g95, 1, ((g_g93_g95.length) - 0)))), (cat((list(\"fun\")), (list(\"self\")), (list(args)), body_g94)))))\n}))\n})())";
"((function  () {\n    return ((function awhile (cond) {\n    var body_g97, g_g96_g98;\n    return (((g_g96_g98 = arguments), ((body_g97 = (slice(g_g96_g98, 1, ((g_g96_g98.length) - 0)))), (list(\"let\", \"it\", \"undefined\", (cat((list(\"while\")), (list((list(\"=\", \"it\", cond)))), body_g97)))))))\n}))\n})())";
var listify = ((function  () {
    return ((function listify (x) {
    var g_g99_g100;
    return (((((g_g99_g100 = (alist(x))), (((alist(g_g99_g100)) && ((g_g99_g100.length) === 0)) ? false : ((g_g99_g100 === 0) ? true : g_g99_g100))) ? x : (list(x)))))
}))
})());
"((function  () {\n    return ((function w$suniq (names) {\n    var body_g102, g_g101_g103;\n    return (((g_g101_g103 = arguments), ((body_g102 = (slice(g_g101_g103, 1, ((g_g101_g103.length) - 0)))), (cat((list(\"with\")), (list((mapcat((function  (_) {\n    return (((list(_, (list(\"gensym\", (list(\"'\", _))))))))\n}), (listify(names)))))), body_g102)))))\n}))\n})())";
"((function  () {\n    return ((function zap (f, place) {\n    var args_g105, g_g104_g106;\n    return (((g_g104_g106 = arguments), ((args_g105 = (slice(g_g104_g106, 2, ((g_g104_g106.length) - 0)))), (list(\"=\", place, (cat((list(f)), (list(place)), args_g105)))))))\n}))\n})())";
var pair = ((function  () {
    return ((function pair (xs) {
    var g_g107_g108, i_g109, ys_g110;
    return ((((ys_g110 = []), ((i_g109 = 0), ((function () {while ((i_g109 < (xs.length))) {
    (((g_g107_g108 = ((i_g109 + 1) < (xs.length))), (((alist(g_g107_g108)) && ((g_g107_g108.length) === 0)) ? false : ((g_g107_g108 === 0) ? true : g_g107_g108))) ? ((ys_g110.push)((list((xs[i_g109]), (xs[(i_g109 + 1)]))))) : ((ys_g110.push)((list((xs[i_g109])))))), (i_g109 = (i_g109 + 2));
}}()), ys_g110)))))
}))
})());
"((function  () {\n    return ((function case_ (expr) {\n    var g_g113, args_g114, g_g111_g115;\n    return (((g_g111_g115 = arguments), ((args_g114 = (slice(g_g111_g115, 1, ((g_g111_g115.length) - 0)))), ((g_g113 = (gensym((\"g\")))), ((list(\"let\", g_g113, expr, (cat((list(\"if\")), (mapcat((function  (_) {\n    var g_g112_g116;\n    return (((((g_g112_g116 = ((_.length) === 2)), (((alist(g_g112_g116)) && ((g_g112_g116.length) === 0)) ? false : ((g_g112_g116 === 0) ? true : g_g112_g116))) ? (list((list(\"is\", g_g113, (list(\"'\", (_[0]))))), (_[1]))) : _)))\n}), (pair(args_g114)))))))))))))\n}))\n})())";
"((function  () {\n    return ((function dbg () {\n    var g_g118, xs_g119, g_g117_g120;\n    return (((g_g117_g120 = arguments), ((xs_g119 = (slice(g_g117_g120, 0, ((g_g117_g120.length) - 0)))), ((g_g118 = (gensym((\"g\")))), ((list(\"let\", g_g118, xs_g119, (list(\"prn\", (list(\"'\", xs_g119)), (list(\"'\", \":\")), g_g118)), g_g118)))))))\n}))\n})())";
"((function  () {\n    return ((function lor () {\n    var g_g122_g123, g_g124, xs_g125, g_g121_g126;\n    return (((g_g121_g126 = arguments), ((xs_g125 = (slice(g_g121_g126, 0, ((g_g121_g126.length) - 0)))), (((g_g122_g123 = xs_g125), (((alist(g_g122_g123)) && ((g_g122_g123.length) === 0)) ? false : ((g_g122_g123 === 0) ? true : g_g122_g123))) ? ((g_g124 = (gensym((\"g\")))), ((list(\"let\", g_g124, (xs_g125[0]), (list(\"if\", g_g124, g_g124, (cat((list(\"lor\")), (slice(xs_g125, 1)))))))))) : null))))\n}))\n})())";
"((function  () {\n    return ((function do1 (x) {\n    var g_g128, xs_g129, g_g127_g130;\n    return (((g_g127_g130 = arguments), ((xs_g129 = (slice(g_g127_g130, 1, ((g_g127_g130.length) - 0)))), ((g_g128 = (gensym((\"g\")))), ((cat((list(\"let\")), (list(g_g128)), (list(x)), xs_g129, (list(g_g128)))))))))\n}))\n})())";
var list2obj = ((function  () {
    return ((function list2obj (args) {
    var res_g133;
    return ((((res_g133 = ((Object.create)(null))), (map((function  (sub_g131) {
    var k_g134, v_g135, g_g132_g136;
    return ((((g_g132_g136 = sub_g131), ((v_g135 = (g_g132_g136[1])), ((k_g134 = (g_g132_g136[0])), ((res_g133[k_g134]) = v_g135))))))
}), args)), res_g133)))
}))
})());
"((function  () {\n    return ((function obj () {\n    var args_g140, g_g137_g141;\n    return (((g_g137_g141 = arguments), ((args_g140 = (slice(g_g137_g141, 0, ((g_g137_g141.length) - 0)))), (list(\"list2obj\", (cat((list(\"list\")), (map((function  (sub_g138) {\n    var k_g142, v_g143, g_g139_g144;\n    return ((((g_g139_g144 = sub_g138), ((v_g143 = (g_g139_g144[1])), ((k_g142 = (g_g139_g144[0])), (list(\"list\", (list(\"'\", k_g142)), v_g143)))))))\n}), (pair(args_g140)))))))))))\n}))\n})())";
"((function  () {\n    return ((function each_while (iv, xs, cond) {\n    var g_g146_g147, v_g148, i_g149, body_g150, g_g145_g151;\n    return (((g_g145_g151 = arguments), ((body_g150 = (slice(g_g145_g151, 3, ((g_g145_g151.length) - 0)))), ((i_g149 = null), ((v_g148 = null), ((((g_g146_g147 = (alist(iv))), (((alist(g_g146_g147)) && ((g_g146_g147.length) === 0)) ? false : ((g_g146_g147 === 0) ? true : g_g146_g147))) ? ((i_g149 = (first(iv))), (v_g148 = (second(iv)))) : ((i_g149 = (gensym(i_g149))), (v_g148 = iv))), (list(\"let\", i_g149, 0, (cat((list(\"while\")), (list((list(\"and\", (list(\"<\", i_g149, (list(\".\", xs, \"length\")))), cond)))), (subsname(v_g148, (list(\"get\", xs, i_g149)), body_g150)), (list((list(\"++\", i_g149))))))))))))))\n}))\n})())";
"((function  () {\n    return ((function each (iv, xs) {\n    var body_g153, g_g152_g154;\n    return (((g_g152_g154 = arguments), ((body_g153 = (slice(g_g152_g154, 2, ((g_g152_g154.length) - 0)))), (cat((list(\"each-while\")), (list(iv)), (list(xs)), (list(\"true\")), body_g153)))))\n}))\n})())";
var testify = ((function  () {
    return ((function testify (test) {
    var g_g155_g156;
    return (((((g_g155_g156 = (afunction(test))), (((alist(g_g155_g156)) && ((g_g155_g156.length) === 0)) ? false : ((g_g155_g156 === 0) ? true : g_g155_g156))) ? test : (function  (_) {
    return (((test === _)))
}))))
}))
})());
"((function  () {\n    return ((function no (x) {\n    return (((list(\"if\", x, \"false\", \"true\"))))\n}))\n})())";
var index_by = ((function  () {
    return ((function index_by (test, xs) {
    var g_g157_g159, g_g158_g160, i_g161, index_g162, f_g163;
    return ((((f_g163 = (testify(test))), ((index_g162 = false), (((i_g161 = 0), (function () {while (((i_g161 < (xs.length)) && (((g_g157_g159 = index_g162), (((alist(g_g157_g159)) && ((g_g157_g159.length) === 0)) ? false : ((g_g157_g159 === 0) ? true : g_g157_g159))) ? false : true))) {
    (((g_g158_g160 = (f_g163((xs[i_g161])))), (((alist(g_g158_g160)) && ((g_g158_g160.length) === 0)) ? false : ((g_g158_g160 === 0) ? true : g_g158_g160))) ? (index_g162 = i_g161) : null), (++i_g161);
}}())), index_g162)))))
}))
})());
var find = ((function  () {
    return ((function find (test, xs) {
    var g_g164_g165, it_g166;
    return ((((it_g166 = (index_by(test, xs))), (((g_g164_g165 = it_g166), (((alist(g_g164_g165)) && ((g_g164_g165.length) === 0)) ? false : ((g_g164_g165 === 0) ? true : g_g164_g165))) ? (xs[it_g166]) : undefined))))
}))
})());
var split_by = ((function  () {
    return ((function split_by (f, xs) {
    var g_g167_g168, i_g169;
    return ((((i_g169 = (index_by(f, xs))), (((g_g167_g168 = (i_g169 === false)), (((alist(g_g167_g168)) && ((g_g167_g168.length) === 0)) ? false : ((g_g167_g168 === 0) ? true : g_g167_g168))) ? (list(xs, [])) : (list((slice(xs, 0, i_g169)), (slice(xs, i_g169))))))))
}))
})());
var some = ((function  () {
    return ((function some (test, xs) {
    var g_g171_g173, g_g172_g174, it_g175, _g170_g176, res_g177, f_g178;
    return ((((f_g178 = (testify(test))), ((res_g177 = false), (((_g170_g176 = 0), (function () {while (((_g170_g176 < (xs.length)) && (((g_g171_g173 = res_g177), (((alist(g_g171_g173)) && ((g_g171_g173.length) === 0)) ? false : ((g_g171_g173 === 0) ? true : g_g171_g173))) ? false : true))) {
    ((it_g175 = (f_g178((xs[_g170_g176])))), (((g_g172_g174 = it_g175), (((alist(g_g172_g174)) && ((g_g172_g174.length) === 0)) ? false : ((g_g172_g174 === 0) ? true : g_g172_g174))) ? (res_g177 = it_g175) : undefined)), (++_g170_g176);
}}())), res_g177)))))
}))
})());
var all = ((function  () {
    return ((function all (test, xs) {
    var f_g179;
    return ((((f_g179 = (testify(test))), (!((some((function  (_) {
    return (((!((f_g179(_))))))
}), xs)))))))
}))
})());
var iso = ((function  () {
    return ((function iso (x, y) {
    return ((((x === y) || ((alist(x)) && (alist(y)) && ((x.length) === (y.length)) && (all(true, (map(iso, x, y))))))))
}))
})());
"((function  () {\n    return ((function callback (to, from) {\n    var body_g181, g_g180_g182;\n    return (((g_g180_g182 = arguments), ((body_g181 = (slice(g_g180_g182, 2, ((g_g180_g182.length) - 0)))), (cat(to, (list((cat((list(\"fn\")), (list(from)), body_g181)))))))))\n}))\n})())";
"((function  () {\n    return ((function defp (name, args) {\n    var body_g184, g_g183_g185;\n    return (((g_g183_g185 = arguments), ((body_g184 = (slice(g_g183_g185, 2, ((g_g183_g185.length) - 0)))), (list(\"def\", name, args, (cat((list(\"fn\")), (list((list(\"xs\", \"i\")))), body_g184)))))))\n}))\n})())";
"((function  () {\n    return ((function defletp (name, args, varname, val) {\n    var body_g187, g_g186_g188;\n    return (((g_g186_g188 = arguments), ((body_g187 = (slice(g_g186_g188, 4, ((g_g186_g188.length) - 0)))), (list(\"def\", name, args, (list(\"let\", varname, val, (cat((list(\"fn\")), (list((list(\"xs\", \"i\")))), body_g187)))))))))\n}))\n})())";
var eof = ((function  () {
    return ((function  (xs, i) {
    var g_g189_g190;
    return (((((g_g189_g190 = ((xs.length) === i)), (((alist(g_g189_g190)) && ((g_g189_g190.length) === 0)) ? false : ((g_g189_g190 === 0) ? true : g_g189_g190))) ? (list(true, i)) : ([["no-eof"]]))))
}))
})());
var one_of = ((function  () {
    return ((function one_of (ys) {
    var err_g192;
    return ((((err_g192 = (list((list("one-of", ys))))), (function  (xs, i) {
    var g_g191_g193, x_g194;
    return ((((x_g194 = (xs[i])), (((g_g191_g193 = (some(x_g194, ys))), (((alist(g_g191_g193)) && ((g_g191_g193.length) === 0)) ? false : ((g_g191_g193 === 0) ? true : g_g191_g193))) ? (list(x_g194, (i + 1))) : err_g192))))
}))))
}))
})());
var none_of = ((function  () {
    return ((function none_of (ys) {
    var err_g196;
    return ((((err_g196 = (list((list("none-of", ys))))), (function  (xs, i) {
    var g_g195_g197, x_g198;
    return ((((x_g198 = (xs[i])), (((g_g195_g197 = (!((some(x_g198, ys))))), (((alist(g_g195_g197)) && ((g_g195_g197.length) === 0)) ? false : ((g_g195_g197 === 0) ? true : g_g195_g197))) ? (list(x_g198, (i + 1))) : err_g196))))
}))))
}))
})());
var por = ((function  () {
    return ((function por () {
    var fs_g206, g_g199_g207;
    return (((g_g199_g207 = arguments), ((fs_g206 = (slice(g_g199_g207, 0, ((g_g199_g207.length) - 0)))), (function  (xs, i) {
    var g_g200_g208, g_g201_g209, foo_g210, g_g203_g211, g_g205_g212, g_g204_g213, g_g202_g214, res_g215, j_g216, errs_g217;
    return ((((errs_g217 = []), ((j_g216 = 0), ((res_g215 = false), ((function () {while (((j_g216 < (fs_g206.length)) && (((g_g200_g208 = res_g215), (((alist(g_g200_g208)) && ((g_g200_g208.length) === 0)) ? false : ((g_g200_g208 === 0) ? true : g_g200_g208))) ? false : true))) {
    ((foo_g210 = ((fs_g206[j_g216])(xs, i))), (((g_g201_g209 = (foo_g210[1])), (((alist(g_g201_g209)) && ((g_g201_g209.length) === 0)) ? false : ((g_g201_g209 === 0) ? true : g_g201_g209))) ? (res_g215 = foo_g210) : (((errs_g217.push)((foo_g210[0]))), (++j_g216))));
}}()), ((g_g202_g214 = res_g215), (((g_g203_g211 = g_g202_g214), (((alist(g_g203_g211)) && ((g_g203_g211.length) === 0)) ? false : ((g_g203_g211 === 0) ? true : g_g203_g211))) ? g_g202_g214 : ((g_g204_g213 = (list((cat((list("or")), errs_g217))))), (((g_g205_g212 = g_g204_g213), (((alist(g_g205_g212)) && ((g_g205_g212.length) === 0)) ? false : ((g_g205_g212 === 0) ? true : g_g205_g212))) ? g_g204_g213 : null))))))))))
}))))
}))
})());
var chain = ((function  () {
    return ((function chain () {
    var fs_g221, g_g218_g222;
    return (((g_g218_g222 = arguments), ((fs_g221 = (slice(g_g218_g222, 0, ((g_g218_g222.length) - 0)))), (function  (xs, i) {
    var res_g223;
    return ((((res_g223 = []), ((function self (fs_g221) {
    var g_g219_g224, g_g220_g225, foo_g226;
    return (((((g_g219_g224 = fs_g221), (((alist(g_g219_g224)) && ((g_g219_g224.length) === 0)) ? false : ((g_g219_g224 === 0) ? true : g_g219_g224))) ? ((foo_g226 = ((fs_g221[0])(xs, i))), (((g_g220_g225 = ((foo_g226.length) === 2)), (((alist(g_g220_g225)) && ((g_g220_g225.length) === 0)) ? false : ((g_g220_g225 === 0) ? true : g_g220_g225))) ? (((res_g223.push)((foo_g226[0]))), (i = (foo_g226[1])), (self((slice(fs_g221, 1))))) : (list((cat((list("at")), (list(i)), foo_g226)))))) : (list(res_g223, i)))))
})(fs_g221)))))
}))))
}))
})());
var pstr = ((function  () {
    return ((function pstr (s) {
    var err_g228;
    return ((((err_g228 = (list((list(s))))), (function  (xs, i) {
    var g_g227_g229;
    return (((((g_g227_g229 = (((xs.substr)(i, (s.length))) === s)), (((alist(g_g227_g229)) && ((g_g227_g229.length) === 0)) ? false : ((g_g227_g229 === 0) ? true : g_g227_g229))) ? (list(s, (i + (s.length)))) : err_g228)))
}))))
}))
})());
var many = ((function  () {
    return ((function many (f) {
    return (((function  (xs, i) {
    var foo_g230, res_g231;
    return ((((res_g231 = []), ((foo_g230 = undefined), ((function () {while (((foo_g230 = (f(xs, i))), ((foo_g230.length) === 2))) {
    ((res_g231.push)((foo_g230[0]))), (i = (foo_g230[1]));
}}()), (list(res_g231, i)))))))
})))
}))
})());
var transform = ((function  () {
    return ((function transform (f, p) {
    return (((function  (xs, i) {
    var g_g232_g233, foo_g234;
    return ((((foo_g234 = (p(xs, i))), (((g_g232_g233 = ((foo_g234.length) === 2)), (((alist(g_g232_g233)) && ((g_g232_g233.length) === 0)) ? false : ((g_g232_g233 === 0) ? true : g_g232_g233))) ? (list((f((foo_g234[0]))), (foo_g234[1]))) : foo_g234))))
})))
}))
})());
"((function  () {\n    return ((function transp (arg, body, p) {\n    return (((list(\"transform\", (list(\"fn\", (list(arg)), body)), p))))\n}))\n})())";
var many1 = ((function  () {
    return ((function many1 (f) {
    return (((transform((function  (sub_g235) {
    var x_g237, xs_g238, g_g236_g239;
    return ((((g_g236_g239 = sub_g235), ((xs_g238 = (g_g236_g239[1])), ((x_g237 = (g_g236_g239[0])), (cat((list(x_g237)), xs_g238)))))))
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
    return (((transform((function  (sub_g240) {
    var x_g242, xs_g243, g_g241_g244;
    return ((((g_g241_g244 = sub_g240), ((xs_g243 = (g_g241_g244[1])), ((x_g242 = (g_g241_g244[0])), (cat((list(x_g242)), (map(second, xs_g243)))))))))
}), (chain(fa, (many((chain(fb, fa))))))))))
}))
})());
var sep_by = ((function  () {
    return ((function sep_by (fa, fb) {
    return (((por((sep_by1(fa, fb)), (transform((function  (sub_g245) {
    return ((([])))
}), pnothing))))))
}))
})());
var prange = ((function  () {
    return ((function prange (a, b) {
    var err_g249;
    return ((((err_g249 = (list((list("range", a, b))))), (function  (xs, i) {
    var g2_g248_g250, g1_g247_g251, g_g246_g252, x_g253;
    return ((((x_g253 = (xs[i])), (((g_g246_g252 = ((g1_g247_g251 = a), ((g2_g248_g250 = x_g253), (((g1_g247_g251 <= g2_g248_g250) && (g2_g248_g250 <= b)))))), (((alist(g_g246_g252)) && ((g_g246_g252.length) === 0)) ? false : ((g_g246_g252 === 0) ? true : g_g246_g252))) ? (list(x_g253, (i + 1))) : err_g249))))
}))))
}))
})());
var dbgp = ((function  () {
    return ((function dbgp (f) {
    return (((function  (xs, i) {
    var foo_g254;
    return ((((foo_g254 = (f(xs, i))), (prn(xs, i, foo_g254)), foo_g254)))
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
    return ((por((transform((function  (sub_g255) {
    var x_g257, xs_g258, g_g256_g259;
    return ((((g_g256_g259 = sub_g255), ((xs_g258 = (g_g256_g259[1])), ((x_g257 = (g_g256_g259[0])), (apply(str, x_g257, xs_g258)))))))
}), (chain(symbol_char, (many((por(symbol_char, digit)))))))), (one_of(("."))))))
})());
var between = ((function  () {
    return ((function between (a, b, c) {
    return (((transform((function  (sub_g260) {
    var __g262, x_g263, __g264, g_g261_g265;
    return ((((g_g261_g265 = sub_g260), ((__g264 = (g_g261_g265[2])), ((x_g263 = (g_g261_g265[1])), ((__g262 = (g_g261_g265[0])), x_g263))))))
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
    return ((transform((function  (sub_g266) {
    var __g268, x_g269, g_g267_g270;
    return ((((g_g267_g270 = sub_g266), ((x_g269 = (g_g267_g270[1])), ((__g268 = (g_g267_g270[0])), x_g269)))))
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
    return ((transform((function  (sub_g271) {
    var g_g274_g283, g_g276_g284, g_g275_g285, g_g273_g286, g_g278_g287, g_g280_g288, g_g279_g289, g_g277_g290, sign_g291, a_g292, b_g293, g_g272_g294;
    return ((((g_g272_g294 = sub_g271), ((b_g293 = (g_g272_g294[2])), ((a_g292 = (g_g272_g294[1])), ((sign_g291 = (g_g272_g294[0])), (sign_g291 = ((g_g273_g286 = sign_g291), (((g_g274_g283 = g_g273_g286), (((alist(g_g274_g283)) && ((g_g274_g283.length) === 0)) ? false : ((g_g274_g283 === 0) ? true : g_g274_g283))) ? g_g273_g286 : ((g_g275_g285 = ("+")), (((g_g276_g284 = g_g275_g285), (((alist(g_g276_g284)) && ((g_g276_g284.length) === 0)) ? false : ((g_g276_g284 === 0) ? true : g_g276_g284))) ? g_g275_g285 : null))))), (b_g293 = ((g_g277_g290 = b_g293), (((g_g278_g287 = g_g277_g290), (((alist(g_g278_g287)) && ((g_g278_g287.length) === 0)) ? false : ((g_g278_g287 === 0) ? true : g_g278_g287))) ? g_g277_g290 : ((g_g279_g289 = ("")), (((g_g280_g288 = g_g279_g289), (((alist(g_g280_g288)) && ((g_g280_g288.length) === 0)) ? false : ((g_g280_g288 === 0) ? true : g_g280_g288))) ? g_g279_g289 : null))))), (+(str(sign_g291, (apply(str, a_g292)), b_g293)))))))))
}), (chain((optional((one_of(("+-"))))), (many1(digit)), (optional((transform((function  (sub_g281) {
    var dot_g295, digits_g296, g_g282_g297;
    return ((((g_g282_g297 = sub_g281), ((digits_g296 = (g_g282_g297[1])), ((dot_g295 = (g_g282_g297[0])), (apply(str, dot_g295, digits_g296)))))))
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
    var g_g298_g299;
    return (((((g_g298_g299 = ((xs.length) === 1)), (((alist(g_g298_g299)) && ((g_g298_g299.length) === 0)) ? false : ((g_g298_g299 === 0) ? true : g_g298_g299))) ? (xs[0]) : (cat((list(".")), xs)))))
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
    return ((transform((function  (sub_g300) {
    var file_g302, __g303, g_g301_g304;
    return ((((g_g301_g304 = sub_g300), ((__g303 = (g_g301_g304[1])), ((file_g302 = (g_g301_g304[0])), file_g302)))))
}), (chain(expressions, eof)))))
})());
var gensym_counter = ((function  () {
    return (0)
})());
var gensym = ((function  () {
    return ((function gensym (prefix) {
    var g_g305_g306;
    return ((((g_g305_g306 = (str((prefix || ("")), ("_g"), gensym_counter))), (++gensym_counter), g_g305_g306)))
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
    var g_g307_g308;
    return (((((g_g307_g308 = ((!((astr(x)))) || ((x[0]) === ("\"")))), (((alist(g_g307_g308)) && ((g_g307_g308.length) === 0)) ? false : ((g_g307_g308 === 0) ? true : g_g307_g308))) ? x : ((wholereps[x]) || (join((map((function  (_) {
    return ((((reps[_]) || _)))
}), x)), ("")))))))
}))
})());
var letmac = ((function  () {
    return ((function letmac (name, val) {
    var g_g310_g318, g_g311_g319, g_g312_g320, g_g315_g321, g_g316_g322, i_g323, g_g317_g324, i_g325, g_g326, rest_g327, before_g328, rest_g329, after_g330, g_g314_g331, g_g313_g332, offset_g333, body_g334, g_g309_g335;
    return (((g_g309_g335 = arguments), ((body_g334 = (slice(g_g309_g335, 2, ((g_g309_g335.length) - 0)))), (((g_g310_g318 = (alist(name))), (((alist(g_g310_g318)) && ((g_g310_g318.length) === 0)) ? false : ((g_g310_g318 === 0) ? true : g_g310_g318))) ? ((offset_g333 = (((g_g311_g319 = (anumber((first(name))))), (((alist(g_g311_g319)) && ((g_g311_g319.length) === 0)) ? false : ((g_g311_g319 === 0) ? true : g_g311_g319))) ? ((g_g312_g320 = (first(name))), (name = (slice(name, 1))), g_g312_g320) : 0)), ((g_g313_g332 = (split_by((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("'")))))
}), name))), ((g_g314_g331 = (g_g313_g332[1])), ((after_g330 = (slice(g_g314_g331, 1, ((g_g314_g331.length) - 0)))), ((rest_g329 = (g_g314_g331[0])), ((before_g328 = (g_g313_g332[0])), ((rest_g327 = (((g_g315_g321 = rest_g329), (((alist(g_g315_g321)) && ((g_g315_g321.length) === 0)) ? false : ((g_g315_g321 === 0) ? true : g_g315_g321))) ? (second(rest_g329)) : false)), ((((g_g316_g322 = ((name.length) === 0)), (((alist(g_g316_g322)) && ((g_g316_g322.length) === 0)) ? false : ((g_g316_g322 === 0) ? true : g_g316_g322))) ? (cat((list("do")), body_g334)) : ((g_g326 = (gensym(("g")))), (((i_g323 = 0), (function () {while (((i_g323 < (before_g328.length)) && true)) {
    (body_g334 = (list((cat((list("let")), (list((before_g328[i_g323]))), (list((list("get", g_g326, (offset_g333 + i_g323))))), body_g334))))), (++i_g323);
}}())), (((g_g317_g324 = rest_g327), (((alist(g_g317_g324)) && ((g_g317_g324.length) === 0)) ? false : ((g_g317_g324 === 0) ? true : g_g317_g324))) ? ((body_g334 = (list((cat((list("let")), (list(rest_g327)), (list((list("slice", g_g326, (offset_g333 + (before_g328.length)), (list("-", (list(".", g_g326, "length")), (after_g330.length))))))), body_g334))))), ((i_g325 = 0), (function () {while (((i_g325 < (after_g330.length)) && true)) {
    (body_g334 = (list((cat((list("let")), (list((after_g330[i_g325]))), (list((list("get", g_g326, (list("-", (list(".", g_g326, "length")), ((after_g330.length) - i_g325))))))), body_g334))))), (++i_g325);
}}()))) : null), (cat((list("let")), (list(g_g326)), (list(val)), body_g334))))))))))))) : (cat((list("rawlet")), (list(name)), (list(val)), body_g334))))))
}))
})());
var fun = ((function  () {
    return ((function fun (name, args) {
    var g_g339_g340, sub_g341, _g338_g342, before_g343, restnafter_g344, g_g337_g345, body_g346, g_g336_g347;
    return (((g_g336_g347 = arguments), ((body_g346 = (slice(g_g336_g347, 2, ((g_g336_g347.length) - 0)))), ((g_g337_g345 = (split_by((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("'")))))
}), args))), ((restnafter_g344 = (g_g337_g345[1])), ((before_g343 = (g_g337_g345[0])), ((_g338_g342 = 0), (function () {while (((_g338_g342 < (before_g343.length)) && true)) {
    (((g_g339_g340 = (alist((before_g343[_g338_g342])))), (((alist(g_g339_g340)) && ((g_g339_g340.length) === 0)) ? false : ((g_g339_g340 === 0) ? true : g_g339_g340))) ? (((sub_g341 = (gensym(("sub")))), ((body_g346 = (list((cat((list("let")), (list((before_g343[_g338_g342]))), (list(sub_g341)), body_g346))))), ((before_g343[_g338_g342]) = sub_g341)))) : null), (++_g338_g342);
}}())), (list("rawfun", name, before_g343, (cat((list("let")), (list((cat((list((before_g343.length))), restnafter_g344)))), (list("arguments")), body_g346))))))))))
}))
})());
var asbool = ((function  () {
    return ((function asbool (x) {
    var g_g348;
    return ((((g_g348 = (gensym(("g")))), ((list("let", g_g348, x, (list("rawif", (list("and", (list("alist", g_g348)), (list("is", (list(".", g_g348, "length")), 0)))), "false", (list("rawif", (list("is", g_g348, 0)), "true", g_g348))))))))))
}))
})());
var ifmac = ((function  () {
    return ((function ifmac (cond, then) {
    var g_g350_g352, g_g351_g353, rest_g354, g_g349_g355;
    return (((g_g349_g355 = arguments), ((rest_g354 = (slice(g_g349_g355, 2, ((g_g349_g355.length) - 0)))), (list("rawif", (asbool(cond)), then, (((g_g350_g352 = ((rest_g354.length) === 0)), (((alist(g_g350_g352)) && ((g_g350_g352.length) === 0)) ? false : ((g_g350_g352 === 0) ? true : g_g350_g352))) ? null : (((g_g351_g353 = ((rest_g354.length) === 1)), (((alist(g_g351_g353)) && ((g_g351_g353.length) === 0)) ? false : ((g_g351_g353 === 0) ? true : g_g351_g353))) ? (rest_g354[0]) : (cat((list("if")), rest_g354)))))))))
}))
})());
var macs = ((function  () {
    return ((list2obj((list((list(("fun"), fun)), (list(("let"), letmac)), (list(("if"), ifmac)))))))
})());
var commaop = ((function  () {
    return ((function commaop () {
    var code_g357, g_g356_g358;
    return (((g_g356_g358 = arguments), ((code_g357 = (slice(g_g356_g358, 0, ((g_g356_g358.length) - 0)))), (join((map(rendex, code_g357)), (", "))))))
}))
})());
var delet = ((function  () {
    return ((function delet (code) {
    var g_g359_g364, g_g360_g365, sub_g366, vars_g367, name_g368, val_g369, body_g370, g_g362_g371, g_g361_g372, g_g363_g373, foo_g374;
    return (((((g_g359_g364 = (alist(code))), (((alist(g_g359_g364)) && ((g_g359_g364.length) === 0)) ? false : ((g_g359_g364 === 0) ? true : g_g359_g364))) ? (((g_g360_g365 = ((code[0]) === ("rawlet"))), (((alist(g_g360_g365)) && ((g_g360_g365.length) === 0)) ? false : ((g_g360_g365 === 0) ? true : g_g360_g365))) ? ((g_g361_g372 = (delet((slice(code, 1))))), ((g_g362_g371 = (g_g361_g372[1])), ((body_g370 = (slice(g_g362_g371, 2, ((g_g362_g371.length) - 0)))), ((val_g369 = (g_g362_g371[1])), ((name_g368 = (g_g362_g371[0])), ((vars_g367 = (g_g361_g372[0])), ((sub_g366 = (gensym(name_g368))), ((list((cat(vars_g367, (list(sub_g366)))), (cat((list("do")), (list((list("=", sub_g366, val_g369)))), (subsname(name_g368, sub_g366, body_g370)))))))))))))) : (((g_g363_g373 = ((code[0]) === ("rawfun"))), (((alist(g_g363_g373)) && ((g_g363_g373.length) === 0)) ? false : ((g_g363_g373 === 0) ? true : g_g363_g373))) ? (list([], code)) : ((foo_g374 = (map(delet, code))), (list((mapcat(first, foo_g374)), (map(second, foo_g374))))))) : (list([], code)))))
}))
})());
var rawif = ((function  () {
    return ((function rawif (cond, then, else_) {
    return (((str((rendex(cond)), (" ? "), (rendex(then)), (" : "), (rendex(else_))))))
}))
})());
var rawwhile = ((function  () {
    return ((function rawwhile (cond) {
    var body_g376, g_g375_g377;
    return (((g_g375_g377 = arguments), ((body_g376 = (slice(g_g375_g377, 1, ((g_g375_g377.length) - 0)))), (str(("function () {while ("), (rendex(cond)), (") {\n    "), (apply(commaop, body_g376)), (";\n}}()"))))))
}))
})());
var rawcatch = ((function  () {
    return ((function rawcatch (name, form) {
    var body_g379, g_g378_g380;
    return (((g_g378_g380 = arguments), ((body_g379 = (slice(g_g378_g380, 2, ((g_g378_g380.length) - 0)))), (str(("function () {try{\n    return "), (rendex(form)), ("} catch ("), (rendex(name)), (") {\n    return "), (apply(commaop, body_g379)), (";\n}}()"))))))
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
    var g_g383_g384, names_g385, body_g386, g_g382_g387, body_g388, g_g381_g389;
    return (((g_g381_g389 = arguments), ((body_g388 = (slice(g_g381_g389, 2, ((g_g381_g389.length) - 0)))), ((g_g382_g387 = (delet((cat((["do"]), body_g388))))), ((body_g386 = (g_g382_g387[1])), ((names_g385 = (g_g382_g387[0])), (str(("function "), (munge(name)), (" ("), (apply(commaop, args)), (") {\n"), (((g_g383_g384 = ((names_g385.length) === 0)), (((alist(g_g383_g384)) && ((g_g383_g384.length) === 0)) ? false : ((g_g383_g384 === 0) ? true : g_g383_g384))) ? ("") : (str(("    var "), (apply(commaop, names_g385)), (";\n")))), ("    return "), (rendex(body_g386)), ("\n}")))))))))
}))
})());
var exprenderers = ((function  () {
    return ((list2obj((list((list(("get"), rawget)), (list(("rawfun"), rawfun)), (list(("'"), quote)), (list(("++"), pp)), (list(("while"), rawwhile)), (list(("rawif"), rawif)), (list(("do"), commaop)), (list(("asnumber"), r_asnumber)), (list(("catch"), rawcatch)))))))
})());
((function  () {
    return ((map((function  (sub_g390) {
    var name_g394, op_g395, id_g396, g_g391_g397;
    return ((((g_g391_g397 = sub_g390), ((id_g396 = (g_g391_g397[2])), ((op_g395 = (g_g391_g397[1])), ((name_g394 = (g_g391_g397[0])), ((exprenderers[name_g394]) = (function  () {
    var g_g393_g398, xs_g399, g_g392_g400;
    return (((g_g392_g400 = arguments), ((xs_g399 = (slice(g_g392_g400, 0, ((g_g392_g400.length) - 0)))), (((g_g393_g398 = ((xs_g399.length) === 0)), (((alist(g_g393_g398)) && ((g_g393_g398.length) === 0)) ? false : ((g_g393_g398 === 0) ? true : g_g393_g398))) ? id_g396 : (join((map(rendex, xs_g399)), op_g395))))))
}))))))))
}), ([[".",".","null"],["+"," + ",0],["%"," % ",0],["-"," - ",0],["/"," / ",1],["and"," && ","true"],["or"," || ","false"],["raw<"," < ","true"],["raw<="," <= ","true"],["="," = ","null"],["rawis"," === ","true"]]))))
})());
((function  () {
    return ((map((function  (sub_g401) {
    var name_g406, op_g407, g_g402_g408;
    return ((((g_g402_g408 = sub_g401), ((op_g407 = (g_g402_g408[1])), ((name_g406 = (g_g402_g408[0])), ((macs[name_g406]) = (function  () {
    var g_g404_g409, g_g405_g410, g2_g411, g1_g412, xs_g413, g_g403_g414;
    return (((g_g403_g414 = arguments), ((xs_g413 = (slice(g_g403_g414, 0, ((g_g403_g414.length) - 0)))), (((g_g404_g409 = ((xs_g413.length) < 2)), (((alist(g_g404_g409)) && ((g_g404_g409.length) === 0)) ? false : ((g_g404_g409 === 0) ? true : g_g404_g409))) ? true : (((g_g405_g410 = ((xs_g413.length) === 2)), (((alist(g_g405_g410)) && ((g_g405_g410.length) === 0)) ? false : ((g_g405_g410 === 0) ? true : g_g405_g410))) ? (list(op_g407, (xs_g413[0]), (xs_g413[1]))) : ((g1_g412 = (gensym(("g1")))), ((g2_g411 = (gensym(("g2")))), ((list("with", (list(g1_g412, (xs_g413[0]), g2_g411, (xs_g413[1]))), (list("and", (list(op_g407, g1_g412, g2_g411)), (cat((list(name_g406)), (list(g2_g411)), (slice(xs_g413, 2))))))))))))))))
})))))))
}), ([["<","raw<"],["<=","raw<="],["is","rawis"]]))))
})());
var rendex = ((function  () {
    return ((function rendex (code) {
    var g_g415_g420, g_g416_g421, g_g417_g422, it_g423, g_g418_g424, g_g419_g425;
    return (((((g_g415_g420 = (alist(code))), (((alist(g_g415_g420)) && ((g_g415_g420.length) === 0)) ? false : ((g_g415_g420 === 0) ? true : g_g415_g420))) ? (((g_g416_g421 = ((code.length) === 0)), (((alist(g_g416_g421)) && ((g_g416_g421.length) === 0)) ? false : ((g_g416_g421 === 0) ? true : g_g416_g421))) ? ("[]") : (str(("("), ((it_g423 = (exprenderers[(code[0])])), (((g_g417_g422 = it_g423), (((alist(g_g417_g422)) && ((g_g417_g422.length) === 0)) ? false : ((g_g417_g422 === 0) ? true : g_g417_g422))) ? (apply(it_g423, (slice(code, 1)))) : (funcall((code[0]), (slice(code, 1)))))), (")")))) : (((g_g418_g424 = (code === null)), (((alist(g_g418_g424)) && ((g_g418_g424.length) === 0)) ? false : ((g_g418_g424 === 0) ? true : g_g418_g424))) ? ("null") : (((g_g419_g425 = (code === undefined)), (((alist(g_g419_g425)) && ((g_g419_g425.length) === 0)) ? false : ((g_g419_g425 === 0) ? true : g_g419_g425))) ? ("undefined") : (munge(code)))))))
}))
})());
var macex = ((function  () {
    return ((function macex (macs, code) {
    var g_g426_g428, g_g427_g429, it_g430;
    return (((((g_g426_g428 = ((alist(code)) && (code[0]) && (!(((code[0]) === ("'")))))), (((alist(g_g426_g428)) && ((g_g426_g428.length) === 0)) ? false : ((g_g426_g428 === 0) ? true : g_g426_g428))) ? (((code[0]) = (macex(macs, (code[0])))), ((it_g430 = (macs[(code[0])])), (((g_g427_g429 = it_g430), (((alist(g_g427_g429)) && ((g_g427_g429.length) === 0)) ? false : ((g_g427_g429 === 0) ? true : g_g427_g429))) ? (macex(macs, (apply(it_g430, (slice(code, 1)))))) : (map((function  (_) {
    return (((macex(macs, _))))
}), code))))) : code)))
}))
})());
var env = ((function  () {
    return ((list((list(("gensym"), gensym)))))
})());
var eval_with = ((function  () {
    return ((function eval_with (code, env) {
    return (((apply((Function((map(first, env)), code)), (map(second, env))))))
}))
})());
var eval_form = ((function  () {
    return ((function eval_form (verb, arg, code) {
    var g_g432_g435, g_g433_g436, g_g434_g437, g_g431_g438;
    return (((((g_g431_g438 = verb), (((g_g432_g435 = (g_g431_g438 === ("assign"))), (((alist(g_g432_g435)) && ((g_g432_g435.length) === 0)) ? false : ((g_g432_g435 === 0) ? true : g_g432_g435))) ? (function  (_) {
    return ((((env.push)((list((munge(arg)), _))))))
}) : (((g_g433_g436 = (g_g431_g438 === ("assign-mac"))), (((alist(g_g433_g436)) && ((g_g433_g436.length) === 0)) ? false : ((g_g433_g436 === 0) ? true : g_g433_g436))) ? (function  (_) {
    return ((((macs[arg]) = _)))
}) : (((g_g434_g437 = (g_g431_g438 === ("run"))), (((alist(g_g434_g437)) && ((g_g434_g437.length) === 0)) ? false : ((g_g434_g437 === 0) ? true : g_g434_g437))) ? idfn : null))))((eval_with((str(("return "), code)), env))))))
}))
})());
var only_compile_form = ((function  () {
    return ((function only_compile_form (verb, arg, code) {
    var g_g440_g443, g_g441_g444, g_g442_g445, g_g439_g446;
    return (((str((((g_g439_g446 = verb), (((g_g440_g443 = (g_g439_g446 === ("assign"))), (((alist(g_g440_g443)) && ((g_g440_g443.length) === 0)) ? false : ((g_g440_g443 === 0) ? true : g_g440_g443))) ? (function  (_) {
    return (((str(("var "), (munge(arg)), (" = "), _))))
}) : (((g_g441_g444 = (g_g439_g446 === ("assign-mac"))), (((alist(g_g441_g444)) && ((g_g441_g444.length) === 0)) ? false : ((g_g441_g444 === 0) ? true : g_g441_g444))) ? (JSON.stringify) : (((g_g442_g445 = (g_g439_g446 === ("run"))), (((alist(g_g442_g445)) && ((g_g442_g445.length) === 0)) ? false : ((g_g442_g445 === 0) ? true : g_g442_g445))) ? idfn : null))))(code)), (";\n")))))
}))
})());
var compile_helper = ((function  () {
    return ((function compile_helper (code) {
    var g_g448_g449, jscode_g450, verb_g451, arg_g452, bar_g453, g_g447_g454, foo_g455;
    return ((((foo_g455 = (macex(macs, code))), ((g_g447_g454 = (((g_g448_g449 = (some((foo_g455[0]), (["assign","assign-mac"])))), (((alist(g_g448_g449)) && ((g_g448_g449.length) === 0)) ? false : ((g_g448_g449 === 0) ? true : g_g448_g449))) ? foo_g455 : (list(("run"), null, foo_g455)))), ((bar_g453 = (g_g447_g454[2])), ((arg_g452 = (g_g447_g454[1])), ((verb_g451 = (g_g447_g454[0])), ((jscode_g450 = (rendex((list((list("rawfun", "", (list()), bar_g453))))))), ((list(verb_g451, arg_g452, jscode_g450)))))))))))
}))
})());
var compile_form = ((function  () {
    return ((function compile_form (code) {
    var g_g457_g458, g_g456_g459, foo_g460;
    return ((((foo_g460 = (compile_helper(code))), (((g_g456_g459 = (((g_g457_g458 = ((foo_g460[0]) === ("run"))), (((alist(g_g457_g458)) && ((g_g457_g458.length) === 0)) ? false : ((g_g457_g458 === 0) ? true : g_g457_g458))) ? false : true)), (((alist(g_g456_g459)) && ((g_g456_g459.length) === 0)) ? false : ((g_g456_g459 === 0) ? true : g_g456_g459))) ? (apply(eval_form, foo_g460)) : null), (apply(only_compile_form, foo_g460)))))
}))
})());
var compile = ((function  () {
    return ((function compile (code) {
    return (((join((cat((list("\"use strict\";\n")), (map(compile_form, code)))), ("")))))
}))
})());
var cmd_handler = ((function  () {
    return ((function cmd_handler (xs) {
    return (((join((first(((transform((function  (forms) {
    return (((map((function  (_) {
    return (((function () {try{
    return (sfy((apply(eval_form, (compile_helper(_))))))} catch (e) {
    return (str(e, ("\n"), (e.stack)));
}}())))
}), forms))))
}), pfile))(xs, 0)))), (" ")))))
}))
})());
((function  () {
    return ((((jQuery()).ready)((function  (_) {
    var console_g461;
    return ((((console_g461 = (jQuery(("#console")))), ((console_g461.console)((list2obj((list((list(("autofocus"), true)), (list(("commandHandle"), cmd_handler)), (list(("promptLabel"), ("¿ "))))))))), (compile(jasper_code)))))
}))))
})());
