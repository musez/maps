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
									'张湾区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420303",
											"properties" : {
												"name" : "张湾区",
												"cp" : [ 110.772365, 32.652516 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@oDDFF@HBFDDDDDDBDDDFDFBHD@@CDAFADBJBH@DBFBBDBDBDCDCBADC@CBCDCDE@CBC@AB@DBFBF@F@FABABC@GBIBE@CFGDCFCHAFADADC@EDEAE@CBAFEBCDG@EBCDEBEHCF@DABABE@EMI@@BAHAFBFDBBB@B@AAAACE@@@AD@D@BBDB@@BA@ACM@C@@AE@CAECEAC@A½d@@@@YHBBBB@BBB@@@BABCBA@@B@@@B@B@B@BABA@@B@@ABAB@@AAAA" ],
														[ "@@AA@@EC@AA@@@B@BC@@@@@GBA@A@A@@@AAA@@@A@@@ADAB@D@@@@@DB@BBB@@B@B@@B@@ZG@@@@¾c@GCACA@ABC@A@@A@C@A@@A@A@AA@CACACA@@BC@@AA@CAAA@A@ED@@A@@ABA@A@A@A@@A@ABABA@AA@AAEAAA@A@A@IBC@@@@BAF@@ABC@@@ADA@@BCBABA@BF@D@D@BA@C@A@@BAFADABEBCBABADBB@D@B@BA@@@EAA@C@ABA@C@@@AA@@GBA@A@@@ACBA@A@A@A@@AAC@A@AA@@@A@@@@@@AA@@@C@@BCB@@@B@@A@@AAC@@@@AAA@@@A@I@A@CAAC@@ACAAA@AA@@ECIAA@A@A@AAAAA@AA@AA@@@G@@BA@A@@AE@@@@LDDB@A@@@AACCE@A@@A@K@CBA@CACEAAEACA@ACCACAGCEEEECIACBA@AA@GAAG@CBIAAA@A@C@CCEECE@C@AAAEAAGAI@EACCA@I@GCKAACCK@CAC@AAEEAIEA@A@GFEBIBA@EACBA@CAGEAKECE@IAEC@GCM@EAI@GCCOEKAACAEAA@@A@A@A@ABABG@A@@DA@A@AACAA@@BA@CBAD@@@BA@ABABA@ABCB@B@BDDBD@BBB@@BDABABABA@ABC@GDCBCBIGIFGHEHKDAF@HB@D@LCD@BBABIHGDBDFDD@HALCD@BF@F@FEDOFMDC@CCCAABEHCHGNCJ@@E@ECGCG@EBEDAB@FB@NFB@GJ@BDDJFF@XAXD@@@C@E@@FAF@B@BBADABDFBHADAB@BAB@@@F@DAD@@@BFF@FBFDBBDCPBD@DADAFCBE@IAC@CDCFADADEBCBI@E@A@C@CAAEA@CAC@C@C@EAKGAAC@GBEBE@CAC@E@GBAB@B@JAFAHEDEBEBC@E@CAAAA@AB@DBDAF@B@DBFFDFFDDFFFBFDDBDFBNBH@FADCDAH@FBF@D@DADADCDCD@DFHFDDBJHDHDLBFD@BD@DDDHDBDDBDBDDBBBBHBHAHADAHCDCDCDAFAJAH@F@H@F@HAH@D@F@LDD@DAFAF@DBDBBADBBFBFBF@HAF@FBBB@DADADCBCLCD@FBD@B@HCH@H@H@FAHAFAFAFEFEFCDCH@HAF@FBFDJDD@D@FAHMBIBEFCBCDEDCBE@CDEDAHCFCB@F@DBFDBDBFDFBDDBF@F@H@H@FAFCDCBABAD@F@D@DABAB@FDFFp" ] ],
												"encodeOffsets" : [
														[ [ 113433, 33468 ] ],
														[ [ 113433, 33468 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));