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
									'青山区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420107",
											"properties" : {
												"name" : "青山区",
												"cp" : [ 114.39707, 30.634215 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@FANARB^FlTXHXHfLDBB@BBHA@AB@@C@CB@@A@@@@@A@E@EBC@A@C@CBA@CBC@ABAAA@AA@A@AA@@BC@ABEBC@C@A@AAABCBEFEDCBC@A@A@@A@A@AAC@@@AA@A@CAA@A@A@A@AFO@@@A@@A@A@CAA@AAA@@@AAA@@AAAA@@@A@A@@B@B@D@BAB@BABC@A@KDA@@B@D@B@B@BADAF@BADBHAB@@EBABA@@ACAA@AB@@A@A@@@@B@@ABA@@AA@@@@A@A@AA@@AA@@@AB@@@DAB@B@BA@@@A@A@@@A@@@@@A@E@@@@@A@A@A@C@A@AA@@@A@A@@@@@@@AC@E@A@W@A@@@A@CCECAAEA@@A@@BAB@BABA@AB@@CAAAC@A@A@@@@@@@AD@@@B@@@@@@BBB@BBB@@B@BA@@B@@A@A@C@A@A@@@A@A@II@@@@CD@@ABCBEDGHT^" ],
												"encodeOffsets" : [ [ 117096,
														31379 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));