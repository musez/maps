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
									'大悟县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420922",
											"properties" : {
												"name" : "大悟县",
												"cp" : [ 114.126249, 31.565483 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@JAFADAFEFCHAHCFCLIFCBAD@F@DBDDHLBBD@@C@CAE@CBKHIHIFEBC@EDCTSDCBGBGBCDCFABAB@BE@CBCHITQFGBCBE@ADAD@D@HDFBFAF@FABADBHDBBD@F@HAJ@R@FBB@D@FADCFC`KXEDAF@FBFBDFDBDBDAJCLCDA@@BEBEBEBADAD@D@B@DHB@B@DAJGHADAF@D@BBBB@N@BB@BBBAFADEB@DADBDBBDFFFBBBF@HALGFAD@F@PDNFDD@D@B@BKH@BAB@BBFFLBDBFFBH@H@BADGBIDEDGFQ@ABAB@B@HBLFDD@@CH@DB@D@F@BBBD@FAFAH@DDBB@F@HAHCBAB@B@BBBBBBB@B@@@BCBEB@B@BBFDD@D@DADC@C@ADE@A@AA@CCAAACAG@AAC@E@ADIBCAAAAACAAAC@G@AFK@CAAA@AA@A@ABCBAF@JABABC@ACCACCGCC@@C@GBC@A@AAACBCAKAIACA[@AA@EAOECAACACACACECAA@CDCDI@CAGACCAAA@C@GBIAEBCBGFUBQ@CFSDKEEAKCGCEECGCC@M@OBCDAD@HCBC@ACAE@CDIBCAGAACAGGCEAI@GGECCCE@CAGBE@G@GDGDGDGBEBEBEBIBGBECGACGAEAGBEDCDCBEBCEAEAEAIAECGAEACAI@E@E@GBG@IBIAECECCG@IBEFCDCDAD@@@@ABE@GC@EBE@GBGAE@CACCGACEAEAC@EAEECGAEAE@ECECCAE@IBGFEHCFEDCAACAACBCBC@C@@BA@ABEBC@A@CAE@G@IAEEDIDI@K@I@GDIBKAGEI@IBQ@EBEAGAE@CBAFBBABA@CAED@D@FCBG@IAICGAECEAA@CFEHC@E@GDADEJCFGDEAG@CDAH@HAFEFGHGFGDCACAKECCGGECG@GCCDEFGDABAH@FABEJEHIFG@K@cMKAOAKCKAQEMGMAKBMAKFKDIDGAIAKAMBGHGDIFGHGFEBGBE@GFCJ@FBHAJ@HAHCFGFKFGHCJCLAJJ@FFFDDFDFDJDHBHBF@J@DCDGHEFCJBHBDDFFDFBHFHDFFBDAFADBHFDFBFBHDDDDHDHHDHBDJBFAFGBGBGAEBEBCFCJ@FBHDLDHHPFPLRHNBDBHAJAH@J@HBH@HDFDHBHFHBFHJDHDJDJ@JANCDGDGBGDIJGJILEJ@H@HDHBFFHDFHHJF@DEHEDGFEHAF@FHHHFDFHFDDHDBB@B@@CDCHCDADE@CBA@AB@DBDJPHPBHD@BBBDBJ@JDFFH@F@NBDLLB@F@H@HCHCF@H@JBDB@D@D@BHJFDHBL@JA" ],
												"encodeOffsets" : [ [ 116926,
														32618 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));