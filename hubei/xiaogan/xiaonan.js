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
									'孝南区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420902",
											"properties" : {
												"name" : "孝南区",
												"cp" : [ 113.925849, 30.925966 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@FBHBF@LDDDDD@FADCDAFADBDB@DBD@DB@ADABCD@H@D@DBD@BFDDDBD@D@D@F@BBFBAF@D@F@JAL@FBFBBBBHAFADBBBBDAN@DFHHJHFLDLBFBDBDFDFDNBBB@BB@@DABCBCDEDCBCDCHAD@D@D@F@DBFBF@FBFBF@F@D@FADABCBCBC@C@E@C@E@E@E@C@E@E@CBE@C@EAECCCAEC@CBCBC@C@EAC@C@G@CAECCECACCCAA@C@C@EBE@CBE@CBEBC@CDEBCDADAH@DDFDFBD@DAFBHFBBLVFFFJDFDFFBDADCBCHCFAJDJHHDD@D@BIDGBIBE@G@CACBCBAFBHFFDDBLBHBJBHDHDH@H@H@FBFF@FBD@BBB@B@BBB@B@B@B@D@BABC@AB@B@B@BBFDDFDBDDHFFDDF@FAJEFCJAHAJBHDH@JEFGDGNIB@HCB@@AHAHA@@@A@@@A@A@@@A@AB@B@@A@CA@@AEAAAAA@A@A@CBA@AA@AAA@C@ABA@A@@AAA@A@A@AAA@AA@A@A@A@CBE@A@A@@A@A@A@ABA@AB@@A@@@CAA@AECA@AAA@AAEI@@@A@ABA@@AA@@@ABC@AB@@@F@DAD@@AB@@ABC@ADC@@@A@@@AC@@AAA@@AA@A@@@ABE@@@@BCBA@@@@@@@@BAB@@ABA@ADC@ABC@AAA@@DA@@@@B@@@B@BA@@@A@@AAEA@A@A@@B@@@B@BA@A@@AAAAC@A@@A@@@@BA@@BA@@BA@@BB@@BA@@@CAA@A@@CA@@A@@ABA@@@A@@@@@@A@A@AAA@@AAC@A@CA@@AA@C@AA@@AA@@@A@A@@A@A@A@A@@@@@A@@@AAA@@A@E@A@A@@AA@AB@@AD@@A@AB@BA@A@C@AAC@@AAAAA@@A@A@@@AB@@BB@B@@@@A@AAA@AB@B@@@@@AE@@B@@CAAACA@@A@@BABA@A@ABA@A@@BA@AAA@@@ABA@@@A@AECA@B@@@B@@A@@@A@A@AB@@ABA@A@@AAC@@A@@@A@A@AB@BAF@@A@@@@AAAAAA@A@A@@A@@@E@@@@A@@@ADEBC@A@@B@FEB@BA@@@@@@AC@@@A@ABC@A@@@A@@@A@A@ABC@A@ABM@@BE@C@GBE@M@G@AB@PSBA@@@AAAAAAAAACWAIBMDOFMBCBG@EAOA@@A@A@@A@IDA@C@@@C@AA@A@A@AA@@@AAABABCDIFGFEHA@C@C@G@K@A@C@CBIDC@A@A@A@AA@AACA@AA@@A@CBEFAB@@@B@B@BGDIDODC@A@@@A@ABA@@@QB¡FEAGAAA@A@AAAC@CBC@GDEDEBE@CBC@C@E@CACACACACAA@AAA@EAAAAAA@@@GF@@@@AA@AA@A@CB@ACAAACBKDE@G@A@CCAAG@C@AAAAAA@AACA@AAGAAAA@AC@AACAAAACBA@CBAFADCD@@AD@HAFIFGBELIJCDC@G@IBKBIDIDCB@D@LJ@D@HDFBF@F@DD@B@B@BEBC@ICGCC@CBEB@D@BBDJD@BBBCBE@IAGBCBAH@FBLHHB@FBDBFAD@BAB@DB@B@B@D@H@DBB@B@BABADABOBE@A@A@AB@@AB@DADEDAB@F@DBB@@B@FAB@B@DBB@B@B@@B@B@@ABBB@@DBBB@BBB@F@P@BABEDABCDEFE@G@CACACCCCC@@AC@KBABAB@@BBFBB@BB@B@DAF@D@D@BB@BBFBJ@LFDDBJ@B@F@DAF@FBDB@FDD@@BDD@B@@@BC@@@@@@BBBB@@B@@@@CB@@AA@@AA@@@@A@@@@B@@A@@B@@ABB@@@BBB@@B@@@@AB@BA@@B@@A@@@@@AA@@B@@AB@@A@@@@@AEBC@A@ABA@A@AB@BABA@E@@@@B@@@BB@@@D@@@B@@B@@@BB@@@D@D@@@@@@B@BAB@@A@@@A@@@@AAB@@A@@BBB@B@B@BAB@B@@@B@@ABA@ABAB@@BB@@D@@B@@ABA@ABEB@B@@@L@V@D@@@BCBCBCDCJCNBFDJDJFHDHALCL@@A@ADAD@BAHABCB" ],
														[ "@@@AA@@AABA@@@@@@@@BBBBB@BBA@@@C" ] ],
												"encodeOffsets" : [
														[ [ 116566, 31806 ] ],
														[ [ 116597, 31621 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));