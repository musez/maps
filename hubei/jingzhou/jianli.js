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
									'监利县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421023",
											"properties" : {
												"name" : "监利县",
												"cp" : [ 112.904344, 29.820079 ],
												"childNum" : 6
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@ACAC@@BBB@D@BB@@CB@BA" ],
														[ "@@AECG@CACCEBC@AFEDABABA@CCAAACAAAAEB@BCBAFAFAPDFBBABABCBA@E@A@ADAB@BA@A@C@@@@DA@@B@BBDDDBB@FAHABA@A@C@AA@CBA@A@AEAECO@C@CDABAHCFCDC@CBEBCDE@EAGGM@A@A@AHEFADABA@A@ACACAA]@EBCB@FAB@BA@G@@@A@EAC@@@C@@AA@@CAACNMHEEC@AAACACAAAAAAAC@GAAAA@AAAA@CBA@C@EBEAEAE@@F@DDD@H@B@BCFGHeBE@AF@@CH]`LPHD@RE|s|jÏLmMUYQGIEIPWBCIWGGCCCECAAAAE@AEMSeAABAHCDAFCDCDCFADADADCDADADAFAFCDAFCDADCDAFABAW]SWgcCACIEK@E@AACGGUOucOKEIcsgwuyCCIGGCGBABCDABEBCDEBCAC@C@CAE@E@C@CBCBCDA@C@A@CAC@@@BEBKBOCIGGGCEAG@KFCHEZA^@LCXEXIdENGFKDOBSA_OcWUMQSQ_GEIAQBKHENCTAFABC`CPCTKbGZCVAJS|EL@J@HFHBBLL\\XVTD@FDDBFDDBFBFFDBBDJLJLhZTRJPJRFTFRHhL\\@J@@CFEFG@EAMGGIIOUQ[QGIAECE@EAAACAEEGAEAEACCEAEAE@ACECCECCCCACCCCEAEA@@C@CBCBCDEHAF@N@THdB\\AN@HAD@FCHAHCDCBLPFCLKBD@FBH@JCHEHADMJEDIFQFABM@C@IAIEC@CCAAPCJAFCOOIDQBUAOEeWQOUSQMYOAAOCIC@@OAUCUAQAMBGDIF@LCJ@L@DBB@DBBBBFBF@D@J@PDLFNJHLBNAFBJ@L@BBDAB@DA@@DAB@D@DAFADAB@F@BAD@BCDGHGFC@CAGAAAEAE@K@@@S@IBIBK@A@WCOAEBI@E@C@A[FC@Y\\CBCDWPABCAAAA@@@@BFFFLBDBBBFFJ@LCNCF@FDL@BA@ABABGFADAFBBB@BB@H@BF@B@BB@BAJBBBBB@FBBB@D@HBDBBB@D@DD@DAHAF@JBHLPDFDH@D@DAFBFHBLFBHBBBF@JBD@B@B@@BBDDA@ABCBA@AB@B@BB@@@DADADAB@FDBB@D@B@@B@BABC@AA@@ABAB@DBBBDBBBB@@@BC@ADGBABAF@JBB@@BBB@BABCFABJLB@@@B@@@@@@B@BAB@@B@ABA@@BBB@@A@@@@@A@@A@@AACDBBHDB@@B@BA@@B@BBBB@@@DEB@DBFBB@B@@A@@F@DB@B@HBBDBBB@@@DIH@D@BBBDBBFBBB@D@DAD@D@D@B@BD@D@@\\JXPT`d@h@V@P@^@CDABGPABA@IDIDGFGFCFAFDDFBN@L@J@FDDHDHDH@F@LCHCFCJCHAJDHBFDDDFLAPALAHDHDDHFHBHFFFDHDJBDHFBJCFADC@@@ABA@A@C@EAC@C@ABABAB@FBDBF@F@DANKFABAF@HBJBFBFAHAHCJANAFABABABA@AEM@A@CBCHCHCDCFCDAD@RFFBD@FAHCFCDAD@HBPFDBFFFDJDFBBBBD@DAFENAD@DDBDDHBFBDD@D@BCHAD@D@D@@DDDDDBFBFBHBH@FAHEB@FCFCDEP]DEJEFCHEPMFAFAD@F@FBDBLDHBFBHAHAFADCFEB@" ],
														[ "@@@@@ADC@AIKIJ@BBDFFDBDC" ],
														[ "@@C@ECAAABA@@B@BBDBBB@B@B@H@BAAAAA" ],
														[ "@@D@DA@A@@CAI@aGOEA@AB@@@BDBTDBBJDHDDBH@DA" ],
														[ "@@hWPKKOABKHKHUNKDPP" ] ],
												"encodeOffsets" : [
														[ [ 115746, 30917 ] ],
														[ [ 115850, 30868 ] ],
														[ [ 115380, 30737 ] ],
														[ [ 115422, 30538 ] ],
														[ [ 115443, 30539 ] ],
														[ [ 115612, 30507 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));