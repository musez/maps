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
									'应城市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420981",
											"properties" : {
												"name" : "应城市",
												"cp" : [ 113.573842, 30.939038 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@A@@B@BAB@@@AC@A@A@A@AFGHIHILIDEBAB@B@B@F@B@BA@@BE@AB@D@BABABEBCBAB@BAB@FBBBD@BAHADA@AB@@E@EBA@@DAD@@@BA@A@E@IAC@AAAC@CAC@A@@A@ABADEB@DAF@BA@@@ACE@A@@@ABAF@BAHAB@HAD@@@DK@C@AAEAC@AFUHQDIBAB@BAN@FAB@BABA@ABGBABCBA@C@KBCDCFAD@F@BAB@DCBABAB@HADAHCDALACQACAAA@AAA@CBABA@A@A@AAACAAEECAAA@AAA@ABC@C@A@E@AAACCEAGEAA@@@A@ABEBE@GBCUGAAAA@EBM@S@AAAABCBINEFGF@@@@CBABC@CAIICCEAA@GOCIGKIOMIOKOIgAYQUMSEAUJARCBCCUKGcCgI[CYH]ASKWQI@CREVCDCFAD@@CDADADEHED@BILGJCFGBM@E@A@CBEFAD@DBD@BAHA@CA@@CB@B@DBDA@CAA@@B@BBB@@C@@BBBD@@B@@C@A@AB@BB@B@@@@D@DA@AC@@ABADBD@B@@A@CAA@ABAD@BBBAB@BCA@BCBCBABADA@CBAB@B@BABA@A@ECA@OEAACAIEABA@CBA@AB@DAB@BBB@J@DAB@@ABC@E@A@@BABBD@@ADC@AAGAKBC@AFCDCBADAJBF@BBDA@@BKFC@AD@@BLABAHAD@DBDD@@DB@@@DA@B@@@B@@@B@@BB@B@BA@AAA@@BA@CF@@@DBBBB@@BB@@@DC@AD@BBBBBB@F@BBBDFDDBBAB@BABGBA@AB@JBB@B@DADAFAD@BBB@@DABABAB@H@@ADA@CF@BBBBDBBB@FA@@B@@BCF@DBBBBBBB@CFBBHH@BBBDAD@HDJ@DAFAD@B@@@@B@@ELA@ABAB@DABBD@B@B@@A@@BABAD@D@BCHBDB@B@DC@@DCBA@@DEB@@@D@B@BBDHBBJF@F@DBBDDDDF@DADBBFDBFDD@DBDBDBBD@DBF@BJLPLFDHF@@@@FDLLFJBFFLBLDLAL@L@P@FBB@D@FAD@DBBBBF@DBFDBJD@D@DAB@D@DBDBFF@ABABANMHCDADP@BBBB@HDLDHBBBBBBFFJHHHJHDNHB@DBD@DADAD@B@B@BCDCDAB@DADADCEAECAAA@BA@AB@BAB@F@D@B@B@D@B@@@B@@CDE@@B@@@DB@@B@@@@@BA@CAGBA@@DB@DDDBDBBDBDBD@DADADCDGDKDEBG@C@ABADABABA@@@ACAA@E@C@C@@@AAA@@ABC@AB@B@B@BA@A@A@@AAA@A@@AFEHEFEDEDADCBAB@@AA@NOB@@C" ],
												"encodeOffsets" : [ [ 116361,
														31805 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));