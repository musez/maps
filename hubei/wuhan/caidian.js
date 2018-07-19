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
									'蔡甸区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420114",
											"properties" : {
												"name" : "蔡甸区",
												"cp" : [ 114.029341, 30.582186 ],
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
														[ [ 116867, 31327 ] ],
														[ [ 116673, 31092 ] ],
														[ [ 116722, 31088 ] ],
														[ [ 116492, 31026 ] ],
														[ [ 116578, 31002 ] ],
														[ [ 116748, 31076 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));