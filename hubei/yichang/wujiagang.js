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
									'伍家岗区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420503",
											"properties" : {
												"name" : "伍家岗区",
												"cp" : [ 111.307215, 30.679053 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@@BAFCB@BC@ACE@CBCBAD@J@F@JBFAD@@ABA@A@A@@BA@AB@D@H@B@@A@C@A@AB@B@B@FABABABAAC@C@AAA@@C@A@@@A@@AB@BCFIBCCE@@BAD@@@@AAGAA@AFC@@B@DFFFDDBDB@F@D@B@FB@BBBBBBB@BFBBBDDB@@B@BA@AB@B@@@BBB@DDFBF@BBBBBFDFDB@DCDCDAJCF@F@D@BA@A@AAACECCC@E@C@CCCCAAE@AA@A@AHGBC@AAC@C@C@C@A@CC@BADAAABCI@CBE@EAECAA@C@AAEA@G@@@@A@A@@D@F@@@@A@@AAA@CBC@GFA@E@CA@C@EBG@CCAOBI@CAAABKACAAE@MDEAACMICFefILONSVUXolcVCBFJDBDB@@@@B@DBB@@@@@D@D@DABCBEFCHCJEBCD@DABBFDPZ@DD@B@FCDAF@L@JBF@BAD@DB@DB@D@" ],
												"encodeOffsets" : [ [ 114040,
														31433 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));