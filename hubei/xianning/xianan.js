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
									'咸安区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421202",
											"properties" : {
												"name" : "咸安区",
												"cp" : [ 114.333894, 29.824716 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@@AA@@@A@@@@DEFAHAL@B@DEHK@A@ACAGAG@EACEAEACDAB@ZJDBBBFAFCAC@C@CBADAFAF@NDNBNDFBHAHAFAFE@E@EACAABAFATG~QJ@H@NAD@BABGBCB@HAJ@DADCH@JEZGD@FBFDB@DADAF@H@BB@OAA@ACCAC@C@ECSACBGAAAGCGAC@GAKMDKDKACB@BC@CAKCEAGBMDEBK@E@AAAAE_@@E@AAAAAKAC@E@IAECCGAEAW@E@CACBC@EBM@[AC@AC@C@EBIFEFAF@BAFGJGFG@C@CGEGEEEI@IAGACCICOCECICIAMBKBE@EAaWCCKE]YCCACAE@GACA@E@KBC@A@GCOIWGQEG@cCC@CCACBG@A@CA@EAACGMCEAEGKGCECE@C@CDABGBC@GAQIC@EBCB@\\BFBBFBDDBD@BAFCBC@EAcMSKEEG@GAGBC@ADABE@CACCKQC@EAI@G@KCK@G@ABCDCBIAK@_BC@CBALABC@GBK@CD@HABCHAF@JFL@D@DBDBFBHBD@BABCD@B@BABA@AACAA@ABAD@BCDC@CBEAE@GCKCGAMAG@GAE@A@AB@D@BA@OFC@EBC@ABADC@@B@DAD@D@BBBDBDD@@@D@BAF@H@B@BTFB@BB@B@F@F@@@@AB@BAB@@AB@@@D@B@BBB@@FB@@B@@@@B@B@@@BBB@@BBAB@B@BAB@@AB@D@B@B@BBJ@B@B@BADAD@@@B@B@B@@ABABADABABCDADA@@BA@A@@BA@@@@B@@@@FFDFB@BD@@B@BBBB@B@@@B@@@B@B@BAB@BA@ABA@AB@@@B@@@BB@@@B@@B@@@B@@B@@@@@BBB@B@@AB@B@@@B@@@@@@A@@@@@@B@@BBB@@@@@B@B@@@@@BBB@@@@@B@@CB@@@@BB@@@BA@C@A@@@AB@@BBBBBB@B@@A@@@@BA@B@BBBB@@@@@B@@C@@B@@BBBB@@@@BAB@B@@B@@@@@BABEB@@@@@@@B@@BB@@@B@BBD@@@B@B@@@BA@CB@@@B@@@BB@AB@BABA@A@A@AA@@AA@@ABBN@BABCBCBCBGFABMHADAD@F@H@NAF@R@BCBGBKJAHQ^CRCDEBCHCL@FpBRAFAD@DBDDFDF@FAJEHAFBJD\\ZJNLV@@HDFBlKBAB@BAB@B@B@JBF@D@DB@@B@DBF@H@HBHBFBH@FBFBHBF@FBHBF@FFHDBBB@PDD@HD@@FBHH@@FFDDDDF@D@DAFAD@B@HDDDB@F@DFD@B@HCFAHCFAHAHAH@F@F@FAFAHAHAHEHABAFADABA@@BABAFCB@FABALCF@F@F@D@FADAHABABAACDA@@@AB@BA@@B@@@B@@@@@B@@@@@@@B@@@@@@AB@B@@@@@B@B@B@@@@@B@@A@@FADCDA@@@@BAA@B@@@@AB@B@@@@BB@AB@@@@AB@@@@@B@@B@B@DBB@B@B@BB@@@@B@@@DAB@B@BAD@B@B@@@@@B@@@@A@@@@@@@A@@@@AA@@@AA@@@@@@A@@@C@@BA@@B@B@B@B@B@B@@@B@@@@A@@@@@A@@@@@@@A@@B@@@@A@B@@B@@@@@BA@@B@@@FCB@BABC@@B@B@@@@@BBB@@@B@B@B@B@D@@@B@BADG@@BA@@@@B@@@B@@@B@@A@@B@" ],
												"encodeOffsets" : [ [ 117282,
														30689 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));