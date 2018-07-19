(function(root, factory) {
	if (typeof define === 'function' && define.amd) {
		define([ 'exports', 'echarts' ], factory);
	} else if (typeof exports === 'object'
			&& typeof exports.nodeName !== 'string') {
		factory(exports, require('echarts'));
	} else {
		factory({}, root.echarts);
	}
}
		(
				this,
				function(exports, echarts) {
					var log = function(msg) {
						if (typeof console !== 'undefined') {
							console && console.error && console.error(msg);
						}
					};
					if (!echarts) {
						log('ECharts is not Loaded');
						return;
					}
					if (!echarts.registerMap) {
						log('ECharts Map is not loaded');
						return;
					}
					echarts
							.registerMap(
									'梁子湖区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420702",
											"properties" : {
												"name" : "梁子湖区",
												"cp" : [ 114.681967, 30.098191 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@H@B@DAFABC@CAA@ABED@F@D@@ABA@A@CAAA@C@GAAA@EAC@GHCDC@@@CCAAC@AGA@@C@A@A@@@BC@A@CACGCDAC@CAQKIKGGCGCCCEAE@EACCE@ABABABCBAFEAECCIEKCGCGCACCC@E@EECE@EACIBGDGBGBEAG@E@MBELEFCDCDC@EDEHCDEFCNEFEDCDEDAN@D@FADALGAEAAQGAC@CBCDCBA@AC@C@C@EAECCCEK@E@CDCDCDAJEJCBC@ABG@EFAD@DAFCDEDMBMACFEDGDCDEDCBC@CC@CDCBCBE@ECECCCCCEE@EBCDCBG@EDCDCFADCACACAEEAECECCA@CCEEAEAG@GBADADAFCFEAEAEAEEACBCJG@CCKAEAGC@E@EBI@GCCCEECBCDEBGA@@AAEAE@ECA@ABAB@@@HCFAD@@@BB@BB@@@BAD@BBD@@@F@B@@EA@@A@@B@B@@B@@B@@@@ABA@@@B@@BDA@B@@A@A@@BA@BBA@EBA@ABABABADADCBABC@C@GCIAIAEAAAA@C@AAABCBA@CBAAA@AA@@@C@AAAAACAA@AA@E@AA@C@ABA@C@AAECE@CDCD@DBDDBDBDBADEBCDEBCFGHKBABCBEDCDAB@@A@@BABB@@DBBBB@B@B@@@BABADA@CDCBCBAFAD@B@B@@@B@B@BAD@B@@ABGDCBABA@A@@@C@CDABABB@@D@BBB@@AD@@A@@@@BADCDCDABEHGF@F@@@B@BAD@DABBB@BBBBBBBB@@B@@@B@B@@@@@B@@@@@@@B@D@B@@CD@B@BBBDDBDFDDHBDAH@@CD@D@DDBFBDD@FAH@D@D@DBDBB@BD@B@HAF@HFHHDHBHBHBHBHAJ@H@HBHFFJFHFFDHFFDDH@H@H@FBF@FBDHFH@FFFDHDFDFHBFBJAH@HAH@F@F@FBFBFBJBHBHBHAHAHB@@@BAB@B@D@D@B@D@D@FAJ@B@D@D@BBBB@D@B@B@@BB@B@BB@@B@@B@DBDBB@BBDB@@DD@@@@B@B@@@BA@@@ABADA@@DAB@@@DBB@@BBB@@@B@@@B@B@@@B@@@@@B@@B@@@B@@@@@B@@@BADCLU@AB@BBDR@B@D@@BB@B@BAHAD@FCH@BAB@B@@AB@@@BBB@DBBBBRFB@B@B@BAB@F@@ABEBEFEFELAHAJAPEDAB@D@BBB@BB@D" ],
												"encodeOffsets" : [ [ 117472,
														31103 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));