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
									'樊城区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420606",
											"properties" : {
												"name" : "樊城区",
												"cp" : [ 112.13957, 32.058589 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@HEBA@@@@AA@@@A@@BAB@@A@@@ACA@@@ADBDBDBBBJBD@F@D@BGBABA@@BDAB@B@@B@D@@@@@B@@A@C@CB@BA@A@C@AB@B@BB@@B@@AAA@AA@@ABA@AAE@G@AAAAAAAAAACACAGCE@CBADCBAB@@CBABEPWFGFEB@B@BB@BBBDADADCBAD@@@@BAB@BB@D@BABA@CDAB@H@F@BABADCDADABADABCBCBE@CB@D@B@BA@EDGFCFAD@BB@BBBABABADAD@D@BBBBADABAD@B@@BAB@DB@@B@D@BCBADAB@BAF@DBB@DAD@DAB@B@BFAFADAHMDIB@DDBB@A@EACBCD@BBB@BCACAAAA@ADAFBDBF@DABA@ABAD@DBDBDBB@DCBAD@@B@D@BCDADB@J@L@D@BDFNDBD@RGDAB@DBDBH@DA@CAA@A@ADAFCDE@E@EDCF@BDBDDH@DAH@B@@@BBB@BABAD@DBBBB@B@BABABABAD@BFAJABAPSFEFCFAFBDBDBBDBBBBFADBB@@DB@B@BC@C@EDCDGBEFEDCBBD@DBFAH@DBDBDDDDBBDBD@DADCDAF@L@DBFBH@F@F@FCBA@ABC@C@OB@B@B@@@B@@AB@CE@@@AB@@A@ABAB@@@B@@DB@DABA@@B@@BP@B@DA@@DA@@B@@AB@@AB@BAB@D@D@B@BC@ABA@@AC@@AAAA@@@@A@AD@@A@@@@A@@B@@@BAB@@A@AB@@ABA@@BA@BB@@@B@@AB@@BB@@@B@@@B@@A@@@A@C@@A@@@@@ABA@A@@AA@@ABA@@DCBC@@B@@ABB@@B@@A@A@AC@AA@@@@BAB@FAD@@@B@@BB@@@B@@A@@@@CA@A@A@C@ABA@C@A@AA@@AA@AA@@AA@@@A@ABA@@ACAAAA@A@@@C@ABA@@BADCFCFGDCDCFEDE@C@E@EACCCEEEGGGUOSKMEM@M@MDGDE@KCGCE@C@A@C@A@E@G@EBEFAFAFABCA@EEGCA@@@B@@A@@AA@CAA@@@@DAB@@GA@@BC@@@@A@@@ADA@@B@@C@@A@@CGAB@@CDADA@@@@BLFAD@@ABB@EJ@@@FABADADCDCBEBEBEBCDCBCDEHCDCAGCEACAA@C@A@@@EFAH@DCDABCAAACAAAIAG@A@EC@@C@A@EA@@CBA@CBCB@@A@@AA@@A@@A@EB@@A@AB@@@B@@AB@@A@@ACB@@A@G@ABA@C@O@A@A@@AA@G@A@A@@AA@@@AAA@A@A@AB@@@@A@@BC@C@A@A@A@CACAC@I@A@G@OKA@IEC@K@QAA@IASAO@Q@MFIHKPGHEFENIRGTCPAXMTSZOPMVIHOJQJWFB@F@D@HAFABBBF@BDD@BB@BBB@DBB@HBBBB@D@BBDFBB@@BBBB@D@BB@HFBDBB@BBBBDDB@BBBBBDBB@H@BBB@@DBB@DABE@A@A@A@AAEBC@CBA@E@C@CBEBA@C@@@CBAB@B@B@B@B@B@DA@ABEBAB@BCD@@@F@BCF@D@BDB@@B@B@HADAF@HBFBBBDD@FBBB@DBB@B@D@BAD@LDD@@@F@B@B@DAB@" ],
												"encodeOffsets" : [ [ 114487,
														33026 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));