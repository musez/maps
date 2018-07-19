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
									'阳新县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420222",
											"properties" : {
												"name" : "阳新县",
												"cp" : [ 115.212883, 29.841572 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@diBAFGHIFGFGDGPWHOBIDEBMBG@IBG@IAG@E@G@CBEBGDGFIDEFCFEFCFCHCHEFCFCDEFCLSJQFIT]JGNINEJEDI@GAGAGCI@KBGBENMHEHAHCHEFGFEDIDIDMFGFGJIFEHCHED@DChSdGLA@ACI@A@@@AAA@@@A@@@@AA@@@E@AAA@ADE@@@@@@ABCBOCEACAC@EAGCACGEEG@GAIAEAEBG@ECECGCGAIAGBGFK@EDUCEEEGGGCGCEEICIEGECCCCEEIIGGGEAECCCECEGGICGE@@@A@AGG@@@@A@C@AB@@AAA@EECACA@@ICAAEEMMCCEA@ABA@AAA@ACCAA@@ABCDCBA@@@CA@@A@@@ABABA@AAAACAEBC@C@OEGCCGEEA@C@AAA@AA@@A@@@ABA@@AA@@@ABCBA@C@@@@@@C@AA@CA@@AC@@ECAE@@C@A@@@AAA@CA@AEG@AA@A@@BA@@BEDA@@@G@EBGHEJALBHFH@J@HAHEBGBI@MAKCMAIAGCKDQDK@MAO@IBGAICG@EDIDG@I@I@GBIDEFIJCJGJKHGFK@EAECAACEAEAE@EBCBGBAFEDCHEFAF@JAFBH@FAHCBE@E@CAGCCAAAAA@A@A@@AAAAAAA@A@A@ABC@A@A@AAC@A@C@@@AB@@@B@BAB@@A@AAAAAAAA@AAAA@ACE@A@ABABA@@BA@@@@@AA@AAIAGA@AA@BA@ADAB@B@DADADABAB@B@@@@@B@@@@@@@B@@@@BD@BBBBFB@BB@F@H@HBFBFBFBFAHABCDE@E@@@@A@A@AA@@A@@AA@@@@@AB@@@@A@@@@@A@@@@@@A@@A@@@@@GCA@AA@@AA@A@A@A@AB@@A@@@A@@@@@AA@A@@@CA@@@@@@@@@A@@@A@A@@@@BABCB@@A@@@E@AB@@AEIAIAG@I@QBGAGDIFI@ICCCCG@EAG@G@G@EB@@EAC@E@ABEDABGBCBGDMFCBC@E@CACAC@ABCBAD@F@BDDDBBBBF@D@@@BBB@@D@B@B@@@@@B@@BABB@@B@@@BABAB@@BBDH@D@BABCDIFCDCBA@A@AA@@AAAAAAA@A@E@C@ABCBA@AAA@@A@A@@A@CAA@A@C@A@CCAAA@A@A@A@A@A@C@@@ABE@@AAA@AAA@@A@@BC@ABA@CA@ACC@@A@A@A@AD@@AB@BABABC@@@CDAB@@@@A@A@A@AA@@AB@@ABCDADADAD@BC@GBC@ABABAD@BABA@A@A@@@@AACBCACA@A@@AAAC@CAA@C@E@ABABC@A@AAEE@CAECCEAE@UBGDI@GBEHCBEBCDDTBRMBQDK@K@EBAF@HDHAFKLGJEDADAJ@F@HDJDTADABGHCDEHCJ@D@XADU`ADAF@@EBWDOBC@AD@BBJ@DCHCF@B@B@D@B@HEJEHABA@CBCBC@G@G@ABEBCBA@I@C@EAE@K@ABA@@@A@A@A@@E@@@@A@E@A@A@A@@@ABADC@A@E@ABC@A@A@C@A@A@A@@DCBCBE@CBG@AACAGA@ACBEFQLGHEFADAD@FBFJLBJBL@JFHFJ@FAFCHAFBDBLBNAXABC@O@I@GBCBABBL@HBDDHBHBBAHBDDT@F@DBDDD@BBB@PBBBBB@TCJAL@NI@EBCDEDAFAD@FBD@BDDD@B@D@@B@LADAB@HAH@REJA@ABA@C@A@AJ@LCVGNALAJAZCTC\\ENCDCFAJAD@H@D@FAD@FBB@DBB@D@F@FBFBD@@@@BBBB@BBFBFDHDBF@B@DAHAL@D@B@B@B@B@@BB@BB@BB@@BBDB@B@@@B@@@@A@@BB@@@@D@@@B@@A@ABA@@B@@@BB@@B@H@FAHBHBFBDDFLHHDLHFFJFFDBF@DBHBFAFBHBFHFRBPDJ@L@JBDD@@B@D@FADAB@B@B@BBBDBBDDDD@BD@@@@B@@@BA@@@AAAB@@@@@D@@@D@F@@AD@@@D@B@@BBBD@D@@BBB@D@B@FEFAB@@ADAB@@@B@D@B@B@BB@@@FB@@BB@FBB@DBBB@DBDBB@AD@B@BAB@B@FDFF@BDFFFB@BBBB@BBD@B@@CBC@EBIFGLIPGFGLEHCFCFCFEJAFAFENCJAFBFCFBHBHDDJDJDN@LAJCJAHCD@L@J@H@HAJCDCFCJAJAJBN@LAHBLBLDJFHDHFHFJJBDDFBD@DCF@D@DDDDBD@DBDBDADBB@D@H@B@DADAB@BAB@@BDBBB@@B@BAF@B@@@@@BB@DB@@@HBD@BA@@B@@A@A@ABEBC@@@AB@B@B@BBB@@B@@@@ABBB@BBBDD@@BDBBBBB@@BB@@B@B@@DBDDBDB@B@DAD@F@B@D@FAB@@@@B@@@@ADA@CBAB@B@@@BDB@@BBBDBHBBDAHCFAH@HA" ],
												"encodeOffsets" : [ [ 118040,
														30875 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));