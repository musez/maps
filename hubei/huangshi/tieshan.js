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
									'铁山区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420205",
											"properties" : {
												"name" : "铁山区",
												"cp" : [ 114.901366, 30.20601 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@CGGCE@EAEEK@AEAAAACA@AAAAA@GD@@CAE@@@@AGC@@C@@@CBGBCBA@A@EFADAB@D@B@@@BA@C@ABA@@@A@@AA@A@ABC@GB@@A@ABAB@B@B@B@@@@HF@@@B@@ABCD@@ABEDEDGD@BCBA@ADAB@B@B@B@B@BAB@@ABAB@D@B@DDBDD@@@B@D@B@@B@@@H@DBBCFCHCRAHAFADCDAHAHATEHCHAFANAFADABABABCDC" ],
												"encodeOffsets" : [ [ 117699,
														30938 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));