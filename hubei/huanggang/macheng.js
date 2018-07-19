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
									'麻城市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421181",
											"properties" : {
												"name" : "麻城市",
												"cp" : [ 115.02541, 31.177906 ],
												"childNum" : 3
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@DADC@G@I@IDKBCHEFCHAB@BA@AAC@C@ABAFAD@H@D@FBB@B@BCDIBCFAH@NBJBDBDAB@@A@AECCGAG@CBE@AACCEEKAGEECC@CAC@C@CBE@A@EAEGKCC@A@EBADGDEBI@K@GAICACGCE@GAIBGBCDCDCFMBEDAD@JBHBFAHAHCFAF@D@BAPQ@EAGOSACAABATIFBDBHFHJJDHBHAHAJEFIHKDAHANBHFJDJFDHFHHJB@B@JAPED@D@JDNFF@HBFCVQHCBABCACCIKKACKCAAA@@CPQ@A@EAAQIAAAA@ADA\\ERAFADCDEDAB@B@BDBFBBFDHDHFDB@@BCBCD@D@DBBBF@F@BADADABCDID_BEDIDCD@D@DBFFB@B@BA@CBICCCE@E@GAICKAC@EBA@@BA@@@@B@HCFEDA@EFIDCF@EKEMEKCGEICKCMAICGECECGCGCGAGEGECEECEEECECCCEEEGEE@EFCFEFAFAFCAECIAI@G@GAECIEEECGGCEEAGEEAACAEBGDAFCF@JDNBA@@A@A@G@A@A@CAAACAA@GAA@AAAAACCGCAAEEEEEGKIEEEGCGCGCICKCOKQI_AMIOCIAICIAI@GAECEEGAEEGECIAE@G@E@M@E@I@I@G@IBGFGFGBEDE@IBEAEEEEAKEGCEDIDGFGBEAIEGEEIAG@EAKEKAABAN@H@HBFEFGDCDEDGDEEAGCICEGEI@E@IDGBE@EAEGCCECI@IAGAC@GAECEGAE@GDIDKCEICGCGCIEGEGEEEEECECCOMALAJCJEJCHCDCDCFCBC@AB@DAB@B@@AB@@AAC@GCG@CACBG@EB@@@@A@@@ABA@AB@B@@ABAB@@@@@B@@@@@@B@@@D@B@@@B@@BBB@@@B@BA@@BA@AB@@ABA@ABA@@@A@@@A@A@A@@@A@@@@@ADA@AB@@A@@@@AAAA@@AA@AA@@GDCBEDCDCD@B@@@BB@@@@@BBBBDB@@@B@@BB@@BBBB@B@@@BA@GDCBA@CA@@AA@CA@@@A@ABA@C@A@C@@@@@A@AAA@A@A@A@A@@BABABA@A@CBCFCDEBCHABADCD@@ABA@@@@@A@@B@B@@BBB@@@@B@@AFAD@@AB@B@@@BB@@B@@B@@@BB@@@@@@@B@B@@@@@BB@@BB@B@@BB@@B@@D@@@B@@@B@@@@@@@@BADAB@@A@A@@@A@@@AAA@@AA@A@@BCDA@AB@@CB@@A@@B@D@B@@@B@@BDBBD@B@@@B@BBDB@@BBBBAB@@@BABA@@B@B@@@@B@@BB@@B@BAB@B@@@BB@@@CBAB@@AB@@@B@@@@A@@@@@@A@@@@@@@@A@A@@@A@AJBH@JDF@HCFADCFEBEAAACCACBABCDCBE@CBEBCACCECC@C@@@@@@B@@@@AA@A@@AA@A@AA@@@@@@@A@@@A@@@@BA@@@A@@@@A@@@AAAAAC@@@@CAC@C@CBA@CB@B@@@@AB@B@@BB@@@D@@@B@@BDBB@@A@@@@B@@BB@B@@@AA@AA@@@@@@@@@@@@A@@@@@@A@@A@@@@@A@G@C@@@@@@A@@@AAAA@@@@@@@@B@@A@@@@A@@@A@@A@@@@@AB@B@@@@@B@@CB@@AD@BABBfB@@@BB@BB@@@B@@@B@@BB@@@@@@@@@B@@@BA@BB@@@@@ABAB@@A@@B@@@@@B@@@B@@@B@@@B@@@@B@@@BB@@@@@@@B@@@B@@@@@B@@AB@BA@@@@@BB@@@@@@@@A@@A@B@@@@A@@@@@A@@@@@@@@@A@@AA@@@A@A@@@AA@@@@A@@@@@@B@@A@@@A@@B@@@@A@AB@A@@@C@@@@A@@A@@@A@@A@A@@@A@@@@AA@A@@B@@@B@AA@@@@A@@@A@@@@@A@AB@@@@@@@BA@@@@@@@@@@@A@@@@@@@A@@@@@@@@@AB@OU@BCACCCACAECCACAAAGBG@EBEBGAEAC@CCECGEGAAA@AAA@@@AA@@AAA@AA@A@AAA@@@A@CBAAEBA@@AAA@AAABABABCB@D@DAF@B@D@BABAB@BA@@@A@@B@@A@A@AAA@@@AB@@@@ADABC@@DABE@AAEECEACICE@@AECCAA@@A@CA@@A@C@A@@@A@A@C@A@C@A@A@C@A@A@@@AB@DAB@B@@A@C@A@A@A@A@ABA@@@@AAA@@C@E@A@@F@@AB@B@BBB@BA@A@AAA@A@A@CBABABAH@BA@A@@B@B@BA@A@EDA@A@AB@@@B@BB@@BBB@@B@@BB@@D@BBD@F@BABAB@@AB@B@B@B@D@D@B@@@@A@@BA@@@A@A@@@AACAAAAAAA@@A@@@@AA@@@@@@@A@ABAB@@@@@B@@@@B@@@B@@@@@@@B@@B@@BB@B@@@BB@B@BB@@BB@@A@@@@B@@@B@@@@A@@B@@@@@@@@@@@@@@@@@A@@A@A@A@@@@A@@A@@@A@@@AA@@@@A@AAAAAAAAAACAACCAAAA@@@AA@@@C@EAGACAAACACCI@CAAAAAAAAA@A@@B@BCDAD@B@@BBDB@BBB@B@@@B@@AB@@@DAB@BAB@B@B@BB@@BB@@@@@B@B@@@B@@BB@@B@B@BA@A@A@C@CAABC@@B@BBBBBADADC@C@A@C@EAC@CCCACAEE@EA@CAC@ECAAE@@@A@A@A@A@A@C@A@CAA@AA@@@@A@AB@@AB@@@@@BA@@@C@A@@@A@@AA@A@AB@BCHIDEDGDEFEHCHCL@JFFFDFHFDHHFFDHBHEDGDIDGFCHCHCFALFPHHHDL@HCH@LAFAH@HBDDHDFBHBHBJDFDB@DDFDFDFBD@FD@@A@CFA@@B@BCBADA@CBAB@@CDAD@@FPIJ@FEHGDCD@FFJC@ABAB@B@B@@BBB@B@BB@BB@@BAB@BA@ADABABABCD@FJL@FBFDHDHDJFFDFFHDFHHFFDFDH@JAHAHFFHDDBFDFDHFFDFHHJNNJTDJBD@FCHCDGFMLGDIHEFCHAF@HAJ@HAJAHALAJ@HFJDFHBHFHDDFDBDFHFBFBFFHDDHDDDDDBHBB@JDDDFDHBH@JAJAH@JCRAH@BBFDJHVBHFDJ@D@FDDDJLFLDDD@RDPBH@DA@ABK@APAD@HDHDDBJBJ@LDFBDDBBDBFAFALKHEBAD@@@BD@FBDDFFBHFJHHDDBDDBDDBHBH@HADABCBOFIDCB@B@D@BABAFGDAD@B@BDDJ@J@DB@LDDBB@@DADQP@BBDPFBBHNJPFNBBF@F@BA@G@CDALGHAD@HBB@B@@@@A@A@@@@DA@@@AB@BBB@@@@@D@BAB@B@DABA@@BD@@B@@ABA@@@AD@BBB@@@@AB@@@B@B@BBBAB@@@B@B@@@B@B@@@BA@@@@B@B@B@@@@@BA@@@@D@B@B@@@@@@@BB@@B@@@@AB@@@@@B@B@@BB@B@BABB@BBBBD@@@BA@GB@BAB@BABB@B@JBFBJDNLBD@BABKJCF@D@FDFFD@B@BABE@EBAD@B@FBHFHPJLFLDBBBNAFCJAF@DBBTF\\DTBL@FALC" ],
														[ "@@AeABAAAACA@C@@@A@@@@A@@@@@@A@@@A@@A@@B@@@BA@@@@@A@@@@B@@@@CHAFADAD@DAB@BAB@@AB@@@@PV@A@@@@B@@@@@@@@B@@@@@@BA@@@@@AB@@@@@@BB@@AB@@@@ABB@@B@@@@@B@@@@A@@A@@@@A@@B@@@@@@A@@BA@@@@BB@@" ],
														[ "@@@A@A@AAAAAA@C@C@ABAB@B@BB@@B@B@@@B@@@@@B@@@@@BB@@@@@@@@@B@@@@A@@@B@@@BB@@@BA@@@@@A@@@@BABA@@BAB@" ] ],
												"encodeOffsets" : [
														[ [ 117938, 32361 ] ],
														[ [ 117698, 31765 ] ],
														[ [ 117746, 31739 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));