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
									'孝感市',
									{
										"type" : "FeatureCollection",
										"features" : [
												{
													"type" : "Feature",
													"id" : "420902",
													"properties" : {
														"name" : "孝南区",
														"cp" : [ 113.925849,
																30.925966 ],
														"childNum" : 2
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@FBHBF@LDDDDD@FADCDAFADBDB@DBD@DB@ADABCD@H@D@DBD@BFDDDBD@D@D@F@BBFBAF@D@F@JAL@FBFBBBBHAFADBBBBDAN@DFHHJHFLDLBFBDBDFDFDNBBB@BB@@DABCBCDEDCBCDCHAD@D@D@F@DBFBF@FBFBF@F@D@FADABCBCBC@C@E@C@E@E@E@C@E@E@CBE@C@EAECCCAEC@CBCBC@C@EAC@C@G@CAECCECACCCAA@C@C@EBE@CBE@CBEBC@CDEBCDADAH@DDFDFBD@DAFBHFBBLVFFFJDFDFFBDADCBCHCFAJDJHHDD@D@BIDGBIBE@G@CACBCBAFBHFFDDBLBHBJBHDHDH@H@H@FBFF@FBD@BBB@B@BBB@B@B@B@D@BABC@AB@B@B@BBFDDFDBDDHFFDDF@FAJEFCJAHAJBHDH@JEFGDGNIB@HCB@@AHAHA@@@A@@@A@A@@@A@AB@B@@A@CA@@AEAAAAA@A@A@CBA@AA@AAA@C@ABA@A@@AAA@A@A@AAA@AA@A@A@A@CBE@A@A@@A@A@A@ABA@AB@@A@@@CAA@AECA@AAA@AAEI@@@A@ABA@@AA@@@ABC@AB@@@F@DAD@@AB@@ABC@ADC@@@A@@@AC@@AAA@@AA@A@@@ABE@@@@BCBA@@@@@@@@BAB@@ABA@ADC@ABC@AAA@@DA@@@@B@@@B@BA@@@A@@AAEA@A@A@@B@@@B@BA@A@@AAAAC@A@@A@@@@BA@@BA@@BA@@BB@@BA@@@CAA@A@@CA@@A@@ABA@@@A@@@@@@A@A@AAA@@AAC@A@CA@@AA@C@AA@@AA@@@A@A@@A@A@A@A@@@@@A@@@AAA@@A@E@A@A@@AA@AB@@AD@@A@AB@BA@A@C@AAC@@AAAAA@@A@A@@@AB@@BB@B@@@@A@AAA@AB@B@@@@@AE@@B@@CAAACA@@A@@BABA@A@ABA@A@@BA@AAA@@@ABA@@@A@AECA@B@@@B@@A@@@A@A@AB@@ABA@A@@AAC@@A@@@A@A@AB@BAF@@A@@@@AAAAAA@A@A@@A@@@E@@@@A@@@ADEBC@A@@B@FEB@BA@@@@@@AC@@@A@ABC@A@@@A@@@A@A@ABC@A@ABM@@BE@C@GBE@M@G@AB@PSBA@@@AAAAAAAAACWAIBMDOFMBCBG@EAOA@@A@A@@A@IDA@C@@@C@AA@A@A@AA@@@AAABABCDIFGFEHA@C@C@G@K@A@C@CBIDC@A@A@A@AA@AACA@AA@@A@CBEFAB@@@B@B@BGDIDODC@A@@@A@ABA@@@QB¡FEAGAAA@A@AAAC@CBC@GDEDEBE@CBC@C@E@CACACACACAA@AAA@EAAAAAA@@@GF@@@@AA@AA@A@CB@ACAAACBKDE@G@A@CCAAG@C@AAAAAA@AACA@AAGAAAA@AC@AACAAAACBA@CBAFADCD@@AD@HAFIFGBELIJCDC@G@IBKBIDIDCB@D@LJ@D@HDFBF@F@DD@B@B@BEBC@ICGCC@CBEB@D@BBDJD@BBBCBE@IAGBCBAH@FBLHHB@FBDBFAD@BAB@DB@B@B@D@H@DBB@B@BABADABOBE@A@A@AB@@AB@DADEDAB@F@DBB@@B@FAB@B@DBB@B@B@@B@B@@ABBB@@DBBB@BBB@F@P@BABEDABCDEFE@G@CACACCCCC@@AC@KBABAB@@BBFBB@BB@B@DAF@D@D@BB@BBFBJ@LFDDBJ@B@F@DAF@FBDB@FDD@@BDD@B@@@BC@@@@@@BBBB@@B@@@@CB@@AA@@AA@@@@A@@@@B@@A@@B@@ABB@@@BBB@@B@@@@AB@BA@@B@@A@@@@@AA@@B@@AB@@A@@@@@AEBC@A@ABA@A@AB@BABA@E@@@@B@@@BB@@@D@@@B@@B@@@BB@@@D@D@@@@@@B@BAB@@A@@@A@@@@AAB@@A@@BBB@B@B@BAB@B@@@B@@ABA@ABAB@@BB@@D@@B@@ABA@ABEB@B@@@L@V@D@@@BCBCBCDCJCNBFDJDJFHDHALCL@@A@ADAD@BAHABCB" ],
																[ "@@@AA@@AABA@@@@@@@@BBBBB@BBA@@@C" ] ],
														"encodeOffsets" : [
																[ [ 116566,
																		31806 ] ],
																[ [ 116597,
																		31621 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420921",
													"properties" : {
														"name" : "孝昌县",
														"cp" : [ 113.988964,
																31.251618 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@GBGB@BA@GDA@MJCHEHIFG@GCIAGBIBEDIFEBE@CCEECGACECCCAE@A@A@ABAD@BA@A@C@A@A@AAA@A@AAA@AAC@EEEEAG@G@G@GCGCIAGAKACAECGEEAABADBD@D@HAFAJCHAJC@C@GCIGICEBGDADCDCBEACECEEIEEKUAAGEEACBC@EAECCCG@CBCBADCF@DADAF@DAF@DAF@F@D@DBBDDBDFDDDBF@D@H@DBD@F@DADAD@DFDDBDDBF@F@DAF@D@F@F@D@F@F@F@D@F@DADADADCBEBC@E@E@EAEAE@EACAE@C@C@C@GBCDADCDCFADADCB@@AAA@AACMCECECAEAKAKCGEGIEG@CBMACAACAEBGBAAAAAE@EBK@I@E@CBEEAAAE@C@C@C@CACCAEC@CAC@G@C@ADCB@BCAC@CAA@ACBCBEDCBC@ECCCCKCE@GAEAABADAB@B@B@D@@@@@D@@CB@BABC@IB@@AB@BAB@@CB@B@@@DB@@B@@@B@@BB@B@BBBB@@AB@B@@B@B@BB@BD@@@B@D@@ABDBB@F@BB@BB@B@@@BB@@@D@BBD@B@B@BB@@@@B@DABADCHAB@DCDAFCBA@A@AB@@AB@@@B@BB@@BB@BBBDBD@D@BDBFBD@DBBF@DAD@DADCDCBEBCAACACCAC@CHADCH@D@DDDDHADCDBBHFD@B@@@BBBD@B@BABEBCBAF@FBDBDBBBBHBBAD@DADBD@DBDBBD@FADADAFAB@DAJEJAFAFANBH@LAHAJCJAFBHHJHFFFF@HBDDFJHHHHHNFLFJ@HAN@LAJAHAH@B@FBBDHDF@H@BCF@DBBFDDFNPBDDBFBF@BBD@D@DABAD@D@DBFFD@BBDAHC@CAC@A@CDCDAB@DAB@B@@B@D@D@D@D@DBFBDFDDFBB@BDG@@B@B@BA@A@ABA@@HBFBB@F@@@BDDB@@BA@A@A@AB@@@FB@B@BABBBBBB@NFDDFDDB@@DCD@BAB@@@B@BB@@B@D@BAB@B@BF@DADG@@B@@@B@BBB@B@@@JAFA@@B@@AD@B@@@BDD@F@B@DAB@@BBDDB@D@DAJ@BABCAGFCLCJBD@LFFDHHHHDHFBFBHBH@FAHEJEBIDKDIHGLEHEDEBG@GBIAG@EDIHEF@HAFAHEHGJEHCHGNALBJBHBJCLCLENBLANBNHRFLBLDPBLBdNL@H@JEFGFIBA@EBGBAHCFEDCCCCAGAGAICAGACBE@G@EACIAGEEGEGCGCEKAGBG@CCAEAGCCEGBGBEEEDCBEDE@ECAG@IBG@EAAACG@KBMFQFKJUFGJAFADEDEDEFABC@CAGBAB@HFD@DCD@DBFBDDFABADEFCFEDE@E@GDCDABCAECECIEEIEEEAEAEECECAE@CAECAGGIIEEOKKEEEICGCCCAA@A@A@A@ABABABA@A@@AA@A@@BCDA@A@A@C@AAE@CAAAA@@AC@ABADC@ABAB@BA@@BAB@@A@A@@BA@@@AB@@@AA@@AA" ],
														"encodeOffsets" : [ [
																116931, 31818 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420981",
													"properties" : {
														"name" : "应城市",
														"cp" : [ 113.573842,
																30.939038 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@A@@B@BAB@@@AC@A@A@A@AFGHIHILIDEBAB@B@B@F@B@BA@@BE@AB@D@BABABEBCBAB@BAB@FBBBD@BAHADA@AB@@E@EBA@@DAD@@@BA@A@E@IAC@AAAC@CAC@A@@A@ABADEB@DAF@BA@@@ACE@A@@@ABAF@BAHAB@HAD@@@DK@C@AAEAC@AFUHQDIBAB@BAN@FAB@BABA@ABGBABCBA@C@KBCDCFAD@F@BAB@DCBABAB@HADAHCDALACQACAAA@AAA@CBABA@A@A@AAACAAEECAAA@AAA@ABC@C@A@E@AAACCEAGEAA@@@A@ABEBE@GBCUGAAAA@EBM@S@AAAABCBINEFGF@@@@CBABC@CAIICCEAA@GOCIGKIOMIOKOIgAYQUMSEAUJARCBCCUKGcCgI[CYH]ASKWQI@CREVCDCFAD@@CDADADEHED@BILGJCFGBM@E@A@CBEFAD@DBD@BAHA@CA@@CB@B@DBDA@CAA@@B@BBB@@C@@BBBD@@B@@C@A@AB@BB@B@@@@D@DA@AC@@ABADBD@B@@A@CAA@ABAD@BBBAB@BCA@BCBCBABADA@CBAB@B@BABA@A@ECA@OEAACAIEABA@CBA@AB@DAB@BBB@J@DAB@@ABC@E@A@@BABBD@@ADC@AAGAKBC@AFCDCBADAJBF@BBDA@@BKFC@AD@@BLABAHAD@DBDD@@DB@@@DA@B@@@B@@@B@@BB@B@BA@AAA@@BA@CF@@@DBBBB@@BB@@@DC@AD@BBBBBB@F@BBBDFDDBBAB@BABGBA@AB@JBB@B@DADAFAD@BBB@@DABABAB@H@@ADA@CF@BBBBDBBB@FA@@B@@BCF@DBBBBBBB@CFBBHH@BBBDAD@HDJ@DAFAD@B@@@@B@@ELA@ABAB@DABBD@B@B@@A@@BABAD@D@BCHBDB@B@DC@@DCBA@@DEB@@@D@B@BBDHBBJF@F@DBBDDDDF@DADBBFDBFDD@DBDBDBBD@DBF@BJLPLFDHF@@@@FDLLFJBFFLBLDLAL@L@P@FBB@D@FAD@DBBBBF@DBFDBJD@D@DAB@D@DBDBFF@ABABANMHCDADP@BBBB@HDLDHBBBBBBFFJHHHJHDNHB@DBD@DADAD@B@B@BCDCDAB@DADADCEAECAAA@BA@AB@BAB@F@D@B@B@D@B@@@B@@CDE@@B@@@DB@@B@@@@@BA@CAGBA@@DB@DDDBDBBDBDBD@DADADCDGDKDEBG@C@ABADABABA@@@ACAA@E@C@C@@@AAA@@ABC@AB@B@B@BA@A@A@@AAA@A@@AFEHEFEDEDADCBAB@@AA@NOB@@C" ],
														"encodeOffsets" : [ [
																116361, 31805 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420923",
													"properties" : {
														"name" : "云梦县",
														"cp" : [ 113.750616,
																31.021691 ],
														"childNum" : 3
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@DABABG@ABCBCB@@@DKBKCGEGCICIAEDMDIDCDADA@A@@@C@U@K@@@AFABAB@BA@@@AC@@@AA@@BABAB@BA@@@A@@@ABA@A@A@AAA@AB@@@BA@B@@B@@@B@@@BA@A@A@@@@C@C@@@A@@A@@@AA@@@C@@@A@@A@@@A@@F@B@BA@ABAB@B@BAB@D@FA@B@@@@@BA@@BA@@@BB@@@@B@@@@AB@@ABA@@@@@AA@AA@@A@BA@@@AB@@@@A@@B@@@@@BB@@BB@@DA@@@@@AA@AA@A@@@@D@@A@@@ACC@AC@ECA@AC@EBE@C@E@AAICCKEI@EAAAA@@A@C@CBE@C@AAAA@EAAA@@BABALAD@@BD@DDDDDBDBH@F@FEDCBAFCBA@A@O@EAA@AAACA@@AABA@@G@@D@@AB@AAAAA@A@@@@@@@CEBA@@@AA@C@EBAFCBC@CBA@@BAB@B@F@PABABCBA@A@AAA@C@G@C@A@ACAA@ABC@EBCAEAA@GGAK@EBGDAHAJBF@DAAA@AICAC@A@CFADAD@HDJDD@FA@A@A@ACCE@E@EAGCC@I@C@A@A@CCAGAEACBGBG@OAKAGACEE@AA@@BA@@@@@@BC@@A@CMGABABC@C@CAEGCAM@GAE@EBGBCDAD@H@T@H@BAB@@A@CBC@ABABEFCDABA@ADADABCBCB@@AB@D@BABGJCBABA@A@AAACA@AAC@CBCDEFCBCBEBC@ABADCHAD@B@B@BBF@D@B@BADGHCHAD@HAFAF@B@B@@BBHFFBDDBB@B@F@B@DAD@BBB@BBBDBFFBBBDBBB@B@B@BADAB@BBB@BBBDDRKBCBGDCBGBA@ABABCDA@ABE@C@EBCDAD@L@DABADABAH@BABABA@EBM@ABA@ABCJGREV@BBDBF@B@DCL@@C@GBA@GBABE@AB@B@@@BDF@B@@ABE@CBA@CFAB@B@BB@D@DBD@BB@BBD@J@F@BAB@@C@CB@@AB@F@FA@@BCBGBABC@AAEAA@ABA@ABADAFABABC@A@@BAF@@ABA@E@A@A@A@ABCFKJGJGJEH@B@B@B@BBD@@A@ABA@@@@BPFF@DBDBBB@D@D@F@DBBDB@BA@BB@BB@BB@B@@@BA@ABC@A@A@A@A@ABAB@@BBBBB@B@B@BBB@@B@B@BABBDFFFBF@DBBBD@BBD@B@DAB@BBDDFDDBDF@DCDB@CDGFCBCDAD@B@B@BBBBFFHFD@BBFBH@F@D@F@B@B@DBBFBD@DBBBLDD@FB@D@FBB@FDBDFBDDDDBFBFBHDFF@D@FAD@DB@BB@@AD@DBBBB@@DD@BAF@BF@D@F@D@FCFADAFCF@FAF@D@D@BCBEFCD@B@D@D@@@BCF@B@DBDBFAJBFADAHEBCDCDCBCFAJEJCBCDADCBCCGCC@C@CDGBCDGD@DBBDBDDBFADADCBC@CBC@CAECAC@EACA@A@CACACAAA@@AA@@A@A@@BA@@BAB@B@DABEDC@CBADGBCBA@C@A@@A@@A@A@AAC@A@C@@AA@@A@A@@AAAE@A@CABA@@@C@A@@ACA@@A@A@AA@A@@BA@AA@A@AAA@@@A@@@AA@@C@@@ADA@@BA@ABA@@JAD@BA@ADA@@@C@@@@@C@A@ABABCBA" ],
																[ "@@@A@AA@A@A@CAA@A@@DB@BA@BB@@BH@" ],
																[ "@@@A@A@CBGAC@CAAAACAC@ABEPABNH@A@@F@@DB@" ] ],
														"encodeOffsets" : [
																[ [ 116566,
																		31806 ] ],
																[ [ 116601,
																		31621 ] ],
																[ [ 116587,
																		31507 ] ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420922",
													"properties" : {
														"name" : "大悟县",
														"cp" : [ 114.126249,
																31.565483 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@JAFADAFEFCHAHCFCLIFCBAD@F@DBDDHLBBD@@C@CAE@CBKHIHIFEBC@EDCTSDCBGBGBCDCFABAB@BE@CBCHITQFGBCBE@ADAD@D@HDFBFAF@FABADBHDBBD@F@HAJ@R@FBB@D@FADCFC`KXEDAF@FBFBDFDBDBDAJCLCDA@@BEBEBEBADAD@D@B@DHB@B@DAJGHADAF@D@BBBB@N@BB@BBBAFADEB@DADBDBBDFFFBBBF@HALGFAD@F@PDNFDD@D@B@BKH@BAB@BBFFLBDBFFBH@H@BADGBIDEDGFQ@ABAB@B@HBLFDD@@CH@DB@D@F@BBBD@FAFAH@DDBB@F@HAHCBAB@B@BBBBBBB@B@@@BCBEB@B@BBFDD@D@DADC@C@ADE@A@AA@CCAAACAG@AAC@E@ADIBCAAAAACAAAC@G@AFK@CAAA@AA@A@ABCBAF@JABABC@ACCACCGCC@@C@GBC@A@AAACBCAKAIACA[@AA@EAOECAACACACACECAA@CDCDI@CAGACCAAA@C@GBIAEBCBGFUBQ@CFSDKEEAKCGCEECGCC@M@OBCDAD@HCBC@ACAE@CDIBCAGAACAGGCEAI@GGECCCE@CAGBE@G@GDGDGDGBEBEBEBIBGBECGACGAEAGBEDCDCBEBCEAEAEAIAECGAEACAI@E@E@GBG@IBIAECECCG@IBEFCDCDAD@@@@ABE@GC@EBE@GBGAE@CACCGACEAEAC@EAEECGAEAE@ECECCAE@IBGFEHCFEDCAACAACBCBC@C@@BA@ABEBC@A@CAE@G@IAEEDIDI@K@I@GDIBKAGEI@IBQ@EBEAGAE@CBAFBBABA@CAED@D@FCBG@IAICGAECEAA@CFEHC@E@GDADEJCFGDEAG@CDAH@HAFEFGHGFGDCACAKECCGGECG@GCCDEFGDABAH@FABEJEHIFG@K@cMKAOAKCKAQEMGMAKBMAKFKDIDGAIAKAMBGHGDIFGHGFEBGBE@GFCJ@FBHAJ@HAHCFGFKFGHCJCLAJJ@FFFDDFDFDJDHBHBF@J@DCDGHEFCJBHBDDFFDFBHFHDFFBDAFADBHFDFBFBHDDDDHDHHDHBDJBFAFGBGBGAEBEBCFCJ@FBHDLDHHPFPLRHNBDBHAJAH@J@HBH@HDFDHBHFHBFHJDHDJDJ@JANCDGDGBGDIJGJILEJ@H@HDHBFFHDFHHJF@DEHEDGFEHAF@FHHHFDFHFDDHDBB@B@@CDCHCDADE@CBA@AB@DBDJPHPBHD@BBBDBJ@JDFFH@F@NBDLLB@F@H@HCHCF@H@JBDB@D@D@BHJFDHBL@JA" ],
														"encodeOffsets" : [ [
																116926, 32618 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420982",
													"properties" : {
														"name" : "安陆市",
														"cp" : [ 113.690401,
																31.26174 ],
														"childNum" : 1
													},
													"geometry" : {
														"type" : "Polygon",
														"coordinates" : [ "@@@AAACEECACAE@C@C@C@C@C@AA@A@CBA@CBCD@D@BBD@DGDCBAAC@EECAC@C@ABCBC@C@AAE@EACAACMOCEECAA@CDE@A@GCECGAA@E@ABGBGBI@KBM@GEIEKGMGGGGEICCGAE@EEGEGIAGBEDIBIBG@KAGBMBEBEFIBI@CBABEBCBC@EACCACAC@CACBC@ABGAAAAAACAC@EBEDAFABA@A@AACAA@@A@C@GEAACBADIDIFEBADCDCDADGFCBEBIAEBCACAA@E@AD@@C@C@A@C@EDAFADC@C@E@EBE@EDCBEBEDC@E@C@E@@ABE@ACC@@AAAA@CBC@@AAA@@CBC@E@CEEGCEAEACACCACCECA@EAA@E@CEAC@KCAACAC@EAAA@C@A@A@E@C@EAGAE@AECEGAEAA@A@A@ABCDCDAHEDCA@DC@CCECAECCCAAA@CBA@C@AAC@AACAE@EAEEACBA@A@A@AA@AAA@A@A@AAAA@@BABAB@B@B@B@D@BAB@@A@@@AAAA@@AAAB@@ACAAA@C@E@C@CAACACAE@OE@DA@MPB@@BA@ABCDCBCFEFGFEF@BB@B@BB@@@B@BABA@A@A@@BAD@BB@BB@@D@D@F@B@DB@B@@ABABCBAB@B@DAHCFCLCHCDCBCBC@CACAAAACCC@CCA@@ABBH@DAB@@@@A@@@CA@@A@@@CF@DA@@@A@C@A@A@C@E@A@ABA@@BABB@BBFDFBCDCBCBA@CBCDADA@A@C@CBCBC@CAA@MGGCGIGGEIAEAAAAGAKCGCA@AA@ACOCBGDMNABAB@B@BABEBABABCBC@ABIHADAB@DDDD@@BDDDDBDDDBDDH@B@@BF@J@R@H@H@J@NALAJBN@RCPALKHE@MDIBK@GAKAGDEDCFCJCLAJAB@@E@EDADADCH@FAF@D@FADCFODEBAF@BABABADA@ABC@AAA@CACBCA@ACA@AA@ABABCDAB@@A@EAECACACCKAA@CA@ABA@@B@DADA@ABCBAB@BAD@B@B@@AB@@AFBF@DABCB@@ABADAD@BABABK@AC@AA@AA@B@@ADADCD@DEDEDCBA@@@AAC@A@C@AB@B@DBB@B@DABADCDADCBCDABCBCDADBBDFBHBHBJ@DDBF@D@DC@CDAFDHJDNCR@NCNCJCPCPBLFFHDNDLBJBLCFEJELKFANAJ@JFFDHFLDJBD@@@REH@D@FHBDF@HCFAF@BBDBHDB@B@B@BAB@BBBBBD@BAB@BB@@BD@H@B@HBB@BAHIBCJIBAFAFCB@@ABABABAHGBAD@DAB@BAB@@AB@@ABA@ABADCDAD@FA@@@A@A@CBAB@BA@@D@B@B@BB@@DBBBD@BAB@BBB@@@BA@C@AB@BCB@@@B@@B@BBB@@DB@B@F@@BB@B@@BB@@B@DA@@DBBB@@B@B@BCDA@@B@@@DB@B@@BDBB@@AB@@@B@D@@B@B@BBFB@BB@@AB@@ABABAB@@BB@B@B@@@@BBB@@ABAB@@@B@@BBBB@@D@BB@@@B@@@BB@@@@B@@@BB@B@@@@ADAB@BAB@@B@@@@@B@BADA@@@@BB@@@D@@@DBFADBB@BD@C@AB@@ADAPCB@BAHGBEBE@A@I@A@A@@LCBABAB@BABGB@DABAF@D@B@HBD@BB@F@B@DDBDBF@D@B@DFHFHFHDBDDDDFDHDDHBH@HDFDDFDFDJFJFHFDNNHFJFHDLHF@JAHAJAHENCNAF@JEJ@LEHEHGBCJCHCJ@HBLFHCLCL@JBDDJBFFJHHDJDLCHIDEFGFEAMBGDIFGFAHCFBHABHFJBHDHBFFDHBFBLCDAFEBEDKFGDCFALATCHA@C@C@C@C@CCCGACBC@E@A@GAAAEAAC@GAA" ],
														"encodeOffsets" : [ [
																116663, 32144 ] ]
													}
												},
												{
													"type" : "Feature",
													"id" : "420984",
													"properties" : {
														"name" : "汉川市",
														"cp" : [ 113.835301,
																30.652165 ],
														"childNum" : 6
													},
													"geometry" : {
														"type" : "MultiPolygon",
														"coordinates" : [
																[ "@@@CE@@@@B@D@BD@@A@@@@B@@A" ],
																[ "@@BMA@A@@X@B@BB@@@@M" ],
																[ "@@@CG@@F@B@DAFF@BDJAH@@A@AGAEA@AC@BE" ],
																[ "@@@C@@CB@@A@@@@DB@BDB@@@@E" ],
																[ "@@CCCCC@CACAAC@C@C@ABCBBH@H@D@@ABC@A@AAAAA@CCC@AACAC@CAC@CAABCBCBCBADA@A@@@AAAAAEAC@C@CB@B@BAB@DABC@CBC@CAA@@A@ABCDADA@AAACAA@@A@ABA@CAC@A@A@ABAB@F@F@B@D@FBD@BB@BBBBB@BB@BBB@BA@@BA@@@A@AAAAA@AAA@@@A@ABABC@@@C@ABA@@FCBA@ABABAB@B@B@BBBBBBB@FBFB@@B@HMDEBA@@B@DAD@DAF@B@B@DAAAMOCEGKEGCEEEIEGEEEAE@EBCFAFALADADC@AACEEEAGECAA@AC@CDCDAFADADADCBCBAAE@CCE@C@ADCBABABA@@@@@@@A@@ACACACCCCCCACCCCCCAAAAIEOCE@C@IBCBA@@@@E@AAA@@A@A@@@CD@BCDCACAAECEAGCECC@AAA@A@@AC@E@C@C@AAG@CBE@CBCBEACAAECCAECEACBADAFCD@D@DABCDEBCACAAACA@CACACAACAAACACAA@CCCC@CACAEAC@A@AAI@CAA@@@@CAC@C@C@A@C@CCEECCCCCCAAAAACAACCAC@CACCAACCACECCCE@@AA@ACCKCACCCAIACAKCE@A@@E@C@C@EAECE@EACCCCC@G@E@G@GAE@E@E@C@CACACA@E@A@CACACBCAACCGECAAAACGCAA@CBAD@D@FC@C@AEBE@E@E@G@E@I@EBCBABA@EFEFILEJGJIDKDM@Q@WBGDDFFFBF@HBFBHBH@HBBBFBDDBDJBFABEHED@FAD@DADADADCDEBCAEGAACCEEC@ADABCBE@CBADAJADCDCAQOEAQAC@ECIEGOGOIIIICKA_CIGEGCUAMEIGKKEMAIBI@GEEIAKDIJGHKFI@CAAACF@D@D@H@DADAFAD@D@FBJBFDF@H@FDN@B@FBJ@F@HAF@B@@IBABOFIDGFCF@^CDPF@ABAB@HNB@@BBF@BB@BB@BBD@D@BAB@B@@A@AAAAAC@@KNFNCLAFABADCBABEDCBABA@A@@PAD@RBB@@@FBJDJDJBBDDBBDJBBDJDFAD@DFB@DCDAB@D@DHHBDDBHBBDAF@D@DBD@DBH@FCBGBA@AFAB@DAFCBEAWRAD@BATAH@D@HB@NBDD@F@D@D@F@HABADEBEBC@EAC@E@CB@DDBDBFBFBBD@BBDDFBDBDBD@H@D@@ADADADABGFCBGDCBAFBDBBFBDBBHBD@DDBDDDD@FEBA@AB@@@B@@BD@B@D@FBF@B@F@B@@B@B@@@@@BBADGNGLIJEHABCDADCJCDCDEBCDADCFABCHEFADABIJCBADC@CBCBA@EDIDJFDBBBPFB@FDB@B@BA@A@ABADAB@BCBADADA@ADB@ABAAA@ABCBAB@DBB@@@@AACBCBA@@BDB@@C@C@@A@A@@ABAB@D@@@@AC@AA@AD@@@AA@A@AB@DBB@AC@C@ADA@@DBB@BG@AAC@CBCFEDAB@F@N@HADEHIJK@AFCFGBCBCDC@@BCDEDCFUDQJ@XRTL^BZG\\DhJdDLHDVADQDIBBVTFVNZRhBPJPLNJJPHLDJHPB@FBDDJJDBD@BADA@@@@HEFEJMDABABB@B@TAN@FBBBBVHDGHGBC@A@A@CAE@A@A@ABCDGBCBAD@FADADAFEDCDAD@BBB@BDBBB@B@BADAHIBA@A@CBA@@DADABABCBCB@BADCFEBABAD@DAB@@@BA@A@G@S@GBCDCHAFAF@HBN@DBFHDBD@D@BABABAFOBAD@DBBBBB@DBDAH@D@B@B@BFFBDBHBL@PAHAHBDBFBHDDB@B@D@@K@CDAJCJCLAJAH@D@DCJIFKHAJEBE@GBC@@" ],
																[ "@@CFADFNLPDJLMACAAAA@AA@AA@@@@BA@@@@@A@A@AAC@@AC@AOE" ] ],
														"encodeOffsets" : [
																[ [ 116586,
																		31507 ] ],
																[ [ 116116,
																		31460 ] ],
																[ [ 116113,
																		31413 ] ],
																[ [ 116107,
																		31416 ] ],
																[ [ 116650,
																		31509 ] ],
																[ [ 116163,
																		31222 ] ] ]
													}
												} ],
										"UTF8Encoding" : true
									});
				}));