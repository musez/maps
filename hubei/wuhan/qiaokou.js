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
									'硚口区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420104",
											"properties" : {
												"name" : "硚口区",
												"cp" : [ 114.264568, 30.57061 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@@A@AA@@AA@@@AA@@A@@@CBE@@@@@@@@@A@@@AB@@ADC@A@@@A@@B@B@D@B@@BB@@@BBD@BA@@@@DKCA@@@@A@@@@@@AA@@@@@AB@@@@@@A@@@@@@@A@A@@@A@@@@AA@@@AA@A@@A@@@@@@AA@@AA@@A@@@@@@@A@@@@@@@@@@@@B@BA@@@@@@FC@@BA@@DC@A@@@A@A@@@AA@@@@@B@@A@@B@@@BA@@DC@@@@@@D@D@@@F@D@B@BBB@DBBBB@BB@@@@B@B@BAB@@@@@@@@@FC@@BA@@@@@@@@@@B@BAB@@A@@@@@@@A@@@@@@@A@@@@@@B@BE@@@@B@@@FDB@DBDEBA@AB@BC@@DGBEBABAACCAE@I@MB@@@@@@EBC@IBE@CBGDCBCDEBCBC@G@I@IBGDGFEDCFCBC@C@EAICEAE@CBEFGDCBC@ABAB@D@DBL@DAD@DC@C@A@C@CBABAB@B@BA@@B@B@@@@CBED@AE@E@CBABAB@BBB@BBBBH@@BFFFDBF@FAHAD@BBDB@BD@D@D@BALAB@@A@A@A@@BA@@B@@AB@@@B@F@D@B@D@B@D@D@@@B@D@BB@@@@@@B@B@D@D@B@T@@@H@@@@@" ],
												"encodeOffsets" : [ [ 116971,
														31361 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));