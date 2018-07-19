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
									'武穴市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421182",
											"properties" : {
												"name" : "武穴市",
												"cp" : [ 115.56242, 29.849342 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@K@MHOJILKFI@K@IDKBIBKHOHILKJGFEHELCLEJCHCJEJCBCACAECGEGIGMKKGMGCG@KDIAEEEECECCCAEBGFCFCJ@D@DBHENGFINQBERMJKBA@@@AGGCCIIKMACGICAEEGGEEAAAACCGGEECCAAACAA@AC@CEEIGEKEKAGGCC@EBIHC@@@@NECECCK@[AI@GAIBECCGAEDGBKHKFCFCJIHMBCFANCDABC@CCAA@MDK@C@E@CCSKACCEg^oV_DYAMAKAEAcEIAIAM@K@KAO@M@K@KAK@IAK@M@OAMBKBE@IBE@A@KBcHgTCDC@GFGDEFIJEHEHCNCJCJEFEHGFGDGBGFMNAFAH@LDJBHBH@HCJIFMFMJIHS^EJ\\PHBFADCFAD@HBF@FBDDHVBHFHJFFDJDH@F@HAFCHEFEHCHCH@HAFBDBBJBH@D@HAH@HBFBHFFBFDHDF@FBFBHBFBJ@JFNHLBJFNDLBHFJ@H@F@FCL@LDFDFFHBHBFDDDF@HAFCJCH@JDJBFHHFFFFDHFDJFLFLFL@JCFAJEHCHAFCL@JBDDBFDDDJDFHFJDL@LAHALCFALGJCLGLGXQFCFEDCJEH@JAJ@FCJAL@N@NDTFPFPDRF" ],
												"encodeOffsets" : [ [ 118527,
														30913 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));