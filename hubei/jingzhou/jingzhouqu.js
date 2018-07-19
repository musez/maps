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
									'荆州区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421003",
											"properties" : {
												"name" : "荆州区",
												"cp" : [ 112.195354, 30.350674 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@HGDAFADAHCDADA@ABEBOBC@ABCBAFAH@LADABA@AAICIEICEBIDEFCDCFGHIDKFIHIBGFI@GCIACAI@IBIDGLKFCHCJADDBFBD@FCH@DDDFBHBF@DCFCFEFCDEBIDICICKAGAICO@CBEAC@AAE@CDADAFADAFA@A@CBADCD@F@BBDBBBB@DBD@D@FADCD@DABB@D@DADABABCBA@AAA@CAA@CBAB@F@J@JADBD@DBDBBB@@BFEB@D@BBDDDDDBDBD@B@BABC@CDAH@LAJ@F@RBNDJBHALC@IDGLGJCB@FBJ@D@DABADCBCBCBCBC@E@CBABABCBC@@DA@A@@@AAAAA@A@@@ABA@A@A@AB@@AB@@@AA@@IAA@AAA@@ABCBC@A@A@ACAA@@A@CB@DCBA@A@AB@B@B@BA@A@@@ACC@@AA@A@@@ABABA@@B@BBB@BCBAB@@CBAD@B@@@DIBABAPIPENAIUGIGGGCKAO@IACBIDIFIHIFEFA@GFGBE@CC@IAEACAAA@OCMCC@AAAA@C@A@C@AAGCEACACAC@CBA@CACCCICECAACCEGAE@@ACA@A@CBABA@AA@@BADABAAA@AAAA@@ABGBEBAAS_@M@]EeI_KkM@EBEDCBGBIAIAKES@M@EBEBEBG@EGYAIBEBCDADAD@FBF@D@FC@CBCAAACCAG@CAACAEBCBCHABC@CACCAEACCAC@EBE@C@CCCACCE@CBABADAD@DBF@D@H@HCFEDCBC@ACCCCC@SEGCCCCECCCAIAM@ICCC@A@CBE@EAAE@GBEFAHA@@BE@ABCBEHCBA@CA@CAAA@CAEAAACAABA@@BHLDDBDDHAB@D@DBBBDDDBB@BDJ@JMFC@EBEJ@F@H@H@F@DI@GEEEGGEGMCE@GCGCIEEEGEIAGCE@OCMDKBGFCFBHDFFNDFDFFHDFFJFLHJBBHFFFFDDFDHBF@DDDFDFBLBHBDB@FEHCFILBFJBF@HBDHDPAFAH@B@DCBABABC@CBAB@D@BAB@B@B@BBBFBB@BBBBBF@D@DBDAB@BA@EFOBIFID[TUVMNQXIRGHCF@DBFBHAL@T@LDPBNCZEPGPGJGFABCDCBE@C@A@@AB@BABABA@@AAA@A@EBCDCBA@A@AA@@BA@ADADAFA@@@A@@AAC@E@G@EBCBIFCBA@A@CAC@C@ABCBCDCFCBABCDCB@BAB@DBBBBDBBBBABABA@ABADAD@B@B@BBABCFAD@B@BDDDDBDD@BB@B@@ABA@EBGBCBGDA@@B@BDBDB@BBF@DBDBB@DBF@B@DBD@DBBDBD@H@H@F@@@DAXAD@F@HAB@J@PBDADDFPDVFLJNX^BD@JCJCD@BABABABCBE@EAA@ABEFE@E@CB@BA@BBDBHDJHFNBDCLADABBBDBNFFDB@@BBBDDBBDBBDD@B@B@BBBBB@BDAFBBDDDDBDBRFF@B@BCD@BB@BBB@HDB@B@B@DBB@BBBBBBDBB@F@B@B@BB@D@@B@BDBBB@D@BCAC@ABAJFB@B@FB@@B@@A@AAAA@@AB@BAD@D@@@BBDD@@BD@BH@H@@@" ],
												"encodeOffsets" : [ [ 114769,
														31394 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));