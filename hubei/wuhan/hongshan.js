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
									'洪山区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420111",
											"properties" : {
												"name" : "洪山区",
												"cp" : [ 114.400718, 30.504259 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@A@@@@@A@@BAD@BA@@@A@ABA@@BA@@@@B@B@@@B@@@B@@BBBBBDBBBBBDB@BD@@@@BDDF@@@@@D@@@B@B@BA@CBC@@@ABABAB@@AAAA@@CBC@A@C@A@CBA@@@@@@B@@@BBD@@BFBDDDBD@BDDDDDF@@BB@@DD@@BB@B@@@@BB@@BB@D@B@BA@AB@@C@@B@@A@@@@@@B@@@B@@ABABCBCBA@ABC@A@C@A@A@UDA@OBCAMICA@@CA@AA@AA@A@AA@@A@@@C@CAAAAAAC@CAEAA@CACA@@C@A@A@@AA@@AA@@@@@AAAAC@@A@A@ADAJ@LBDABABC@EACAA@A@AACACACACACEEACAA@A@ABCBCBA@A@@@AA@@@@@EBC@C@A@AAA@@AAAA@AA@@AA@AAA@A@AAC@@AA@AC@ABA@CB@@@@EBE@@@@@A@A@@@KBG@EHAJ@F@F@@@@@BAF@BA@CBABA@CBABAB@D@@@B@B@D@B@@@@CBC@CBE@G@GBK@M@G@E@AAACAA@A@@ACA@AA@@AA@@AA@AAA@A@A@@AAAAAC@@AA@@@A@@@A@@@A@@@A@@@@@@@AA@AAA@@@GAAAC@EAAA@@@BA@@BB@@B@B@B@@A@@B@@@B@@@B@@@B@BBB@B@@@BA@@@A@@@CBA@@BA@@@A@AA@@@@A@A@A@A@@@C@A@A@A@A@@@A@ABA@A@A@AB@@@@A@@@A@@@@@@AAA@@@@@A@@B@AA@A@@BA@@@@@AB@@@@@@A@@@@@A@@@@@@AA@@@@A@@@@@E@@AAA@@@@@@@AA@@@@@@A@@AAAAAAAAAA@@@A@@@A@A@@@@@@@@@@@CB@@A@A@ABE@CBC@C@C@C@AAACE@@@A@A@AAC@C@@@A@A@AACAC@AAA@AC@AAA@A@A@C@A@C@A@CBA@C@ABA@A@GBAB@@@@@B@B@@@@AB@@CBA@ABAB@@IBABI@EBGFEJCDIFIFE@@@EBE@@A@@AAA@AA@AAA@A@A@A@A@@ACAAAA@A@AAC@@AAACAA@CAGAA@@A@C@A@A@AAA@CC@AA@AA@@AA@C@@@AA@@@A@@@C@A@A@A@A@@B@@AB@@@@@@AB@@@B@@@B@@@@A@@@A@@@A@@@A@@@@BA@@@@BA@ABABAB@@@B@@A@A@ABA@@@A@@@A@A@A@@@AA@@ACAC@CAE@A@@@C@A@@@A@A@A@CBA@A@E@AAE@A@ABA@ABA@@@C@@@@@@AAA@CAA@A@@AAA@AAAAAAAA@A@@@A@A@CDA@AB@BABABABEJCFCF@@@BAD@@EDABA@@@@@CC@@@@AAAC@AAA@@@@@@@@@A@@@@@A@@B@@A@A@A@@@@@A@@@@@@AA@@@@@@@@@AA@@@@@C@C@@@CBA@@BA@A@IF@@@@@@ABGDMJDFJPdtNPVN@@BB``FHHLdlHHJGFCDCFADAFAD@BB@@BB@@@BB@BDB@BBDFDBDDBBDBBB@@DBBBBD@B@@@@B@@B@@@@@@@@@@@B@@@@@B@B@@@@B@@@@@@B@@D@D@@@@@@@@@B@BABA@A@ABA@A@C@A@A@CAE@AB@@@@@B@@@@@@@@@@@@@@@B@DBDB@B@@@@B@@@BBB@B@@@@BB@DB@@DBDB@@BB@DB@BBB@B@@B@@@B@BD@B@B@@BB@@@BBB@B@@@B@DFBDDBBBDB@@D@BBB@BBB@DBBBB@@@@@B@B@FA@@DAB@@@@@B@@@@@HA@@B@@@BB@@@@DDDBD@D@FBB@DB@@@BB@B@D@D@D@@@D@@BB@@@@BABBB@@@BB@BBB@@@FBFB@B@@@B@H@@@@@BB@@BB@BB@@@B@@@D@BBFBBBBDHBD@BAF@D@D@BB@@B@@@@B@@@BA@@B@B@@@@@@@@@@DB@@@@@@@@B@@@@@B@@@@@B@@@B@B@@AB@B@@@B@B@@@B@BBB@@B@@@@@@@@@@B@@@@@@@@BB@@@@@@AB@@@@ABA@A@@B@@@@A@@@@B@@@@ABABA@@@@@A@A@@@A@@@C@AAC@CBCBA@AC@@@@AAAA@AAAAA@@AAA@C@A@A@AA@@BA@@AA@@@AA@@AA@@A@@AAA@AA@@A@A@@B@BA@@@@@A@@@AAACCCAACAE@GAIA@@@@@@EA@@@@CAGG@A@@@@@@@@@ACAAA@AAAA@AAAAA@ACCCCC@@A@AAGCC@G@AB@@A@A@A@@@A@@AA@@@A@@@A@@@@B@BAN@D@B@@@@@B@@@@@@@BB@@@@@B@DDBBB@@BFBHB@B@@@@BAB@@@@@BAB@B@B@BAD@B@@@D@@BB@BBB@BBB@@B@@@@@@BD@@@@@@@@BB@@@@@@DFFB@BB@@BBB@BBB@BADBDAB@BBD@BBBFBDB@BBD@DAD@DABCBAD@B@BA@AB@BA@AB@@@@@@A@@B@@A@@@A@@@JJB@B@@@B@B@D@B@B@@@@AB@@A@AA@AAA@AA@@@@@@@A@@BC@@@@@@B@B@D@BBDB@@BAB@BA@ABA@AB@@@FBBBFDDDB@@@B@X@B@F@D@@B@@@@@@@B@B@@BBB@D@B@B@B@@@@@F@B@@@@@B@@@B@B@@@B@@A@ABA@C@@BA@@B@@BB@@B@B@B@@B@@BB@BA@@@A@@B@B@@@BAB@DB@BB@BAFA@@BAAGBC@ABEBC@A@A@A@C@AB@LCB@D@BA@ABA@A@C@A@AB@B@@@B@BB@BB@BB@@B@BBB@DBB@B@@@@B@@EP@B@B@B@BBB@D@BBB@@D@BBB@B@@@@B@BADCDEFAFADBB@B@B@DADAF@BAD@@BBB@B@@BBBAB@BAD@DAB@D@D@BAD@F@F@B@@@@@BA@@D@DA@@BGBAAA@CAeKWGWGkS]EQAMBEBTRPRLLRPJFFD@@@@HDLDD@lN\\FB@TBlC^GXCNCTEZETIBCPOLSTePY@AL[LaT_BGVSB@`IH@DIBG@GBEFCFA@A@AAAAAE@A@AE@A@ABAB@BBB@@BD@BABCBA@CBIBKBEBG@AACA@CC@EBCDCBE@C@A@A@CA@@CBA@@DCBC@ABA@AACAAAAAAAAAAC@E@E@A@@AA@ACAAAG@A@CBGBCBA@@AAC@E@CB@@EB@@A@@B@B@@@@A@@@A@@@AB@@A@@@A@@@A@ABA@A@A@EAA@A@@@A@C@@@@B@@A@A@ABCAA@" ],
												"encodeOffsets" : [ [ 117341,
														31189 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));