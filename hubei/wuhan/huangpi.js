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
									'黄陂区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420116",
											"properties" : {
												"name" : "黄陂区",
												"cp" : [ 114.374025, 30.874155 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@AC@E@CAACAAACAEG@G@CAACEECAACGCGAGCGCEEGCAGECCCE@CBEBGBE@ABE@C@CBCDAHCDEDEDADCBADEBAD@FABABCHCHBHBFAFABADAD@@CCCCCBAJAHAHALCFADC@CACAAEAE@E@C@C@AC@E@CBCBGBCF@DBDBF@DEFEHAHCFCDCDEBEDEJCH@H@HAJ@FADADC@C@CBCFA@C@E@CBGBCDEDAFC@AEECCAE@EBGHG@EEIEGGKAKCGEGCCCGAIBEBACCGCEACAAE@CCAAA@C@EDGDEFEDEBEBCACDAF@H@F@FAHAFCFEHGDCDEBA@@@AAA@AB@@A@@BA@@@BB@@@@BB@@@@BB@@B@BB@@@@@@@B@@@B@BB@@@@B@@@@@@@B@BA@A@@@A@@@A@@@@@ADAHM@A@@LIJGJIB@@AB@BAHAVEPC@@B@B@@AB@@ABA@A@A@@@ABA@A@CBEBC@A@ABA@ABADC@@D@@ABA@A@A@@@@@A@A@C@A@@ACBCBAB@AC@@@A@@@@@@@@@C@A@A@@@A@@BA@@@A@A@A@A@A@@@@@@A@@B@@@@A@@@@@@A@@AA@@@ABABA@@@A@C@A@A@@@A@@@@@@@@B@BA@@@A@@@@AAA@@AA@@AA@@A@@@AA@@AAA@AAA@@@A@@@@@@@A@@A@@A@@@@BA@@@@B@@ABA@@BA@@@@@C@A@A@A@EAAAA@@@CAA@AAA@AAA@A@A@A@@@@A@@AA@C@C@AA@@@AAAAC@@@@@@@@AIBE@@@@@@@A@A@@@@AA@@B@@@@A@@@A@@@AA@A@AA@@@@A@@@@@@@@@@AA@@A@@@@BA@@@A@@@@@AB@@@@@@C@@AA@@@@@@A@@@B@@AAA@A@@@@@A@A@@BA@A@@B@@A@@@@@@@@@A@@@@@A@@@@@@@A@@A@AAAA@A@@AA@@@AA@@@AA@A@@A@@A@@@A@@A@AAA@A@A@AAAAA@AAE@C@CAAAACA@@A@@A@@@@@AA@@KAGA@@A@A@A@A@A@@AC@E@A@A@@BA@A@ABA@A@@BC@A@@@A@A@A@A@A@A@A@A@C@@AA@@@@@AA@@AAACAAAA@AA@AAA@AAAAA@@@A@A@@@A@@@@@ABA@@@AB@@AB@@A@@B@@A@@B@@AB@BABA@@B@@A@@@@@@@@@@@A@@@@A@@AA@CAA@@AAAAA@@AA@A@@@A@ABC@ABA@ADA@ABABCBAB@@A@A@@@A@@@A@@A@@@A@@BABC@AB@BAFCDCB@DC@ADC@ABA@C@C@C@A@A@@@K@A@A@A@A@A@@@AAA@@@AAAA@@A@@AA@@CU@EAC@@@A@@@@DADABAJKBCBABC@A@IAE@AAAIBKDMHABABA@ABABA@CGCG@@BGJCJCB@LC@@HAFCDAHAFAFABAFEBCBEDEBCFCH@@A@@B@@A@A@@@A@@@EEBEBGDCMAGSFMDWD]HkDSAA@[EkMA@ABADABAFABCFCBABA@@@A@CAC@A@A@A@@@CBSFC@@@@@AAEGAA@AA@A@A@CACACAGAGEGCGE@CCECAEAC@CDCD@BGHCBEBGCGECCCAEAEAEBA@ABEJABEDEBEBE@O@ICGCIIGOECEAI@EBADEDEFCDIDMHIDSDMFEDCBCHCDEBABCFAH@H@D@B@@@D@@@D@D@F@B@@BB@@@F@B@B@B@BAB@BADA@@BA@CBABC@GDABABA@ABA@ABABA@ABCDA@ABC@@B@@@B@@B@B@BBB@B@DBBB@B@@@@@@@BA@@BBABB@@B@@B@B@BBBD@@@D@B@JCB@@@@B@BB@BP@FAHADENCPANBJDXBBBBBBBB@B@@ABOTA@@B@H@NAF@H@DAF@@AN@B@BAD@B@B@B@@@B@@@BAD@B@B@@BD@@@@@@ABA@EFA@@@@BADCF@B@@@B@@F@@@B@@@@B@BBBBBBB@@@@@BE@ABA@@B@B@B@@@BD@BB@@@BAB@BA@@B@B@B@@@BA@@@A@B@FD@B@B@@AB@B@@BB@BAB@@@BAB@B@BABAB@@@BB@BDBB@DA@@@BF@@@@A@A@@BBB@B@B@@A@A@@AA@@B@@@B@BB@BBBB@@BD@B@D@BABA@@B@BC@@BA@@BBB@@@B@B@F@BB@BB@@B@@@@@B@B@B@B@@@@B@B@@BB@@BBD@B@@BB@@D@BBD@BB@BBB@B@@@@@@@@B@@AB@BB@@@DB@@@BBB@D@@AB@@AA@@AB@@AB@@AB@@@@@BB@D@BBBB@@@BABA@@@A@@@@B@BFBBB@@@B@@ABA@@@A@@@@@CB@@BB@BAD@BCD@BAB@BA@AB@@@@@@@@ABAD@@@@AF@B@@@BBB@@BB@BD@@B@@@B@@CD@BAD@BA@@BC@CBE@@@A@@BAD@B@@BB@@AB@B@B@@FJBBB@BBB@FD@BBB@D@@@BA@@BAB@B@B@B@BB@B@F@DAB@B@B@B@@BBB@B@B@BBB@BB@B@BAD@B@BBB@@BAB@D@B@BBBBBFB@BB@@D@BA@A@@B@B@@@B@B@@@B@@BB@@BB@@A@@B@@AB@@@B@BA@AB@@ABA@AB@BCDAB@BBD@@BBBB@DBF@B@D@B@BCBAD@@@BBB@@@BABABAB@B@B@B@BBBDDHDJDFFLFPLFFJJHHDBBF@DBFFDFDBFBFFFJFFFDJDFBFADCBCD@H@FCFEFEDCFABEBCCEACAC@CDC@GEA@ABBH@DADEBCFCFCFEBIBEHIVELERAN@LDHBBFBH@JAH@DB@FCFAFCDFFAFAHFHDDBHBFDDH@HALBDFDHFHFHHFJBBD@F@HAFBDBHJDHBHBDBDDHDH@FDHHDDLFDBDBHCHEHGFEBE@GBGDCH@FBHCDEFIBCHCF@D@FGDEB@FBFDHBJDJBH@DA@E@CFCDBB@BAAABEDAF@HBFBFAR@JAJ@HFLBJAHCJ@L@J@JCFC" ],
												"encodeOffsets" : [ [ 117187,
														32060 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));