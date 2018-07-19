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
									'西陵区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420502",
											"properties" : {
												"name" : "西陵区",
												"cp" : [ 111.295468, 30.702476 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@C@A@@CCAC@ABE@IAK@E@CBEDA@C@@COYECAACBC@ADIFGDEDAFADCBC@C@@@@@A@CAA@@@@@CACAEICBMJKNEJG\\@HBFFJJNDDDF@B@F@F@DCHADADCDCDEBIDYDcF]DA@AB@BCJBBDDFFDD@DBDAJ@DB@BBDBDAFAD@FA@@D@F@B@DAB@B@@@B@B@BAB@BA@@FAFAFAJ@FBD@FAHE@ABC@A@ABCAA@@ACBAD@F@BCAC@A@AB@FAB@@ABAB@@C@CBCBCNGFAHCH@JBB@B@BAB@FBLFHBB@DAD@FDDAD@DEBC@AACACAAAA@ABA@@DBB@HC@@@@BAB@DBDDHBDDBDB@B@BABA@CA@@CBC@ABA@@DABC@AACAAACAE@EBADC@@BCBE@@@AACACAA@ABAD@D@BA@AAAAEGG@C@C" ],
												"encodeOffsets" : [ [ 114040,
														31433 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));