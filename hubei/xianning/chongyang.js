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
									'崇阳县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421223",
											"properties" : {
												"name" : "崇阳县",
												"cp" : [ 114.049958, 29.54101 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@Eq@KEICIEIGIEGGGIGIEIEIIGEEECK@GG]CGAEIKIIIIEGAI@MBKBK@IAK@CCCGEiKECGG@EBCD@VCBAJMDMBEDCFCPEHAJAF@BAFEBALCVKLEHEFGHUDCdgFIBIBK@IGIKMGEIEKCG@ICKGCFCBC@C@WCAOEGGECAE@CDE@ABS@CBC@C@AAASO@EAGBCPIBCBE@CECIK@G@QAAC@EAAA@ABCDMHKBQAGAECAGAIAEBIDEDE@GAIGUKKCI@E@C@ECGEIGAAG@CBIDG@MASEoCA@E@E@EBE@I@GAGAE@GBE@CCKAOCMACPADEBEBKHEFCHEVEZ@FBDDD@D@D@B@DBH@L@DADABC@E@G@MCC@@@ABCFEJCDEBABAB@H@LFJ@DADABAB@BBBDHBB@H@DBBBBbPJFJDD@HAD@F@FDB@BBABCFKH@B@B@DHHBBBD@FAFAFMTCDC@CACCACGCCAA@A@CDABCBCAE@ABADAFCBEBEBGBOCCAECE@E@EDCBC@CAMECAG@I@IBCBI@KECC@G@EACCAE@GGGCEAEBCBCBBDABEDGBQAKAIEEI@IDCFCHCJAFCBC@ACAEACE@EFKAGCAIAICG@ECAG@OAMMQGEECG@WDKF[FMDSBC@GCG@E@CFAH@JCPCHEFEFEDMFCPBHBNAHCHKHIDEBGDEDAFONGDMJEF@DAFIJ@@@BBDBD@DBDBDDFHH@D@B@DIP@@@BDDDDBBBDDDJDDDDBBDBB@H@BABA@@BA@ADAB@B@BABADA@CB@BABADABABAB@BB@BB@B@@BBDBFFDFFF@D@B@DCHCFAD@D@BRNFBHDHDDBBF@J@J@HAD@F@DBFDBLDNDNBL@NBVD`F^@FBBDBDCFIRGFCD@DABBH@DGT@F@DDDFBB@LDH@D@FDNLJFJDFDBBB@B@NAFBDBF@HAF@D@HBFBHAHAHCD@D@FBRLVDBDFHDTFNDFDBDBJ@JBHBHFJHDDD@DAB@D@D@B@@E@EBAFGJKBAJAB@BCDAB@B@FHB@@BB@B@FAFCDAD@JDLBRBH@BAFGBADAFBRBFBDBDBH@DBB@FFDBFDPFHBLBHBHBN@R@NAVAVCD@FBDDBB@BAD@D@FJPDBD@FAFARBRBHBFBD@H@F@LBNBDCL@HAD@BABKDAD@`AL@JBDADCBAH@L@LDH@J@FBD@LRDDDBF@BABCD@HAHBH@FFTL" ],
												"encodeOffsets" : [ [ 117097,
														30390 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));