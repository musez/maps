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
									'丹江口市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420381",
											"properties" : {
												"name" : "丹江口市",
												"cp" : [ 111.513793, 32.538839 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@OWCMAMHQFMBQEKAEAIBGFGL@TPDHFFFFFDHBFCFCHIBG@IAGDMCWBEFCLEF@NENEJINEHCPAhEPEPGLCJMFSJOFSB@BA@@DEBC@ABADCBABA@C@A@CCC@@BA@AB@BAB@BCDC@@@C@ABGBA@A@ABC@ABBBAFCD@BABCB@BAB@FDB@B@B@B@@AB@B@@AB@B@D@H@DBB@DDBD@B@@AF@@BD@@DBF@BAB@B@B@B@D@BBDDB@@BAD@@AB@D@D@B@BB@@BB@BADCB@BABA@CBAFGBABABA@A@AACAAA@CAAAAAAC@E@CBA@C@A@A@A@AAACAACCECA@CACA@@AABC@EDCBEDABCFA@@BA@C@A@A@@A@A@A@A@@BAFC@ABA@AA@A@AAEFEDABAB@BA@CBCBC@A@AC@ADCDADADAFEBADAD@HAJBHAH@BBD@B@FABGDAJBBC@CAECCC@@CBCFADAFC@A@CBCDCBAFAFAPMB@BAFALELGDCJURSCMDMBEDQLMRORMLKNGNEJALFDI@G@SEKGMIMMOUS@EBC@A@@ACA@CEAAAC@AIIGKE_MQMNCAIGGACBAA@CA@C@A@AA@@ACAC@A@AAAAA@ACCCC@AC@@@A@CBCBABC@AACCCCCEA@AAA@@BC@E@A@A@@A@A@CB@FCDABABC@@@E@A@A@@DCDE@A@AECGGIIMKKGSASCKEUQMES@CHUPMJKBGEACHGEIEKIGOEOIUIOACA@@@@IAGGKMEECQIQKGOEUASCSGWMSQQMES@CAAAAA@@A@A@A@CB@DAFCBA@AAACECCAAGECAECECIFA@@@C@A@@B@@B@@B@@@BAAABEAA@C@ABADA@A@A@ACA@IEA@C@@@CDAB@DABA@@ECCAAA@E@AAAAC@A@ABEBCF@B@B@B@B@B@DABADAB@@IHOJQHM@KAKAOIGEKO[QMCOEIKScEGKKUIYAQASFKFGHIVANGRAFUHQHQDUCSIUEKKOEQDIHEHSFeICAEDBJPVCJI@MEKIMEI@KBOFKNGNCPChCdE\\G`C\\CPBFDBDBHAD@FAF@D@DBBDDFBBDDDBH@F@FBDBBBBFBBDBDBB@B@DFDFBBBBB@HBD@BBBD@D@FBF@BFBHDHDHBFDJDFDDFHDFDBFDLDLBFDLBDDDDFBF@D@B@D@B@B@@DHB@F@D@BDBDBDBD@FAJ@F@DCD@F@D@BADCDEBAFAB@FAFCD@@BBDABBBBB@B@DCFBHLABAD@BDB@B@B@BB@D@D@B@@DBBAF@DAD@FBB@BADABED@@@DHFBBHAFCB@BBAF@B@@DBBD@BABCBC@CAOFCBEBCBC@CBABAD@@BBBBDB@ABADB@@@FA@A@IAC@IBEFEDEBCHAD@@A@AA@@C@ABB@ABGD@@CDB@B@DABBBBBBBBD@BBD@FCDABA@CBAB@@@@@BBAD@BA@@B@B@BAB@D@@BBD@D@FBB@@B@@@@@DABABE@A@@@ABBDB@D@B@BAFABB@@@@BABCFAJED@BEB@JAB@@FBFDHDD@BA@GAM@G@CDCDCB@D@B@BAB@@@BB@D@@@AB@H@@BBDD@BBB@BAH@B@B@BBBB@BA@A@CBAB@JDHDBDBB@DCFAB@BBBDDDBD@F@@@B@BD@BABAF@B@BB@@@F@D@@BA@GBABA@AD@BDDAD@D@F@@BBB@B@D@@BA@CBCB@FHBD@B@BF@D@BBBF@BB@@ABCBCB@BAB@BBBDBD@DABADEBABA@@@D@BBB@BEFEDE@AB@DB@D@D@FCDABA@B@F@DBBBBDBB@@AAC@EBCJABA@C@C@A@@B@PDDBD@FBAFCN@BD@FBDD@BBBBHB@DBBABBDBFBB@D@F@BBDDDBDBB@DAD@D@D@BBB@DBB@HBH@B@D@D@DA@@DABADAFCFAB@DABAB@BAD@H@J@D@JDB@B@H@F@@BBB@BJDBDOTELANANDTLXLRRPPPDRDXHZRPTJXTLLNJVHdDVHXRFVB^L`JHP@HEBKFK" ],
												"encodeOffsets" : [ [ 113924,
														33747 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));