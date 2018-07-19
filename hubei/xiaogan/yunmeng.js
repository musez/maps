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
									'云梦县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420923",
											"properties" : {
												"name" : "云梦县",
												"cp" : [ 113.750616, 31.021691 ],
												"childNum" : 3
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@DABABG@ABCBCB@@@DKBKCGEGCICIAEDMDIDCDADA@A@@@C@U@K@@@AFABAB@BA@@@AC@@@AA@@BABAB@BA@@@A@@@ABA@A@A@AAA@AB@@@BA@B@@B@@@B@@@BA@A@A@@@@C@C@@@A@@A@@@AA@@@C@@@A@@A@@@A@@F@B@BA@ABAB@B@BAB@D@FA@B@@@@@BA@@BA@@@BB@@@@B@@@@AB@@ABA@@@@@AA@AA@@A@BA@@@AB@@@@A@@B@@@@@BB@@BB@@DA@@@@@AA@AA@A@@@@D@@A@@@ACC@AC@ECA@AC@EBE@C@E@AAICCKEI@EAAAA@@A@C@CBE@C@AAAA@EAAA@@BABALAD@@BD@DDDDDBDBH@F@FEDCBAFCBA@A@O@EAA@AAACA@@AABA@@G@@D@@AB@AAAAA@A@@@@@@@CEBA@@@AA@C@EBAFCBC@CBA@@BAB@B@F@PABABCBA@A@AAA@C@G@C@A@ACAA@ABC@EBCAEAA@GGAK@EBGDAHAJBF@DAAA@AICAC@A@CFADAD@HDJDD@FA@A@A@ACCE@E@EAGCC@I@C@A@A@CCAGAEACBGBG@OAKAGACEE@AA@@BA@@@@@@BC@@A@CMGABABC@C@CAEGCAM@GAE@EBGBCDAD@H@T@H@BAB@@A@CBC@ABABEFCDABA@ADADABCBCB@@AB@D@BABGJCBABA@A@AAACA@AAC@CBCDEFCBCBEBC@ABADCHAD@B@B@BBF@D@B@BADGHCHAD@HAFAF@B@B@@BBHFFBDDBB@B@F@B@DAD@BBB@BBBDBFFBBBDBBB@B@B@BADAB@BBB@BBBDDRKBCBGDCBGBA@ABABCDA@ABE@C@EBCDAD@L@DABADABAH@BABABA@EBM@ABA@ABCJGREV@BBDBF@B@DCL@@C@GBA@GBABE@AB@B@@@BDF@B@@ABE@CBA@CFAB@B@BB@D@DBD@BB@BBD@J@F@BAB@@C@CB@@AB@F@FA@@BCBGBABC@AAEAA@ABA@ABADAFABABC@A@@BAF@@ABA@E@A@A@A@ABCFKJGJGJEH@B@B@B@BBD@@A@ABA@@@@BPFF@DBDBBB@D@D@F@DBBDB@BA@BB@BB@BB@B@@@BA@ABC@A@A@A@A@ABAB@@BBBBB@B@B@BBB@@B@B@BABBDFFFBF@DBBBD@BBD@B@DAB@BBDDFDDBDF@DCDB@CDGFCBCDAD@B@B@BBBBFFHFD@BBFBH@F@D@F@B@B@DBBFBD@DBBBLDD@FB@D@FBB@FDBDFBDDDDBFBFBHDFF@D@FAD@DB@BB@@AD@DBBBB@@DD@BAF@BF@D@F@D@FCFADAFCF@FAF@D@D@BCBEFCD@B@D@D@@@BCF@B@DBDBFAJBFADAHEBCDCDCBCFAJEJCBCDADCBCCGCC@C@CDGBCDGD@DBBDBDDBFADADCBC@CBC@CAECAC@EACA@A@CACACAAA@@AA@@A@A@@BA@@BAB@B@DABEDC@CBADGBCBA@C@A@@A@@A@A@AAC@A@C@@AA@@A@A@@AAAE@A@CABA@@@C@A@@ACA@@A@A@AA@A@@BA@AA@A@AAA@@@A@@@AA@@C@@@ADA@@BA@ABA@@JAD@BA@ADA@@@C@@@@@C@A@ABABCBA" ],
														[ "@@@A@AA@A@A@CAA@A@@DB@BA@BB@@BH@" ],
														[ "@@@A@A@CBGAC@CAAAACAC@ABEPABNH@A@@F@@DB@" ] ],
												"encodeOffsets" : [
														[ [ 116566, 31806 ] ],
														[ [ 116601, 31621 ] ],
														[ [ 116587, 31507 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));