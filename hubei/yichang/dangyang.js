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
									'当阳市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420582",
											"properties" : {
												"name" : "当阳市",
												"cp" : [ 111.793419, 30.824492 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@@DBFBFD@BFDDBBBBDBLBDFBDCBCBEAC@CACAACCAEDEDAFABBFFDFFFDBDADIFCD@FBFABA@C@CCG@C@C@AAKAGAEAAACAC@CDCD@DBD@DABABC@ABCBCBE@CDCL@D@FCBABAFADCBC@CCCEACAACAC@C@@CAAAA@AC@@K@AAAAAACGACEEAEAEEICCAACAABC@EBCBCDCDCDC@CAACAA@ADEBADCDKBCJQBGDAFAF@L@B@B@LLJDL@T@F@DABCBABCBEAC@CAEEGAC@A@@DCDCHABC@C@GBEDAAABAF@NAD@B@@@CG@A@ADABCBAB@B@F@@@@@B@@@@A@@@@B@BBB@@@@C@@@@@@BB@@@A@A@@B@BBB@@@B@@A@@AA@@A@C@@A@@@ABA@A@A@AB@@AB@@@B@@@B@D@B@@@@A@E@AB@@AB@BABA@AB@B@BB@@BAD@B@B@@@B@@A@AACAACAA@AEAACGAEAE@C@ACE@@@C@CDK@E@CHIBE@@@@@A@CAEAC@CBCDCDAB@D@@B@DADAB@B@DDBBBD@D@B@@ADADA@A@CACACACFO@E@CACAG@A@CBA@CAC@CAO@GAICE@@A@C@A@@A@CAA@A@AA@A@A@AAAABADEPQDEFEFKPQBADA@AB@@@B@@@@ABC@A@AB@AA@A@ABABA@A@@AA@@AA@@@@A@A@@@A@B@BC@@B@@AB@@@@@@A@@@A@@@A@@B@@@@@@A@@@A@AAAAA@A@@B@@A@@@A@@@A@@@@@@B@@@B@@CB@@@@@BA@@@@@A@@@@@A@@B@@@@@@A@@A@@@@@A@@@A@A@@@@@A@@@@@@@A@@@@@@@@@@@A@@@@@@@@A@@@@A@@@@A@@@@@@@@@@@AB@@@@@@A@@@@A@@@@@@@@A@@@A@@@@@AB@@@@@@@@@@@B@@@@AB@@@@@@@@AA@@@@AB@@@@@BA@@@@@@@@@A@@AA@@@@@A@@@A@@@@@A@@@@@A@@@@@@@A@@@@@A@@@@@A@@AA@@@@@@BA@@@@@A@@@@AA@@@@@A@@@@@A@@@A@@@@AA@@@A@@@@B@@A@@@@@@@@B@@@@BB@@@@@@@@@@@B@@A@@B@@A@@@@BA@@@@@@@A@@@A@@B@@@@AB@BB@@B@@@@@BA@@B@@@B@BAB@@@D@@@BA@@@@@@BA@@@@@@@@@@@A@@@@@@@A@@A@@@@A@@@A@@@@@AB@@A@@B@@@@@@@@A@@@@@A@@B@@@@A@@A@@A@@@@@A@@B@@A@@B@@A@@@@AA@A@@@@@@@AB@@ABA@@@A@C@AAA@@@A@A@@AA@A@A@@AAAAA@CAAAAC@AACA@A@A@A@BCBEBAFC@@DEDCBEDCHIBAEEA@A@CAACACACCCA@BCBAB@F@F@BD@@TE@A@A@C@ABAB@D@BCBE@ABC@CA@C@@AAC@GACAACA@@G@G@@AAC@@CCAA@@C@C@ABA@@BB@BB@B@BA@@@EAA@A@IEAB@BBDADC@A@AAACA@@@@CAAA@A@E@A@CAAAAAAAA@CAA@A@A@GCA@AAA@@ADC@A@AEEAQACCCCCAABEACA@AAAAA@A@C@ACCAAACCAA@AA@ECMECAAABABCDKACEMIGGCCAAAB@@ADAF@F@FEBAB@FBF@DABABABA@ADCDI@IACW]IMEKCUEOCCCBOAI@A@GBE@C@WBCB@@E@G@@@@B@@@B@@A@@B@@ABAB@BBBBBB@B@DB@BAB@BABABGJIHABCD@BABONAFADAB@D@B@BBB@B@BCDABA@CBGAC@A@A@ABE@CBA@A@CBA@ABAB@D@DADBB@BBBBBB@DBB@DBL@DB@@@B@J@B@DADCBC@ABABAB@@@B@@@D@@E@G@CA@@@CCCECAAECE@A@AB@@ADABC@CAA@AAC@C@A@AA@@CCEAC@C@GDCBADABCBCDA@C@AAAAGEA@K@A@A@CAA@ABCB@B@D@BBB@DGHEDADAB@@A@C@AB@@@@A@@C@AAA@@E@A@A@A@CEA@C@A@@B@D@B@@ABA@@DA@@D@@BD@BAB@@AB@@@BBB@BA@I@A@A@@ECEAACACAACCAA@G@AAA@ACAAA@@@A@@B@B@D@BA@@@A@ACAE@CBAB@@A@AC@@@ABADAB@@A@CAC@E@CBCBCDCBC@@@@GDC@A@AA@AAE@A@EEIICCACA@A@A@IHCDAFDD@BAD@BHNDH@DDJ@BCDCBCD@BDDCF@F@DBFBD@DBBF@D@B@BBBB@DDJBHBD@F@D@FBDA@EBG@AAACCECKAACCECAACAAAAA@AB@BA@AAAAAA@A@ABAB@@CBABEFCDGDCDAB@BDFBJ@BADA@@@AA@A@A@A@C@@@@A@@@@D@@@DABABA@CACB@@ABA@C@A@A@AAAA@CAACAA@AAC@@AAAAC@@ACAG@CAE@AEAC@CAAAAGA@CD@@A@@AAAAACAC@@BAB@@@BBD@BADB@@B@B@B@@ABCBAB@BCBCD@BCD@BA@ABAB@@DDDD@D@BAB@BA@@BBD@@DDBB@BBBB@B@@@BAB@D@@BBB@@@BAD@D@BBD@BBBA@CFAB@BAB@BEBCBE@CA@@@A@A@AAA@CAAEDEBCBAF@D@@ABA@A@AA@A@C@CAAAAA@AAAAAC@A@@AC@C@AACCAC@A@CBCDABABAFAB@DBD@DAF@FEHAJAF@DAD@DAFAJEPAP@DBDBF@BAD@DAFADCFCDGHADCD@B@DBDDBBFBFBF@BHB@D@B@B@D@B@DADBD@BBBBAD@FAB@BB@DCL@B@DBBHLBDBFBD@FDJ@F@BAF@H@D@BBB@B@BAB@BA@E@A@AB@B@DBDFHBD@B@DAD@BCDCBABGDGDEBEDCBEBGBAB@@@BBB@BB@BL@FADADCB@@A@E@AAAACCA@CB@B@HBHDFBBLFBFLAPGFADCDC@C@ECE@ADCDEFAF@FDDFBDDBBDBBDBD@DBDBBDDBB@B@BAB@BD@@@BA@EBA@@B@BDF@BAB@B@BFFBBBBDBBBDAPADALEFEB@DBDFFFB@B@B@@ADAB@@@B@BB@ADABAHEBBBB@B@DAB@@ABCA@@@B@BFJDBFAJ@@B@@@BABBB@@FB@B@@AB@@BBB@BBB@@F@@@BBJFFBDAB@BEBABEHCBEBA@C@@ACBABAA@@@A@@C@A@ABGBABAB@@AD@@@B@B@@BDBDBB@@BABAB@BBB@B@@AB@BBB@BBB@BB@@B@FABABC@A@@DCB@@@BAJAD@D@BBFDBBD@H@H@F@BBBB@B@D@@FF@BED@B@@AJAD@D@BBD@@AB@B@B@BB@B@B@@AB@DDBB@BBB@DABA@ABCBA@ADBFBFDBD@FBDDBFADDDBDDDF@D@D@DCNGBABBDB@BBD@DAL@D@@B@D@F@JEBADADEBADGBAB@B@F@B@@@@@@@@ACAAA@A@@D@DAHBHDFD@DEFCFAHAJAFDBDBJDBD@FADAFABGHADBDDBBFBJ@FFHLNHHDBB@D@DEFEDAB@DBDBBDJHFDLDDDDFBFBHFNBHDJBDFBFBF@DBBDADABABA@ABAD@D@DBBBBDBN@DHBDBDBBDFBBB@D@FAHDHDFF@JBB@BAD@B@DBHBBBBH@HAF@BBB@BDB@" ],
														[ "@@BA@A@ABCBABABABCBE@E@@SFDHBFABABABFF" ] ],
												"encodeOffsets" : [
														[ [ 114571, 31923 ] ],
														[ [ 114763, 31437 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));