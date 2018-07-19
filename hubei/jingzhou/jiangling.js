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
									'江陵县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421024",
											"properties" : {
												"name" : "江陵县",
												"cp" : [ 112.41735, 30.033919 ],
												"childNum" : 3
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@DEJEVQDCHMDCLKRSFEBCJ]@ADCDCIGAKBO@KDMFGJCHAFADGDGDG@K@G@EEGIIGGEG@E@GDCJGLCPAPBTBLALCJELCLGJAJAL@JAFCJGLGJ@HBN@JEHCB@F@^DJ@DAD@D@D@BC@E@A@E@C@@B@J@S_WO[I@@@CACA@C@C@C@CBC@A@AAAECAAA@A@CJG@C@@AACAAA@G@ACAE@@@@BA@A@EACAA@CF@@A@AA@A@AB@@A@AA@GCAACAEEAC@AJIBADEBA@AAA@AA@IAE@ABABCH@BAD@@A@AACAAACAA@AB@BB@@BADABA@@@@A@CAAECA@CBCBCB@@A@@A@ABAB@DABAB@CCAA@@@A@AAC@IAEAAAGKEGAAEBE@C@CCGCEKOAG@IBEBG@CCCC@A@AAAC@G@CAAEAA@AAAABI@AAAA@E@@A@GAAA@AAADABADCFCDABADEBOFGFADDHGHQFOFODQCKCIAG@ODMC@A@C@C@AE@CAIAGAAE@ECCIBCBADAF@FABA@CAMCCAUGYIA@ED@BAB@BCBM@KBBB@JBJBNDHADAL@JALAPEPALAFAFADADADAHAFCDAFADADADCDCDCFABADCFADCFADCFAFCDEHCBCBEDEBEBEBEBEDKBODMDOBK@MBMDEBIBIBIBK@IA@@@@G@KCKCGAEAGCEAE@EAG@G@A@EBCBC@CBEDGFCDCDCFCBADEFADADCHCFADAFADAFADABCHADADAFAFCFADCFCDAFADAFAD@DAD@D@FBFBFBFDFBBDDDFDDDDBBFDDBBDFDHDBDDBFBHDBBFBFDFBDDDBFBFDFDDBDBDDFBFFDDFDDDDDDBBDDDDFFJDFBBAAHANAFEFADD@JBHBBBBNAHABC@E@G@EBEBALATCTCHAJ@J@HCFC@@FCBADA@AB@B@D@B@@@F@B@D@F@B@@@DABABABABA@ADCD@@BFFBBDF@DCFAHAFAD@HBBBB@J@BB@J@FA@A@AACBCBCD@B@@@B@BB@@@DB@BBB@@@BA@C@@H@DABA@@@AB@@@BF@@D@DABEBAB@D@B@@B@F@@DBJ@\\ADBB@BD@F@DHCLBF@HBZJFBFDFFDFBFBF@FBDLL`bDB@@" ],
														[ "@@@BCD@B@@BB@@@BB@@@@@B@@@AA@AB@BAA@@@BA@A@A@@@@A@@@A@" ],
														[ "@@HKBCKGAD@@CD@B@@A@A@@@AB@B@@@BCBB@ABABGNPFDC@AFIBA" ] ],
												"encodeOffsets" : [
														[ [ 115229, 31002 ] ],
														[ [ 115382, 30733 ] ],
														[ [ 115091, 30941 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));