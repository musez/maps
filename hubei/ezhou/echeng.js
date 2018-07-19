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
									'鄂城区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420704",
											"properties" : {
												"name" : "鄂城区",
												"cp" : [ 114.890012, 30.39669 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@B@hGB@FCHCNKHCHIHIHMFKDIDIDIBEDIBKBGBIDSBMDMBK@G@G@@@ACUIQCYIBA@KBK@A@CCAE@C@@AAC@C@GDIDA@A@@ABC@AA@C@C@IBI@A@AAAAAEACEEAEAGIAA@@@AA@A@@AAA@@AAAA@@@@AC@A@@@@A@@@@DAB@BAB@@@@A@CBC@@@AA@C@A@AAEAAAA@A@@@@CA@@C@AA@AA@AA@@@@@CDEDCDA@G@C@ECAAC@C@@@A@A@@@ACAAC@A@AAAA@EAA@ACA@@CAC@E@@@C@CBABCHABABA@ABA@E@A@A@CDADABABCBEBMBEBGBGDSFGBGBCBCDEBGBQBGDEDADABAF@F@D@BEHCF@BBDBBDBDDHD@BBD@DABCBADADCDCBCBEAE@E@EBEBEDGDCFAD@F@DBL@DABCDIJC@I@E@@@W@MCK@MAA@GI@C@CBGDGECG@K@GBIBKDEDE@A@@@EFABA@E@E@C@CBC@CDABABBF@D@BCBA@ABCF@BAF@L@@A@GBAACBHDBD@D@BAD@@B@B@D@@@HB@BBDDB@D@@CDGD@HBD@FBBHBD@B@BB@D@BAB@BC@E@C@AF@BBB@DADEBCBA@G@AB@@@B@F@D@@@D@B@B@BBBBB@BB@DBB@B@@AB@DAB@DBD@BBBAB@D@DAFABA@EBAF@B@@@BB@@BBB@D@@@D@BBD@B@BD@@BD@BAB@B@BHHD@F@B@B@B@FG@@DAD@B@B@B@BB@@B@@@DDB@B@B@DBN@B@BB@BA@@BABABBB@BBBDBJBBBDDBBBBBB@BBBBBB@BBF@F@B@@@B@B@BBBBBBB@@@B@B@F@@@@@B@@BB@@@B@B@@AB@@@DB\\hLKLINENGLERGVCRELANAR@PAPANALALALAL@LBL@LBJDB@^@" ],
												"encodeOffsets" : [ [ 117778,
														31135 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));