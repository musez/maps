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
									'鹤峰县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "422828",
											"properties" : {
												"name" : "鹤峰县",
												"cp" : [ 110.033699, 29.887298 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@BCDEDGBCFCD@DAF@FAJB@@BAH@BALG@AHA@@B@DADGDGBCACAAEAEAC@MAIC@@ECAAACAIBEDCDCJCNCXIBM@I@GBCDEDAPELAJERELEDCFEBEEGEGMGMIKIEEACLCVILADGBGAGEEUMIEGKBKBKDGAEEGEEAG@I@G@OGIGECECI@EBGHKFM@GCGEGEGEGBGHGPG`KTCJFFFNNLDTDLCLCR@N@RDVALBHDFFBD@@@@BFFHFNHLLNJJLJPLBBB@NDBBDBBBBBBDFBFBB@HFDEDCDCHCFCLEJCFCDAH@JBH@H@JAFAFADC@@@ABCDCDADCBC@AAAACEEAAEAIAEAEACACCEEAAECGCGECACCAC@C@C@EACAACACC@AAC@E@EBG@G@E@GCCAACCCCEC@C@A@@BAD@D@D@F@BADADABCBADAB@B@@@DBBBDBF@DADCDAFCDCBABC@C@E@CACACACAA@CDCBCDCDCDCBCBCBA@EBGBG@EBCBABAD@D@D@F@H@J@HAD@@CBABCBEBCB@DADBB@FDB@DBD@DBFBB@BA@A@@@ABAB@BB@@B@D@B@@A@A@ABAB@DADADADCDCBEDCDGBEBEDEBCBC@I@CDCBCDGDCBABCDEBEBCBC@CAC@CCCCEACCECACC@@C@C@C@CACCCCEECC@@OEMGEEMGKEECGEEEIIGGECICMEKCGEKGGEMCGCKAG@GBEFIDKHCBGBEDGBOFCD@@ABABCBA@A@CCCA@CAA@CACAACCCECCCAAE@AAEBGAC@G@CAEBA@E@CAA@AAAA@AAA@A@CAA@C@AA@@A@A@A@A@A@A@A@A@@@A@C@C@A@C@A@A@A@A@A@A@AA@@@AAA@A@C@@@A@A@@EA@@AA@@A@A@@A@@AA@@A@EACACAA@AAA@CACAAAA@CAEA@AA@A@AACAAACAA@AAAAA@AAA@A@@@A@@@ABA@A@C@CBA@ABA@CBCDA@@BABCF@B@@@B@@@DBB@BBB@B@BABABABABABCDCBAB@BAB@B@@@B@B@@@B@@C@CBIAKAOCIEKAIBE@CBEDEDCF@DAH@H@D@PCPCFEFGHEFEBKFIHGDGJIHKHGDMHGBEDEFIFKBSHKDG@GBE@GAI@IAG@G@EBE@EHCFEFGFADEFGFEDGFEDGDEDKFIDK@MAKAMAIAG@MCQAQEMCICQCICKCMAMBIAGDG@GBE@GCGAGAE@EDGDQBI@I@A@ADA@@@@@@@@BB@@@@@@@@@@@@BA@@B@@@BA@@@@@@@A@@@AAAA@@AA@@AA@@A@@@@AA@@@@BA@@@@@@@A@@@A@@@@@AB@@@@A@@A@@A@AA@@A@@AAA@@@@AAGAMEMEI@EHEDCBEAECECE@EBC@EDCDEBEDEBMCE@K@MCI@KAG@K@K@OCIAIAIAMCCFIFGLKJ@HDFFJFLDJDJALANALEPGHINCHCHCHAJBHBHDHDFBL@DAL@HBFDDLDHDJFPHTPRNLJFFFHDHDFBJ@L@JBDNHNHDBDFBFEBCDKFGDAF@H@HPJVLLLLJ@PAJBLDHJFPHHLDJHHFFHBHBHDHFJDLHJDNDFALGJEDAFDFFFFBFBHDHCJENEFDFNDTHTDDABAJBDDDFHBDDJHDDJBNBNAHBTFRJRHPJPJTHRHRHPHTJD@D@B@FBB@F@B@B@BBB@B@DBB@BBBBB@BBBBDDFBD@B@D@@@JBBBFBBDB@@DBB@@@BBBFBB@B@@BBB@@@BBBDB@@JD@F@DBDBBBB@BBB@BBBBBBBDBDD@@BB@BBB@@BBBDBB@BBB@D@BAD@BF@B@D@B@DABAD@D@PDFBDBD@B@DBB@B@D@@BFDDBD@HBH@DBB@D@H@FAB@DC" ],
												"encodeOffsets" : [ [ 112902,
														30961 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));