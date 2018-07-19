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
									'曾都区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421303",
											"properties" : {
												"name" : "曾都区",
												"cp" : [ 113.374519, 31.717521 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@ACA@CAEBCA@@C@@@A@@A@@B@BC@A@A@@@@@AA@ABA@CB@B@@A@A@@A@@@A@@A@@A@@@A@@AAC@@@AAAA@@@A@@BABA@@AA@A@@A@A@A@@AA@ABAB@BA@@BA@@AEAAAA@A@@@@C@A@@BA@@AAAC@@@ACA@@A@@@CBADA@A@@@AACA@@CBA@@@AA@@@AAA@@@E@ACA@@AA@A@AA@@@A@ADA@@B@DAB@@A@AAA@ABC@AACA@@AAA@A@C@@@ABA@AB@D@B@B@@EBC@CBCDAB@BAB@BA@@BA@ABA@CBC@ABGHABABAB@BA@EDEBABIJADGJABA@GAA@G@C@@AA@@ABA@AACAAAAA@ABA@A@A@GCCAAAE@EBGDE@ACEGC@G@QF@@C@IAKCGEECIEI@MBEBKLIFEFKDIAKAMCGCEEAKDODODIDM@MDQCMGIECCB@DCDC@E@CA@CAIAGAGCEAAAAGEKCCAAIACC@EB@F@DAJ@DA@@D@@MDOFA@ED@X@`@JBHBFHHBD@H@N@L@FADCJAPCRANBFBDBFFFLLJHDD@B@DABADGBKBKBGDYPONGJCHAD@DBDBBJDNHNFHFFFBDBDAFEHGJEDAB@D@DBVDTBJ@F@FBFBDJHHFDDBFBF@T@PBVBPBHAFADCBKDOJGDIDEDCDCD@B@DBBBDHDDDDFHFDDBB@DBJ@DBBDFBD@D@H@HAFALAJ@D@BBDBB^ZFHDFDHBNDJDLBFBDHFHFLJLFBDBD@DADADCDKLKNGLGHGFJDNBTBRDpJLFLHHDH@L@V@F@HCJANCNAL@HADBD@DDBDDHBBDDDD@BBD@NC|@XBFBDDDJFRJ~bJHJFDBF@DAF@RGJCDAD@B@BBB@JLBFDDFBDBFBF@F@D@H@BADCDCBCLWBABADAD@HAJ@D@B@BABABCBAB@D@D@D@DBBBBBDDDBDBR@H@@A@GBEDIFCNCFAHCDGAGEIGKIGEEEGCGAEAGAKAECEAAC@C@CBEBE@AACCAAEACIAACCAAGCA@@AAABA@AB@FA@A@KAK@A@@AAA@CCACGCE@ABADCFE@IDC@CACAIKIIGKEIAAAEBCBAH@HEHGCKAGEIAGCGFCNCJCHGFCBEFKDK@IBKAIEGGKCGCE@EBGDKFCAG@ECICIAM@EBIAGAKEKCI@CCMEIAC@A@C@ABAFCDCDE@E@CCGAG@CBEBEFG@A@CAAKEGACCAC@EBC@AD@BADADAJCDCFEDCJEDADCBE@I@GBABADAJCDABABEBE@E@CEI@C@CBEDEBEHGBC@ABE@EAECGEEAGAEBMAECEGEAC@EBGBEBCDAFAHCNAFADABC@CAG" ],
												"encodeOffsets" : [ [ 116322,
														32178 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));