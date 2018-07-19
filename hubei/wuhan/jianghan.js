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
									'江汉区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420103",
											"properties" : {
												"name" : "江汉区",
												"cp" : [ 114.283109, 30.578771 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@ABABAFCH@@ADA@@BABCFCAA@EC@@A@@@@@AFA@@@@@@@@B@@@@@@@B@@@@@@@BA@ABA@@@@@@@@@@@AB@@ED@@@@@@@@A@ABA@A@@@@@AAA@AACAA@AAA@C@E@@@C@C@@@@@@@CD@@AB@@A@@@@BA@@@@@B@@B@@@B@B@@@BCD@@AB@@ED@@@@@@ABA@@@@@@@@@@@@@@B@@@@@@@BB@@BB@@B@@@@B@@@@BBB@@B@@B@@B@@@B@B@@@@@@@B@@@@@@@BA@@@@B@@B@@@@B@@@@@DBCL@@@@ABC@AA@@A@@AA@C@A@A@@@@B@@@BCD@BA@@B@@@B@@@@@@@@AF@D@@@BB@@B@@BB@@BBB@@@@@B@@BD@@BD@@@BBB@@@BB@@@@BBDBDDFB@@FBFDDBFD@B@@B@@@BBB@FEHIFGDEDCBABABA@ABAA@@@BA@ADCDE@@@ABA@AB@BAB@DEACAAECCCAA@@EAEA@CBCBCHABAHCDA@@@@B@@@BABA@@DCDA@A@@B@@@B@@ABABAB@BAB@@AJA@AIMEAEAC@C@A@C@AA" ],
												"encodeOffsets" : [ [ 117028,
														31298 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));