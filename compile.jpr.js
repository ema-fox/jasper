"use strict";
var slice = ((function  () {
    return ((function slice (xs, start, end) {
    return ((((([].slice).call)(xs, start, end))))
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
    return ((((([].concat).apply)([], arguments))))
}))
})());
var join = ((function  () {
    return ((function join (xs, x) {
    return ((((([].join).call)(xs, x))))
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
    return ((((([].map).call)(xs, (function  (_) {
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
"((function  () {\n    return ((function each_from_while (starti, iv, xs, cond) {\n    var g_g146_g147, gxs_g148, v_g149, i_g150, body_g151, g_g145_g152;\n    return (((g_g145_g152 = arguments), ((body_g151 = (slice(g_g145_g152, 4, ((g_g145_g152.length) - 0)))), ((i_g150 = null), ((v_g149 = null), ((gxs_g148 = (gensym(xs))), ((((g_g146_g147 = (alist(iv))), (((alist(g_g146_g147)) && ((g_g146_g147.length) === 0)) ? false : ((g_g146_g147 === 0) ? true : g_g146_g147))) ? ((i_g150 = (first(iv))), (v_g149 = (second(iv)))) : ((i_g150 = (gensym(i_g150))), (v_g149 = iv))), (list(\"with\", (list(i_g150, starti, gxs_g148, xs)), (subsname(v_g149, (list(\"get\", gxs_g148, i_g150)), (cat((list(\"while\")), (list((list(\"and\", (list(\"<\", i_g150, (list(\".\", gxs_g148, \"length\")))), cond)))), body_g151, (list((list(\"++\", i_g150)))))))), i_g150)))))))))\n}))\n})())";
"((function  () {\n    return ((function each_while (iv, xs, cond) {\n    var body_g154, g_g153_g155;\n    return (((g_g153_g155 = arguments), ((body_g154 = (slice(g_g153_g155, 3, ((g_g153_g155.length) - 0)))), (cat((list(\"each-from-while\")), (list(0)), (list(iv)), (list(xs)), (list(cond)), body_g154)))))\n}))\n})())";
"((function  () {\n    return ((function each (iv, xs) {\n    var body_g157, g_g156_g158;\n    return (((g_g156_g158 = arguments), ((body_g157 = (slice(g_g156_g158, 2, ((g_g156_g158.length) - 0)))), (cat((list(\"each-while\")), (list(iv)), (list(xs)), (list(\"true\")), body_g157)))))\n}))\n})())";
var testify = ((function  () {
    return ((function testify (test) {
    var g_g159_g160;
    return (((((g_g159_g160 = (afunction(test))), (((alist(g_g159_g160)) && ((g_g159_g160.length) === 0)) ? false : ((g_g159_g160 === 0) ? true : g_g159_g160))) ? test : (function  (_) {
    return (((test === _)))
}))))
}))
})());
"((function  () {\n    return ((function no (x) {\n    return (((list(\"if\", x, \"false\", \"true\"))))\n}))\n})())";
var index_by = ((function  () {
    return ((function index_by (test, xs) {
    var g_g162_g164, g_g163_g165, xs_g161_g166, i_g167, index_g168, f_g169;
    return ((((f_g169 = (testify(test))), ((index_g168 = false), (((i_g167 = 0), ((xs_g161_g166 = xs), ((function () {while (((i_g167 < (xs_g161_g166.length)) && (((g_g162_g164 = index_g168), (((alist(g_g162_g164)) && ((g_g162_g164.length) === 0)) ? false : ((g_g162_g164 === 0) ? true : g_g162_g164))) ? false : true))) {
    (((g_g163_g165 = (f_g169((xs_g161_g166[i_g167])))), (((alist(g_g163_g165)) && ((g_g163_g165.length) === 0)) ? false : ((g_g163_g165 === 0) ? true : g_g163_g165))) ? (index_g168 = i_g167) : null), (++i_g167);
}}()), i_g167))), index_g168)))))
}))
})());
var find = ((function  () {
    return ((function find (test, xs) {
    var g_g170_g171, it_g172;
    return ((((it_g172 = (index_by(test, xs))), (((g_g170_g171 = it_g172), (((alist(g_g170_g171)) && ((g_g170_g171.length) === 0)) ? false : ((g_g170_g171 === 0) ? true : g_g170_g171))) ? (xs[it_g172]) : undefined))))
}))
})());
var split_by = ((function  () {
    return ((function split_by (f, xs) {
    var g_g173_g174, i_g175;
    return ((((i_g175 = (index_by(f, xs))), (((g_g173_g174 = (i_g175 === false)), (((alist(g_g173_g174)) && ((g_g173_g174.length) === 0)) ? false : ((g_g173_g174 === 0) ? true : g_g173_g174))) ? (list(xs, [])) : (list((slice(xs, 0, i_g175)), (slice(xs, i_g175))))))))
}))
})());
var some = ((function  () {
    return ((function some (test, xs) {
    var g_g178_g180, g_g179_g181, it_g182, xs_g176_g183, _g177_g184, res_g185, f_g186;
    return ((((f_g186 = (testify(test))), ((res_g185 = false), (((_g177_g184 = 0), ((xs_g176_g183 = xs), ((function () {while (((_g177_g184 < (xs_g176_g183.length)) && (((g_g178_g180 = res_g185), (((alist(g_g178_g180)) && ((g_g178_g180.length) === 0)) ? false : ((g_g178_g180 === 0) ? true : g_g178_g180))) ? false : true))) {
    ((it_g182 = (f_g186((xs_g176_g183[_g177_g184])))), (((g_g179_g181 = it_g182), (((alist(g_g179_g181)) && ((g_g179_g181.length) === 0)) ? false : ((g_g179_g181 === 0) ? true : g_g179_g181))) ? (res_g185 = it_g182) : undefined)), (++_g177_g184);
}}()), _g177_g184))), res_g185)))))
}))
})());
var all = ((function  () {
    return ((function all (test, xs) {
    var f_g187;
    return ((((f_g187 = (testify(test))), (!((some((function  (_) {
    return (((!((f_g187(_))))))
}), xs)))))))
}))
})());
var iso = ((function  () {
    return ((function iso (x, y) {
    return ((((x === y) || ((alist(x)) && (alist(y)) && ((x.length) === (y.length)) && (all(true, (map(iso, x, y))))))))
}))
})());
"((function  () {\n    return ((function callback (to, from) {\n    var body_g189, g_g188_g190;\n    return (((g_g188_g190 = arguments), ((body_g189 = (slice(g_g188_g190, 2, ((g_g188_g190.length) - 0)))), (cat(to, (list((cat((list(\"fn\")), (list(from)), body_g189)))))))))\n}))\n})())";
"((function  () {\n    return ((function defp (name, args) {\n    var body_g192, g_g191_g193;\n    return (((g_g191_g193 = arguments), ((body_g192 = (slice(g_g191_g193, 2, ((g_g191_g193.length) - 0)))), (list(\"def\", name, args, (cat((list(\"fn\")), (list((list(\"xs\", \"i\")))), body_g192)))))))\n}))\n})())";
var transform = ((function  () {
    return ((function transform (f, p) {
    return (((function  (xs, i) {
    var g_g195_g196, err_g197, res_g198, i_g199, g_g194_g200;
    return ((((g_g194_g200 = (p(xs, i))), ((i_g199 = (g_g194_g200[2])), ((res_g198 = (g_g194_g200[1])), ((err_g197 = (g_g194_g200[0])), (((g_g195_g196 = err_g197), (((alist(g_g195_g196)) && ((g_g195_g196.length) === 0)) ? false : ((g_g195_g196 === 0) ? true : g_g195_g196))) ? (list(err_g197)) : (list(false, (f(res_g198)), i_g199)))))))))
})))
}))
})());
"((function  () {\n    return ((function transp (arg, body, p) {\n    return (((list(\"transform\", (list(\"fn\", (list(arg)), body)), p))))\n}))\n})())";
var dbgp = ((function  () {
    return ((function dbgp (f) {
    return (((function  (xs, i) {
    var foo_g201;
    return ((((foo_g201 = (f(xs, i))), (prn(i, foo_g201)), foo_g201)))
})))
}))
})());
var adigit = ((function  () {
    return ((function adigit (x) {
    var g2_g203_g204, g1_g202_g205;
    return ((((g1_g202_g205 = ("0")), ((g2_g203_g204 = x), (((g1_g202_g205 <= g2_g203_g204) && (g2_g203_g204 <= ("9"))))))))
}))
})());
var asymbol_char = ((function  () {
    return ((function asymbol_char (x) {
    var g2_g207_g210, g1_g206_g211, g2_g209_g212, g1_g208_g213;
    return (((((g1_g206_g211 = ("a")), ((g2_g207_g210 = x), (((g1_g206_g211 <= g2_g207_g210) && (g2_g207_g210 <= ("z")))))) || ((g1_g208_g213 = ("A")), ((g2_g209_g212 = x), (((g1_g208_g213 <= g2_g209_g212) && (g2_g209_g212 <= ("Z")))))) || (adigit(x)) || (some(x, ("!/%-$<>_+*="))))))
}))
})());
var read_number = ((function  () {
    return ((function read_number (xs, i) {
    var g_g214_g220, xs_g215_g221, _g216_g222, g_g217_g223, xs_g218_g224, _g219_g225, end_g226;
    return ((((end_g226 = i), (((g_g214_g220 = (some((xs[end_g226]), ("+-")))), (((alist(g_g214_g220)) && ((g_g214_g220.length) === 0)) ? false : ((g_g214_g220 === 0) ? true : g_g214_g220))) ? (++end_g226) : null), (end_g226 = ((_g216_g222 = end_g226), ((xs_g215_g221 = xs), ((function () {while (((_g216_g222 < (xs_g215_g221.length)) && (adigit((xs_g215_g221[_g216_g222]))))) {
    (++_g216_g222);
}}()), _g216_g222)))), (((g_g217_g223 = ((xs[end_g226]) === ("."))), (((alist(g_g217_g223)) && ((g_g217_g223.length) === 0)) ? false : ((g_g217_g223 === 0) ? true : g_g217_g223))) ? ((++end_g226), (end_g226 = ((_g219_g225 = end_g226), ((xs_g218_g224 = xs), ((function () {while (((_g219_g225 < (xs_g218_g224.length)) && (adigit((xs_g218_g224[_g219_g225]))))) {
    (++_g219_g225);
}}()), _g219_g225))))) : null), (list(false, (+((xs.substring)(i, end_g226))), end_g226)))))
}))
})());
var read_symbol = ((function  () {
    return ((function read_symbol (xs, i) {
    var xs_g227_g229, _g228_g230, end_g231;
    return ((((end_g231 = (i + 1)), (end_g231 = ((_g228_g230 = end_g231), ((xs_g227_g229 = xs), ((function () {while (((_g228_g230 < (xs_g227_g229.length)) && (asymbol_char((xs_g227_g229[_g228_g230]))))) {
    (++_g228_g230);
}}()), _g228_g230)))), (list(false, ((xs.substring)(i, end_g231)), end_g231)))))
}))
})());
var symbol$snumber = ((function  () {
    return ((function symbol$snumber (xs, i) {
    var g_g232_g233;
    return ((((((g_g232_g233 = (adigit((xs[(i + 1)])))), (((alist(g_g232_g233)) && ((g_g232_g233.length) === 0)) ? false : ((g_g232_g233 === 0) ? true : g_g232_g233))) ? read_number : read_symbol)(xs, i))))
}))
})());
var make_error = ((function  () {
    return ((function make_error (xs, i, msg) {
    var foo_g234;
    return ((((foo_g234 = ((((xs.substring)(0, i)).split)(("\n")))), (list((cat(msg, (list((xs[i]))), (list("at")), (list("line")), (list((foo_g234.length))), (list("collumn")), (list(((foo_g234[((foo_g234.length) - 1)]).length))))))))))
}))
})());
var read_escaped = ((function  () {
    return ((function read_escaped (xs, i) {
    var g_g236_g240, g_g237_g241, g_g238_g242, g_g235_g243, g_g239_g244, it_g245, end_g246;
    return ((((end_g246 = (i + 1)), ((it_g245 = ((g_g235_g243 = (xs[end_g246])), (((g_g236_g240 = (g_g235_g243 === ("n"))), (((alist(g_g236_g240)) && ((g_g236_g240.length) === 0)) ? false : ((g_g236_g240 === 0) ? true : g_g236_g240))) ? ("\n") : (((g_g237_g241 = (g_g235_g243 === ("t"))), (((alist(g_g237_g241)) && ((g_g237_g241.length) === 0)) ? false : ((g_g237_g241 === 0) ? true : g_g237_g241))) ? ("\t") : (((g_g238_g242 = (some((xs[end_g246]), ("\\\"|")))), (((alist(g_g238_g242)) && ((g_g238_g242.length) === 0)) ? false : ((g_g238_g242 === 0) ? true : g_g238_g242))) ? (xs[end_g246]) : null))))), (((g_g239_g244 = it_g245), (((alist(g_g239_g244)) && ((g_g239_g244.length) === 0)) ? false : ((g_g239_g244 === 0) ? true : g_g239_g244))) ? (list(false, it_g245, (end_g246 + 1))) : (make_error(xs, end_g246, (["no","escape","char"]))))))))
}))
})());
var many_delimited = ((function  () {
    return ((function many_delimited (f, delimeter) {
    return (((function  (xs, i) {
    var g_g247_g251, g_g248_g252, g_g250_g253, newerr_g254, bar_g255, newi_g256, g_g249_g257, err_g258, res_g259;
    return (((++i), ((res_g259 = []), ((err_g258 = false), ((function () {while ((((g_g247_g251 = (((xs[i]) === delimeter) || err_g258)), (((alist(g_g247_g251)) && ((g_g247_g251.length) === 0)) ? false : ((g_g247_g251 === 0) ? true : g_g247_g251))) ? false : true)) {
    (((g_g248_g252 = ((xs[i]) === undefined)), (((alist(g_g248_g252)) && ((g_g248_g252.length) === 0)) ? false : ((g_g248_g252 === 0) ? true : g_g248_g252))) ? (err_g258 = ([["unexpected","end","of","input"]])) : ((g_g249_g257 = (f(xs, i))), ((newi_g256 = (g_g249_g257[2])), ((bar_g255 = (g_g249_g257[1])), ((newerr_g254 = (g_g249_g257[0])), (((g_g250_g253 = newerr_g254), (((alist(g_g250_g253)) && ((g_g250_g253.length) === 0)) ? false : ((g_g250_g253 === 0) ? true : g_g250_g253))) ? (err_g258 = (list(newerr_g254))) : (((res_g259.push)(bar_g255)), (i = newi_g256))))))));
}}()), (err_g258 || (list(false, res_g259, (i + 1)))))))))
})))
}))
})());
var seps = ((function  () {
    return (("\n\t "))
})());
var pthunk = ((function  () {
    return ((function pthunk (f) {
    return (((function  (xs, i) {
    return ((((f())(xs, i))))
})))
}))
})());
var read_list = ((function  () {
    return ((many_delimited((pthunk((function  () {
    return ((dotted_expression))
}))), (")"))))
})());
var read_bracket_list = ((function  () {
    return ((transform((function  (xs) {
    return (((cat((list("[")), xs))))
}), (many_delimited((pthunk((function  () {
    return ((dotted_expression))
}))), ("]"))))))
})());
var string_part = ((function  () {
    return ((function string_part (delimeter) {
    return (((function  (xs, i) {
    var g_g260_g264, g_g263_g265, xs_g261_g266, _g262_g267, end_g268;
    return (((((g_g260_g264 = ((xs[i]) === ("\\"))), (((alist(g_g260_g264)) && ((g_g260_g264.length) === 0)) ? false : ((g_g260_g264 === 0) ? true : g_g260_g264))) ? (read_escaped(xs, i)) : ((end_g268 = ((_g262_g267 = i), ((xs_g261_g266 = xs), ((function () {while (((_g262_g267 < (xs_g261_g266.length)) && (((g_g263_g265 = (some((xs_g261_g266[_g262_g267]), (list(("\\"), delimeter))))), (((alist(g_g263_g265)) && ((g_g263_g265.length) === 0)) ? false : ((g_g263_g265 === 0) ? true : g_g263_g265))) ? false : true))) {
    (++_g262_g267);
}}()), _g262_g267)))), (list(false, ((xs.substring)(i, end_g268)), end_g268))))))
})))
}))
})());
var read_piped_symbol = ((function  () {
    return ((transform((function  (xs) {
    return (((apply(str, xs))))
}), (many_delimited((string_part(("|"))), ("|"))))))
})());
var read_string = ((function  () {
    return ((transform((function  (xs) {
    return (((list(("'"), (apply(str, xs))))))
}), (many_delimited((string_part(("\""))), ("\""))))))
})());
var read_modifer = ((function  () {
    return ((function read_modifer (xs, i) {
    var g_g269_g273, g_g270_g274, g_g272_g275, err_g276, res_g277, i_g278, g_g271_g279, modifer_g280, end_g281;
    return ((((end_g281 = (i + (((g_g269_g273 = ((xs[(i + 1)]) === ("@"))), (((alist(g_g269_g273)) && ((g_g269_g273.length) === 0)) ? false : ((g_g269_g273 === 0) ? true : g_g269_g273))) ? 2 : 1))), ((modifer_g280 = ((xs.substring)(i, end_g281))), ((((g_g270_g274 = (some((xs[end_g281]), (str(seps, (")]")))))), (((alist(g_g270_g274)) && ((g_g270_g274.length) === 0)) ? false : ((g_g270_g274 === 0) ? true : g_g270_g274))) ? (list(false, modifer_g280, end_g281)) : ((g_g271_g279 = (dotted_expression(xs, end_g281))), ((i_g278 = (g_g271_g279[2])), ((res_g277 = (g_g271_g279[1])), ((err_g276 = (g_g271_g279[0])), (((g_g272_g275 = err_g276), (((alist(g_g272_g275)) && ((g_g272_g275.length) === 0)) ? false : ((g_g272_g275 === 0) ? true : g_g272_g275))) ? (list(err_g276)) : (list(false, (list(modifer_g280, res_g277)), i_g278)))))))))))))
}))
})());
var expression = ((function  () {
    return ((function expression (xs, i) {
    var g_g283_g291, g_g284_g292, g_g285_g293, g_g286_g294, g_g287_g295, g_g288_g296, g_g289_g297, g_g290_g298, g_g282_g299, c_g300;
    return ((((c_g300 = (xs[i])), (((g_g282_g299 = c_g300), (((g_g283_g291 = (g_g282_g299 === ("\""))), (((alist(g_g283_g291)) && ((g_g283_g291.length) === 0)) ? false : ((g_g283_g291 === 0) ? true : g_g283_g291))) ? read_string : (((g_g284_g292 = (g_g282_g299 === ("|"))), (((alist(g_g284_g292)) && ((g_g284_g292.length) === 0)) ? false : ((g_g284_g292 === 0) ? true : g_g284_g292))) ? read_piped_symbol : (((g_g285_g293 = (g_g282_g299 === ("("))), (((alist(g_g285_g293)) && ((g_g285_g293.length) === 0)) ? false : ((g_g285_g293 === 0) ? true : g_g285_g293))) ? read_list : (((g_g286_g294 = (g_g282_g299 === ("["))), (((alist(g_g286_g294)) && ((g_g286_g294.length) === 0)) ? false : ((g_g286_g294 === 0) ? true : g_g286_g294))) ? read_bracket_list : (((g_g287_g295 = (adigit(c_g300))), (((alist(g_g287_g295)) && ((g_g287_g295.length) === 0)) ? false : ((g_g287_g295 === 0) ? true : g_g287_g295))) ? read_number : (((g_g288_g296 = (some(c_g300, ("+-")))), (((alist(g_g288_g296)) && ((g_g288_g296.length) === 0)) ? false : ((g_g288_g296 === 0) ? true : g_g288_g296))) ? symbol$snumber : (((g_g289_g297 = ((asymbol_char(c_g300)) || ((".") === c_g300))), (((alist(g_g289_g297)) && ((g_g289_g297.length) === 0)) ? false : ((g_g289_g297 === 0) ? true : g_g289_g297))) ? read_symbol : (((g_g290_g298 = (some(c_g300, ("`',")))), (((alist(g_g290_g298)) && ((g_g290_g298.length) === 0)) ? false : ((g_g290_g298 === 0) ? true : g_g290_g298))) ? read_modifer : (function  (xs, i) {
    return (((make_error(xs, i, (["unexpected","char"])))))
}))))))))))(xs, i)))))
}))
})());
var sep = ((function  () {
    return ((function sep (xs, i) {
    var xs_g301_g303, _g302_g304;
    return ((((_g302_g304 = i), ((xs_g301_g303 = xs), ((function () {while (((_g302_g304 < (xs_g301_g303.length)) && (some((xs_g301_g303[_g302_g304]), seps)))) {
    (++_g302_g304);
}}()), _g302_g304)))))
}))
})());
var second_expression = ((function  () {
    return ((function second_expression (xs, i, front) {
    var g_g306_g311, g_g308_g312, g_g309_g313, g_g307_g314, g_g310_g315, bla_g316, err_g317, back_g318, end_g319, g_g305_g320;
    return ((((g_g305_g320 = (expression(xs, (i + 1)))), ((end_g319 = (g_g305_g320[2])), ((back_g318 = (g_g305_g320[1])), ((err_g317 = (g_g305_g320[0])), (((g_g306_g311 = err_g317), (((alist(g_g306_g311)) && ((g_g306_g311.length) === 0)) ? false : ((g_g306_g311 === 0) ? true : g_g306_g311))) ? (list(err_g317)) : ((bla_g316 = (list(((g_g307_g314 = (xs[i])), (((g_g308_g312 = (g_g307_g314 === ("."))), (((alist(g_g308_g312)) && ((g_g308_g312.length) === 0)) ? false : ((g_g308_g312 === 0) ? true : g_g308_g312))) ? (".") : (((g_g309_g313 = (g_g307_g314 === (":"))), (((alist(g_g309_g313)) && ((g_g309_g313.length) === 0)) ? false : ((g_g309_g313 === 0) ? true : g_g309_g313))) ? ("get") : null))), front, back_g318))), (((g_g310_g315 = (some((xs[end_g319]), (".:")))), (((alist(g_g310_g315)) && ((g_g310_g315.length) === 0)) ? false : ((g_g310_g315 === 0) ? true : g_g310_g315))) ? (second_expression(xs, end_g319, bla_g316)) : (list(false, bla_g316, (sep(xs, end_g319)))))))))))))
}))
})());
var dotted_expression = ((function  () {
    return ((function dotted_expression (xs, i) {
    var g_g322_g324, g_g323_g325, err_g326, front_g327, i_g328, g_g321_g329;
    return (((i = (sep(xs, i))), ((g_g321_g329 = (expression(xs, i))), ((i_g328 = (g_g321_g329[2])), ((front_g327 = (g_g321_g329[1])), ((err_g326 = (g_g321_g329[0])), (((g_g322_g324 = err_g326), (((alist(g_g322_g324)) && ((g_g322_g324.length) === 0)) ? false : ((g_g322_g324 === 0) ? true : g_g322_g324))) ? (list(err_g326)) : (((g_g323_g325 = (some((xs[i_g328]), (".:")))), (((alist(g_g323_g325)) && ((g_g323_g325.length) === 0)) ? false : ((g_g323_g325 === 0) ? true : g_g323_g325))) ? (second_expression(xs, i_g328, front_g327)) : (list(false, front_g327, (sep(xs, i_g328))))))))))))
}))
})());
var read_file = ((function  () {
    return ((function  (xs, i) {
    return ((((many_delimited(dotted_expression, undefined))(xs, (i - 1)))))
}))
})());
var pfile = ((function  () {
    return ((function pfile (xs, i) {
    var err_g331, res_g332, i_g333, g_g330_g334;
    return ((((g_g330_g334 = (read_file(xs, i))), ((i_g333 = (g_g330_g334[2])), ((res_g332 = (g_g330_g334[1])), ((err_g331 = (g_g330_g334[0])), (err_g331 || (list(res_g332, i_g333)))))))))
}))
})());
var gensym_counter = ((function  () {
    return (0)
})());
var gensym = ((function  () {
    return ((function gensym (prefix) {
    var g_g335_g336;
    return ((((g_g335_g336 = (str((prefix || ("")), ("_g"), gensym_counter))), (++gensym_counter), g_g335_g336)))
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
    var g_g337_g338;
    return (((((g_g337_g338 = ((!((astr(x)))) || ((x[0]) === ("\"")))), (((alist(g_g337_g338)) && ((g_g337_g338.length) === 0)) ? false : ((g_g337_g338 === 0) ? true : g_g337_g338))) ? x : ((wholereps[x]) || (join((map((function  (_) {
    return ((((reps[_]) || _)))
}), x)), ("")))))))
}))
})());
var letmac = ((function  () {
    return ((function letmac (name, val) {
    var g_g340_g350, g_g341_g351, g_g342_g352, g_g345_g353, g_g346_g354, before_g347_g355, i_g356, g_g348_g357, after_g349_g358, i_g359, g_g360, rest_g361, before_g362, rest_g363, after_g364, g_g344_g365, g_g343_g366, offset_g367, body_g368, g_g339_g369;
    return (((g_g339_g369 = arguments), ((body_g368 = (slice(g_g339_g369, 2, ((g_g339_g369.length) - 0)))), (((g_g340_g350 = (alist(name))), (((alist(g_g340_g350)) && ((g_g340_g350.length) === 0)) ? false : ((g_g340_g350 === 0) ? true : g_g340_g350))) ? ((offset_g367 = (((g_g341_g351 = (anumber((first(name))))), (((alist(g_g341_g351)) && ((g_g341_g351.length) === 0)) ? false : ((g_g341_g351 === 0) ? true : g_g341_g351))) ? ((g_g342_g352 = (first(name))), (name = (slice(name, 1))), g_g342_g352) : 0)), ((g_g343_g366 = (split_by((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("'")))))
}), name))), ((g_g344_g365 = (g_g343_g366[1])), ((after_g364 = (slice(g_g344_g365, 1, ((g_g344_g365.length) - 0)))), ((rest_g363 = (g_g344_g365[0])), ((before_g362 = (g_g343_g366[0])), ((rest_g361 = (((g_g345_g353 = rest_g363), (((alist(g_g345_g353)) && ((g_g345_g353.length) === 0)) ? false : ((g_g345_g353 === 0) ? true : g_g345_g353))) ? (second(rest_g363)) : false)), ((((g_g346_g354 = ((name.length) === 0)), (((alist(g_g346_g354)) && ((g_g346_g354.length) === 0)) ? false : ((g_g346_g354 === 0) ? true : g_g346_g354))) ? (cat((list("do")), body_g368)) : ((g_g360 = (gensym(("g")))), (((i_g356 = 0), ((before_g347_g355 = before_g362), ((function () {while (((i_g356 < (before_g347_g355.length)) && true)) {
    (body_g368 = (list((cat((list("let")), (list((before_g347_g355[i_g356]))), (list((list("get", g_g360, (offset_g367 + i_g356))))), body_g368))))), (++i_g356);
}}()), i_g356))), (((g_g348_g357 = rest_g361), (((alist(g_g348_g357)) && ((g_g348_g357.length) === 0)) ? false : ((g_g348_g357 === 0) ? true : g_g348_g357))) ? ((body_g368 = (list((cat((list("let")), (list(rest_g361)), (list((list("slice", g_g360, (offset_g367 + (before_g362.length)), (list("-", (list(".", g_g360, "length")), (after_g364.length))))))), body_g368))))), ((i_g359 = 0), ((after_g349_g358 = after_g364), ((function () {while (((i_g359 < (after_g349_g358.length)) && true)) {
    (body_g368 = (list((cat((list("let")), (list((after_g349_g358[i_g359]))), (list((list("get", g_g360, (list("-", (list(".", g_g360, "length")), ((after_g364.length) - i_g359))))))), body_g368))))), (++i_g359);
}}()), i_g359)))) : null), (cat((list("let")), (list(g_g360)), (list(val)), body_g368))))))))))))) : (cat((list("rawlet")), (list(name)), (list(val)), body_g368))))))
}))
})());
var fun = ((function  () {
    return ((function fun (name, args) {
    var g_g374_g375, sub_g376, before_g372_g377, _g373_g378, before_g379, restnafter_g380, g_g371_g381, body_g382, g_g370_g383;
    return (((g_g370_g383 = arguments), ((body_g382 = (slice(g_g370_g383, 2, ((g_g370_g383.length) - 0)))), ((g_g371_g381 = (split_by((function  (_) {
    return ((((alist(_)) && ((_[0]) === ("'")))))
}), args))), ((restnafter_g380 = (g_g371_g381[1])), ((before_g379 = (g_g371_g381[0])), ((_g373_g378 = 0), ((before_g372_g377 = before_g379), ((function () {while (((_g373_g378 < (before_g372_g377.length)) && true)) {
    (((g_g374_g375 = (alist((before_g372_g377[_g373_g378])))), (((alist(g_g374_g375)) && ((g_g374_g375.length) === 0)) ? false : ((g_g374_g375 === 0) ? true : g_g374_g375))) ? (((sub_g376 = (gensym(("sub")))), ((body_g382 = (list((cat((list("let")), (list((before_g372_g377[_g373_g378]))), (list(sub_g376)), body_g382))))), ((before_g372_g377[_g373_g378]) = sub_g376)))) : null), (++_g373_g378);
}}()), _g373_g378))), (list("rawfun", name, before_g379, (cat((list("let")), (list((cat((list((before_g379.length))), restnafter_g380)))), (list("arguments")), body_g382))))))))))
}))
})());
var asbool = ((function  () {
    return ((function asbool (x) {
    var g_g384;
    return ((((g_g384 = (gensym(("g")))), ((list("let", g_g384, x, (list("rawif", (list("and", (list("alist", g_g384)), (list("is", (list(".", g_g384, "length")), 0)))), "false", (list("rawif", (list("is", g_g384, 0)), "true", g_g384))))))))))
}))
})());
var ifmac = ((function  () {
    return ((function ifmac (cond, then) {
    var g_g386_g388, g_g387_g389, rest_g390, g_g385_g391;
    return (((g_g385_g391 = arguments), ((rest_g390 = (slice(g_g385_g391, 2, ((g_g385_g391.length) - 0)))), (list("rawif", (asbool(cond)), then, (((g_g386_g388 = ((rest_g390.length) === 0)), (((alist(g_g386_g388)) && ((g_g386_g388.length) === 0)) ? false : ((g_g386_g388 === 0) ? true : g_g386_g388))) ? null : (((g_g387_g389 = ((rest_g390.length) === 1)), (((alist(g_g387_g389)) && ((g_g387_g389.length) === 0)) ? false : ((g_g387_g389 === 0) ? true : g_g387_g389))) ? (rest_g390[0]) : (cat((list("if")), rest_g390)))))))))
}))
})());
var macs = ((function  () {
    return ((list2obj((list((list(("fun"), fun)), (list(("let"), letmac)), (list(("if"), ifmac)))))))
})());
var commaop = ((function  () {
    return ((function commaop () {
    var code_g393, g_g392_g394;
    return (((g_g392_g394 = arguments), ((code_g393 = (slice(g_g392_g394, 0, ((g_g392_g394.length) - 0)))), (join((map(rendex, code_g393)), (", "))))))
}))
})());
var delet = ((function  () {
    return ((function delet (code) {
    var g_g395_g400, g_g396_g401, sub_g402, vars_g403, name_g404, val_g405, body_g406, g_g398_g407, g_g397_g408, g_g399_g409, foo_g410;
    return (((((g_g395_g400 = (alist(code))), (((alist(g_g395_g400)) && ((g_g395_g400.length) === 0)) ? false : ((g_g395_g400 === 0) ? true : g_g395_g400))) ? (((g_g396_g401 = ((code[0]) === ("rawlet"))), (((alist(g_g396_g401)) && ((g_g396_g401.length) === 0)) ? false : ((g_g396_g401 === 0) ? true : g_g396_g401))) ? ((g_g397_g408 = (delet((slice(code, 1))))), ((g_g398_g407 = (g_g397_g408[1])), ((body_g406 = (slice(g_g398_g407, 2, ((g_g398_g407.length) - 0)))), ((val_g405 = (g_g398_g407[1])), ((name_g404 = (g_g398_g407[0])), ((vars_g403 = (g_g397_g408[0])), ((sub_g402 = (gensym(name_g404))), ((list((cat(vars_g403, (list(sub_g402)))), (cat((list("do")), (list((list("=", sub_g402, val_g405)))), (subsname(name_g404, sub_g402, body_g406)))))))))))))) : (((g_g399_g409 = ((code[0]) === ("rawfun"))), (((alist(g_g399_g409)) && ((g_g399_g409.length) === 0)) ? false : ((g_g399_g409 === 0) ? true : g_g399_g409))) ? (list([], code)) : ((foo_g410 = (map(delet, code))), (list((mapcat(first, foo_g410)), (map(second, foo_g410))))))) : (list([], code)))))
}))
})());
var rawif = ((function  () {
    return ((function rawif (cond, then, else_) {
    return (((str((rendex(cond)), (" ? "), (rendex(then)), (" : "), (rendex(else_))))))
}))
})());
var rawwhile = ((function  () {
    return ((function rawwhile (cond) {
    var body_g412, g_g411_g413;
    return (((g_g411_g413 = arguments), ((body_g412 = (slice(g_g411_g413, 1, ((g_g411_g413.length) - 0)))), (str(("function () {while ("), (rendex(cond)), (") {\n    "), (apply(commaop, body_g412)), (";\n}}()"))))))
}))
})());
var rawcatch = ((function  () {
    return ((function rawcatch (name, form) {
    var body_g415, g_g414_g416;
    return (((g_g414_g416 = arguments), ((body_g415 = (slice(g_g414_g416, 2, ((g_g414_g416.length) - 0)))), (str(("function () {try{\n    return "), (rendex(form)), ("} catch ("), (rendex(name)), (") {\n    return "), (apply(commaop, body_g415)), (";\n}}()"))))))
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
    var g_g419_g420, names_g421, body_g422, g_g418_g423, body_g424, g_g417_g425;
    return (((g_g417_g425 = arguments), ((body_g424 = (slice(g_g417_g425, 2, ((g_g417_g425.length) - 0)))), ((g_g418_g423 = (delet((cat((["do"]), body_g424))))), ((body_g422 = (g_g418_g423[1])), ((names_g421 = (g_g418_g423[0])), (str(("function "), (munge(name)), (" ("), (apply(commaop, args)), (") {\n"), (((g_g419_g420 = ((names_g421.length) === 0)), (((alist(g_g419_g420)) && ((g_g419_g420.length) === 0)) ? false : ((g_g419_g420 === 0) ? true : g_g419_g420))) ? ("") : (str(("    var "), (apply(commaop, names_g421)), (";\n")))), ("    return "), (rendex(body_g422)), ("\n}")))))))))
}))
})());
var exprenderers = ((function  () {
    return ((list2obj((list((list(("get"), rawget)), (list(("rawfun"), rawfun)), (list(("'"), quote)), (list(("++"), pp)), (list(("while"), rawwhile)), (list(("rawif"), rawif)), (list(("do"), commaop)), (list(("asnumber"), r_asnumber)), (list(("catch"), rawcatch)))))))
})());
((function  () {
    return ((map((function  (sub_g426) {
    var name_g430, op_g431, id_g432, g_g427_g433;
    return ((((g_g427_g433 = sub_g426), ((id_g432 = (g_g427_g433[2])), ((op_g431 = (g_g427_g433[1])), ((name_g430 = (g_g427_g433[0])), ((exprenderers[name_g430]) = (function  () {
    var g_g429_g434, xs_g435, g_g428_g436;
    return (((g_g428_g436 = arguments), ((xs_g435 = (slice(g_g428_g436, 0, ((g_g428_g436.length) - 0)))), (((g_g429_g434 = ((xs_g435.length) === 0)), (((alist(g_g429_g434)) && ((g_g429_g434.length) === 0)) ? false : ((g_g429_g434 === 0) ? true : g_g429_g434))) ? id_g432 : (join((map(rendex, xs_g435)), op_g431))))))
}))))))))
}), ([[".",".","null"],["+"," + ",0],["%"," % ",0],["-"," - ",0],["/"," / ",1],["and"," && ","true"],["or"," || ","false"],["raw<"," < ","true"],["raw<="," <= ","true"],["="," = ","null"],["rawis"," === ","true"]]))))
})());
((function  () {
    return ((map((function  (sub_g437) {
    var name_g442, op_g443, g_g438_g444;
    return ((((g_g438_g444 = sub_g437), ((op_g443 = (g_g438_g444[1])), ((name_g442 = (g_g438_g444[0])), ((macs[name_g442]) = (function  () {
    var g_g440_g445, g_g441_g446, g2_g447, g1_g448, xs_g449, g_g439_g450;
    return (((g_g439_g450 = arguments), ((xs_g449 = (slice(g_g439_g450, 0, ((g_g439_g450.length) - 0)))), (((g_g440_g445 = ((xs_g449.length) < 2)), (((alist(g_g440_g445)) && ((g_g440_g445.length) === 0)) ? false : ((g_g440_g445 === 0) ? true : g_g440_g445))) ? true : (((g_g441_g446 = ((xs_g449.length) === 2)), (((alist(g_g441_g446)) && ((g_g441_g446.length) === 0)) ? false : ((g_g441_g446 === 0) ? true : g_g441_g446))) ? (list(op_g443, (xs_g449[0]), (xs_g449[1]))) : ((g1_g448 = (gensym(("g1")))), ((g2_g447 = (gensym(("g2")))), ((list("with", (list(g1_g448, (xs_g449[0]), g2_g447, (xs_g449[1]))), (list("and", (list(op_g443, g1_g448, g2_g447)), (cat((list(name_g442)), (list(g2_g447)), (slice(xs_g449, 2))))))))))))))))
})))))))
}), ([["<","raw<"],["<=","raw<="],["is","rawis"]]))))
})());
var rendex = ((function  () {
    return ((function rendex (code) {
    var g_g451_g456, g_g452_g457, g_g453_g458, it_g459, g_g454_g460, g_g455_g461;
    return (((((g_g451_g456 = (alist(code))), (((alist(g_g451_g456)) && ((g_g451_g456.length) === 0)) ? false : ((g_g451_g456 === 0) ? true : g_g451_g456))) ? (((g_g452_g457 = ((code.length) === 0)), (((alist(g_g452_g457)) && ((g_g452_g457.length) === 0)) ? false : ((g_g452_g457 === 0) ? true : g_g452_g457))) ? ("[]") : (str(("("), ((it_g459 = (exprenderers[(code[0])])), (((g_g453_g458 = it_g459), (((alist(g_g453_g458)) && ((g_g453_g458.length) === 0)) ? false : ((g_g453_g458 === 0) ? true : g_g453_g458))) ? (apply(it_g459, (slice(code, 1)))) : (funcall((code[0]), (slice(code, 1)))))), (")")))) : (((g_g454_g460 = (code === null)), (((alist(g_g454_g460)) && ((g_g454_g460.length) === 0)) ? false : ((g_g454_g460 === 0) ? true : g_g454_g460))) ? ("null") : (((g_g455_g461 = (code === undefined)), (((alist(g_g455_g461)) && ((g_g455_g461.length) === 0)) ? false : ((g_g455_g461 === 0) ? true : g_g455_g461))) ? ("undefined") : (munge(code)))))))
}))
})());
var macex = ((function  () {
    return ((function macex (macs, code) {
    var g_g462_g464, g_g463_g465, it_g466;
    return (((((g_g462_g464 = ((alist(code)) && (code[0]) && (!(((code[0]) === ("'")))))), (((alist(g_g462_g464)) && ((g_g462_g464.length) === 0)) ? false : ((g_g462_g464 === 0) ? true : g_g462_g464))) ? (((code[0]) = (macex(macs, (code[0])))), ((it_g466 = (macs[(code[0])])), (((g_g463_g465 = it_g466), (((alist(g_g463_g465)) && ((g_g463_g465.length) === 0)) ? false : ((g_g463_g465 === 0) ? true : g_g463_g465))) ? (macex(macs, (apply(it_g466, (slice(code, 1)))))) : (map((function  (_) {
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
    var g_g468_g471, g_g469_g472, g_g470_g473, g_g467_g474;
    return (((((g_g467_g474 = verb), (((g_g468_g471 = (g_g467_g474 === ("assign"))), (((alist(g_g468_g471)) && ((g_g468_g471.length) === 0)) ? false : ((g_g468_g471 === 0) ? true : g_g468_g471))) ? (function  (_) {
    return ((((env.push)((list((munge(arg)), _))))))
}) : (((g_g469_g472 = (g_g467_g474 === ("assign-mac"))), (((alist(g_g469_g472)) && ((g_g469_g472.length) === 0)) ? false : ((g_g469_g472 === 0) ? true : g_g469_g472))) ? (function  (_) {
    return ((((macs[arg]) = _)))
}) : (((g_g470_g473 = (g_g467_g474 === ("run"))), (((alist(g_g470_g473)) && ((g_g470_g473.length) === 0)) ? false : ((g_g470_g473 === 0) ? true : g_g470_g473))) ? idfn : null))))((eval_with((str(("return "), code)), env))))))
}))
})());
var only_compile_form = ((function  () {
    return ((function only_compile_form (verb, arg, code) {
    var g_g476_g479, g_g477_g480, g_g478_g481, g_g475_g482;
    return (((str((((g_g475_g482 = verb), (((g_g476_g479 = (g_g475_g482 === ("assign"))), (((alist(g_g476_g479)) && ((g_g476_g479.length) === 0)) ? false : ((g_g476_g479 === 0) ? true : g_g476_g479))) ? (function  (_) {
    return (((str(("var "), (munge(arg)), (" = "), _))))
}) : (((g_g477_g480 = (g_g475_g482 === ("assign-mac"))), (((alist(g_g477_g480)) && ((g_g477_g480.length) === 0)) ? false : ((g_g477_g480 === 0) ? true : g_g477_g480))) ? (JSON.stringify) : (((g_g478_g481 = (g_g475_g482 === ("run"))), (((alist(g_g478_g481)) && ((g_g478_g481.length) === 0)) ? false : ((g_g478_g481 === 0) ? true : g_g478_g481))) ? idfn : null))))(code)), (";\n")))))
}))
})());
var compile_helper = ((function  () {
    return ((function compile_helper (code) {
    var g_g484_g485, jscode_g486, verb_g487, arg_g488, bar_g489, g_g483_g490, foo_g491;
    return ((((foo_g491 = (macex(macs, code))), ((g_g483_g490 = (((g_g484_g485 = (some((foo_g491[0]), (["assign","assign-mac"])))), (((alist(g_g484_g485)) && ((g_g484_g485.length) === 0)) ? false : ((g_g484_g485 === 0) ? true : g_g484_g485))) ? foo_g491 : (list(("run"), null, foo_g491)))), ((bar_g489 = (g_g483_g490[2])), ((arg_g488 = (g_g483_g490[1])), ((verb_g487 = (g_g483_g490[0])), ((jscode_g486 = (rendex((list((list("rawfun", "", (list()), bar_g489))))))), ((list(verb_g487, arg_g488, jscode_g486)))))))))))
}))
})());
var compile_form = ((function  () {
    return ((function compile_form (code) {
    var g_g493_g494, g_g492_g495, foo_g496;
    return ((((foo_g496 = (compile_helper(code))), (((g_g492_g495 = (((g_g493_g494 = ((foo_g496[0]) === ("run"))), (((alist(g_g493_g494)) && ((g_g493_g494.length) === 0)) ? false : ((g_g493_g494 === 0) ? true : g_g493_g494))) ? false : true)), (((alist(g_g492_g495)) && ((g_g492_g495.length) === 0)) ? false : ((g_g492_g495 === 0) ? true : g_g492_g495))) ? (apply(eval_form, foo_g496)) : null), (apply(only_compile_form, foo_g496)))))
}))
})());
var compile = ((function  () {
    return ((function compile (code) {
    return (((join((cat((list("\"use strict\";\n")), (map(compile_form, code)))), ("")))))
}))
})());
var cmd_handler = ((function  () {
    return ((function cmd_handler (xs) {
    var err_g498, res_g499, g_g497_g500;
    return ((((g_g497_g500 = ((transform((function  (forms) {
    return (((map((function  (_) {
    return (((function () {try{
    return (sfy((apply(eval_form, (compile_helper(_))))))} catch (e) {
    return (str(e, ("\n"), (e.stack)));
}}())))
}), forms))))
}), read_file))(xs, 0))), ((res_g499 = (g_g497_g500[1])), ((err_g498 = (g_g497_g500[0])), (join((err_g498 || res_g499), (" "))))))))
}))
})());
var parse = ((function  () {
    return ((function parse (data, f) {
    var g_g502_g503, err_g504, res_g505, g_g501_g506;
    return ((((g_g501_g506 = (read_file((str(data)), 0))), ((res_g505 = (g_g501_g506[1])), ((err_g504 = (g_g501_g506[0])), (((g_g502_g503 = err_g504), (((alist(g_g502_g503)) && ((g_g502_g503.length) === 0)) ? false : ((g_g502_g503 === 0) ? true : g_g502_g503))) ? (prn(err_g504)) : (f(res_g505))))))))
}))
})());
var gather_callbacks = ((function  () {
    return ((function gather_callbacks (cbs, f) {
    var res_g508;
    return ((((res_g508 = (map((function  () {
    return ((undefined))
}), cbs))), ((cbs.map)((function  (cb, i) {
    return (((cb((function  (x) {
    var g_g507_g509;
    return ((((res_g508[i]) = x), (((g_g507_g509 = ((res_g508.every)((function  (_) {
    return (((!((_ === undefined)))))
})))), (((alist(g_g507_g509)) && ((g_g507_g509.length) === 0)) ? false : ((g_g507_g509 === 0) ? true : g_g507_g509))) ? (f(res_g508)) : null)))
})))))
}))))))
}))
})());
var run_repl = ((function  () {
    return ((((process.argv)[2]) === ("-i")))
})());
var watch = ((function  () {
    return ((((process.argv)[2]) === ("-w")))
})());
var files = ((function  () {
    var g_g510_g511;
    return ((slice((process.argv), (((g_g510_g511 = (run_repl || watch)), (((alist(g_g510_g511)) && ((g_g510_g511.length) === 0)) ? false : ((g_g510_g511 === 0) ? true : g_g510_g511))) ? 3 : 2))))
})());
var now = ((function  () {
    return ((function now () {
    return ((((((new(Date)).getTime)()) / 1000)))
}))
})());
var repl = ((function  () {
    return ((function repl () {
    var rl_g512;
    return ((((rl_g512 = (((require(("readline"))).createInterface)((list2obj((list((list(("input"), (process.stdin))), (list(("output"), (process.stdout)))))))))), ((rl_g512.setPrompt)(("¿ "))), ((rl_g512.prompt)()), ((rl_g512.on)(("line"), (function  (line) {
    return (((prn((cmd_handler(line)))), ((rl_g512.prompt)())))
}))))))
}))
})());
((function  () {
    var g_g517_g518, foo_g519, files_g520, fs_g521;
    return (((fs_g521 = (require(("fs")))), ((files_g520 = (cat((list((str(__dirname, ("/jasper.jpr"))))), files))), ((foo_g519 = (function  () {
    var start_g522;
    return ((((start_g522 = (now())), (gather_callbacks((map((function  (file) {
    return (((function  (f) {
    return ((((fs_g521.readFile)(file, (function  (err, data) {
    var g_g513_g523;
    return (((((g_g513_g523 = err), (((alist(g_g513_g523)) && ((g_g513_g523.length) === 0)) ? false : ((g_g513_g523 === 0) ? true : g_g513_g523))) ? (prn(err)) : (parse(data, f)))))
})))))
})))
}), files_g520)), (function  (codes) {
    var g_g515_g524, g_g514_g525, output_g526, code_g527, g_g516_g528;
    return (((prn(((now()) - start_g522))), ((code_g527 = (apply(cat, codes))), ((output_g526 = (compile(code_g527))), ((((g_g514_g525 = (((g_g515_g524 = run_repl), (((alist(g_g515_g524)) && ((g_g515_g524.length) === 0)) ? false : ((g_g515_g524 === 0) ? true : g_g515_g524))) ? false : true)), (((alist(g_g514_g525)) && ((g_g514_g525.length) === 0)) ? false : ((g_g514_g525 === 0) ? true : g_g514_g525))) ? ((fs_g521.writeFileSync)((str((files_g520[((files_g520.length) - 1)]), (".js"))), output_g526)) : null)))), (prn(((now()) - start_g522))), (((g_g516_g528 = run_repl), (((alist(g_g516_g528)) && ((g_g516_g528.length) === 0)) ? false : ((g_g516_g528 === 0) ? true : g_g516_g528))) ? (repl()) : null)))
}))))))
})), ((foo_g519()), (((g_g517_g518 = watch), (((alist(g_g517_g518)) && ((g_g517_g518.length) === 0)) ? false : ((g_g517_g518 === 0) ? true : g_g517_g518))) ? (map((function  (path) {
    return ((((fs_g521.watch)(path, foo_g519))))
}), files_g520)) : null))))))
})());
