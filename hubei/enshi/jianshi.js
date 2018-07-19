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
									'建始县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "422822",
											"properties" : {
												"name" : "建始县",
												"cp" : [ 109.723822, 30.601632 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@BAFCDABCBABED@B@FBDBFBHB@@H@PDNBNCNKHGJCPAT@XEPCRIDIAKCGCKGGCC@AAGAMA@A@AA@@A@A@A@A@A@@@A@AAAAA@A@AA@@AAA@A@AAA@@AAA@@AA@AAAA@AAAA@@AAAAA@A@AAA@@AA@AAA@AA@A@A@@@A@ABA@@@A@A@A@@@AC@AA@AAAA@AAAAA@@AA@A@AAA@A@A@@@AAA@A@AAA@@@AAA@AAKMGOGMCIAM@KEKGGEGGECAECE@E@C@A@EE@GCCAEEE@@@@@@ECECECCEAAAEAA@CFEFEBC@EAE@KBGBCJEDE@E@IBEDIDGBGBE@EBCBIDGDAFEDIDEDG@ICICIAE@GDGBI@G@ICKGMAGAIBAHCHAHCDABABKBK@MCEGIIIAG@GBKFI@I@IAGEOAGBMBKBGAKCEGGEEAC@ABC@CFA@GEEGECG@ALWBKCSCKCKHQBMBI@GEECGCEEEAG@G@GHKDAFBLFBBBBFDFBHDBDDFFDBBBDBDDDD@@BB@FDDB@@B@B@D@BB@@B@BBBBBL@@BDDLDBBABA@ABABC@AHCDAFADA@CACAE@EBEBE@ECGAEAG@CBADBB@FFB@BGDCBADBB@B@@@BCBC@C@A@A@E@ABABA@A@ACCAA@@@CAEAA@C@@CK@AAE@AAE@ABABAB@@ABC@A@CAA@AAAACAA@@AA@AAA@@CCCAAAAAAA@AAA@AAAAAAC@C@EIC@@CAAA@A@@AA@AA@A@EAAA@A@@AA@CA@ACEAAAIA@@C@A@C@EACCAAAAA@AAAAA@CAA@A@AAA@A@E@A@EAA@C@C@SIOGQGQGSGOIOIQGQISEGAMBMAIACCIGCCGACECCIAAB@BAB@B@BAB@@BB@BAB@D@B@@@BBFBD@@@J@D@@@D@B@@B@DBBBBB@@ABCBCBGBE@C@GBGBEJ@J@NARCNEJILEHGRCPGDKEGACFBHAL@FDJDHHNBH@FFHF@HBD@FDFF@H@FCDAFDFNDLHBHBH@NCRAN@J@@A@ABABA@A@A@A@ABGJAB@@CDCDAB@BCB@BAB@BADAB@BAFAFADCF@B@BC@IAIAGB@@B@@FA@@B@B@B@B@@@D@@BB@BFDDB@B@BB@@BA@ABA@@DCBABAB@BABABABCDAD@BCB@@ADAB@D@B@D@B@B@B@B@DA@AD@DAFABADAB@@@@@B@D@B@BA@@B@BAF@BABAB@@ABA@@B@@CBABCDCFCB@BC@@BEHCFIJCHCNAL@JBLDPFNDJFB@BDAFEJADABC@C@CBADAJABABA@CB@D@BBBD@DBDADCJABBDDR@B@FA@@BABAB@DABCFCD@@ABA@E@@@AB@@@@EdABEHGJMDKASCUEOBMHI@MBMDICECBMDKJGAIECQBQHC@E@E@MCA@AAA@GACACCA@CCAACACAAA@A@A@C@AGI@AAAACACA@CCEGCCAA@@@A@EA@AA@BEDCDCBA@C@CDABC@AB@@@B@@B@@BA@A@@@@B@BABABABABABABCFABABAB@@C@@@@B@@BB@@@BC@@@@B@@B@@B@BA@ABA@ABA@A@A@@AC@A@CBAB@A@@EAA@@@AAAAAAA@GAC@@@ABAB@@C@CB@@A@AAAAAA@A@@A@@B@@@B@@@BA@@@AA@A@@A@@@@B@B@@ABCDABA@@@AAA@@@@B@B@B@@ABA@@BAB@@@@A@@@@@AA@A@@A@@BAB@DA@@@A@@@AB@@@B@@AB@@A@ACA@@@@B@B@@BB@@@B@@ABGBCDA@A@@BAB@F@B@B@DAD@BA@ABIFEF@DBFJL@H@DABABK@G@GBADBD@BABC@KAKBKBA@CFA@A@A@ABAB@@AB@B@BAB@B@B@@ED@@C@A@CA@@A@A@CDA@E@A@A@A@G@E@A@AB@BA@@AA@@BCBCDEJCDIN@VDNFFFLDJBJ@D@FB@H@DBFDBB@FAB@B@BD@@BD@DFDBBBBBBBBB@DABC@CBCDBFBFDDDH@DBDBFBD@FHBPHVDJ@PDHDh^FHLRDH@@BB@D@FABBDABAFAH@F@FAB@BDD@@FBD@D@DBHBJBHDF@DBDBDFDHBDDDJDFB@@DABCACAEAAAC@A@ABAB@FDHHRFBBBBBB@DABEDCHBD@@BB@B@B@FAFBFDFHDBBDDBBDDB@TJXPPJl`PFRJNDRBNB@BFDDBHB@@VLbTRHNDNFTNLH@@B@F@FBD@FAJGNEH@F@DADAHGB@FBDBDBB@DG@GBA@CBAB@J@FAD@F@DDFFFDHBHDBBB@F@BADALBLBB@BABC@ABAB@DBDBD@D@BABA@A@A@@AA@EA@@A@@@AAA@A@C@A@@@A@@@AB@@ABA@@@ABA@@B@@AB@BA@AB@B@@A@@BA@@@A@AB@@A@@BA@@B@@@BA@C@@BEBG@GAEBIAE@ABAFCFABABC@AD@DC@@D@F@D@B@@AAC@A@ABCDADA@A@A@AAA@A@@BCBAHGD@FAH@HBB@D@D@D@D@BBD@DB@@@@D@DCDA@@@@B@B@BD@B@@@B@@BB@@@B@@@@BB@@@@@BB@@B@@@@@B@@B@BB@@@@B@@@@B@@@@@B@@@B@@@@@@AB@@@@@@B@@B@@@@@@@@@B@@@@@@BB@@@@B@@@@@@B@@B@@@@@@@@@@BB@@@@B@@@@@BB@@@@@@@B@@@@@BB@@@B@@@BA@@@@@@@@@@BAB@@@@@BB@@@@B@@@B@@@@BB@@@@@@@@B@@@@@@@@B@@@@B@@@@@@@B@@@@BB@@@@BB@@@@@B@@B@@@@B@@@@B@@@B@@B@@@@@@@BB@@@@BB@@@@@@BBB@@@@@B@@BB@@@BB@B@@BB@@@@@@BBB@@@@BB@" ],
												"encodeOffsets" : [ [ 112758,
														31585 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));