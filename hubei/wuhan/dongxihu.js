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
									'东西湖区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420112",
											"properties" : {
												"name" : "东西湖区",
												"cp" : [ 114.142483, 30.622467 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@@@@G@@@S@A@C@C@A@A@@@@@@@AAC@A@@@C@C@A@C@A@C@E@A@@@A@@BA@@@AB@@@B@B@BA@KBABC@C@C@@ACAAAC@GBEBE@CAEEAE@@AGAA@AAA@ABABADAF@F@@BFCDA@@@@@A@AB@@A@ABABADAGCGEIECCEAE@CACAAAAGACCAA@CBCBCFCBCDEBE@G@I@QBKBK@G@GAGBEDC@E@C@EACAECCCCCACECC@E@E@CBIFCBEDEBKBIBGBC@AB@B@D@BBBBBFBHBNBJ@F@DBDB@D@DABCDCBCBC@C@GAEAEEEECAC@E@EBEBCDGFEDGHCDCDEFCF@@AD@DCHAFEHEDCFCF@DAF@FAP@DCDAHABEHCDADC@A@A@CBA@A@E@CBC@CBA@@@ABCFGNA@@@EAEAA@AAAAAAA@A@A@ABAB@BABED@@AB@B@D@@ADAB@B@B@@BB@BBBBB@B@B@@AB@@ABA@AAA@@AAAAA@AAAC@EAC@A@E@E@A@AB@B@B@BBD@DAB@B@BB@DBBB@BCBCBAD@B@BB@DBD@DAD@BA@CBA@A@ADAD@D@FBBBBB@B@@@BCBABADADADBB@DBD@DBDBD@BDD@DBBBB@B@BAD@BC@G@G@AAAD@B@D@DBDDBDBD@DDDDDCBCBEDAB@DABBBBBD@BBDB@BBHBBBB@BD@BBBBBBBD@H@BBDDB@H@F@LCDABBDB@BDAB@B@@BBB@@@@HE@@B@BBBBFBB@BBB@DBDBDBDBDBF@D@D@DAF@FAFCHCD@DAD@BB@B@BBBHBFB¢ERA@@B@BAB@@@B@D@PCJCHC@A@A@A@@BAFEDAB@@@BBB@BD@BBBB@B@B@D@JCDAD@B@L@H@D@D@B@FGHEJEDCBA@AB@@A@@@@@@@AAACAA@A@AAA@A@@@@A@@@AD@BAB@DCBAB@BABAB@BAB@BABAHCD@BADAB@@AB@BC@ABA@A@A@A@A@E@@AA@@@A@E@C@C@@@C@@@A@C@GBGDEBAFADCDGDAFCNETCJCNGJCDCFEFCBCFAJ@FBFDHPJJHDJDP@F@FAFA@A@ADG@@@@BEBCAE@A@@GKMGAAA@ACAAA@CCAAA@@AA@CCAAAA@@CACACAAACAAAA@AA@@A@@@@AECCAECEA@@EACCCAAA@@@@AA@@A@AA@@C@@AC@@AA@@@" ],
												"encodeOffsets" : [ [ 116971,
														31361 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));