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
									'猇亭区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420505",
											"properties" : {
												"name" : "猇亭区",
												"cp" : [ 111.427642, 30.530744 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@BABE@CAABABAB@@C@C@E@CBC@AHAFC@@BCACDMDE@CHGJO@O@ADCDADCBAACAECAACBGB@HABAXQDACG@EAE@@@GBQDCH@DADAFCBADAF@D@@@@CAAA@ECEEACAAGIGGA@AB@D@B@H@D@@AB@BEJCD@@A@AA@@ACDC@E@EAGA@@A@A@@DC@AA@A@EBCBA@A@A@@A@ABAFC@@@AA@ABMNIFGBAAAA@EBEBE@KAEAAAA@EACCCEEAE@GACAAGCGBC@@BIfEJCFGJKLQT_~S@JADADEHEHGJNJBDFBNCF@BBBDALBBDBJ@PADB@DAH@F@DDBF@B@HED@DAB@BB@@@B@@E@C@@@@B@B@@H@B@BF@B@DBBFDFBF@DAJ@" ],
												"encodeOffsets" : [ [ 114131,
														31369 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));