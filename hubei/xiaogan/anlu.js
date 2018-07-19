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
									'安陆市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420982",
											"properties" : {
												"name" : "安陆市",
												"cp" : [ 113.690401, 31.26174 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@AAACEECACAE@C@C@C@C@C@AA@A@CBA@CBCD@D@BBD@DGDCBAAC@EECAC@C@ABCBC@C@AAE@EACAACMOCEECAA@CDE@A@GCECGAA@E@ABGBGBI@KBM@GEIEKGMGGGGEICCGAE@EEGEGIAGBEDIBIBG@KAGBMBEBEFIBI@CBABEBCBC@EACCACAC@CACBC@ABGAAAAAACAC@EBEDAFABA@A@AACAA@@A@C@GEAACBADIDIFEBADCDCDADGFCBEBIAEBCACAA@E@AD@@C@C@A@C@EDAFADC@C@E@EBE@EDCBEBEDC@E@C@E@@ABE@ACC@@AAAA@CBC@@AAA@@CBC@E@CEEGCEAEACACCACCECA@EAA@E@CEAC@KCAACAC@EAAA@C@A@A@E@C@EAGAE@AECEGAEAA@A@A@ABCDCDAHEDCA@DC@CCECAECCCAAA@CBA@C@AAC@AACAE@EAEEACBA@A@A@AA@AAA@A@A@AAAA@@BABAB@B@B@B@D@BAB@@A@@@AAAA@@AAAB@@ACAAA@C@E@C@CAACACAE@OE@DA@MPB@@BA@ABCDCBCFEFGFEF@BB@B@BB@@@B@BABA@A@A@@BAD@BB@BB@@D@D@F@B@DB@B@@ABABCBAB@B@DAHCFCLCHCDCBCBC@CACAAAACCC@CCA@@ABBH@DAB@@@@A@@@CA@@A@@@CF@DA@@@A@C@A@A@C@E@A@ABA@@BABB@BBFDFBCDCBCBA@CBCDADA@A@C@CBCBC@CAA@MGGCGIGGEIAEAAAAGAKCGCA@AA@ACOCBGDMNABAB@B@BABEBABABCBC@ABIHADAB@DDDD@@BDDDDBDDDBDDH@B@@BF@J@R@H@H@J@NALAJBN@RCPALKHE@MDIBK@GAKAGDEDCFCJCLAJAB@@E@EDADADCH@FAF@D@FADCFODEBAF@BABABADA@ABC@AAA@CACBCA@ACA@AA@ABABCDAB@@A@EAECACACCKAA@CA@ABA@@B@DADA@ABCBAB@BAD@B@B@@AB@@AFBF@DABCB@@ABADAD@BABABK@AC@AA@AA@B@@ADADCD@DEDEDCBA@@@AAC@A@C@AB@B@DBB@B@DABADCDADCBCDABCBCDADBBDFBHBHBJ@DDBF@D@DC@CDAFDHJDNCR@NCNCJCPCPBLFFHDNDLBJBLCFEJELKFANAJ@JFFDHFLDJBD@@@REH@D@FHBDF@HCFAF@BBDBHDB@B@B@BAB@BBBBBD@BAB@BB@@BD@H@B@HBB@BAHIBCJIBAFAFCB@@ABABABAHGBAD@DAB@BAB@@AB@@ABA@ABADCDAD@FA@@@A@A@CBAB@BA@@D@B@B@BB@@DBBBD@BAB@BBB@@@BA@C@AB@BCB@@@B@@B@BBB@@DB@B@F@@BB@B@@BB@@B@DA@@DBBB@@B@B@BCDA@@B@@@DB@B@@BDBB@@AB@@@B@D@@B@B@BBFB@BB@@AB@@ABABAB@@BB@B@B@@@@BBB@@ABAB@@@B@@BBBB@@D@BB@@@B@@@BB@@@@B@@@BB@B@@@@ADAB@BAB@@B@@@@@B@BADA@@@@BB@@@D@@@DBFADBB@BD@C@AB@@ADAPCB@BAHGBEBE@A@I@A@A@@LCBABAB@BABGB@DABAF@D@B@HBD@BB@F@B@DDBDBF@D@B@DFHFHFHDBDDDDFDHDDHBH@HDFDDFDFDJFJFHFDNNHFJFHDLHF@JAHAJAHENCNAF@JEJ@LEHEHGBCJCHCJ@HBLFHCLCL@JBDDJBFFJHHDJDLCHIDEFGFEAMBGDIFGFAHCFBHABHFJBHDHBFFDHBFBLCDAFEBEDKFGDCFALATCHA@C@C@C@C@CCCGACBC@E@A@GAAAEAAC@GAA" ],
												"encodeOffsets" : [ [ 116663,
														32144 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));