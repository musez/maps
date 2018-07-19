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
									'汉阳区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420105",
											"properties" : {
												"name" : "汉阳区",
												"cp" : [ 114.265807, 30.549326 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@D@B@D@D@@CBC@CAK@C@CBABAD@DAHCFEDAF@FBJDFBD@D@DADEFCHEHCJAJ@H@D@DAFADCDAHCDAF@JAD@FA@@@@@@NAJ@F@DBBDBBD@B@D@D@FBFBSgIWAC_iMMGGckGK@@AFEDGDCBA@EBG@IEKB@@GBEDABEHEHGJEDEDAD@DBD@@H@@@@@@@F@B@@@BD@B@D@@ABE@A@A@@B@BBDDJBBB@BB@@JCB@BBBF@BAD@@@@ELCBAAGCCAA@A@GDGBA@CAC@IEGCG@I@GAKIA@I@C@IJABBB@BBBBBDFHF@BADAL@JAHADBDBBHBBBBB@N@@ABGAEBKFGJADADBDBB@BBD@B@BFADCDADEDADAB@DBBDBHBBDBDBF@FBDDJFHFHD" ],
												"encodeOffsets" : [ [ 116911,
														31339 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));