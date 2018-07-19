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
									'新洲区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420117",
											"properties" : {
												"name" : "新洲区",
												"cp" : [ 114.802108, 30.842149 ],
												"childNum" : 3
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@@AA@@@@AB@@@B@@@@A@@@@B@@B@@@@B@@A@@@@@A@@@AA@B@@A@@BA@@A@@@@A@@B@@@@AB@@@@@@@A@@@@@@A@@@@@@BA@@B@@@@@@@@@B@@@@@@@B@@@@@@@@@@AB@@@@@@A@@B@B@@@@@B@@@B@@B@@B@A@@@AB@B@@B@@B@@@B@B@@@@B@@@BB@@@@@@D@@@BBAB@@@@@@AB@@@B@@@@A@@@@B@@@@@BB@@B@B@@@B@@BB@@@@@@@@@B@@@@@B@@@@@@A@BB@@@@@@@@@AA@@@@B@@ABA@@@A@@@@@A@@@A@@@@@@AA@@A@@@@@@A@@@A@@@A@@@A@@@@@AB@@@BABA@@@@A@@AAB@@A@@@@@@@@@A@@AA@@@A@@@A@@AAA@@A@" ],
														[ "@@@@@@BA@@BA@ABA@CBCBCBEDG@@@@@A@@B@@@@@B@@A@@@AB@@@@B@@@B@@@@B@@@@@@B@@@DDBBBBBBABA@ABC@@DA@@@A@@@@@ABA@@@@B@@@@B@@@B@@B@@@@A@@@@@@B@BB@B@@@B@@@@D@H@B@@@@@B@@@@B@@@@B@@@@@@@@@@@@@BBB@@B@@@AAA@@@A@@B@@@AAAC@@@A@@@C@@AA@@@ABA@@@@@ADAB@DAD@D@DB@@@@BDBBBB@@B@@@@@@B@@AB@@@@@B@@RD@A@AA@@A@ABABAD@D@B@BBBB@B@B@BFDBADA@@A@@A@@@ABA@A@AA@@AA@@@@@@A@AB@BA@A@@BAAAAA@@CAAAA@@@A@C@AAAC@@@A@@@A@C@AB@@@DA@@BAB@DC@AB@B@@BB@BB@@B@@@B@B@@@BABC@A@@@@@@A@@@A@@@C@@@@AA@@AA@A@@AA@@A@@@@@A@A@@@@@@AA@@A@@@@AA@@A@@@ABA@@BCBE@@@A@@A@AA@@@A@AB@@@@@B@BA@@DCBCBADGFADCDEDAB@B@BABA@AB@B@B@B@B@BBB@@@@@D@B@D@B@BAB@@@B@@DBB@@DBB@DAHCB@@A@@@AAAAA@@AA@@@A@@CAAAAA@@@@A@@A@@@ADCDCFCDAHC@@BBB@@BB@BB@B@@B@@@BAB@BC@@@@B@@@B@B@B@@@B@@@B@BAB@BA@@BAB@@AB@@A@A@@AA@AA@@@A@C@@@A@@@@@@@@A@@@@BABA@@@ABAB@BA@@B@@@@@FAH@DADBB@DAD@B@BAB@BABCACBC@A@ADA@A@CAAEEEAIAAACAA@CA@AC@AAAAEA@@CEA@C@A@@AAABCBAD@BA@@@ABAA@@@@AA@AAA@@AA@@@A@@@ABA@C@EC@@A@@@AAAAAAAC@@E@C@C@CBCD@@BBBDBBBBA@@BABABA@@@A@AAA@A@@@GDGBKA@@@A@ABC@@@@@A@@@@@@@AA@@@AA@@ABCBABCFC@E@EEGG@@B@@ABAACAA@A@CBABADA@AB@BABCBCBCBCACCCAAA@@@C@A@AACCAA@EAC@E@CBCAACAA@AAA@@@AB@D@F@D@@@@@B@@@@A@A@A@A@@A@AAE@A@AACA@CAC@@@A@A@@@@B@B@BADA@A@AA@@CCCACACACAE@EAE@CC@E@@@ABABAB@B@B@B@@AB@BCBABADC@C@C@C@CCE@AAACAAA@@CDCD@BCD@BCBABCBA@ADA@CHEDEBKC@@IKCCA@@@C@CBC@CBA@CBC@CB@@A@ABAF@FABA@A@AAC@CDE@EBE@AAC@EA@E@C@CBE@E@E@EAG@ECKCCCCCCEAEAGECCGGCEGEECEAECE@GAEAEACAEAGACAEECAIHEFC@EAACCG@A@AAAAAACAA@@@A@A@ABA@ABABCBA@CBAFGDC@CBADE@@BA@A@AB@BA@ABAFA@ABCB@@A@A@A@AA@AAAAA@AA@@AA@C@A@@AA@A@A@A@AB@@ABA@@BA@A@A@@BA@ABA@@BCDAB@B@@BB@@BB@BBB@DBB@BB@BB@@B@B@B@@@B@BB@@@B@BAB@BAB@BAB@@ABABABABAFEBA@ABEBABCBABCDABC@C@A@C@AB@B@B@BB@@BB@BB@B@BAB@@ABA@A@@BA@ABA@AAA@AC@A@A@@@AAACCCKAMA[AYCQCQEECM@qOOICAWSQGUIYG[GuIMCOEYMQGQBG@_JA@UTAHS`KbK\\@BOZSfKTOPADSJYFBHDNHCFAFA@F@@@B@@@B@BA@@@@BG@EDADCFAFADEFABEBEBGBCBEDGB@@KDA@IDIDAH@@DHDHB@BABAB@BABANGLCJABB@BBF@J@BADABADILABCBCB@@@@@B@@BD@FDV@@BB@@@BB@BB@B@@BB@B@@@B@B@B@B@B@L@@@B@B@D@D@DAB@BCD@BCDA@CDEDABA@@BADAB@@@B@@@BB@@@B@@@B@B@@@BADABABAB@BCB@BAD@BAB@@@B@B@@BB@BBBB@@BB@DBB@@@B@@B@@@@@@@@@@@B@@@@AB@BA@ABA@@@AB@@@@AB@@@BA@@BA@@B@BA@@@@B@@@B@B@@@B@BBBBB@BBB@@BBBBBBDBB@@BB@@@@B@@BD@B@B@B@B@B@B@B@B@@@B@D@@AB@B@BAB@B@@AB@B@F@D@@BB@B@B@B@B@@@HBLB@@BB@@@@B@@@@BB@BDBBDBD@F@BBB@BBBBB@B@B@BBB@@@@B@@@BB@@@@BBB@@B@@B@@BB@@@BBBBBB@@@@B@@@@@@@B@@@@@B@@@@@@@@@BA@@@@BAB@@@B@B@@@@@BBB@BA@@@B@@@@@@@BB@@@D@@@@A@@B@@@@@B@@AB@@@@@BB@@B@@@@@@@@B@@@@@BBB@B@@B@@@B@@@B@@A@@@BB@@@@@B@B@@@@@@AFBJ@@@@@@@@BDBB@B@@BBD@D@B@@BB@@@@@@B@B@BBB@BBB@BBB@D@@BBBB@F@B@B@B@D@@@@AB@@AB@BA@@@@@AB@@@@@BB@@@@B@@@@@@@B@@BB@BBB@BB@@B@@@BB@@BB@@BB@BB@@@@@B@@ABA@@@@@@@@@@B@@@B@B@D@B@@ABAB@B@@BB@@@B@@@@B@@@@@@AB@@@@@@@@B@B@B@B@B@@AB@@@B@@@B@B@D@@@@@@@@@B@@BDB@D@D@F@D@DBFBDBDBHBFBB@BDDDDD@B@B@@@B@@BBB@@@BA@@@A@@@A@@BA@CDCBA@A@@BA@@B@@@@@B@DBBBDDDBBBB@@@D@B@@@B@@@D@B@B@@B@@@D@B@B@@@@@BB@FDBBB@@@BBDB@@B@B@B@DAD@@@D@D@@@B@@BB@@B@B@@@@BBB@B@@A@@@A@@@@AEAA@ABA@A@@@@FCFAD@F@FB@B@DCB@@A@@@ABA@@@@@A@@@@B@@AB@@@B@@@@@@AB@@@BC@@BAB@B@@B@B@@BB@@B@@BB@B@@AB@@@@A@@B@@@BA@BFDD@DADAB@@A@@B@@@@@@@B@@@@BDBBF@@@B@@@B@@@B@BB@@DD@B@B@@@BB@@A@@@@BA@@BAB@@@@@BBB@DBB@D@B@B@B@B@B@@@F@BBFDD@DBB@@FFFDBDBDDD@FBD@B@D@D@BCBCAAAA@A@AD@BADBD@B@B@B@@A@A@AA@@AA@@@A@A@@@@@A@@AA@@A@A@ABA@ABA@C@@BA@@@A@@@AAA@ACAAA@@@ABCDC@A@AB@B@BBBBBBBB@DDJBDBDBBBDBH@F@D@@BB@@B@BBDBBDDBBBBBBBBBBBB@@@@@BB@@B@@@B@@@@B@@B@B@B@@@@B@@@@@@@@@@@@@@@@@AB@@@@@@A@@@A@@B@@@AA@@AAA@A@@A@@@AAA@@@AA@@@@@@@A@@@A@@@@@@A@@@@BABAB@@@@@@@B@@B@@B@@@BBBBBBDBBB@@B@B@@@B@@AB@@@@@@A@C@C@A@A@ABA@@BABA@A@EAC@A@CA@@AA@@@AA@AA@@A@A@@BAB@B@FCB@B@@A@A@AB@B@@ABGBABADAB@B@B@BBB@B@@AAA@A@ABA@@@EB@F@D@@@BB@B@@B@BAB@B@B@B@D@B@@@@ABA@CBA@@B@B@D@B@B@D@B@D@B@B@@@B@D@B@@@DBB@@@BBDDBF@@DFDJFBFDBF@BAFCB@@ADCB@B@@A@@B@@BB@B@B@BA@@@@B@@ABA@ABABC@A@E@CBC@A@ADABABBB@BBB@BB@FABBDAB@@@B@BBB@B@@BBB@BB@@B@@BB@BBBHBHFFDDDD@FBHBFAFAH@HABBDBDBFDDBDBDDDB@A" ],
														[ "@@@B@@@@@@BBB@B@@BB@B@@B@@A@@@@@@@@DDDDFBDADAF@DAFCDADABBDDDBBFBFADEBCDE@GCE@IAGBIB@@@B@B@@@@@@@@@@B@@@@B@@@@@@A@@BA@@ECA@AB@@ABAB@@@@@B@@@@AB@@A@@A@@@A@@@B@@A@@@@@@@@@A@@A@@@@@A@@@@@A@@QC" ] ],
												"encodeOffsets" : [
														[ [ 117698, 31765 ] ],
														[ [ 117680, 31759 ] ],
														[ [ 117729, 31738 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));