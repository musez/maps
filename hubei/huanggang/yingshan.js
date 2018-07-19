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
									'英山县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421124",
											"properties" : {
												"name" : "英山县",
												"cp" : [ 115.67753, 30.735794 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@K@GBG@IFGDCBEBCBAB@BABABABA@@BA@@@@@@BA@@@@@A@@@@B@@@@A@@@@@@@@BA@@@@B@@@@@@BB@@B@@F@BB@AHGJGNKJCJCHADEBE@IAG@GAEAEDGD@FATFLDHALAFCF@F@HCJEJGL@HBFADI@GBIBGBEDADAFAF@LDVBDBNALAL@B@@EACBGBE@I@CDCBEBMBIDCBGDE@EBGBG@COBM@G@GBG@G@CAACCECCGDE@EBEAGAIAEAGEECEAECGIECEAG@GAGCCCCC@ICCOGOGCCAAMIGCEBCAAC@CESEAGCI@C@ABC@E@CAEACCMAOEKCEEKKGCGAECAGAGCEIIIGEEAEAE@EDGBCDCHEJGFC@IAEBCFGAGKMCC@EBCBAJCJBDC@CACCEIEGCKCCCACBEAGMAA@GBC@E@ECGCECC@E@CDEDEHCBEBG@UAICECCGMmGSCECCACACAEBQBG@CCACCAA@EDCFCDAFEFI@IMBC@A@AC@ABIBCACCEAECCCAOBCCGEKGGGKIKICCCEEE@E@G@G@EGEECCCEG@IAGAEAGAG@G@IAGAKAKEEEIEEICE@KAGCKCGEGEGEIEICKGKAELCH@D@HAF@HAHCLEDEFAHBF@H@HDHBJCHGFK@KBGCK@E@I@I@G@K@IBEFIJ@H@H@JGHAJDJBDDBDFDDDFBFAHAJBHDBJAF@HDFFDDBHAHAL@H@JBFFFHBJBHBHDHDJFRLFL@D@FCHEFEFEDBFBFDDDFDFBFDF@H@J@HCHALMVABLLADSHA@@FLNBFDPBTEBEBGDGBEFCFGFCDGCCAEE@CGGEEAEGEGGGCKGICG@E@EBCF@J@HDJDDBJDFBJDJDHJJFFJLNPHJFHFHDFDFBF@H@HAHDHBHBJDHDJDFFHFHFHDDHFFFHHHFLHLFJDLDHDLFJFJFFFHFJJNFNJJLJFLFPLFFFHBF@HBHBFBFCFEDGBGBI@EBAJ@DDDFFDFBHBJBHDHFFFDJBDAHAHCJ@JBHBLBJBFDFDHDFHFHFL@TDNDRFBDDFFFBBFDDDDHBHBHBFBHBHAFAHCF@FAF@F@DBHDFDHJJHHFLFHBFBHAFEHCDKDEDK" ],
												"encodeOffsets" : [ [ 118668,
														31875 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));