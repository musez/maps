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
									'武昌区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420106",
											"properties" : {
												"name" : "武昌区",
												"cp" : [ 114.307344, 30.546536 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@@B@@@B@@@@AB@@@@@@@BAB@@ABAB@@A@ABCDABA@CBC@CAC@ACAEAAA@AAC@ABAACBC@AAA@AAA@AA@@AEACE@@@@@@AA@@@@@@@@AC@@@@@@@AA@AAA@AAA@@AC@@@A@C@ABA@A@A@AB@@@@A@AB@@@@@AGAEA@AA@AACCA@@@@@A@@A@@@@@@@A@@@@@A@CBM@A@A@@B@@@B@@@B@@BB@@@B@B@B@@@BAH@D@HDBBB@@@DDDDBDB@BBBBB@BB@BBBDB@B@@@@@@@@@BHHDB@@@@FB@@@@@@JBHBF@DBBBDDBDBB@@B@@@@@B@@A@AB@B@@@BBB@BB@@@BB@@BB@@B@@BB@@AB@@BBB@B@D@B@BB@@BBBB@BBBBB@@@@BDB@DADAD@BBD@@@B@@@B@B@@@@@B@BABA@@@@@A@@B@@@@@@AB@B@BA@@@@BA@@@@@@AA@@@@@@@@@A@@@@@@@@A@@@AA@A@A@@@A@A@@@ABA@@@A@A@@@A@@@@@A@@@@@A@@@@@@A@@C@@@@@@@@A@A@@@AB@@A@@@@@@AA@@A@C@CBE@AACCGAAAAAE@A@C@@@A@@AAA@@AA@@A@@@@@G@A@@@AEAEA@@A@AAA@@A@@AABA@A@@A@@AC@@@C@C@C@A@A@@A@@CAA@EAC@C@CACC@@@@AA@@A@@@GB@@@@A@@@@@A@CB@@EBA@A@@@@@A@AACAA@AAA@AAC@@@CAAACAACCEA@@@A@A@AA@@A@@AA@A@C@@A@A@@@AA@A@AAA@@CAA@@CACA@@CAA@@A@@A@A@AA@@A@@@@@@ACACAA@@@@@@@@@@@@@@@A@@@@@A@@BBF@D@B@B@D@BAB@B@BABABA@@@@@@@@@C@C@@@@A@@@@A@@@@@@A@A@@@@@A@@@@@@@@@@@AA@@@@@@AACAACA@@AACAAACCCACEAAA@ACA@@A@@AA@@AAC@EBCBEBCDEDIHNN`jBDJXThJN@BLRj|LNLRHGFCDABA@@DC@@@@" ],
												"encodeOffsets" : [ [ 117098,
														31354 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));