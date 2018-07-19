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
									'黄石市',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "420202",
													"properties" : {
														"name" : "黄石港区",
														"cp" : [ 115.070164,
																30.230086 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@AGBSBKHMVUNEGEACAAFC@ABAAA@@AAA@AAA@AAA@C@@@@@@@@@A@CFAB@@A@A@AAC@A@@@@@A@KAE@C@A@CDABEDA@ABC@E@G@QBK@EBA@ADAB@@BB@JADADC@EBE@EBA@E@A@C@ABCBA@A@B@BB@BB@BB@@@BBB@@B@JBBHBFFFBDBFBBBBB@J@JAD@D@B@@BAD@BB@B@JCHCD@D@BB@@@DBFDDB@L@LAB@JA" ],
														"encodeOffsets" : [ [
																117842, 30986 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420203",
													"properties" : {
														"name" : "西塞山区",
														"cp" : [ 115.153354,
																30.19365 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@DIDEFENMHENKHEFGPMJGLKHCLMHGGBG@EBGDCBAAAGACAA@@CA@A@@@ABADAB@BC@@@@@A@@A@EBC@A@E@C@CBA@A@ACCCCA@@@A@AA@@AA@AAAAAC@@CCAA@AAABA@@@@@AA@AAA@A@A@@B@@ADAF@B@B@BA@@@ABC@GA@@A@@CAA@@@@A@E@ABA@@@AACA@AA@ABA@CBCBA@G@C@A@CACBCBKDEBEFE@A@A@A@@@@@CAA@CBCB@BAD@BAF@@BB@@B@B@@BBB@FBD@B@@@BAB@B@@@B@@@DBB@B@BAF@D@B@DBBAB@BABAB@B@B@BAF@@@D@BAB@B@D@@ABA@C@A@AAA@AA@@A@A@ABA@AACAIA@AA@@AA@A@AAA@CAA@A@ABCBEDADABA@@@A@AAA@@CAA@@A@A@A@@@ABA@GACAA@AC@AA@AAEAC@A@CB@@CBGDA@A@CAEACGCA@CAAAA@@@C@AAE@A@AA@AAC@A@C@EBAB@@ABBBADABABEBEBC@I@C@A@CAA@C@GAA@@@EBCDIBABCBAA@BCBAB@@@HBDBBD@B@HCBAB@DAD@DAB@@@B@BBD@B@JJBBBDBDHN@@BDD@BBDBLFBBFBDDB@B@D@F@LBB@@@@@B@D@BBB@B@@@BADEB@@@@@@@@@D@B@BBB@BBB@BB@@BBAB@BEDBBBDHFVK\\ElCB@D@LBHDNJHDHBHBJADAFAFAHAHAF@NA" ],
														"encodeOffsets" : [ [
																117975, 30939 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420204",
													"properties" : {
														"name" : "下陆区",
														"cp" : [ 114.975755,
																30.177845 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@A@CCEAAAKECAAAC@AC@@GMACACAAIIA@C@AAA@@@A@CBC@CBA@ABGDA@C@AAAC@G@@BADA@AA@@@CBABA@I@M@SAE@K@ACACACAECCCCE@MCIAE@GBUBG@O@A@A@C@EBCFADKHGD@BGF@B@FBBDDBB@B@@F@DB@@HCB@BBBBB@BDBBFB@BFLBF@FDFHH@DB@B@F@B@BAB@BABADGBADAD@@@F@D@DB@@DB@BBB@FBBBBB@D@BBBD@@B@B@@@D@D@BBFDD@H@B@DCFCDC@@@@B@@BBBB@@B@DB@@D@@B@B@BBFBBBB@D@B@@B@@AD@D@B@@A@ABA@CB@@@@@B@@B@D@@B@@B@B@DABAD@B@F@B@FAF@FAD@BCBC@IAA@@BABCB@FAL@RAH@F@D@BAB@FCBADC" ],
														"encodeOffsets" : [ [
																117831, 30933 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420205",
													"properties" : {
														"name" : "铁山区",
														"cp" : [ 114.901366,
																30.20601 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@CGGCE@EAEEK@AEAAAACA@AAAAA@GD@@CAE@@@@AGC@@C@@@CBGBCBA@A@EFADAB@D@B@@@BA@C@ABA@@@A@@AA@A@ABC@GB@@A@ABAB@B@B@B@@@@HF@@@B@@ABCD@@ABEDEDGD@BCBA@ADAB@B@B@B@B@BAB@@ABAB@D@B@DDBDD@@@B@D@B@@B@@@H@DBBCFCHCRAHAFADCDAHAHATEHCHAFANAFADABABABCDC" ],
														"encodeOffsets" : [ [
																117699, 30938 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420222",
													"properties" : {
														"name" : "阳新县",
														"cp" : [ 115.212883,
																29.841572 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@diBAFGHIFGFGDGPWHOBIDEBMBG@IBG@IAG@E@G@CBEBGDGFIDEFCFEFCFCHCHEFCFCDEFCLSJQFIT]JGNINEJEDI@GAGAGCI@KBGBENMHEHAHCHEFGFEDIDIDMFGFGJIFEHCHED@DChSdGLA@ACI@A@@@AAA@@@A@@@@AA@@@E@AAA@ADE@@@@@@ABCBOCEACAC@EAGCACGEEG@GAIAEAEBG@ECECGCGAIAGBGFK@EDUCEEEGGGCGCEEICIEGECCCCEEIIGGGEAECCCECEGGICGE@@@A@AGG@@@@A@C@AB@@AAA@EECACA@@ICAAEEMMCCEA@ABA@AAA@ACCAA@@ABCDCBA@@@CA@@A@@@ABABA@AAAACAEBC@C@OEGCCGEEA@C@AAA@AA@@A@@@ABA@@AA@@@ABCBA@C@@@@@@C@AA@CA@@AC@@ECAE@@C@A@@@AAA@CA@AEG@AA@A@@BA@@BEDA@@@G@EBGHEJALBHFH@J@HAHEBGBI@MAKCMAIAGCKDQDK@MAO@IBGAICG@EDIDG@I@I@GBIDEFIJCJGJKHGFK@EAECAACEAEAE@EBCBGBAFEDCHEFAF@JAFBH@FAHCBE@E@CAGCCAAAAA@A@A@@AAAAAAA@A@A@ABC@A@A@AAC@A@C@@@AB@@@B@BAB@@A@AAAAAAAA@AAAA@ACE@A@ABABA@@BA@@@@@AA@AAIAGA@AA@BA@ADAB@B@DADADABAB@B@@@@@B@@@@@@@B@@@@BD@BBBBFB@BB@F@H@HBFBFBFBFAHABCDE@E@@@@A@A@AA@@A@@AA@@@@@AB@@@@A@@@@@A@@@@@@A@@A@@@@@GCA@AA@@AA@A@A@A@AB@@A@@@A@@@@@AA@A@@@CA@@@@@@@@@A@@@A@A@@@@BABCB@@A@@@E@AB@@AEIAIAG@I@QBGAGDIFI@ICCCCG@EAG@G@G@EB@@EAC@E@ABEDABGBCBGDMFCBC@E@CACAC@ABCBAD@F@BDDDBBBBF@D@@@BBB@@D@B@B@@@@@B@@BABB@@B@@@BABAB@@BBDH@D@BABCDIFCDCBA@A@AA@@AAAAAAA@A@E@C@ABCBA@AAA@@A@A@@A@CAA@A@C@A@CCAAA@A@A@A@A@A@C@@@ABE@@AAA@AAA@@A@@BC@ABA@CA@ACC@@A@A@A@AD@@AB@BABABC@@@CDAB@@@@A@A@A@AA@@AB@@ABCDADADAD@BC@GBC@ABABAD@BABA@A@A@@@@AACBCACA@A@@AAAC@CAA@C@E@ABABC@A@AAEE@CAECCEAE@UBGDI@GBEHCBEBCDDTBRMBQDK@K@EBAF@HDHAFKLGJEDADAJ@F@HDJDTADABGHCDEHCJ@D@XADU`ADAF@@EBWDOBC@AD@BBJ@DCHCF@B@B@D@B@HEJEHABA@CBCBC@G@G@ABEBCBA@I@C@EAE@K@ABA@@@A@A@A@@E@@@@A@E@A@A@A@@@ABADC@A@E@ABC@A@A@C@A@A@A@@DCBCBE@CBG@AACAGA@ACBEFQLGHEFADAD@FBFJLBJBL@JFHFJ@FAFCHAFBDBLBNAXABC@O@I@GBCBABBL@HBDDHBHBBAHBDDT@F@DBDDD@BBB@PBBBBB@TCJAL@NI@EBCDEDAFAD@FBD@BDDD@B@D@@B@LADAB@HAH@REJA@ABA@C@A@AJ@LCVGNALAJAZCTC\\ENCDCFAJAD@H@D@FAD@FBB@DBB@D@F@FBFBD@@@@BBBB@BBFBFDHDBF@B@DAHAL@D@B@B@B@B@@BB@BB@BB@@BBDB@B@@@B@@@@A@@BB@@@@D@@@B@@A@ABA@@B@@@BB@@B@H@FAHBHBFBDDFLHHDLHFFJFFDBF@DBHBFAFBHBFHFRBPDJ@L@JBDD@@B@D@FADAB@B@B@BBBDBBDDDD@BD@@@@B@@@BA@@@AAAB@@@@@D@@@D@F@@AD@@@D@B@@BBBD@D@@BBB@D@B@FEFAB@@ADAB@@@B@D@B@B@BB@@@FB@@BB@FBB@DBBB@DBDBB@AD@B@BAB@B@FDFF@BDFFFB@BBBB@BBD@B@@CBC@EBIFGLIPGFGLEHCFCFCFEJAFAFENCJAFBFCFBHBHDDJDJDN@LAJCJAHCD@L@J@H@HAJCDCFCJAJAJBN@LAHBLBLDJFHDHFHFJJBDDFBD@DCF@D@DDDDBD@DBDBDADBB@D@H@B@DADAB@BAB@@BDBBB@@B@BAF@B@@@@@BB@DB@@@HBD@BA@@B@@A@A@ABEBC@@@AB@B@B@BBB@@B@@@@ABBB@BBBDD@@BDBBBBB@@BB@@B@B@@DBDDBDB@B@DAD@F@B@D@FAB@@@@B@@@@ADA@CBAB@B@@@BDB@@BBBDBHBBDAHCFAH@HA" ],
														"encodeOffsets" : [ [
																118040, 30875 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420281",
													"properties" : {
														"name" : "大冶市",
														"cp" : [ 114.974842,
																30.098804 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@[FSDYDIBKBMBUHKDI@@B@B@DAB@BIBQFG@GBA@CBKBA@@@@C@ACCACC@EAC@EBCBCFAD@FMJK@IBSDA@AAAAAAG@E@CBCBA@ECEAC@YHIFG@CDCBI@GBA@ADAHABC@MBG@I@}RSHEBABBBBD@F@FEFEBGBGBEAMCMAMCE@EBCBAB@D@DBDEDEBAACAYIA@CBBDBFDFFBH@HBDB@B@BGLCFA@K@GBEBCF@@@@@B@@BB@@B@B@FDFHB@@B@B@@@B@@AB@@@@ABA@@@@B@@AB@BA@@@A@A@@BA@@@@@@@@@@@@B@@B@@@@@B@@@@@BB@@@@@@BB@@@@@@@@B@@@@@@B@BB@@@@B@@@@@@ABABA@@@@@@@A@@@A@@@@B@@@@@@@BB@@BB@@@@B@@@@@B@@B@@@@@@@@B@@BB@@@B@@@B@@@@@B@@@@B@@@@@@B@@@@@BB@B@@@B@B@B@@@@BBBABAD@@ABABABCDAB@DBBBB@BABABC@A@@B@B@B@BBB@BB@@BBA@@BADADCBA@AB@B@B@B@B@B@@B@BBB@@@B@B@@ABAB@B@@@BB@@B@@BB@@B@BAB@BAB@BAD@BA@@DAB@D@BB@BB@@BA@ABCBABAD@BABABE@A@ABCFCHCFAFAF@D@D@FBDADDCFCDABALAHGDEFADCFABCCACACAAC@CDCDCF@FDBBD@B@BAD@B@@B@FBBB@DBBBBB@B@D@@BBB@BBDAB@DABABBD@B@BBFBJBJBHDD@D@BADABCBCBABABAB@FAB@AAB@@AB@B@@@@ACB@AA@@@B@BA@@@@@AA@@@@A@AB@@@FB@@@A@E@@AC@ABC@A@@AAA@@A@@BCDE@G@@BABAB@FDF@FBBB@@HBFADCDAFFDDHDJ@FAF@D@BHBFDL@DIHADBDFFFBFBFBDEBEBCBCHAH@FBFBDF@DDBFDFDFBBFBDBDCDEBCDCD@FAHCDAD@FFFDDDDFDFDF@DADADCD@@DADCDCFCDCHEFBDANCNCFEDCBC@EB@FAH@BADIDIFCBCDCD@D@FFLDDFDFBD@D@D@@BABCDAD@DBDRHBBBFKHCBEBC@M@CBCFCDEFMFEDCFGDCF@FCDCDEDKFAF@N@FBHAFAHCHAHDJFBF@FD@F@FDDBDHDHDLDJFDDBFEFABADABAB@BDFBD@FBFDFDDDHHHJLRLDBD@BBHAB@@@@KBE@ADEBAB@DA@A@CAEBABADCD@DAD@F@F@B@BAFE@@B@F@FCLCJAHAL@H@FDCHAH@D@DHJB@NBL@NDX@@@F@J@D@JIDCBA@CAK@C@EBCDEHCFCFAFAF@F@FBDADADCBCBCDABA@CAC@AGCCCCAAAAC@ADEFG@A@C@EBEBACAG@@@A@@@@A@C@A@@CCCA@C@A@CBABA@@BA@A@A@A@A@ABABCB@DA@AHCFCFCBA@@DCBA@@@A@@GE@@@@@A@A@ABABAB@@@HAD@BAB@B@@BB@@@B@BAD@B@@A@@@A@CBABCFEB@B@DAHADA@@D@@@HDAACCAA@E@AHE@AHCLGBCDEFAD@B@B@P@H@VAHAF@JBNDF@DDDDBFBDBDBDL@F@TBN@J@B@BADA@@B@BBDABAJADCFA@@B@HBD@B@DBB@D@J@D@FAFABABABCAABA@@BAFAD@B@D@BBB@@B@BBF@B@D@@BBBB@DDBDHFBDBB@B@HCDA@@DAB@D@FBBBB@@BBDB@DBHBB@BA@@B@B@B@@@BB@DB@BBB@@@B@BABCFCDABAB@B@DBB@BBB@B@@BB@@BJBDBBBB@BAB@B@@@BBB@BBB@D@B@BA@@@C@ABA@A@C@@BE@A@A@ABABA@ABAAA@C@A@CBE@A@AAA@C@@@A@@@ABA@A@@@AAC@EAA@AA@A@@@AA@@BE@ABC@ADADAB@DB@@@@B@B@B@F@FEFALCDACACAC@CACC@C@CDE@CACCEACIIGEGEGCIEKCKAGAKBM@IAIBIBEDCDIDGBG@I@K@C@GDIBIDKBM@ICICCCAGAGDEAEBEDIFMBEBEFIDEDEDEFGHKHEJOHKJEFAD@DA@@@AAC@AAAAAA@EECE@AEEECA@A@ABA@C@@BAAAC@CAACAA@EAA@@AA@@E@@AAA@A@C@A@@@A@CB@BA@EBEFA@C@A@AA@@@CACAA@@@A@C@@BC@@@E@C@@@C@@@@BABB@@B@@A@@@A@@C@@ACCCCAAACAAA@A@A@CBEBC@A@@@CCIAK@I@OCQAGEAEAGBEAEAG@CAEECIEEEKGGCKGCEACAEAGBG@E@G@AA@@A@@@AB@BAB@@@@A@@@C@@A@@AB@@@@@@A@@@ACAAA@@AAA@@AAA@@@A@A@A@A@CBKBG@C@AAEGCECEAAAA@AA@A@@C@EAEAE@C@A@CAA@EAC@EBC@G@C@IBEBCDMD" ],
														"encodeOffsets" : [ [
																117637, 30576 ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));