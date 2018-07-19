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
									'黄石港区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420202",
											"properties" : {
												"name" : "黄石港区",
												"cp" : [ 115.090164, 30.212086 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@AGBSBKHMVUNEGEACAAFC@ABAAA@@AAA@AAA@AAA@C@@@@@@@@@A@CFAB@@A@A@AAC@A@@@@@A@KAE@C@A@CDABEDA@ABC@E@G@QBK@EBA@ADAB@@BB@JADADC@EBE@EBA@E@A@C@ABCBA@A@B@BB@BB@BB@@@BBB@@B@JBBHBFFFBDBFBBBBB@J@JAD@D@B@@BAD@BB@B@JCHCD@D@BB@@@DBFDDB@L@LAB@JA" ],
												"encodeOffsets" : [ [ 117842,
														30986 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));