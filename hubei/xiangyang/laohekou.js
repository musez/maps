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
									'老河口市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420682",
											"properties" : {
												"name" : "老河口市",
												"cp" : [ 111.675732, 32.385438 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@CSBKHKRFHLJHNDJCfKVKR@PETORKPYTOTIRCRKJG\\STGNELEb@XDPGDGJMHQRKRERBbFTJNFTDN@DADA@ABADAB@BA@EBA@ADABABE@ABCHGBE@ABEBE@CBABAB@BA@C@IBA@@DAJAB@TE@@@A@@@AAA@@CAAAA@@A@@@A@@@@B@B@@@AA@@@@DA@@@AHBB@DBB@D@B@B@BABCBC@CB@BC@@B@@BB@B@DAD@ACAACCCACAAAA@AC@@AC@ACAA@C@G@AA@@BA@@@AAABC@ABC@ACC@A@E@A@A@AAA@@EAEAAACAAA@@@A@@BC@A@A@AACAECCAAAAA@EACAA@E@GBC@A@AA@@@AA@AAAACACAQCAAC@A@CAC@A@@@@@CA@@AA@@A@@@@@@A@@@AAAA@@A@@ABA@@@@@@@A@A@@@A@@@@@@@D@B@@@@A@@@@@@@@B@B@@@B@@@@@@@A@@A@BB@@@B@@@B@@@@A@@@@@@@@@@@BB@@B@@B@@BB@B@@@B@@A@A@ABA@@A@@AA@B@@@B@@@@@@A@@@A@@@A@AB@AA@@@@AA@@@@@AA@@A@@@@A@A@AAA@@@@@@@B@B@@B@@@@@@BA@@BB@@B@@@@@@@FBB@B@@@B@@AAC@AA@CGCAAACAACAEAE@CBCBC@AAC@ACAA@AAA@A@CAAABC@A@@@AAE@A@AAAACAAC@A@C@KAE@C@GFEBC@CBGBCAE@AAA@AA@CCAECCAAACAECC@AAC@A@C@GBCAA@C@A@CACACCCGAC@CACCEACCE@C@ABA@C@C@A@@AAAA@ACA@@CKAAAAA@AAA@A@I@@@AAAA@ABC@AC@A@A@AAAAAAAAAAACAAACBI@CA@A@A@EAA@A@CBA@A@E@@@C@KCC@ABC@A@A@CAA@AA@ECCAAEAGAE@CBGBA@A@@@CA@A@CDE@A@E@@DC@ABAFABAB@@C@A@A@A@A@ABADA@@D@B@FADAD@F@B@DAD@FABBB@B@B@F@BA@CAA@CA@AAG@A@CAAAAA@ACAACAA@AAAACGEA@@A@CAAAA@@AACEAAC@A@AAGAA@CAA@AAA@@ACC@AAEAAEBGBC@E@A@GBQDKLONOTELDTDT@LBNFhCPILCFERKNMRKFYJYLWLONGLAHAL@JDHBHDJHJHFHH@@@@DDRLLLHJFHFJ@NENILKJGFEFIJKJILMLUNSHKDWFWJQHQHOFGDOFMLNRF`HLJJ@BBDBBDFB@BD@@@BAD@FVTNPJNHNFL@T@HCJLJPHNJNPPTRHNHNADM@@" ],
												"encodeOffsets" : [ [ 114323,
														33411 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));