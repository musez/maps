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
									'宜都市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420581",
											"properties" : {
												"name" : "宜都市",
												"cp" : [ 111.454367, 30.387234 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@BC@IT`}RSLKHIDEFIJe@A@I@CACCQCcBIFGFGFEF@JAJ@NDLBHDJBLDJBLBNCFAFAHCFEFCFGBGDGBKAKAMAIACCGACAGCGECCECCCCCEACEGEKAC@@AI@GN_HMPMTQZSDEB@HGNILEPI@C@CDOBEBCBAB@D@DBD@FABABA@ABAB@D@BB@B@DAF@@BBBAD@BAD@BAJE@ABA@A@@AAAACA@A@ECGAA@AACA@AAAACAEA@KBC@C@A@AAAACAA@A@C@AAAAAAAA@C@C@AAC@BI@A@CACCM@A@CBAB@BADABA@@@CBA@C@AAAAAGACCAA@AACAA@A@C@@@CBABK@EAC@AAA@A@G@C@C@CCACA@@A@IAKGKGIGIGMEMECAGHGFGFGFGBG@IEKEGAIEABO@IBIHIFEDGBC@E@KAEAG@EBCDEDGDGAA@@@@@IBG@GJEDI@G@I@C@IIEGCGCIECKCKGKTILCDEJ@@A@@BEFADEH@@@@GLMHCDGFKBI@OCGCMKEEGAG@E@BDEHEJMFMDG@OAS@ODMAQ@S@YDSDE@KDKCKGOIQEEEI@IAI@WAMDEDCLFHFHZ^@@BB@BBBB@AF@BABA@ABC@@AC@C@AB@B@B@@@B@DAB@BABABCFAF@B@DB@@BBB@@B@B@D@B@BDDBB@BDB@BBB@FDB@BBBB@@BB@H@D@DBFBD@DBDDD@@@@@BBH@B@D@BBBBBBBD@BCDAD@FB@DDBD@B@NV@BB@B@DA@@DBBBAL@BCBA@AACAC@ABCBAFAB@BBBBBLFFDDHBDA@GBA@ABABCF@B@BBBBDDDBB@DBD@D@BDDFFBDBF@D@FBDDDHHDJB@JAJAVIHAPAD@D@HAD@@A@ABAHAFABB@D@DADAB@BFH@BABIFA@CAC@@@@D@B@H@H@BBBDBBAB@@@BABAB@BB@@B@B@@@@ABC@AD@DCB@B@D@@@BB@@AJ@BD@H@FB@@BB@L@BB@HDFB@@BBBAFA@@B@@@B@@@BCB@B@FBB@BBBBHFH@H@FBFFDH@@DBBDDBH@B@D@BBBBD@@BDDBF@F@B@B@BGFGDEBD@JDB@BBBB@B@FA@EBEDCDADCBABABABAD@D@DBB@DBBBBBBB@B@D@D@DAJCB@D@B@DBBBBB@BBD@F@D@DAFABBB@H@J@BBBBBBBDDHFHFHJLRBD@LAFCPCDCHCDGDEBUDABCIECEIECIEGAMEA@A@CBCBK@AB@BA@BB@BFBL@D@HAB@B@BD@@ABCB@@ABAN@BDBDBH@D@BBBB@DAFABABCBC@E@C@C@CB@@C@EDGDABAB@FBJ@DCFCDIFIB@@AD@B@@CDAD@BBBBD@B@BEHABADBHABABABEBA@@@AFAD@BABCBABABB@JHDLBF@BDBX@FBHDBFB@BBDDLBDBDBBDB@B@B@JID@F@BABIDEBAF@H@FALOJKBADEHAFAJ@NCFAFAD@DB@D@B@BGHEHAB@BB@FBH@D@BH@B@BB@FAHEF@D@FDBBAD@B@DB@B@DAFADAF@@@@@BB@@B@JB" ],
														[ "@@ABABCD@BABA@CDA@@B@D@D@BB@F@D@BAB@DA@AFK@A@A@C@AACA@A@AB@B" ] ],
												"encodeOffsets" : [
														[ [ 114069, 31316 ] ],
														[ [ 114276, 30880 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));