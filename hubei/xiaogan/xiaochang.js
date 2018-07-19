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
									'孝昌县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420921",
											"properties" : {
												"name" : "孝昌县",
												"cp" : [ 113.988964, 31.251618 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@GBGB@BA@GDA@MJCHEHIFG@GCIAGBIBEDIFEBE@CCEECGACECCCAE@A@A@ABAD@BA@A@C@A@A@AAA@A@AAA@AAC@EEEEAG@G@G@GCGCIAGAKACAECGEEAABADBD@D@HAFAJCHAJC@C@GCIGICEBGDADCDCBEACECEEIEEKUAAGEEACBC@EAECCCG@CBCBADCF@DADAF@DAF@DAF@F@D@DBBDDBDFDDDBF@D@H@DBD@F@DADAD@DFDDBDDBF@F@DAF@D@F@F@D@F@F@F@D@F@DADADADCBEBC@E@E@EAEAE@EACAE@C@C@C@GBCDADCDCFADADCB@@AAA@AACMCECECAEAKAKCGEGIEG@CBMACAACAEBGBAAAAAE@EBK@I@E@CBEEAAAE@C@C@C@CACCAEC@CAC@G@C@ADCB@BCAC@CAA@ACBCBEDCBC@ECCCCKCE@GAEAABADAB@B@B@D@@@@@D@@CB@BABC@IB@@AB@BAB@@CB@B@@@DB@@B@@@B@@BB@B@BBBB@@AB@B@@B@B@BB@BD@@@B@D@@ABDBB@F@BB@BB@B@@@BB@@@D@BBD@B@B@BB@@@@B@DABADCHAB@DCDAFCBA@A@AB@@AB@@@B@BB@@BB@BBBDBD@D@BDBFBD@DBBF@DAD@DADCDCBEBCAACACCAC@CHADCH@D@DDDDHADCDBBHFD@B@@@BBBD@B@BABEBCBAF@FBDBDBBBBHBBAD@DADBD@DBDBBD@FADADAFAB@DAJEJAFAFANBH@LAHAJCJAFBHHJHFFFF@HBDDFJHHHHHNFLFJ@HAN@LAJAHAH@B@FBBDHDF@H@BCF@DBBFDDFNPBDDBFBF@BBD@D@DABAD@D@DBFFD@BBDAHC@CAC@A@CDCDAB@DAB@B@@B@D@D@D@D@DBFBDFDDFBB@BDG@@B@B@BA@A@ABA@@HBFBB@F@@@BDDB@@BA@A@A@AB@@@FB@B@BABBBBBB@NFDDFDDB@@DCD@BAB@@@B@BB@@B@D@BAB@B@BF@DADG@@B@@@B@BBB@B@@@JAFA@@B@@AD@B@@@BDD@F@B@DAB@@BBDDB@D@DAJ@BABCAGFCLCJBD@LFFDHHHHDHFBFBHBH@FAHEJEBIDKDIHGLEHEDEBG@GBIAG@EDIHEF@HAFAHEHGJEHCHGNALBJBHBJCLCLENBLANBNHRFLBLDPBLBdNL@H@JEFGFIBA@EBGBAHCFEDCCCCAGAGAICAGACBE@G@EACIAGEEGEGCGCEKAGBG@CCAEAGCCEGBGBEEEDCBEDE@ECAG@IBG@EAAACG@KBMFQFKJUFGJAFADEDEDEFABC@CAGBAB@HFD@DCD@DBFBDDFABADEFCFEDE@E@GDCDABCAECECIEEIEEEAEAEECECAE@CAECAGGIIEEOKKEEEICGCCCAA@A@A@A@ABABABA@A@@AA@A@@BCDA@A@A@C@AAE@CAAAA@@AC@ABADC@ABAB@BA@@BAB@@A@A@@BA@@@AB@@@AA@@AA" ],
												"encodeOffsets" : [ [ 116931,
														31818 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));