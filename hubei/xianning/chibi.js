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
									'赤壁市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421281",
											"properties" : {
												"name" : "赤壁市",
												"cp" : [ 113.88366, 29.716879 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@DQACAACCICCA@AAA@CBABCHGBA@CBCACEI@ABEDGBGDQBEDCFCPEJCFCJEFALCHAFABABC@A@G@ADGROHGFGFCFCFABADBBBHNFBDDF@D@DBD@DDDBBBB@B@@ABCBAB@TBF@FABADA@ABMBCBCDCHEDADCBEDCD@J@D@BBBBBHDBDDBBF@D@@@BA@CBG@CBAB@F@NBHBB@@B@D@D@@DBHBHDJDFBD@FAF@D@DBPHFFFFFFFDF@FDFDDBB@DFDDBBB@DAHCFAD@DBBBBB@BIJAD@BDBF@FBB@@D@DCHEFCDEBCDCB@D@HBDDFHDFDFFFDFBF@DADADCDCDAF@T@HBFDDB@BBDADADAFAD@FBJBDDDDBD@DAHEVGHAD@DBDBBBBDBB@BB@FAD@DBFFD@DB@B@BADBBDBLFBBD@DCPKFADADBFBBBBD@FGXBHJPNXF\\HhBFDJHDJDLBXALAJADCDAJ[@EDKDGFADCDQR]BGLIHADA@A@QBE@M@G@EBCBCNGBAHEDADADABA@AAMBA@@BB@@BBB@B@B@BA@ABAA@@A@@@A@@DAB@@A@@@A@A@@AC@A@A@@AA@@@A@@@@@@FABA@A@@@@@AA@A@AB@@@@AAAA@@@AD@@@@A@@@@AAAAA@B@@A@@B@@@@AAAAAAA@@BA@@B@D@B@@A@@AA@@@@DA@@@A@@@@AA@A@@@@@A@A@@@@AA@AA@@@@@@@@B@@@@A@@@A@A@@BA@A@AA@@@@A@@@@A@@@AA@@@A@@A@@@A@@BAB@BAB@@ABA@A@A@A@@@A@@@AAAAAA@@@ACA@CEEE@@@@@A@@B@@AB@B@@AB@BCDCBABABCBABA@@@A@A@A@@BCBC@A@A@AAI@A@A@A@CBA@@BA@A@ABAAA@@AA@A@@@A@A@@A@@@EA@@AA@A@A@C@@BA@@BA@ABA@@@@@E@E@AAAA@SE@A@A@GBE@A@C@@CCCAAA@A@CBC@C@AD@BCBAD@FAD@PEB@@A@CBAB@F@HBH@NBHBLDHDF@FBDAD@DC@ABCBAB@DBBBB@BA@A@ADCBA@AACAGAEAC@C@CEK@IBEDGBA@GMAKAE@G@C@EAGAQAQAEBEBC@CAIO@E@CBC@AAACCEAC@UDUBMBQ@M@GAGAKAGAOEECCAEEA@CAG@CACAEAQAEACBABEHABG@QAKAICC@CBEDEBA@A@@AA@EGA@A@CBADA@IBABILEHAB@F@FA@C@C@A@CBC@CCIGGEGAIAI@CACACEEMCSEGACUCQKEAC@C@GDGBGBEAGAC@E@GBE@CAEAMBA@A@AAECICIEMKECC@G@KCA@EACC@C@EHS@CAGBA@CDCHEJQDEACACEA]@_EUCMAK@MAMCKCCAAE@C@EBC@G@I@IAECAGCGCEAQM@A@CBCDEDG@C@A@CEECEEECAAAC@@@CDA@EBA@A@@@EBA@@BA@@@@@A@A@A@@@A@@@AB@@@@@BA@@@A@@@@B@@AB@@@@@B@@@@A@@@AB@@@@BB@@A@@@A@A@@@A@@BA@@B@@@@@BA@@@@@@@@@@@@@AB@@@@A@A@@@@@@B@@@@AB@@A@A@@@A@@@@B@@@B@@@@@@AB@@A@@@A@@@@BA@@@A@@B@@@BA@@BA@@B@BA@AB@BABAB@@@@@BB@@@A@@@@B@@@@@B@@@B@@@BA@@BEBCB@@@B@@A@@B@B@@@@@@@@A@AB@@A@@@AB@@A@@BA@@@AA@@@BA@A@@BA@AB@AA@@@AA@@CAAA@@A@@@@B@@@B@@@@A@@@A@AAA@@@AAA@A@A@A@AB@@A@@@@A@@@@@AA@@@@@A@@@@@A@AB@@A@@BA@@@@@AA@@@@@A@@@@@@@@@@@@A@@@EAA@@@C@C@@@E@@@A@@@CBA@A@@@A@@BA@@@A@@@A@@B@@@BA@BB@@@@@B@@@B@@@@@BA@@B@@A@A@@@@B@@@@@B@B@B@D@@@@@@@BB@@@BA@@@BB@@@@@@@@@B@B@@BB@@@BBB@B@@@BBB@BB@@BB@@@@B@B@@@@@BB@@B@@@@@B@@@B@B@@@B@BB@@@@B@@@B@@@@@@B@@@@@@@B@@@@@@@B@@@@@@@B@B@@@@@@@BB@@@@@B@@@@@B@@@@@B@@@@@B@@BB@@@@@@@BAB@@@B@B@B@@@B@DA@@B@@@@@B@@@@BB@BBB@B@@@B@B@@@@BB@B@BBB@B@@@@@@B@@@@@@A@@B@@@@@@@@@BA@@@@@@B@@@@@B@@@@@B@@@B@@@@BB@@BB@@@@@@B@@@B@@@@@B@@@B@@AB@@@@@BB@@B@@@BA@@@@BB@@@@@@B@@AB@@B@@@@@B@@DBB@B@@@@@@BB@@@B@@@@BB@@B@@@BB@@BB@@@B@@@@@@@@A@AB@@@BAB@@@B@@@DB@@BBB@@B@@B@@B@BA@@@@B@@B@@BB@@@@@ABAB@@@B@@BBBB@BBB@@@@@B@@ABA@@@@B@@B@@B@@DBB@B@@@D@@BB@D@@@B@@@B@@BB@@@@B@@@@@BD@BBB@@@B@@@BA@@@@@@B@BB@@B@B@@@B@@@DBB@@@@B@@@BB@@@@@@BB@@@@B@D@B@BAB@@@@@@@B@@B@@BBA@@BB@@@@@B@B@BBBA@@@ADA@AB@@@@A@A@A@@AA@@@A@@B@@A@@BABABAB@@AB@B@BA@@BAB@B@@AB@@AF@@AB@B@BAB@@A@A@@@A@@@A@AAA@A@A@@@A@A@A@@@AAAA@@@@A@@@@@@BAB@@AB@BA@@B@@@B@@BB@@@@@BA@@BABA@@@@B@@@BB@@D@@@B@B@BA@@@@BA@@@@@BB@@@@BB@@B@@@AB@@@@A@@B@@@@@B@@@@@BB@@@@B@BA@@@@@A@@@CA@@A@@@A@@@@@A@A@AB@@A@@@@@@@AAA@@@@@@B@@@@BB@@@BB@@B@@BB@@@@A@A@A@@@A@A@@@@@AB@@AB@@AB@@A@AA@@@@A@@A@@AACA@ACAA@@@A@A@@@ABA@ABA@AB@@A@@B@B@@@BB@@@D@@@B@@@D@B@@@@@B@@@B@@@@BB@AB@BABABABABABA@@BAB@B@BAD@FABADAB@BCB@@@@@@@BBFBD@BABABAB@BABABAB@@AD@BBBB@@B@B@BA@A@A@A@CAAAA@@@CBA@A@A@A@@AAA@ACAACAAA@@A@@@AB@B@@A@@@AA@A@E@A@AAAAAAA@A@A@ABA@C@A@@AAB@@A@@@A@@@C@A@C@CAA@C@ABA@ABAAA@A@AAACAAE@CBABAB@@ABABE@A@WFQBOCSBUBQR@BD^PVTbDLBL@LAHCHCFADAB@D@BBBBB@@ABCDCB@@@BBBDFBDBDDDBF@DB@BBBBBBB@D@BBB@@@@B@@CBCBABA@@B@@@BDFBFBB@BD@@BBB@BBB@BDBBBD@B@@B@B@@CBA@A@A@CAA@A@ABAD@BB@BBB@B@B@DB@@BBDB@@BBB@BB@B@B@BAD@@AB@BBBBBBB@BBBBBBB@B@@@B@@AB@DABABABCBADABABAB@FrZTP@@\\^`bJH~\\" ],
												"encodeOffsets" : [ [ 116399,
														30637 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));