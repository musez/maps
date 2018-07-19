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
									'枣阳市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420683",
											"properties" : {
												"name" : "枣阳市",
												"cp" : [ 112.765268, 32.123083 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@DABAD@B@BBJDFBH@F@@@BFF@BAJADBD@BBFBF@FBD@F@F@HBDBDHHDDBBBHBDBB@BBBABADCBCB@BBDBFBDDBDBDBJ@F@DDFJBFDDFJDFBBBDDFDF@B@BADCFCBABGFGBCB@B@@AB@@IDEBGLEBAD@HAFAFIDEDEDEFIDE@C@ECC@A@AB@DC@@@AB@B@B@F@BBFBF@DDBBB@B@DBDABBB@B@BB@B@F@B@LBB@^ERbIBE@CBEBABE@A@A@CAA@C@A@@CAAAAA@AAC@ABA@AB@BABBF@BDB@B@@@BAB@BC@ABC@@AA@ABEBA@@BA@AB@@A@CAA@A@ABC@A@A@A@A@AB@BAF@D@B@B@@CBC@ABE@A@A@A@CCA@@@AB@@ABA@@BABBB@BBBD@@BDB@@@BABAB@BB@@DB@@BF@BBHFB@@B@BBB@D@BBB@BBBBBB@BDBDBD@DBHBJ@B@@ABA@CBABABAB@BAD@BBD@@BFBH@D@D@B@D@DBB@BBBD@B@@B@B@B@@@DADAB@B@BBBDF@H@DBDBF@B@BAB@B@B@BBB@B@BA@@@CBUFC@ABA@@B@D@BA@@BAD@@AD@B@B@D@B@B@FDBBDDBNCH@FBFDDDFA@AH@@B@FG@A@@BBD@B@BBFF@@C@@BDB@@BBB@@DF@@A@@@A@@@@@BB@@@BA@CB@@A@BB@B@@A@A@@@ABA@@BAB@DA@@BB@@BA@@FB@@@@@@@@D@@@B@@MH@ACBBFB@@B@@@DBB@BDB@BB@@@BA@@F@BAB@@FBDHHDBDBB@B@D@BD@BCBBBDBAD@DCBEBKFA@CBAH@@AB@DBDBBBDBB@B@DABABCBABCBA@ABAD@BBFDDB@HBD@DBFBB@@@BABADADAD@DBDDFDFHLLHHDH@BABEDGFGDGFEBAD@DDDDBFDHJFCDA@@PNDHFHBD@DABCD@BBDDDB@D@DANGDCBBFBDCNEBABCDAB@TA^CX@RITCRMLINChBB@HAFABC@EBAJCFAH@HAHEH@LAFBFJPBBCDAJ@D@@BDAAGBALCHEFCLAJAH@JDFDDDAFFJBDJAHHRLVLbJ^H`TTJTDLADGA[DITDNLNNRDXAHAjAN@LEJOJKNCVFHL@L@BADCZLVLLXBHBFBHDBDBBBBD@B@DAFCDAPAH@FELM@CFGhUF@LFVDH@L@HMFWHICGKMC@A@sJYEQKBMDSHKXMXSBOEQIKQUOOWGGAW@QAGEEKHWJUDQ@U@QBQAOGOGQCUAY@SHMXSPKBUOUOSSSY]IIWQIMBaBWA]@SBG@O@K@CLCL@NANAFCNEJCDGBIAGECE@IACDI@EBCCCI@CAGAACBEDCCAE@IAI@IAG@GCECICECCCEGAGCCBKAE@EACCCECEBG@IFIDKDIDIHEDGDGBGEGCEGIGCECE@CBGBCBCBGJCDEBE@G@EBMIGICEEEGGKGGEAKGIGIECKACDGHGDMDMAGCGEEKIOGMGMISEGCGICKAG@I@I@IAGEEECKIEGBOHGFSDGBI@CCCC@IDKBIBG@KAECGEEECIEGECKAI@K@KAIAGBIDGBKBK@EAIAECGEHEHGJGJIHGAEBI@IAE@@D@D@DBHAJKLIHIHEDEAAGBG@ECGCGIAIAKDGBEFEHGNGHILCFAH@HDN@H@DGFEDEBEFIFEFAHAD@DBBFD@@@BHB@@A@BFB@@BBA@CB@BAB@B@FAB@B@BBC@A@ABGB@B@D@BBBD@@@BA@@@@B@@BBBB@@ABADBBAB@@@BF@B@BBBB@B@B@B@@@BA@A@ABA@A@C@AD@BA@ABA@BABADAB@BDABBB@@@@D@@@@AAC@A@ADAD@B@BB@B@@@B@DD@@BB@BA@BBBBB@BABB@@C@@@@B@BBBBBBBD@D@@@B@A@ABC@E@AA@A@AA@AAAC@AA@A@@@@AB@CE@@CBADBBBD@@@@AA@@A@@@ACBC@CCAA@A@@BA@@BB@@BA@AABC@ACAAAAA@@@DBH@DBJAD@BBD@@B@@BBB@BAB@FCN@DDHBB@BABA@A@A@GGEAC@A@@B@@@BDBBB@@@F@FAB@@AD@B@BADBD@BABAB@@@B@FAHAJGLGHKHOJIFGDKFEFEHGDQ@EACAC@IBA@CA@@A@AB@BAD@D@@@BA@A@CDA@A@KAABC@C@EBA@A@AAA@C@A@" ],
														[ "@@FHTHJB@EDK@CCBBB@BED@DA@KACABCOA" ] ],
												"encodeOffsets" : [
														[ [ 115215, 32627 ] ],
														[ [ 115422, 33135 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));