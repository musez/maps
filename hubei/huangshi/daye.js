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
									'大冶市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420281",
											"properties" : {
												"name" : "大冶市",
												"cp" : [ 114.974842, 30.098804 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@[FSDYDIBKBMBUHKDI@@B@B@DAB@BIBQFG@GBA@CBKBA@@@@C@ACCACC@EAC@EBCBCFAD@FMJK@IBSDA@AAAAAAG@E@CBCBA@ECEAC@YHIFG@CDCBI@GBA@ADAHABC@MBG@I@}RSHEBABBBBD@F@FEFEBGBGBEAMCMAMCE@EBCBAB@D@DBDEDEBAACAYIA@CBBDBFDFFBH@HBDB@B@BGLCFA@K@GBEBCF@@@@@B@@BB@@B@B@FDFHB@@B@B@@@B@@AB@@@@ABA@@@@B@@AB@BA@@@A@A@@BA@@@@@@@@@@@@B@@B@@@@@B@@@@@BB@@@@@@BB@@@@@@@@B@@@@@@B@BB@@@@B@@@@@@ABABA@@@@@@@A@@@A@@@@B@@@@@@@BB@@BB@@@@B@@@@@B@@B@@@@@@@@B@@BB@@@B@@@B@@@@@B@@@@B@@@@@@B@@@@@BB@B@@@B@B@B@@@@BBBABAD@@ABABABCDAB@DBBBB@BABABC@A@@B@B@B@BBB@BB@@BBA@@BADADCBA@AB@B@B@B@B@B@@B@BBB@@@B@B@@ABAB@B@@@BB@@B@@BB@@B@BAB@BAB@BAD@BA@@DAB@D@BB@BB@@BA@ABCBABAD@BABABE@A@ABCFCHCFAFAF@D@D@FBDADDCFCDABALAHGDEFADCFABCCACACAAC@CDCDCF@FDBBD@B@BAD@B@@B@FBBB@DBBBBB@B@D@@BBB@BBDAB@DABABBD@B@BBFBJBJBHDD@D@BADABCBCBABABAB@FAB@AAB@@AB@B@@@@ACB@AA@@@B@BA@@@@@AA@@@@A@AB@@@FB@@@A@E@@AC@ABC@A@@AAA@@A@@BCDE@G@@BABAB@FDF@FBBB@@HBFADCDAFFDDHDJ@FAF@D@BHBFDL@DIHADBDFFFBFBFBDEBEBCBCHAH@FBFBDF@DDBFDFDFBBFBDBDCDEBCDCD@FAHCDAD@FFFDDDDFDFDF@DADADCD@@DADCDCFCDCHEFBDANCNCFEDCBC@EB@FAH@BADIDIFCBCDCD@D@FFLDDFDFBD@D@D@@BABCDAD@DBDRHBBBFKHCBEBC@M@CBCFCDEFMFEDCFGDCF@FCDCDEDKFAF@N@FBHAFAHCHAHDJFBF@FD@F@FDDBDHDHDLDJFDDBFEFABADABAB@BDFBD@FBFDFDDDHHHJLRLDBD@BBHAB@@@@KBE@ADEBAB@DA@A@CAEBABADCD@DAD@F@F@B@BAFE@@B@F@FCLCJAHAL@H@FDCHAH@D@DHJB@NBL@NDX@@@F@J@D@JIDCBA@CAK@C@EBCDEHCFCFAFAF@F@FBDADADCBCBCDABA@CAC@AGCCCCAAAAC@ADEFG@A@C@EBEBACAG@@@A@@@@A@C@A@@CCCA@C@A@CBABA@@BA@A@A@A@A@ABABCB@DA@AHCFCFCBA@@DCBA@@@A@@GE@@@@@A@A@ABABAB@@@HAD@BAB@B@@BB@@@B@BAD@B@@A@@@A@CBABCFEB@B@DAHADA@@D@@@HDAACCAA@E@AHE@AHCLGBCDEFAD@B@B@P@H@VAHAF@JBNDF@DDDDBFBDBDBDL@F@TBN@J@B@BADA@@B@BBDABAJADCFA@@B@HBD@B@DBB@D@J@D@FAFABABABCAABA@@BAFAD@B@D@BBB@@B@BBF@B@D@@BBBB@DDBDHFBDBB@B@HCDA@@DAB@D@FBBBB@@BBDB@DBHBB@BA@@B@B@B@@@BB@DB@BBB@@@B@BABCFCDABAB@B@DBB@BBB@B@@BB@@BJBDBBBB@BAB@B@@@BBB@BBB@D@B@BA@@@C@ABA@A@C@@BE@A@A@ABABA@ABAAA@C@A@CBE@A@AAA@C@@@A@@@ABA@A@@@AAC@EAA@AA@A@@@AA@@BE@ABC@ADADAB@DB@@@@B@B@B@F@FEFALCDACACAC@CACC@C@CDE@CACCEACIIGEGEGCIEKCKAGAKBM@IAIBIBEDCDIDGBG@I@K@C@GDIBIDKBM@ICICCCAGAGDEAEBEDIFMBEBEFIDEDEDEFGHKHEJOHKJEFAD@DA@@@AAC@AAAAAA@EECE@AEEECA@A@ABA@C@@BAAAC@CAACAA@EAA@@AA@@E@@AAA@A@C@A@@@A@CB@BA@EBEFA@C@A@AA@@@CACAA@@@A@C@@BC@@@E@C@@@C@@@@BABB@@B@@A@@@A@@C@@ACCCCAAACAAA@A@A@CBEBC@A@@@CCIAK@I@OCQAGEAEAGBEAEAG@CAEECIEEEKGGCKGCEACAEAGBG@E@G@AA@@A@@@AB@BAB@@@@A@@@C@@A@@AB@@@@@@A@@@ACAAA@@AAA@@AAA@@@A@A@A@A@CBKBG@C@AAEGCECEAAAA@AA@A@@C@EAEAE@C@A@CAA@EAC@EBC@G@C@IBEBCDMD" ],
												"encodeOffsets" : [ [ 117637,
														30576 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));