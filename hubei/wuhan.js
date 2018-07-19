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
									'武汉市',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "420105",
													"properties" : {
														"name" : "汉阳区",
														"cp" : [ 114.235807,
																30.520326 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@D@B@D@D@@CBC@CAK@C@CBABAD@DAHCFEDAF@FBJDFBD@D@DADEFCHEHCJAJ@H@D@DAFADCDAHCDAF@JAD@FA@@@@@@NAJ@F@DBBDBBD@B@D@D@FBFBSgIWAC_iMMGGckGK@@AFEDGDCBA@EBG@IEKB@@GBEDABEHEHGJEDEDAD@DBD@@H@@@@@@@F@B@@@BD@B@D@@ABE@A@A@@B@BBDDJBBB@BB@@JCB@BBBF@BAD@@@@ELCBAAGCCAA@A@GDGBA@CAC@IEGCG@I@GAKIA@I@C@IJABBB@BBBBBDFHF@BADAL@JAHADBDBBHBBBBB@N@@ABGAEBKFGJADADBDBB@BBD@B@BFADCDADEDADAB@DBBDBHBBDBDBF@FBDDJFHFHD" ],
														"encodeOffsets" : [ [
																116911, 31339 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420104",
													"properties" : {
														"name" : "硚口区",
														"cp" : [ 114.190568,
																30.61591 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@A@AA@@AA@@@AA@@A@@@CBE@@@@@@@@@A@@@AB@@ADC@A@@@A@@B@B@D@B@@BB@@@BBD@BA@@@@DKCA@@@@A@@@@@@AA@@@@@AB@@@@@@A@@@@@@@A@A@@@A@@@@AA@@@AA@A@@A@@@@@@AA@@AA@@A@@@@@@@A@@@@@@@@@@@@B@BA@@@@@@FC@@BA@@DC@A@@@A@A@@@AA@@@@@B@@A@@B@@@BA@@DC@@@@@@D@D@@@F@D@B@BBB@DBBBB@BB@@@@B@B@BAB@@@@@@@@@FC@@BA@@@@@@@@@@B@BAB@@A@@@@@@@A@@@@@@@A@@@@@@B@BE@@@@B@@@FDB@DBDEBA@AB@BC@@DGBEBABAACCAE@I@MB@@@@@@EBC@IBE@CBGDCBCDEBCBC@G@I@IBGDGFEDCFCBC@C@EAICEAE@CBEFGDCBC@ABAB@D@DBL@DAD@DC@C@A@C@CBABAB@B@BA@@B@B@@@@CBED@AE@E@CBABAB@BBB@BBBBH@@BFFFDBF@FAHAD@BBDB@BD@D@D@BALAB@@A@A@A@@BA@@B@@AB@@@B@F@D@B@D@B@D@D@@@B@D@BB@@@@@@B@B@D@D@B@T@@@H@@@@@" ],
														"encodeOffsets" : [ [
																116971, 31361 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420103",
													"properties" : {
														"name" : "江汉区",
														"cp" : [ 114.273109,
																30.588771 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@ABABAFCH@@ADA@@BABCFCAA@EC@@A@@@@@AFA@@@@@@@@B@@@@@@@B@@@@@@@BA@ABA@@@@@@@@@@@AB@@ED@@@@@@@@A@ABA@A@@@@@AAA@AACAA@AAA@C@E@@@C@C@@@@@@@CD@@AB@@A@@@@BA@@@@@B@@B@@@B@B@@@BCD@@AB@@ED@@@@@@ABA@@@@@@@@@@@@@@B@@@@@@@BB@@BB@@B@@@@B@@@@BBB@@B@@B@@B@@@B@B@@@@@@@B@@@@@@@BA@@@@B@@B@@@@B@@@@@DBCL@@@@ABC@AA@@A@@AA@C@A@A@@@@B@@@BCD@BA@@B@@@B@@@@@@@@AF@D@@@BB@@B@@BB@@BBB@@@@@B@@BD@@BD@@@BBB@@@BB@@@@BBDBDDFB@@FBFDDBFD@B@@B@@@BBB@FEHIFGDEDCBABABA@ABAA@@@BA@ADCDE@@@ABA@AB@BAB@DEACAAECCCAA@@EAEA@CBCBCHABAHCDA@@@@B@@@BABA@@DCDA@A@@B@@@B@@ABABAB@BAB@@AJA@AIMEAEAC@C@A@C@AA" ],
														"encodeOffsets" : [ [
																117028, 31298 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420102",
													"properties" : {
														"name" : "江岸区",
														"cp" : [ 114.30304,
																30.664911 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@IB@BA@ABA@ABAB@BA@@@A@@@@BCBCD@@ABAB@@A@@@@@CBGDABGBADAD@DFBFB@@BBDDFDBBBDCFA@ABA@@BAB@B@@CFCD@BAB@@B@AB@BABABABCDCFEHGJEFBBDBBBDBDBDB@@BBBBDDB@@BB@BBDDB@BBBDB@BBNHHL@@@BBFADAF@@@@CH@B@BFCBAFIBAB@FAFBFBDBDDHFHDFADAHG@ADCDCD@FBDBDF@DHFHDHFHBDBDBDBB@B@B@@BBBFHBB@@@@D@TEDA@@B@B@B@D@DBB@@@B@BADADEBABEBABCBAB@C@KCGC@@@@ECIEQOKKOQSQS]KQKMi{KQ" ],
														"encodeOffsets" : [ [
																117047, 31309 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420106",
													"properties" : {
														"name" : "武昌区",
														"cp" : [ 114.350344,
																30.546536 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@B@@@B@@@@AB@@@@@@@BAB@@ABAB@@A@ABCDABA@CBC@CAC@ACAEAAA@AAC@ABAACBC@AAA@AAA@AA@@AEACE@@@@@@AA@@@@@@@@AC@@@@@@@AA@AAA@AAA@@AC@@@A@C@ABA@A@A@AB@@@@A@AB@@@@@AGAEA@AA@AACCA@@@@@A@@A@@@@@@@A@@@@@A@CBM@A@A@@B@@@B@@@B@@BB@@@B@B@B@@@BAH@D@HDBBB@@@DDDDBDB@BBBBB@BB@BBBDB@B@@@@@@@@@BHHDB@@@@FB@@@@@@JBHBF@DBBBDDBDBB@@B@@@@@B@@A@AB@B@@@BBB@BB@@@BB@@BB@@B@@BB@@AB@@BBB@B@D@B@BB@@BBBB@BBBBB@@@@BDB@DADAD@BBD@@@B@@@B@B@@@@@B@BABA@@@@@A@@B@@@@@@AB@B@BA@@@@BA@@@@@@AA@@@@@@@@@A@@@@@@@@A@@@AA@A@A@@@A@A@@@ABA@@@A@A@@@A@@@@@A@@@@@A@@@@@@A@@C@@@@@@@@A@A@@@AB@@A@@@@@@AA@@A@C@CBE@AACCGAAAAAE@A@C@@@A@@AAA@@AA@@A@@@@@G@A@@@AEAEA@@A@AAA@@A@@AABA@A@@A@@AC@@@C@C@C@A@A@@A@@CAA@EAC@C@CACC@@@@AA@@A@@@GB@@@@A@@@@@A@CB@@EBA@A@@@@@A@AACAA@AAA@AAC@@@CAAACAACCEA@@@A@A@AA@@A@@AA@A@C@@A@A@@@AA@A@AAA@@CAA@@CACA@@CAA@@A@@A@A@AA@@A@@@@@@ACACAA@@@@@@@@@@@@@@@A@@@@@A@@BBF@D@B@B@D@BAB@B@BABABA@@@@@@@@@C@C@@@@A@@@@A@@@@@@A@A@@@@@A@@@@@@@@@@@AA@@@@@@AACAACA@@AACAAACCCACEAAA@ACA@@A@@AA@@AAC@EBCBEBCDEDIHNN`jBDJXThJN@BLRj|LNLRHGFCDABA@@DC@@@@" ],
														"encodeOffsets" : [ [
																117098, 31354 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420107",
													"properties" : {
														"name" : "青山区",
														"cp" : [ 114.39707,
																30.634215 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@FANARB^FlTXHXHfLDBB@BBHA@AB@@C@CB@@A@@@@@A@E@EBC@A@C@CBA@CBC@ABAAA@AA@A@AA@@BC@ABEBC@C@A@AAABCBEFEDCBC@A@A@@A@A@AAC@@@AA@A@CAA@A@A@A@AFO@@@A@@A@A@CAA@AAA@@@AAA@@AAAA@@@A@A@@B@B@D@BAB@BABC@A@KDA@@B@D@B@B@BADAF@BADBHAB@@EBABA@@ACAA@AB@@A@A@@@@B@@ABA@@AA@@@@A@A@AA@@AA@@@AB@@@DAB@B@BA@@@A@A@@@A@@@@@A@E@@@@@A@A@A@C@A@AA@@@A@A@@@@@@@AC@E@A@W@A@@@A@CCECAAEA@@A@@BAB@BABA@AB@@CAAAC@A@A@@@@@@@AD@@@B@@@@@@BBB@BBB@@B@BA@@B@@A@A@C@A@A@@@A@A@II@@@@CD@@ABCBEDGHT^" ],
														"encodeOffsets" : [ [
																117096, 31379 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420111",
													"properties" : {
														"name" : "洪山区",
														"cp" : [ 114.465718,
																30.560259 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@A@@@@@A@@BAD@BA@@@A@ABA@@BA@@@@B@B@@@B@@@B@@BBBBBDBBBBBDB@BD@@@@BDDF@@@@@D@@@B@B@BA@CBC@@@ABABAB@@AAAA@@CBC@A@C@A@CBA@@@@@@B@@@BBD@@BFBDDDBD@BDDDDDF@@BB@@DD@@BB@B@@@@BB@@BB@D@B@BA@AB@@C@@B@@A@@@@@@B@@@B@@ABABCBCBA@ABC@A@C@A@A@UDA@OBCAMICA@@CA@AA@AA@A@AA@@A@@@C@CAAAAAAC@CAEAA@CACA@@C@A@A@@AA@@AA@@@@@AAAAC@@A@A@ADAJ@LBDABABC@EACAA@A@AACACACACACEEACAA@A@ABCBCBA@A@@@AA@@@@@EBC@C@A@AAA@@AAAA@AA@@AA@AAA@A@AAC@@AA@AC@ABA@CB@@@@EBE@@@@@A@A@@@KBG@EHAJ@F@F@@@@@BAF@BA@CBABA@CBABAB@D@@@B@B@D@B@@@@CBC@CBE@G@GBK@M@G@E@AAACAA@A@@ACA@AA@@AA@@AA@AAA@A@A@@AAAAAC@@AA@@@A@@@A@@@A@@@A@@@@@@@AA@AAA@@@GAAAC@EAAA@@@BA@@BB@@B@B@B@@A@@B@@@B@@@B@@@B@BBB@B@@@BA@@@A@@@CBA@@BA@@@A@AA@@@@A@A@A@A@@@C@A@A@A@A@@@A@ABA@A@A@AB@@@@A@@@A@@@@@@AAA@@@@@A@@B@AA@A@@BA@@@@@AB@@@@@@A@@@@@A@@@@@@AA@@@@A@@@@@E@@AAA@@@@@@@AA@@@@@@A@@AAAAAAAAAA@@@A@@@A@A@@@@@@@@@@@CB@@A@A@ABE@CBC@C@C@C@AAACE@@@A@A@AAC@C@@@A@A@AACAC@AAA@AC@AAA@A@A@C@A@C@A@CBA@C@ABA@A@GBAB@@@@@B@B@@@@AB@@CBA@ABAB@@IBABI@EBGFEJCDIFIFE@@@EBE@@A@@AAA@AA@AAA@A@A@A@A@@ACAAAA@A@AAC@@AAACAA@CAGAA@@A@C@A@A@AAA@CC@AA@AA@@AA@C@@@AA@@@A@@@C@A@A@A@A@@B@@AB@@@@@@AB@@@B@@@B@@@@A@@@A@@@A@@@A@@@@BA@@@@BA@ABABAB@@@B@@A@A@ABA@@@A@@@A@A@A@@@AA@@ACAC@CAE@A@@@C@A@@@A@A@A@CBA@A@E@AAE@A@ABA@ABA@@@C@@@@@@AAA@CAA@A@@AAA@AAAAAAAA@A@@@A@A@CDA@AB@BABABABEJCFCF@@@BAD@@EDABA@@@@@CC@@@@AAAC@AAA@@@@@@@@@A@@@@@A@@B@@A@A@A@@@@@A@@@@@@AA@@@@@@@@@AA@@@@@C@C@@@CBA@@BA@A@IF@@@@@@ABGDMJDFJPdtNPVN@@BB``FHHLdlHHJGFCDCFADAFAD@BB@@BB@@@BB@BDB@BBDFDBDDBBDBBB@@DBBBBD@B@@@@B@@B@@@@@@@@@@@B@@@@@B@B@@@@B@@@@@@B@@D@D@@@@@@@@@B@BABA@A@ABA@A@C@A@A@CAE@AB@@@@@B@@@@@@@@@@@@@@@B@DBDB@B@@@@B@@@BBB@B@@@@BB@DB@@DBDB@@BB@DB@BBB@B@@B@@@B@BD@B@B@@BB@@@BBB@B@@@B@DFBDDBBBDB@@D@BBB@BBB@DBBBB@@@@@B@B@FA@@DAB@@@@@B@@@@@HA@@B@@@BB@@@@DDDBD@D@FBB@DB@@@BB@B@D@D@D@@@D@@BB@@@@BABBB@@@BB@BBB@@@FBFB@B@@@B@H@@@@@BB@@BB@BB@@@B@@@D@BBFBBBBDHBD@BAF@D@D@BB@@B@@@@B@@@BA@@B@B@@@@@@@@@@DB@@@@@@@@B@@@@@B@@@@@B@@@B@B@@AB@B@@@B@B@@@B@BBB@@B@@@@@@@@@@B@@@@@@@@BB@@@@@@AB@@@@ABA@A@@B@@@@A@@@@B@@@@ABABA@@@@@A@A@@@A@@@C@AAC@CBCBA@AC@@@@AAAA@AAAAA@@AAA@C@A@A@AA@@BA@@AA@@@AA@@AA@@A@@AAA@AA@@A@A@@B@BA@@@@@A@@@AAACCCAACAE@GAIA@@@@@@EA@@@@CAGG@A@@@@@@@@@ACAAA@AAAA@AAAAA@ACCCCC@@A@AAGCC@G@AB@@A@A@A@@@A@@AA@@@A@@@A@@@@B@BAN@D@B@@@@@B@@@@@@@BB@@@@@B@DDBBB@@BFBHB@B@@@@BAB@@@@@BAB@B@B@BAD@B@@@D@@BB@BBB@BBB@@B@@@@@@BD@@@@@@@@BB@@@@@@DFFB@BB@@BBB@BBB@BADBDAB@BBD@BBBFBDB@BBD@DAD@DABCBAD@B@BA@AB@BA@AB@@@@@@A@@B@@A@@@A@@@JJB@B@@@B@B@D@B@B@@@@AB@@A@AA@AAA@AA@@@@@@@A@@BC@@@@@@B@B@D@BBDB@@BAB@BA@ABA@AB@@@FBBBFDDDB@@@B@X@B@F@D@@B@@@@@@@B@B@@BBB@D@B@B@B@@@@@F@B@@@@@B@@@B@B@@@B@@A@ABA@C@@BA@@B@@BB@@B@B@B@@B@@BB@BA@@@A@@B@B@@@BAB@DB@BB@BAFA@@BAAGBC@ABEBC@A@A@A@C@AB@LCB@D@BA@ABA@A@C@A@AB@B@@@B@BB@BB@BB@@B@BBB@DBB@B@@@@B@@EP@B@B@B@BBB@D@BBB@@D@BBB@B@@@@B@BADCDEFAFADBB@B@B@DADAF@BAD@@BBB@B@@BBBAB@BAD@DAB@D@D@BAD@F@F@B@@@@@BA@@D@DA@@BGBAAA@CAeKWGWGkS]EQAMBEBTRPRLLRPJFFD@@@@HDLDD@lN\\FB@TBlC^GXCNCTEZETIBCPOLSTePY@AL[LaT_BGVSB@`IH@DIBG@GBEFCFA@A@AAAAAE@A@AE@A@ABAB@BBB@@BD@BABCBA@CBIBKBEBG@AACA@CC@EBCDCBE@C@A@A@CA@@CBA@@DCBC@ABA@AACAAAAAAAAAAC@E@E@A@@AA@ACAAAG@A@CBGBCBA@@AAC@E@CB@@EB@@A@@B@B@@@@A@@@A@@@AB@@A@@@A@@@A@ABA@A@A@EAA@A@@@A@C@@@@B@@A@A@ABCAA@" ],
														"encodeOffsets" : [ [
																117341, 31189 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420113",
													"properties" : {
														"name" : "汉南区",
														"cp" : [ 114.00124,
																30.309637 ],
														"childNum" : 5
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@BC@A@A@@@AA@@@ABA@@@AADAB@@@BBB@@B@B@B@BAB@@A" ],
																[ "@@ACABEBE@C@@DD@HAHA" ],
																[ "@@CAABAB@@A@CAEFB@BBB@B@B@DABABABA" ],
																[ "@@@BBABABABADADAB@BB@BBBBBB@FBFAH@H@HBH@H@B@@CA@A@@A@A@G@C@@BA@@DBDBBBD@B@BA@ABA@ABBBB@B@D@B@B@BC@BDB@FAJCLCJEBAAC@@@@AB@A@@@A@A@@@@@@@A@@@A@@@A@@@@B@@@BCB@B@BBBB@B@@@BFBD@BBDBBDDD@FBDBBB@FBJAHAJ@FAFAFAF@FBFBD@F@DAHADAD@DBDBFDDDDDBDBB@B@D@BBDBD@BB@@@B@DEFEBADCBABADABA@A@AB@JELEHCLCQMKIEIKiAAO{AO@MK_S_[YKGMAA@GBQJAFGPADCLMZMVONKJ[TUNOBQBKAqMSOOMQY]oACCEOUS[GS@C@A@EFGKC@AA@ICGCC@C@CFABA@EACACAKCI@CAGC@@ADBF@JALCFCHADEBEAGAG@IFOFCBEBCBEBCBGBCBGD@B@@AD@BADADABABCBCBAD@B@DBDBDBBBBDBBDBB@@@@BDNDDBHBD@D@P@BBBBBBBD@D@BB@D@B@@BDBBDDBDBB@D@BAB@@C@C@@B@D@B@DBBDDBDDDBBBBB@B@BBBBB@B@D@BB@B@B@B@BBHBDBBBFEECCCA@@ADADC@AB@BAFFDD@D@B@BDB@@BCB@BA@A@A@@AAA@@A@@BA@ADADAFAD@DAD@BBB@DDBBBDBB@D@BB@BBDBDBBB@@@B@B@BADADCBADADAB@BBB@BB@DBD@DBBBB@BB@BB@B@B@@C@A@A@ABABAB@B@BB@@@B@B@D@BABADAD@B@@@BBBB@BAB@BC@ABABAB@@BBBBBBD@B@D@BBB@BB@@BB@DBBB@B@B@BBBBBBB@B@BAB@BBB@BBBB@BBDBBBBB@B@BABEJ@BAFAB@BA@AB@B@B@@B@B@B@BABAD@B@B@BB@B@@@DBD@BBBDDDBBBB@B@B@B@@AD@B@DDD@DBDB@@BB@@AB@BBA@@B@B@DB@@@B@BA@" ],
																[ "@@DCDADAB@EA@@A@@BA@CBABBD" ] ],
														"encodeOffsets" : [
																[ [ 116673,
																		31092 ] ],
																[ [ 116723,
																		31090 ] ],
																[ [ 116580,
																		31003 ] ],
																[ [ 116673,
																		31092 ] ],
																[ [ 116744,
																		31081 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420112",
													"properties" : {
														"name" : "东西湖区",
														"cp" : [ 114.062483,
																30.702467 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@@@@G@@@S@A@C@C@A@A@@@@@@@AAC@A@@@C@C@A@C@A@C@E@A@@@A@@BA@@@AB@@@B@B@BA@KBABC@C@C@@ACAAAC@GBEBE@CAEEAE@@AGAA@AAA@ABABADAF@F@@BFCDA@@@@@A@AB@@A@ABABADAGCGEIECCEAE@CACAAAAGACCAA@CBCBCFCBCDEBE@G@I@QBKBK@G@GAGBEDC@E@C@EACAECCCCCACECC@E@E@CBIFCBEDEBKBIBGBC@AB@B@D@BBBBBFBHBNBJ@F@DBDB@D@DABCDCBCBC@C@GAEAEEEECAC@E@EBEBCDGFEDGHCDCDEFCF@@AD@DCHAFEHEDCFCF@DAF@FAP@DCDAHABEHCDADC@A@A@CBA@A@E@CBC@CBA@@@ABCFGNA@@@EAEAA@AAAAAAA@A@A@ABAB@BABED@@AB@B@D@@ADAB@B@B@@BB@BBBBB@B@B@@AB@@ABA@AAA@@AAAAA@AAAC@EAC@A@E@E@A@AB@B@B@BBD@DAB@B@BB@DBBB@BCBCBAD@B@BB@DBD@DAD@BA@CBA@A@ADAD@D@FBBBBB@B@@@BCBABADADADBB@DBD@DBDBD@BDD@DBBBB@B@BAD@BC@G@G@AAAD@B@D@DBDDBDBD@DDDDDCBCBEDAB@DABBBBBD@BBDB@BBHBBBB@BD@BBBBBBBD@H@BBDDB@H@F@LCDABBDB@BDAB@B@@BBB@@@@HE@@B@BBBBFBB@BBB@DBDBDBDBDBF@D@D@DAF@FAFCHCD@DAD@BB@B@BBBHBFB¢ERA@@B@BAB@@@B@D@PCJCHC@A@A@A@@BAFEDAB@@@BBB@BD@BBBB@B@B@D@JCDAD@B@L@H@D@D@B@FGHEJEDCBA@AB@@A@@@@@@@AAACAA@A@AAA@A@@@@A@@@AD@BAB@DCBAB@BABAB@BAB@BABAHCD@BADAB@@AB@BC@ABA@A@A@A@A@E@@AA@@@A@E@C@C@@@C@@@A@C@GBGDEBAFADCDGDAFCNETCJCNGJCDCFEFCBCFAJ@FBFDHPJJHDJDP@F@FAFA@A@ADG@@@@BEBCAE@A@@GKMGAAA@ACAAA@CCAAA@@AA@CCAAAA@@CACACAAACAAAA@AA@@A@@@@AECCAECEA@@EACCCAAA@@@@AA@@A@AA@@C@@AC@@AA@@@" ],
														"encodeOffsets" : [ [
																116971, 31361 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420115",
													"properties" : {
														"name" : "江夏区",
														"cp" : [ 114.333961,
																30.309045 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@NIHCBA@@@@@@JEB@B@@AB@DA@@D@D@@@@@B@@B@@@@@@@@BB@@@@@@@B@@@@@B@B@BA@@@@B@@@@@B@@@@@@@@BB@BBDBB@@@@DD@@@@B@BAFC@@BC@A@@DEDEFIBABABA@ABAB@DCB@B@@@B@B@BBBBBB@BBB@BB@B@DBB@BB@@@@@@@D@@AB@BAB@B@BBF@B@F@BAB@D@B@B@B@@@B@D@@@BBF@DBDBD@@BB@@B@B@B@@@B@@@B@BAB@B@@@@A@@BABABAB@@A@@B@@A@@B@@@B@@@B@@@B@@@@@@A@@@A@@BA@@@@@@BA@@@AB@B@B@B@D@@@B@@@B@@B@@@DBB@@BBB@@BDDB@BBB@B@D@B@@@BBBH@DBBBDBB@@BD@B@BBBBBBD@@@B@B@B@BBB@BBBB@BB@@@BF@FA@@F@JEJEDCFIHEFAJ@BAJA@@BABAB@DA@@BA@@@@@A@A@@@@BAHAB@B@BAD@B@DAB@D@B@D@B@B@B@BBD@@BBB@BBDBD@B@B@B@@@DBD@B@B@B@@DFBB@B@D@D@DAD@DAF@B@B@BA@@D@@@@@@@@@@@B@B@@@B@@BBBBBBBBBB@@@B@@@@B@@B@@@@@@BB@BF@@@@@B@@@@@BB@@@@@@@B@@@@@B@@@@A@@B@@@@AB@@@BBBA@@@@B@@@@BB@B@@@@B@@@B@@@@@BAB@B@B@BAB@@@B@B@B@B@D@@@B@B@B@B@@@@@BBB@@@B@@AB@DA@@B@@@B@@A@@@AAA@A@A@@@A@@@A@@@AB@@@@A@A@AA@@AB@@A@@BBFBD@BBHB@@B@BBB@@B@@@@@@@B@@@B@@@B@@@B@@BB@@BDBBBB@@@B@BBB@BBB@@BB@@BBB@BD@@@BBBBDBBF@H@N@L@HAH@F@DAD@DA@@@@@A@C@A@A@@@CBABADAB@BADAB@@ABE@A@@@@@E@EBIFGH@LA@@B@B@@@@@F@FA@@@@DAB@BAD@@BBB@@BD@B@BBB@BBB@@BBB@BB@BB@BBB@D@D@FA@@@@B@@B@@@BABADAD@B@BBBBDFFBDBDBDBDBD@B@BBBBD@FADABCBKAI@CB@B@B@BD@BBBB@@@@B@@BB@@BB@B@D@@@DBDBB@FBDBD@BBBBBB@D@D@@@BB@@B@BBBB@@BDB@@DBNJDBPAB@VCB@B@D@B@D@BAB@DADABABA@@@A@@@A@@@@B@@@@AD@@@BAB@@A@A@CAA@@AA@@@@@AAA@@CC@@AA@@CECCCC@AACCCACAE@@AC@A@@@A@@@@B@DAB@D@B@D@DA@@BBBB@@BABABA@@D@DAB@@A@A@A@@@C@@@@CEAC@@@@ACA@ACAAAAACAAAA@@@A@@@A@@@A@A@@B@@AB@BAB@@@B@@ABC@AB@@@@@B@AAAC@C@CB@@AB@@@BA@A@A@A@AA@@AC@@@@A@@A@AAAAAAAA@A@A@@@CDCDEDCBEBG@GAIFCASACAQ@MAQEK@KFOHIHEBGBGAGAGAGAIAEAE@E@E@EBG@GBGAIAEEGECGCECEEG@GEAC@EAE@E@G@GCGECGEECGEIEEEAG@G@GBIAGAGAGAGCGGGGEE@GBA@C@@AAAAC@C@C@CBG@ECCEACA@C@CDC@@BGACCGECACCCAA@A@ADC@@@A@C@A@@@@@@@A@@@@@A@A@@@AA@AAAAAA@AAABA@CBC@A@A@@@EHEFGBADCDCBC@A@@B@@@BC@@AA@A@CA@BABADCD@@@B@B@BADAHCBA@@@ABC@A@A@A@@@A@ABCBEDADADCB@BCBA@A@@@A@AAAAA@CA@BA@AB@@@BABCAC@E@C@CBEBEDEDGDEBAB@F@BABA@ABCBADABAB@@AA@@AAAC@A@CB@@ABC@ABA@ABA@ABA@@@AA@@@AA@@A@@@ABABA@@@A@A@@AA@A@AA@A@A@A@A@A@@BABCDCBAB@@AB@AA@@AAA@A@A@A@AB@D@BABA@AAAAA@CBADCBABABA@@BCBAAA@A@@A@A@A@@@A@A@@A@@@@@A@@@@A@@@@@@A@@@@@A@@@A@@AA@@@A@@@@@@A@@@@A@@@@@A@@A@@AA@@A@@@@@@@A@@B@@@B@@@@@@@B@BABA@@@@@@@A@@A@@A@A@@@@A@@@@@@@@@AA@@@@@@AA@@@@A@@@@@A@@@@A@@@@@@@@@@B@@AB@B@@@B@@ABA@@@A@@B@BA@@@@BA@@@A@@@A@AA@EGECA@A@A@@@@BA@@@A@@@A@@@@@AB@@CHABA@@@C@A@A@A@A@@@A@AA@@@@A@A@@@ADABA@ED@@A@@@AB@@@@A@@@@A@B@@A@@@@B@@@@@@@B@@@@@B@@A@@@A@A@A@A@A@A@@@AB@@@D@@@B@@@@B@@B@@BB@@@@@B@@@@@@@B@@A@@@@@A@A@C@ABA@A@CB@@A@@@@@AAA@A@A@CAA@A@@@@A@@@@BA@@@@BAA@@A@@A@A@@B@@A@B@AB@@@@CBCDEB@@@BA@@@@@A@A@A@@@@@A@A@@B@@@@A@@@@@@@A@@@@@A@@@A@@@ABA@@B@@CBBDABABGBCBEBC@E@E@E@KDABEBA@EDABAB@@ABCBEBABGBGFGBGBEBEBE@E@G@GBGBEBGDEBGDA@C@CEE@A@CCGCA@C@EBCBC@E@CCCCEE@@GGEA@@GCC@OCA@AAGCEEE@GAEAE@GAEAEAG@EAGAGAG@E@CAA@@@CAC@E@IAA@A@A@ABA@ABkL@J@DBD@FBF@FADAHADEFCDEDEFCDAFADAD@D@F@DBD@F@DBF@D@F@DAF@FAD@FADADABEBOBKBKBE@CDAD@DAF@F@HAHEHKDEBBF@BBDBDBD@B@DAJ@FAHCFABCDAFCDADEBCDADCDINCBCFCFEJCFCF@F@BELCDCBKJGBQ@@@GBCBMD@@CBA@C@GAE@@@EAEAC@@@A@A@E@CCCA@@ACACCACAGAC@CD@DAD@BAD@D@DBB@BBBB@D@FABBDF@DBFB@NBLH\\ZT`L`@NBPP|BBLjFJLJRNLJXZXVT\\TX" ],
														"encodeOffsets" : [ [
																116914, 31134 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420114",
													"properties" : {
														"name" : "蔡甸区",
														"cp" : [ 114.009341,
																30.482186 ],
														"childNum" : 6
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@A@AAC@AAAACBCBCHILEFAHBBA@@@MAAAAGAAAACBCBG@IBKBC@AGECEAAAA@AAABAJID@J@B@LJHBJ@H@HDJFD@DBB@HAHCB@B@DBHDBBDAFK@@@@BC@AAEAAA@ID@@AAA@AACIAC@A@AB@B@F@BA@@@C@AAC@@A@E@@@@@@@G@@@AC@CBCFCFCHIFGFGBAFCHA@@LAJFH@FAB@DAHCFCBE@@EG__AA@@UMMOcsIOCESWS[WUWYKIKDGDKFIFA@@B@BABCBABABCDABEFCFA@@@A@@AACAC@A@C@AAAACCCCCECCACAC@CBGBCBE@C@EAEAE@EBEBEBI@GBIBEAA@AAAC@ECCACCAAAC@A@CBCBCDABIFKDIDEBA@GBGBC@A@G@G@GAG@G@EBEAA@AAAA@AAAA@CBCBABABABABA@ABA@A@A@@@AA@A@@BABCBA@@AA@@CACAC@CCA@C@@BA@A@A@A@AACACCAA@AAC@C@@@AAAA@A@C@ABABA@A@A@@@@A@ABAB@@ABABE@AFIBA@A@AAAAACAAAA@AA@AAA@ABA@A@AAAAAAA@A@A@AAACAA@@AA@@AAA@A@C@AACAAAA@AA@ABAB@BADA@ABA@AA@A@@@ABCBCBA@A@C@A@A@@AAA@A@ABAB@B@B@B@DA@A@A@@AAAA@AACAC@CAA@@AAA@ABABCBCDABCBC@A@A@A@@AACACAAAA@@A@CAAACAACCA@AAC@CBC@EBCBCB@BAB@@@BB@BB@@@B@BABA@AD@@ABABABCBA@A@A@AAA@AACAGAAAA@A@A@A@@A@C@AAAAA@A@AAAAACACCCAACCAA@C@A@@@@D@DA@ABC@A@CACAACCA@AA@C@A@@A@CACAAAAAAO@C@BBBBBD@F@F@DBFBHBDBDBDBDBBDDBD@FAFCBC@CACAC@AAC@CAC@CBG@CBADCBAFAF@D@D@@@D@B@@BBB@@B@@@B@@ADABADAF@DAD@D@DDDDB@DABCDCBCBABCDCBEBABCD@BAD@@@BCHCHBBBBFF@B@@@BAB@FBDFHFFDH@DCBMBIA@AAACAGBCBC@EBC@CAGBIDG@EDAB@B@DBDFD@@BD@B@DEDC@C@AB@DBBHDBDBBDBHFDDBBADBDBD@D@B@FDBDBDBD@F@F@F@HBH@F@H@D@DDDDFBF@FDFBD@D@F@@@@BDFBLBDBJDDBDLDDD@BBB@@DFDDDFDBBDDBBD@DBDDDBBBDBBBBDDDDDDFFDDD@B@D@D@D@DB@@@@BB@DBJ@B@BBDBFBD@DDDDDB@DBDBBBDBBBBDBD@DDBBBDBDBFADCBA@C@CDCBEBCDAFBFDDBFDBBBDAFAD@DAF@DBH@B@D@D@FBD@@@BBB@BDDDFBHDFBFDBDBDC@ADC@@B@B@@@BB@B@F@@B@DAJAD@F@PDJFBBBBDDDDDDDBDDDDBDBDBD@@@B@@@@@@ABABABCD@B@DDF@DBFABADCDCBCBEBCBCD@DBDB@DBHFFBFFBD@BCDCBKBEBEBAD@FBFFFHFJFFFDFFHHLDFNPBBB@B@D@BCDCFGBABGDC@CBO@EBE@CDEDEFCFGBEDG@CBC@@DEFEDCDCHGFCHEDCFAFAF@D@DBFFFFFBHBD@D@DADADCBA@C@CCACAE@I@MAGAEAAAAA@A@C@ABAD@HAJALAFAFCDAJEDAF@F@D@FDBDDDDDFDDBFBD@F@D@FCHAHBH@L@LARAJ@H@F@" ],
																[ "@@B@@A@A@@CAA@A@@@AB@@AB@B@@BB@@B@B@D@@A" ],
																[ "@@D@@A@A@A@C@AAAAA@BAB@BABA@C@AACACA@@AB@@@D@H@B@BB@B@D@F@FABA" ],
																[ "@@@A@A@@@A@@A@@@@B@B@@@B@@B@@@@@" ],
																[ "@@@A@A@CCCEEABA@@BCDCB@BB@DDFDDBB@@@BABA" ],
																[ "@@@A@@@AAAAAA@A@AD@@A@@@@@@B@@@B@@@B@@@@@@@B@B@@@BBA@@@@BADAB@@AB@@@" ] ],
														"encodeOffsets" : [
																[ [ 116867,
																		31327 ] ],
																[ [ 116673,
																		31092 ] ],
																[ [ 116722,
																		31088 ] ],
																[ [ 116492,
																		31026 ] ],
																[ [ 116578,
																		31002 ] ],
																[ [ 116748,
																		31076 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420116",
													"properties" : {
														"name" : "黄陂区",
														"cp" : [ 114.374025,
																30.874155 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@AC@E@CAACAAACAEG@G@CAACEECAACGCGAGCGCEEGCAGECCCE@CBEBGBE@ABE@C@CBCDAHCDEDEDADCBADEBAD@FABABCHCHBHBFAFABADAD@@CCCCCBAJAHAHALCFADC@CACAAEAE@E@C@C@AC@E@CBCBGBCF@DBDBF@DEFEHAHCFCDCDEBEDEJCH@H@HAJ@FADADC@C@CBCFA@C@E@CBGBCDEDAFC@AEECCAE@EBGHG@EEIEGGKAKCGEGCCCGAIBEBACCGCEACAAE@CCAAA@C@EDGDEFEDEBEBCACDAF@H@F@FAHAFCFEHGDCDEBA@@@AAA@AB@@A@@BA@@@BB@@@@BB@@@@BB@@B@BB@@@@@@@B@@@B@BB@@@@B@@@@@@@B@BA@A@@@A@@@A@@@@@ADAHM@A@@LIJGJIB@@AB@BAHAVEPC@@B@B@@AB@@ABA@A@A@@@ABA@A@CBEBC@A@ABA@ABADC@@D@@ABA@A@A@@@@@A@A@C@A@@ACBCBAB@AC@@@A@@@@@@@@@C@A@A@@@A@@BA@@@A@A@A@A@A@@@@@@A@@B@@@@A@@@@@@A@@AA@@@ABABA@@@A@C@A@A@@@A@@@@@@@@B@BA@@@A@@@@AAA@@AA@@AA@@A@@@AA@@AAA@AAA@@@A@@@@@@@A@@A@@A@@@@BA@@@@B@@ABA@@BA@@@@@C@A@A@A@EAAAA@@@CAA@AAA@AAA@A@A@A@@@@A@@AA@C@C@AA@@@AAAAC@@@@@@@@AIBE@@@@@@@A@A@@@@AA@@B@@@@A@@@A@@@AA@A@AA@@@@A@@@@@@@@@@AA@@A@@@@BA@@@A@@@@@AB@@@@@@C@@AA@@@@@@A@@@B@@AAA@A@@@@@A@A@@BA@A@@B@@A@@@@@@@@@A@@@@@A@@@@@@@A@@A@AAAA@A@@AA@@@AA@@@AA@A@@A@@A@@@A@@A@AAA@A@A@AAAAA@AAE@C@CAAAACA@@A@@A@@@@@AA@@KAGA@@A@A@A@A@A@@AC@E@A@A@@BA@A@ABA@A@@BC@A@@@A@A@A@A@A@A@A@A@C@@AA@@@@@AA@@AAACAAAA@AA@AAA@AAAAA@@@A@A@@@A@@@@@ABA@@@AB@@AB@@A@@B@@A@@B@@AB@BABA@@B@@A@@@@@@@@@@@A@@@@A@@AA@CAA@@AAAAA@@AA@A@@@A@ABC@ABA@ADA@ABABCBAB@@A@A@@@A@@@A@@A@@@A@@BABC@AB@BAFCDCB@DC@ADC@ABA@C@C@C@A@A@@@K@A@A@A@A@A@@@AAA@@@AAAA@@A@@AA@@CU@EAC@@@A@@@@DADABAJKBCBABC@A@IAE@AAAIBKDMHABABA@ABABA@CGCG@@BGJCJCB@LC@@HAFCDAHAFAFABAFEBCBEDEBCFCH@@A@@B@@A@A@@@A@@@EEBEBGDCMAGSFMDWD]HkDSAA@[EkMA@ABADABAFABCFCBABA@@@A@CAC@A@A@A@@@CBSFC@@@@@AAEGAA@AA@A@A@CACACAGAGEGCGE@CCECAEAC@CDCD@BGHCBEBGCGECCCAEAEAEBA@ABEJABEDEBEBE@O@ICGCIIGOECEAI@EBADEDEFCDIDMHIDSDMFEDCBCHCDEBABCFAH@H@D@B@@@D@@@D@D@F@B@@BB@@@F@B@B@B@BAB@BADA@@BA@CBABC@GDABABA@ABA@ABABA@ABCDA@ABC@@B@@@B@@B@B@BBB@B@DBBB@B@@@@@@@BA@@BBABB@@B@@B@B@BBBD@@@D@B@JCB@@@@B@BB@BP@FAHADENCPANBJDXBBBBBBBB@B@@ABOTA@@B@H@NAF@H@DAF@@AN@B@BAD@B@B@B@@@B@@@BAD@B@B@@BD@@@@@@ABA@EFA@@@@BADCF@B@@@B@@F@@@B@@@@B@BBBBBBB@@@@@BE@ABA@@B@B@B@@@BD@BB@@@BAB@BA@@B@B@B@@@BA@@@A@B@FD@B@B@@AB@B@@BB@BAB@@@BAB@B@BABAB@@@BB@BDBB@DA@@@BF@@@@A@A@@BBB@B@B@@A@A@@AA@@B@@@B@BB@BBBB@@BD@B@D@BABA@@B@BC@@BA@@BBB@@@B@B@F@BB@BB@@B@@@@@B@B@B@B@@@@B@B@@BB@@BBD@B@@BB@@D@BBD@BB@BBB@B@@@@@@@@B@@AB@BB@@@DB@@@BBB@D@@AB@@AA@@AB@@AB@@AB@@@@@BB@D@BBBB@@@BABA@@@A@@@@B@BFBBB@@@B@@ABA@@@A@@@@@CB@@BB@BAD@BCD@BAB@BA@AB@@@@@@@@ABAD@@@@AF@B@@@BBB@@BB@BD@@B@@@B@@CD@BAD@BA@@BC@CBE@@@A@@BAD@B@@BB@@AB@B@B@@FJBBB@BBB@FD@BBB@D@@@BA@@BAB@B@B@B@BB@B@F@DAB@B@B@B@@BBB@B@B@BBB@BB@B@BAD@B@BBB@@BAB@D@B@BBBBBFB@BB@@D@BA@A@@B@B@@@B@B@@@B@@BB@@BB@@A@@B@@AB@@@B@BA@AB@@ABA@AB@BCDAB@BBD@@BBBB@DBF@B@D@B@BCBAD@@@BBB@@@BABABAB@B@B@B@BBBDDHDJDFFLFPLFFJJHHDBBF@DBFFDFDBFBFFFJFFFDJDFBFADCBCD@H@FCFEFEDCFABEBCCEACAC@CDC@GEA@ABBH@DADEBCFCFCFEBIBEHIVELERAN@LDHBBFBH@JAH@DB@FCFAFCDFFAFAHFHDDBHBFDDH@HALBDFDHFHFHHFJBBD@F@HAFBDBHJDHBHBDBDDHDH@FDHHDDLFDBDBHCHEHGFEBE@GBGDCH@FBHCDEFIBCHCF@D@FGDEB@FBFDHBJDJBH@DA@E@CFCDBB@BAAABEDAF@HBFBFAR@JAJ@HFLBJAHCJ@L@J@JCFC" ],
														"encodeOffsets" : [ [
																117187, 32060 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420117",
													"properties" : {
														"name" : "新洲区",
														"cp" : [ 114.802108,
																30.842149 ],
														"childNum" : 3
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@@AA@@@@AB@@@B@@@@A@@@@B@@B@@@@B@@A@@@@@A@@@AA@B@@A@@BA@@A@@@@A@@B@@@@AB@@@@@@@A@@@@@@A@@@@@@BA@@B@@@@@@@@@B@@@@@@@B@@@@@@@@@@AB@@@@@@A@@B@B@@@@@B@@@B@@B@@B@A@@@AB@B@@B@@B@@@B@B@@@@B@@@BB@@@@@@D@@@BBAB@@@@@@AB@@@B@@@@A@@@@B@@@@@BB@@B@B@@@B@@BB@@@@@@@@@B@@@@@B@@@@@@A@BB@@@@@@@@@AA@@@@B@@ABA@@@A@@@@@A@@@A@@@@@@AA@@A@@@@@@A@@@A@@@A@@@A@@@@@AB@@@BABA@@@@A@@AAB@@A@@@@@@@@@A@@AA@@@A@@@A@@AAA@@A@" ],
																[ "@@@@@@BA@@BA@ABA@CBCBCBEDG@@@@@A@@B@@@@@B@@A@@@AB@@@@B@@@B@@@@B@@@@@@B@@@DDBBBBBBABA@ABC@@DA@@@A@@@@@ABA@@@@B@@@@B@@@B@@B@@@@A@@@@@@B@BB@B@@@B@@@@D@H@B@@@@@B@@@@B@@@@B@@@@@@@@@@@@@BBB@@B@@@AAA@@@A@@B@@@AAAC@@@A@@@C@@AA@@@ABA@@@@@ADAB@DAD@D@DB@@@@BDBBBB@@B@@@@@@B@@AB@@@@@B@@RD@A@AA@@A@ABABAD@D@B@BBBB@B@B@BFDBADA@@A@@A@@@ABA@A@AA@@AA@@@@@@A@AB@BA@A@@BAAAAA@@CAAAA@@@A@C@AAAC@@@A@@@A@C@AB@@@DA@@BAB@DC@AB@B@@BB@BB@@B@@@B@B@@@BABC@A@@@@@@A@@@A@@@C@@@@AA@@AA@A@@AA@@A@@@@@A@A@@@@@@AA@@A@@@@AA@@A@@@ABA@@BCBE@@@A@@A@AA@@@A@AB@@@@@B@BA@@DCBCBADGFADCDEDAB@B@BABA@AB@B@B@B@B@BBB@@@@@D@B@D@B@BAB@@@B@@DBB@@DBB@DAHCB@@A@@@AAAAA@@AA@@@A@@CAAAAA@@@@A@@A@@@ADCDCFCDAHC@@BBB@@BB@BB@B@@B@@@BAB@BC@@@@B@@@B@B@B@@@B@@@B@BAB@BA@@BAB@@AB@@A@A@@AA@AA@@@A@C@@@A@@@@@@@@A@@@@BABA@@@ABAB@BA@@B@@@@@FAH@DADBB@DAD@B@BAB@BABCACBC@A@ADA@A@CAAEEEAIAAACAA@CA@AC@AAAAEA@@CEA@C@A@@AAABCBAD@BA@@@ABAA@@@@AA@AAA@@AA@@@A@@@ABA@C@EC@@A@@@AAAAAAAC@@E@C@C@CBCD@@BBBDBBBBA@@BABABA@@@A@AAA@A@@@GDGBKA@@@A@ABC@@@@@A@@@@@@@AA@@@AA@@ABCBABCFC@E@EEGG@@B@@ABAACAA@A@CBABADA@AB@BABCBCBCBCACCCAAA@@@C@A@AACCAA@EAC@E@CBCAACAA@AAA@@@AB@D@F@D@@@@@B@@@@A@A@A@A@@A@AAE@A@AACA@CAC@@@A@A@@@@B@B@BADA@A@AA@@CCCACACACAE@EAE@CC@E@@@ABABAB@B@B@B@@AB@BCBABADC@C@C@C@CCE@AAACAAA@@CDCD@BCD@BCBABCBA@ADA@CHEDEBKC@@IKCCA@@@C@CBC@CBA@CBC@CB@@A@ABAF@FABA@A@AAC@CDE@EBE@AAC@EA@E@C@CBE@E@E@EAG@ECKCCCCCCEAEAGECCGGCEGEECEAECE@GAEAEACAEAGACAEECAIHEFC@EAACCG@A@AAAAAACAA@@@A@A@ABA@ABABCBA@CBAFGDC@CBADE@@BA@A@AB@BA@ABAFA@ABCB@@A@A@A@AA@AAAAA@AA@@AA@C@A@@AA@A@A@A@AB@@ABA@@BA@A@A@@BA@ABA@@BCDAB@B@@BB@@BB@BBB@DBB@BB@BB@@B@B@B@@@B@BB@@@B@BAB@BAB@BAB@@ABABABABAFEBA@ABEBABCBABCDABC@C@A@C@AB@B@B@BB@@BB@BB@B@BAB@@ABA@A@@BA@ABA@AAA@AC@A@A@@@AAACCCKAMA[AYCQCQEECM@qOOICAWSQGUIYG[GuIMCOEYMQGQBG@_JA@UTAHS`KbK\\@BOZSfKTOPADSJYFBHDNHCFAFA@F@@@B@@@B@BA@@@@BG@EDADCFAFADEFABEBEBGBCBEDGB@@KDA@IDIDAH@@DHDHB@BABAB@BABANGLCJABB@BBF@J@BADABADILABCBCB@@@@@B@@BD@FDV@@BB@@@BB@BB@B@@BB@B@@@B@B@B@B@B@L@@@B@B@D@D@DAB@BCD@BCDA@CDEDABA@@BADAB@@@B@@@BB@@@B@@@B@B@@@BADABABAB@BCB@BAD@BAB@@@B@B@@BB@BBBB@@BB@DBB@@@B@@B@@@@@@@@@@@B@@@@AB@BA@ABA@@@AB@@@@AB@@@BA@@BA@@B@BA@@@@B@@@B@B@@@B@BBBBB@BBB@@BBBBBBDBB@@BB@@@@B@@BD@B@B@B@B@B@B@B@B@@@B@D@@AB@B@BAB@B@@AB@B@F@D@@BB@B@B@B@B@@@HBLB@@BB@@@@B@@@@BB@BDBBDBD@F@BBB@BBBBB@B@B@BBB@@@@B@@@BB@@@@BBB@@B@@B@@BB@@@BBBBBB@@@@B@@@@@@@B@@@@@B@@@@@@@@@BA@@@@BAB@@@B@B@@@@@BBB@BA@@@B@@@@@@@BB@@@D@@@@A@@B@@@@@B@@AB@@@@@BB@@B@@@@@@@@B@@@@@BBB@B@@B@@@B@@@B@@A@@@BB@@@@@B@B@@@@@@AFBJ@@@@@@@@BDBB@B@@BBD@D@B@@BB@@@@@@B@B@BBB@BBB@BBB@D@@BBBB@F@B@B@B@D@@@@AB@@AB@BA@@@@@AB@@@@@BB@@@@B@@@@@@@B@@BB@BBB@BB@@B@@@BB@@BB@@BB@BB@@@@@B@@ABA@@@@@@@@@@B@@@B@B@D@B@@ABAB@B@@BB@@@B@@@@B@@@@@@AB@@@@@@@@B@B@B@B@B@@AB@@@B@@@B@B@D@@@@@@@@@B@@BDB@D@D@F@D@DBFBDBDBHBFBB@BDDDDD@B@B@@@B@@BBB@@@BA@@@A@@@A@@BA@CDCBA@A@@BA@@B@@@@@B@DBBBDDDBBBB@@@D@B@@@B@@@D@B@B@@B@@@D@B@B@@@@@BB@FDBBB@@@BBDB@@B@B@B@DAD@@@D@D@@@B@@BB@@B@B@@@@BBB@B@@A@@@A@@@@AEAA@ABA@A@@@@FCFAD@F@FB@B@DCB@@A@@@ABA@@@@@A@@@@B@@AB@@@B@@@@@@AB@@@BC@@BAB@B@@B@B@@BB@@B@@BB@B@@AB@@@@A@@B@@@BA@BFDD@DADAB@@A@@B@@@@@@@B@@@@BDBBF@@@B@@@B@@@B@BB@@DD@B@B@@@BB@@A@@@@BA@@BAB@@@@@BBB@DBB@D@B@B@B@B@B@@@F@BBFDD@DBB@@FFFDBDBDDD@FBD@B@D@D@BCBCAAAA@A@AD@BADBD@B@B@B@@A@A@AA@@AA@@@A@A@@@@@A@@AA@@A@A@ABA@ABA@C@@BA@@@A@@@AAA@ACAAA@@@ABCDC@A@AB@B@BBBBBBBB@DDJBDBDBBBDBH@F@D@@BB@@B@BBDBBDDBBBBBBBBBBBB@@@@@BB@@B@@@B@@@@B@@B@B@B@@@@B@@@@@@@@@@@@@@@@@AB@@@@@@A@@@A@@B@@@AA@@AAA@A@@A@@@AAA@@@AA@@@@@@@A@@@A@@@@@@A@@@@BABAB@@@@@@@B@@B@@B@@@BBBBBBDBBB@@B@B@@@B@@AB@@@@@@A@C@C@A@A@ABA@@BABA@A@EAC@A@CA@@AA@@@AA@AA@@A@A@@BAB@B@FCB@B@@A@A@AB@B@@ABGBABADAB@B@B@BBB@B@@AAA@A@ABA@@@EB@F@D@@@BB@B@@B@BAB@B@B@B@D@B@@@@ABA@CBA@@B@B@D@B@B@D@B@D@B@B@@@B@D@B@@@DBB@@@BBDDBF@@DFDJFBFDBF@BAFCB@@ADCB@B@@A@@B@@BB@B@B@BA@@@@B@@ABA@ABABC@A@E@CBC@A@ADABABBB@BBB@BB@FABBDAB@@@B@BBB@B@@BBB@BB@@B@@BB@BBBHBHFFDDDD@FBHBFAFAH@HABBDBDBFDDBDBDDDB@A" ],
																[ "@@@B@@@@@@BBB@B@@BB@B@@B@@A@@@@@@@@DDDDFBDADAF@DAFCDADABBDDDBBFBFADEBCDE@GCE@IAGBIB@@@B@B@@@@@@@@@@B@@@@B@@@@@@A@@BA@@ECA@AB@@ABAB@@@@@B@@@@AB@@A@@A@@@A@@@B@@A@@@@@@@@@A@@A@@@@@A@@@@@A@@QC" ] ],
														"encodeOffsets" : [
																[ [ 117698,
																		31765 ] ],
																[ [ 117680,
																		31759 ] ],
																[ [ 117729,
																		31738 ] ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));