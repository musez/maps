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
									'西塞山区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420203",
											"properties" : {
												"name" : "西塞山区",
												"cp" : [ 115.093354, 30.205365 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@DIDEFENMHENKHEFGPMJGLKHCLMHGGBG@EBGDCBAAAGACAA@@CA@A@@@ABADAB@BC@@@@@A@@A@EBC@A@E@C@CBA@A@ACCCCA@@@A@AA@@AA@AAAAAC@@CCAA@AAABA@@@@@AA@AAA@A@A@@B@@ADAF@B@B@BA@@@ABC@GA@@A@@CAA@@@@A@E@ABA@@@AACA@AA@ABA@CBCBA@G@C@A@CACBCBKDEBEFE@A@A@A@@@@@CAA@CBCB@BAD@BAF@@BB@@B@B@@BBB@FBD@B@@@BAB@B@@@B@@@DBB@B@BAF@D@B@DBBAB@BABAB@B@B@BAF@@@D@BAB@B@D@@ABA@C@A@AAA@AA@@A@A@ABA@AACAIA@AA@@AA@A@AAA@CAA@A@ABCBEDADABA@@@A@AAA@@CAA@@A@A@A@@@ABA@GACAA@AC@AA@AAEAC@A@CB@@CBGDA@A@CAEACGCA@CAAAA@@@C@AAE@A@AA@AAC@A@C@EBAB@@ABBBADABABEBEBC@I@C@A@CAA@C@GAA@@@EBCDIBABCBAA@BCBAB@@@HBDBBD@B@HCBAB@DAD@DAB@@@B@BBD@B@JJBBBDBDHN@@BDD@BBDBLFBBFBDDB@B@D@F@LBB@@@@@B@D@BBB@B@@@BADEB@@@@@@@@@D@B@BBB@BBB@BB@@BBAB@BEDBBBDHFVK\\ElCB@D@LBHDNJHDHBHBJADAFAFAHAHAF@NA" ],
												"encodeOffsets" : [ [ 117975,
														30939 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));