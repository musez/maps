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
									'点军区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420504",
											"properties" : {
												"name" : "点军区",
												"cp" : [ 111.268163, 30.692322 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@^CdEZCJCFADCDCBCBCDG@C@E@E@ACECCIMEIAE@GH[FILMNIDADAdUpkVWTUPMJKfeDEHIFGFGBCIAA@@@AA@@@@E@CBEBCBA@A@@C@ABCAAECC@E@GFEBA@@A@AAGC@G@EAA@@ABAFGHG@A@A@CCAC@EBEBMDI@EBGBCFABILKPEBG@E@ABCFAJABE@C@IJA@A@A@ACCACAKACCAAA@AEGCEAW@CA@AAECKIGA@E@A@GC@ACAA@C@E@G@G@EAEBEDADBBDHBF@D@DEDGDCFAB@D@@BDFB@BABABCB@B@D@BC@A@ICAA@A@CBE@AA@@@ABA@AB@FABA@@B@B@F@B@BABEDGDEBMDCDC@AAECC@A@@D@@@BA@A@EA@ABEACCCCAC@E@CBEBCBGHGFEDCBIAE@A@GDCBGHCBABABC@E@C@CBC@A@EACACBC@C@G@S@E@A@E@GBC@E@EAGAECEIA@C@A@CBCDA@CDABCBCBCFGFABADEFAFCBEBAB@@ABAAA@A@ADA@@BB@@@DBDB@BB@AB@@AAAAE@A@A@AD@F@FABQXEFCBGFMJE@CAA@CDEDCLA@GFCD@BBBFBDDFF@B@BD@B@BBH@DB@@BB@FB@B@BBBBBBB@B@B@B@B@B@BBBB@BBD@@BD@BB@BBB@BBBA@@FCB@B@B@D@B@BBBB@BB@B@B@JAB@B@BB@B@@BBD@D@BBDBDDNFDBR@D@BBTRJHDBF@F@D@B@@B@BABBBBBDBB@F@B@DD@DDBDADCDAFAJADA@CCMACBAD@FDFHHJLJbNRHNLBDDDFBLCHAHBDDBBBB@@NAVEHANAP@P@H@" ],
												"encodeOffsets" : [ [ 113888,
														31510 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));