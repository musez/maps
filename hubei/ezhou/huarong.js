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
									'华容区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420703",
											"properties" : {
												"name" : "华容区",
												"cp" : [ 114.74148, 30.534468 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@@BOAGBABI@G@K@O@MAK@ICM@KAIAI@I@G@K@IBIBIDINYJOBA[gCA@@A@@BA@A@@@A@@AA@@@@@E@A@A@@@A@AAAAAAA@A@@@A@E@E@AAA@AAAA@AAAAAAACCAAIACAAA@AAABABA@AB@@AAAA@M@CAA@A@A@CC@@A@@@AAA@A@A@C@CB@@EHA@A@A@E@C@GG@A@ABA@AAC@@ACA@C@AAC@@@C@A@AA@@AA@@A@E@AB@FABEBCBC@A@ABAAC@CAA@CBA@@BA@A@CAA@@AAAAA@A@A@A@C@@@C@E@A@@BA@CAAA@AAC@A@CBOFIBGBKBEFEFAFAF@BE@A@ABA@A@A@QEAAAA@CAA@A@@BA@@@ABA@ADG@EBCBG@A@AAA@@@C@ACQAAA@@BKVCDAB@@A@@@@@A@@@A@@@@A@@@@@A@@@A@A@@@A@@AA@AA@CA@@A@CB@@CBAB@B@@AB@@A@A@@@@@CC@@CAAAA@CACAA@@@@AA@@A@AAA@@@A@A@CAAAAC@C@A@I@EBC@C@A@C@C@A@A@AB@@A@GFGJEP@LFLBR@NBRBDBTEDBJ@HAHAFCDCFCD@D@@@B@BBBBBBBBBB@@@@B@@D@@BB@@B@B@B@BAB@@A@@BA@@D@DBDBBB@DBBAB@B@@@@A@@D@B@@@B@B@FBB@B@B@BAB@@@B@@@B@@@BA@@B@@@B@@@@@@A@AB@@@FA@@DAF@D@BB@@ABADAH@D@BBHBBBDB@@BB@F@F@D@BBBBBBBBBBBD@BAB@BADCD@@AB@DB@@D@B@B@DAFCDAD@FDDB@BD@BAHAFALAJ@DABADABC@@AA@AAA@AB@B@BBFB@F@BBBB@B@BEBEDAF@HAHCJRARHZNPFNDvJ\\HZHVJRHXTDBPJrPN@P@TALI\\]P_DW" ],
												"encodeOffsets" : [ [ 117595,
														31303 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));