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
									'洪湖市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421083",
											"properties" : {
												"name" : "洪湖市",
												"cp" : [ 113.470304, 29.81297 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@@FCHCL@NAPBZFD@`NTHDDPDHBFAJ@DAH@PCPIªve_FEDGBKCICMGKMK_åuAAUGaIOCWE]OYUGGSW[eCE_iUYMMWK_IeCEaBaDWDIAiI}[IG_a[]@@SOqYIEMIQIIG[S]UikIG[UKGaYcOYQqe_]QK__u{QUMOABEBCBCDCBEDCBEDEBCBCBCBCDCBCBEBCDCDEDCBGDABBBTfFN@BBFBBDBDFDDHHJXADOXFJHJZRNVKniÐ{{tQFC@OG_KG^@DE@@BAFGfEHADA@G@C@CCE@@@BFBFAF@F@DAB@DBBBBB@BBHBD@BBBBBBDBDBBB@BFDGFMNBDDB@@BB@@@D@@BD@F@B@@@HABA@EBA@AD@FB^DBDB@B@BABCBEBGF@B@B@BHNBH@FCFADAF@DCDEDGDABCB@D@DDPBFBFB@B@DAB@@B@D@BABGBEBA@CACCAAA@@@CB@@@@@D@BABA@CB@B@B@FABADABABEAOCEBEBABADA@BFBBDBBBDB@DABABCBEF@BADDFBD@DDHBF@ADAD@D@F@PAHBDBHBLBLBRFH@F@FBDBFBHBJBJDHBD@D@DADAF@F@FCJCDAH@F@JFF@XAP@R@PBPBRDLBFBJDHFHDJHDFDDDFDFDHBD@D@DDDDDFBF@JALAH@F@FBF@D@TIFEDCHEFCLEHCPKHCL@R@FADCHGDCBCLCHCJAFCLIDCBAA@@AA@@C@@BCBABA@ADCBABC@AB@BABABC@A@A@A@E@AB@@ABANEBADAFEBA@@FABABADABABABABAB@FADABABABABEBA@AA@AA@@AE@C@C@ABCDCFED@BADADAD@FAD@D@@BB@BBBBBBD@BBD@DAHCD@@ADBB@B@BABBD@JFJBBBH@F@DBF@DBDBFDFBD@DBB@R@D@HDB@DAB@D@LDHBTBNFD@B@DABABAFCDAHCFAFAD@DBBBD@JFB@@BFHBDBBBBD@B@B@B@BABAB@FBD@LBD@BBDDDD@BDJ@D@D@DBD@DBBBBDBBBD@HBF@B@@AB@FBB@@BB@@D@BADABAB@@BB@BA@@B@BBBDFB@B@B@B@JCDAB@BABABAB@D@B@@ADGBADABAD@DAFAB@DBB@@B@B@DB@@@BBHA@BB@@B@B@BABBB@@B@D@@@BBBBB@@AB@BA@@FBD@DBLJd^RPBBBB@BAR@@@BAFAFCDHDDBJ@LDDBDBFBB@BADED@D@HDJDB@@BLD" ],
														[ "@@B@JDFB@AB@@AA@CAAAGCOIAAECIGCCCCCAAAWOCAAAC@CB@BBDFF@BHJBDFDDDDDBBFDBBFBD@FDJBBBLB" ] ],
												"encodeOffsets" : [
														[ [ 116600, 30915 ] ],
														[ [ 116665, 30749 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));