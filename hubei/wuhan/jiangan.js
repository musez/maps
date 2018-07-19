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
									'江岸区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420102",
											"properties" : {
												"name" : "江岸区",
												"cp" : [ 114.30304, 30.594911 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@IB@BA@ABA@ABAB@BA@@@A@@@@BCBCD@@ABAB@@A@@@@@CBGDABGBADAD@DFBFB@@BBDDFDBBBDCFA@ABA@@BAB@B@@CFCD@BAB@@B@AB@BABABABCDCFEHGJEFBBDBBBDBDBDB@@BBBBDDB@@BB@BBDDB@BBBDB@BBNHHL@@@BBFADAF@@@@CH@B@BFCBAFIBAB@FAFBFBDBDDHFHDFADAHG@ADCDCD@FBDBDF@DHFHDHFHBDBDBDBB@B@B@@BBBFHBB@@@@D@TEDA@@B@B@B@D@DBB@@@B@BADADEBABEBABCBAB@C@KCGC@@@@ECIEQOKKOQSQS]KQKMi{KQ" ],
												"encodeOffsets" : [ [ 117047,
														31309 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));