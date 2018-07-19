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
									'利川市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "422802",
											"properties" : {
												"name" : "利川市",
												"cp" : [ 108.943491, 30.294247 ],
												"childNum" : 3
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@BB@BBBBDBDBF@DBD@BBDB@BB@@DBDD@@BBA@@B@BA@A@@BA@@@C@A@@BAB@@A@@@AB@@@@AB@@@@@B@@@BA@@B@@@B@@AB@@AB@@@@@BBB@@@B@@@B@BA@@B@@@@@B@B@@@B@@@B@@@B@@@B@@@@@B@@A@@BA@@B@B@@BD@BB@BBBB@@@@@@@@A@@B@@@B@@@B@DBBB@@@@@BB@B@B@@@BBB@B@@AB@B@@@@@B@@@BAB@@@@ABA@ABABCBAB@@@B@B@@@BB@@B@B@@@@@BB@@B@@B@B@B@BDB@BB@B@B@B@B@B@BA@@@AB@@@@@@ADC@AB@B@@@@ADEBCBE@AACCCCC@GEICEICC@GAI@GAGEGCACAGBEBADCFGBGBC@EBA@ADEDEDCJGBA@ABCDEBC@AHKBCHEJGDEB@@AAA@AAC@ABABAD@F@B@BB@@DBDB@@BBD@BABA@A@@@E@C@CBCDCB@@IDAHB@CDEAAICC@I@A@@@@@AAA@AAACACCCAA@AAA@C@@AABC@ABA@A@CAA@AAAC@CAC@C@C@C@CAAAC@CAAAA@CACCA@CAAA@AA@AA@A@@@@@A@@BA@AB@B@B@@@B@B@B@DAB@B@D@FAJILGBKDMAGAI@MAGHOJMFIBMF@LANBL@LAFAJGDGFE@GDCHBHDHDLDH@JCNAPBPBJBLFJ@HCJEDIDI@EDGFABEFCPEPIHIFIJCJAHCJCHE@K@MAIECCIGCMKOIGGCA@@@@OIMGKGKKKICCOGeQIECCAG@GBGBGCCGGIEKCC@KDEDI@G@CACA@@@@C@CCKEIEEAGEG@ECKCIGCAEEEICGMGKEKGEIAIDILIFIJQJIFGLLHJFHNFNAHCFMHMBGAEKGQIGCCE@GDI@IAICGEIAEAEDK@GCMAICICE@ABM@EDADAFBF@F@D@FC@A@A@@@A@@ECAACIGCGACAGAGAECMKYcGKKGGAIBKFKDUFIAGBE@MCOGGCCICEEKCEKKKIGKCG@I@EGIEEMAOAKBIDGFGHAFBJEREJERBLDJFLDJDTANCLGHIFEBE@GAG@EDEDADBH@DEBEAKEEEOGECICEECICGCGCMEGEGGEIGKGCGCGEGAEAGBGBGHEFCDIDGBK@ECGGICCECGGEGEG@GAI@EAMBKDKDIBKBGC@GBEDEDQHKBM@IAKEEBEBOBGBIDG@ICIGACAEIIEBAH@LAHCHCACAEEAEEKAEEGECCCGDKHIHIJGHINAHCHGJIDMBMCI@IBK@GEOEMEGAIC@@@@ACDGDGBEACEASAE@GAA@C@CAE@C@C@CAACAB@A@@AA@@A@@@@@A@A@@AA@A@A@A@C@A@@@A@AAAA@@A@@@@@ABCBA@ABA@@@A@@@@@@A@@@A@@@@@@ACA@AAAACAAAA@AAA@A@@@@@CE@A@E@@@CAAA@E@A@C@A@AA@@AC@ABA@A@A@@@ADE@A@AAC@@@A@@@ACAACCAECGCCCA@@CA@@A@@CBA@C@C@AACCKOEGGKEIGKCKIMACCCAI@@ACBABA@ABA@@BAHAB@RCJEFGBGCEGCIA@A@A@AA@CAA@EAA@CBA@CAEC@AAAAA@@A@AB@BADADCBA@AA@@@AAA@AA@AAC@AAA@@@A@A@@A@AB@BADABADABCDEBC@A@AAE@AAAAAKCC@A@GFADKNEFCB@@MBQDA@CBCDEFADCF@B@B@BA@C@@AC@IAC@E@GBG@ABA@@@@BDJBH@@@DAB@F@B@@B@B@BBDFBDBB@F@D@D@FADABAB@BC@A@CAOEICA@C@AB@@@BAB@BADABAJAFBBBDBD@B@H@BBB@BD@B@@BDD@B@H@B@B@B@BAD@@@B@B@@AB@@@BA@@@A@@B@@A@@AA@@@A@@@C@@@@@A@@@ABA@@@AB@@AB@@@@A@@@A@@@A@@@A@@B@@@@AB@@@BA@@@@@@B@@@@@B@@@@@B@@@B@@A@@B@@@@@@@BA@@@@@@@B@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@B@@@@@@@B@@@@@@A@@B@@@@@@A@CDA@E@C@A@AC@@BABA@ABC@A@EAC@E@C@AAC@@GA@@ABA@KBK@G@EB@@A@ABA@@@@B@@B@@B@@@@@B@@@B@@@B@@BB@@BB@B@@@BBD@B@@@B@@BB@@B@@B@@B@@BA@@BAB@@@B@@AB@@@@BD@@BBFBLFNJFDBB@@@BABCBCFAB@@BBDBFB@@B@DC@ADCFABADA@@BB@@@@@@@@@@@@@@@@@@B@@@@@@@@B@@@@@@@@@B@@BA@@B@@@B@@@@@@@@@@@@B@BB@@B@@@@@@@@B@B@@@@@@B@@@@@@@B@@B@@@@B@@@@@@@@B@@@@@@@B@@B@@@@@@@@@B@@@@@@B@@@B@@@@@@AB@@@@@@@BB@@@@@@BB@@@@@@@@B@@@@@@B@@B@@@@@@@@BB@@B@@@@@B@@@@@@B@@@@@B@@@B@@@@@@B@@@@@@@@@@BB@@@@@@@@@B@@@@@@@B@B@D@B@@FDL@XKPE@ABEBADABAH@HAD@VFNBF@D@BBBB@DBBDHDDBBD@H@B@FA@@B@@@@AB@BA@C@@@@@A@@@AA@@@@@@@BA@ABA@@BABAB@@A@@BA@@@ABBBDBD@D@F@BAD@D@F@BABAB@BBB@@B@BBFFBBBD@B@DCHAF@BDBB@@B@DBBADCHKV@D@@@DBLBFBJJTHPBDFHDD@BBD@F@FBHBD@@DBBBBDBBBF@H@D@@AFCBABCBEBA@CAAB@@AB@DALBP@J@LBJBN@BB@@BCBA@C@AB@@@B@BFBFB@B@B@DABCDCBE@CCCCGCA@ABAFBFBDBD@BFDDF@@DFDBDABCDBFD@H@NFJV^Rj@DDJHZDFDJFH@B@BA@C@A@C@A@CDEBCDCB@@@BBNBFJjFPBNJ\\@BBD@@ABCD@DDFBDD@FBJPDLDFAFA@G@EAC@E@CA@BA@AB@BAD@DA@ADA@G@C@CB@@A@@@A@@B@@@B@@A@@@@@@@A@@@@BA@AB@BA@A@@B@@@B@@BB@B@D@BABABABA@A@A@@@A@A@@@A@@@@@AB@@@BABA@@B@@@B@@@@@B@@@B@BA@@B@B@@@B@@@B@B@@@BA@A@AB@@AB@@@BA@@AA@A@@@A@A@@B@@@@@BA@@B@@@BBBB@B@@@@BA@ABAB@@@@B@@B@@@@@B@@B@B@@BABA@AB@@@B@B@@@@@@@@ABCBABABABABC@@@A@CAA@AAA@AB@@C@C@@@@@@@A@@@ABA@@@@@@@A@@@@@@B@@A@@@@@@@@@@@A@@@@@@@@@@B@@@@@@@@@B@@@@@@A@@@ABADAB@B@B@@@@@@@B@@@@A@@@A@ABAB@B@@@BA@@@@@@@@@ABCBAB@@A@@B@@AB@@@B@@AB@@@@@BA@ABA@CB@@A@ABAB@@A@ABA@@B@@@@CBA@@B@@@B@B@B@@AB@@ABAB@@AB@@@B@@EH@BADABA@A@EC@@CAAAC@EAK@MAC@CBA@@DABGJCFABGBEBCBIHCDA@A@AA@@A@AB@@@B@@@BBHAF@BCD@D@B@@BBBBD@FBN@J@FBDBBBBB@B@B@BCBAB@LAFBB@@BBB@BBHBB@@B@@@BCDEJEJABEDEBCFCB@B@B@DBBBDBDDBDDB@BBB@BB@B@B@BCD@BAF@DDH@DA@@BC@A@A@AB@B@B@B@@B@@B@BAB@BAB@@@B@BB@@B@@@B@@B@BB@@@@@B@@@B@@@BBBB@BBB@@@BB@@@@@B@B@@B@@@B@@@@@BAB@B@@@@B@@@BAB@@@BBB@@B@B@BAB@@@BBB@BBB@B@@@@AB@@A@ABABC@CB@@@@@B@@B@B@B@B@B@@BBB@@B@@B@@@B@BA@@@@B@@@@BB@BB@@B@@@B@@BB@BB@@BBB@BA@@B@@A@@AA@A@A@C@@@A@@@@B@@BB@BBB@@AB@@@BA@@B@BA@@@@B@D@@@BAB@B@B@B@B@BB@@D@B@DBB@FDBBFFBDDFBBDBJBJBF@H@BAD@DABADAFGDAHEBA@ABA@@@AB@@@@@B@@BBD@@BB@@BABABADABA@@BA@@B@B@@B@@ABAB@@ABA@AB@@B@DBH@B@D@@A@A@@B@BAF@HAD@B@BA@A@@A@A@CAA@A@@@BA@ADAF@@@BAFCBCBABCAC@CBABAB@D@BBBBBD@FB@DBDFBBDABBBBBD@FDBBBF@F@B@@B@BAF@D@@DBDAD@DABBDBBBHDLH@B@B@BA@C@C@@BA@AD@F@@B@D@B@D@HDNDDF@B@@B@@BC@CBABBBBBDBBBB@DAB@BDDDBBB@DBJBFBBBBBBB@BDBB@@@@@@BB@@B@D@BAB@@@B@B@BAB@@BBBB@@@B@B@D@B@@AB@@ABAB@@AB@@@@A@@B@B@@@@@BA@@@@@@BA@@@@B@@@B@@@BA@@B@B@B@B@@AB@B@@@D@@@@@@AB@@@@@B@@@@@BDDBBFDLFFDHDHBB@F@F@N@PAB@D@B@B@DA@@BA@A@AB@@AB@@A@AAA@@@A@AB@@A@C@@@AB@@A@A@A@@BABC@@@CB@@AB@@ABA@A@A@AA@AAAA@AB@BA@A@A@A@A@A@A@A@@BA@@@A@A@@@@@AA@@AB@BABA@@BAB@DA@@@A@@@AB@BA@@B@B@B@B@@@B@@@BA@@@A@@@A@@BAB@@A@@@@BCA@@@@AA@A@@@AA@@@AA@@A@A@@@A@A@@@AB@@@@A@@@@@@@@BA@@@@@@@@B@@@@@BAB@@@@@B@@@@@BA@@B@@@@@B@@@@AB@@@B@@@BA@@@@B@BA@@B@@@@A@@@@B@@A@@@@@A@@@@@@AAA@@@@A@@A@@A@A@@@@@A@@@ABA@@@@FEFCJE@@LEFA@@D@BBFBBBBBBHBBB@DBB@FBD@DAHAD@B@B@NHRLB@@@D@DAFGFCBCDGBC@EBCDCB@BA@@HBLFTJXHBBFDFDLJBDDF@B@BADBBBBHFHDHBDBDDHHLPPTHHBB@D@B@D@B@DB@^^TPDBHDDBXLJFNNHHFFTRJFHDD@FABCDCDCDBPNDBDB@@DCDEB@B@BABB@@B@B@@@B@BBBBB@@B@B@BBD@BB@BBBBBBBDDBBB@@" ],
														[ "@@A@ABCFCBAD@B@BA@BB@@B@@@BA@@BCDCBCDCB@BA@@A@A@A@" ],
														[ "@@@@@ABA@AD@BA@A@A@A@A@A@@@A@@AB@@CBCBCB@@@BA@@B@BBB@BBBB@@@B@" ] ],
												"encodeOffsets" : [
														[ [ 111639, 31378 ] ],
														[ [ 111725, 31305 ] ],
														[ [ 111725, 31320 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));