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
									'沙市区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421002",
											"properties" : {
												"name" : "沙市区",
												"cp" : [ 112.257433, 30.315895 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@BCBEBGDE@CCEAAEE@AC@CD@BABABABABCBHF@@BCLHADGLJB" ],
														[ "@@AGGECAGCCGCAC@G@AAECAA@C@C@C@ABABAB@B@@CDA@CDEDCDADABCD@DCBG@A@A@A@A@CAI@A@@@A@CAAB@@A@AGY@OBKBGDO@GBCHMDG@@@@CA_aKKAC@EAEAECEEEECEAYIGAE@KAGD@C@EACA@CA[BI@CA@@@E@AA@C@A@ABAFCBC@@@AE@@A@@B@@ABCBG@@@@DAB@@A@AAA@@C@@AAA@@@A@C@ADADBD@B@BEBI@A@@A@IAAAA@GIAABEJ@BCDOEHMBABAA@DA@A@@@ABA@@B@B@@@@ADCGE@@A@E@C@A@E@@@A@C@A@A@@BCBABED@@EDGDI@I@GBSDSDKBABAF@F@H@FADGBMBAAAAAG@ICCEBEFMBGBBBBLDH@JAR@LITKPMNKLOHQJKJMJGFGDE@EBBTABAFAH@BB@BB@BBBABCBAB@@BBB@BADAB@B@BD@@BFFHDDBBFDJDDDBD@DAB@DBDBDBDDFBH@B@D@B@DBBBBD@NDPDB@BBBDBF@JDDF@HAHEB@FEJEJGJEJCDAJBP@LBHDHHHJJVNFHDJFJFJHVNNBLBF@FBJAP@HAFCHAF@HBH@BFDDBHBDHFLDLAHAJ@FCNEHELGNGPGJEHEFGNMNIJA" ] ],
												"encodeOffsets" : [
														[ [ 115096, 30942 ] ],
														[ [ 115229, 31124 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));