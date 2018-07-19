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
									'松滋市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421087",
											"properties" : {
												"name" : "松滋市",
												"cp" : [ 111.77818, 30.176037 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@@@D@BBBBD@BBBDDHBBBBB@B@DAB@DJ@@C@AB@DCB@BA@ADCBABAoO" ],
														[ "@@@@AB@@ABCB@@ABC@A@@@E@@@C@C@CBABCBABEBABAB@@A@@@A@@@@@@@@B@@@@@@@@A@@@@@AA@@@@@@@@A@@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@@@@A@@@@@@@@@@BA@@@@@@@@@A@@@@@@@@@@A@@@@@@@@@@A@@B@@@@@@@@@@A@@@@B@@@@A@@@@@@@A@@@@@@@@@A@@@@@@BA@@@@@@@@BA@@A@@@@@@A@@@@@@@A@@@@@@@A@@B@@@@A@@B@@@@@@@@@@@@A@@@@@@@AB@@@@@@A@@@AA@@@@@@@B@@@@@@@@A@@@@@@@A@@B@@@@A@@@A@@B@@@@@@A@@AA@@@AB@@A@A@@@AA@@@@A@A@@@A@@@@B@@@@A@@B@@@@@@A@@@@A@@@@@@@A@@A@@@A@@@@@@BA@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@B@B@@@@@@A@@A@@@@A@@A@@A@@@@@@@A@@@@@AB@@@@A@@@@@@@@BA@@@@@@@A@@A@@@@@@@@B@@@AA@@@@@BA@@@@@A@@@@A@@A@@@@A@@@@@@A@@B@@@@A@@A@@@@@@A@@@@@@@@@@@@A@@@@A@@@@@@A@@@@@AA@@@@B@@@@@@@@@@@BA@@A@@@@@@A@@@@@@@@@@A@@@@@@@@@A@@AA@@A@@@@@@@BA@A@@@@@@@A@@@@@@A@@@@@@@@A@@BA@@@@@@AA@@@@@AB@@@@@AA@@@@A@@@@@@A@@A@@@@@@A@@A@AA@A@@@AA@@@@BA@A@@B@@@A@@A@@@@@A@AA@@@@@A@@@@AB@A@@@@@@@@AA@@@AA@@B@@A@@@@@A@A@A@@A@@A@@A@@@@B@@@@@@A@@B@@A@@A@@A@@@A@@@@AB@@@A@A@@@@@AA@@@@@A@@@A@@@AA@@AA@@A@@@@@@@@@@@@@@AAB@@A@@@A@@@@AA@A@@@A@A@@@@@@BB@@@@@AB@@A@A@@AA@@@@@@AA@@@AA@@@A@@@@CB@A@@A@@@@@A@@@@A@@AB@@AAA@@BA@A@A@@B@@@@@@A@@@@@@BA@A@A@@@A@@A@@@@A@@@AB@AA@@BA@@@BBA@@@@B@@A@@A@@A@@A@@A@A@A@@A@BA@@@@@@AA@@@A@A@@@AB@@@@A@@@A@@B@@A@@A@BAA@BC@A@@@ABA@@@@@@@BB@@@@@B@B@BA@@@A@C@@@AB@@A@@@@BA@@@@@@A@@A@A@A@@@AAAB@@A@AB@@@@@AAAA@@@AB@@A@@@A@@@A@@BA@@@AB@@@@@@A@@A@@@@@A@@@@A@@@A@@A@@AB@@@@@@@B@@@AA@@@@@@@@@@B@@@@@@A@@@@@@@A@@@@@@@@@A@A@@@@@@@@@@AA@@@@@@A@@@@@@@@@@@@@A@@@@@@@@AA@@@@@@A@@@@@@@A@@B@@A@@@AA@@@@AB@@A@A@@@A@@@@@@AA@@@@AA@@@A@@@@@A@A@@@A@@@A@@@@@@@A@@@@@@@@@@@A@@@@@@@A@@@@@@@A@@@A@@@A@@AA@@@@@@@@@AB@@@@@@A@@@@B@@A@@@A@@@@@@@AD@@@@@BA@@@@@@@@@A@@@@@A@@@@@@@A@@AA@@@@@@@@@@@@@A@@@@@@BB@@@@@@B@@@@AB@@@@A@@@@@@@@@@@@BA@@@@@@@@@A@@@@B@@@@@@@@A@@@@@@A@@@@AAA@@@@@@@@@AB@@@@@A@@@@@@A@@@@@@@A@@@@@@@@A@@@@@@@@@@AA@@@@@@@@@B@@@@@@A@@@@@@@@@@@@@AB@@@@@@@AA@@@@B@@@@@@@@A@@@@@@@@B@@A@@@@@@@@@A@@@@@@@@@@@A@@@@@A@ABA@@@@@@@@@@@@@@BA@@@@A@@@@@@A@@@@@@B@@@@@@@AA@@@@@@@A@@@@@@@@@@@A@@B@@@@@AA@@@@@@@@@A@@@A@@@@@@@@@A@@AA@@AA@CACA@BC@ADAD@DABABAB@@CBA@C@@AEBCBAD@B@FCFAB@@ABABCF@@AF@DCDCBC@E@C@A@CAC@CAAAA@CAA@C@CBEAC@CAAA@@ECEAC@CAC@A@C@E@ABEBGDCDADCBA@C@CBE@AC@@AA@AAAA@C@CBC@EDA@EFAB@@A@@@AAECCACAAAA@CAACCCAA@AA@@AAAA@AAA@A@CAA@@@A@@@A@@AEAC@AA@@A@ABA@A@A@A@A@ABA@CBA@CBABABABCDABADAB@@@B@DBDBBBBBBBBB@@B@BBF@@@BA@@@CACACAA@@AA@C@@@AB@@@B@@@B@@@BBBBB@B@@BB@@@@BDBD@B@@@B@@@B@B@@A@@BAA@@ABA@@@A@A@@@A@@B@B@@AB@@@@@B@@A@@@A@E@A@A@AA@@A@AACAA@AAA@@@A@@@A@@@@BA@A@A@A@A@@@C@@@A@@A@@@AACBCAA@A@AA@@AA@@@@@A@CBCDA@@B@@@@ABCJAF@BA@@BA@@B@B@@@B@@@D@@@B@BA@A@ABA@A@A@@@AB@@@@@B@B@@BBBB@@@@@B@@AB@@CB@B@@AB@@@BA@AB@@AB@BA@@@A@A@@@@A@@@@@A@@@@@ACCAA@@A@@@@@A@AB@B@@A@@BADABAD@@A@@B@@A@@@ABA@@@A@@@ABC@A@@@AB@@@BABABABADA@@BAB@D@B@B@@BBBF@B@B@D@@ABCBABAB@@A@A@CDA@@@@B@@CBA@@@@@C@AAA@E@C@@@@@@@AB@@A@AB@@AAA@E@A@@@A@ABAB@B@B@BADAFCFADAFAFABABABABC@C@A@C@A@ABADABFFDBB@D@D@DBBAB@HBH@HBTBL@N@J@H@L@NDHDDHDJBLBLBHDHDFHFNDNDNDFFHFFDLHLDFDDJDHFHJJD@J@H@J@FCHIH@JA@@@@B@HBHCFCDCFAH@FBLBF@D@HAFCJEJGJAP@BAJFHBLFJFH@HAHEHEHEHGDBNFNFJHJHLHLHJBB@@@DBDB@D@D@D@H@BBB@BBD@FALAB@DpP@ABAB@B@BD@B@D@B@BEL@BCBA@ABC@E@A@@A@CI@@@ABCBABA@AB@D@BDNBD@D@BAJD@BBD@D@B@BBBBBB@B@D@BBBBDBB@B@B@DAD@LFBDBBBBBB@BD@BBBDH@F@BDBBBBB@@@BAB@BIFABC@ABC@ABAA@@BE@C@AAAC@A@AB@BABABEBC@CAC@A@ABADAFCP@D@DJ@LBFD^VBFB@BBFLBHFDDHFFDFFJDHBDDHHHHHHDHDLFHBJDNFJFHDHDHDHDHFLFLLDBHFDDJHFFHDJFHDJDHBHBFBF@H@F@H@JAHAFCDAFEFEDEDGBEBE@EBGBGBCBEBEBEDEDEHGFEFGDCDEBADEBCBCFGFBFFD@F@DCBEAG@GBCDED@LBPBPDJ@LANEJANALCHAJBHDDLBJBH@HBH@HBJBHFJFL@B@D@B@FBFBJDHDB@DHFDFJADAJGFAHIHKHODIJORSPQNMDAPONGDAPCLAP@V@VDDAD@BABADA@C@ABGBECOCGGAE@IAAEJKDEFG@ECAGAKAEAECCC@CAECGCEECEEGEAAGIEKEICEEGCEMCIBGBBBBD@FE@A@C@A@E@E@EAEBAAC@AAAA@AAEAGCEACCCCAC@AACBCAC@CCGECEAI@IAECIEEGGGECECEAECC@ACEJELEHGFIDKDKBMBIDQBKBMBI@E@CGAGCGIGKCGEGEIEEEGEKAEEICCAACA@CAC@C@C@CBI@ABQBIBG@GBG@IBEBKBC@ADCBC@C@AEEKGIGKEEEEIAAAAAASBCAIBGBMBI@MBC@ICG@IC@@A@@@AB@@@@A@A@@@A@A@AAAA@@@A@@AA@AA@A@@@A@" ] ],
												"encodeOffsets" : [
														[ [ 114252, 30872 ] ],
														[ [ 114495, 30619 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));