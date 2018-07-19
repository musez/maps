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
									'京山县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420821",
											"properties" : {
												"name" : "京山县",
												"cp" : [ 113.114595, 31.022458 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@FCB@PENC@@@CB@@CBI@C@EFAD@BDBJDBLDHFBBBCDCDABADCDABCDCBCBA@C@AAA@C@ABAD@B@D@BB@@B@DAFCFC@CDCBCBC@@@ABBB@@BBDL@BABA@ABCBCBA@@DABA@CAEBE@@BA@@@A@ABC@ABADABAB@BC@C@AB@BAB@@DBBDLBDBDFDFBB@@@BADCBABAB@@BDB@BDBDADBB@BBD@BAB@BCBABA@ABEFAPCDEBC@E@CBE@EDGBCBCFCF@@@BABIDKDIDEFCHCLBHBL@JANCF@LGBKDO@QAMBIBK@M@I@G@G@Q@IAE@@@ACGACCCACCCCC@AC@CC@CBABCJGBAD@DABABAFABA@AEECACAC@A@CBC@C@AIECCAE@AAAA@CBC@E@CAA@E@O@KBKCKAKEKAEEIKKEC@@@@GEECOKIK@AAE@CACCACACAC@ECCAAECACBE@CCCCAA@C@EIEAACGAAA@C@@@A@CF@@ABCD@@CDA@A@ACDG@A@CBCBA@AB@@@@A@AACBA@CBABAB@FK@@@A@@A@C@EBCBI@GCC@CBAA@AGGAADEA@AAAAAA@CDE@AA@@@EBA@AAACAA@ADEB@BC@@@GBABABA@CA@AAC@EBCBCBA@A@IAA@@BABAHABA@ABCAECACAAE@A@AAAA@ABCD@@C@@AA@@AAAA@C@@DEB@@AB@BBB@@A@AAA@@@A@@@A@@@ACB@@A@@CC@AC@CBCBGBAAK@@ACACAA@A@@E@OFIDED@@A@ABA@ABABA@A@@AAA@AAAA@A@@@AB@@@@BB@@AB@@CD@@A@A@@@@B@B@B@@A@ABC@A@MCMEGCEKGCGCAA@E@CAAIECAGMCCA@AAC@GBCBC@CA@A@AB@JGB@@CGIC@@@@AAACBEDABA@CDC@A@@AEEAABA@AB@@ACCEIUYGOIIGEQCOAKAGCGEE@OGGAKBMDCBKHKDOBKBMDEBGJGBGBG@CEAIAKFOBMAICKEEICI@I@MAIAKCK@IBKDGJCBEHABGBGAKCICEGEGGIEGGIIEKGOEMEMEIEKIKGCICEAGCGCGKCKAEBKBIB@ACCAACC@IBC@E@CAACAC@E@G@CBCBCBA@@DADABA@A@@@AA@@A@@@A@A@AB@FCBABA@CBA@@@AB@@ABEBC@ABAB@BAB@B@F@BABABAB@@C@A@@@@BAD@@C@A@CAAAC@C@A@@BAB@@@B@@BBB@F@B@@B@BABABCDAB@B@B@BD@BB@@@BABA@C@AB@@@B@@@BD@B@@@@BA@AB@@@D@B@@A@@BA@@BBBBD@BB@@@FA@B@@B@AD@DABBF@BABADCF@B@@BDBDBB@B@@ABC@EB@@@D@D@BABABABCBA@@@@B@B@F@BBB@@BDBB@DABAB@BA@ABA@BBB@@@@D@BA@A@@BADAB@@ABC@@@A@@B@B@@@BAB@B@B@B@D@@@B@@C@A@C@@@CBCBABA@@BABADEDA@MNABC@A@CBBD@D@BEFGFCDGFED@D@B@B@B@@ABADAD@D@HBHBLCNEHGFGJEH@F@LCLAHAJAFCBCFGHKDGFAHBFDDDFDFBF@HBDBDBDHJBFDDDFDHFHBHFHFFJFJDJFHDDFDHFHHDJBHBJ@HCD@F@FDDBHDD@LNJJFFLHLHHHFJDHDH@J@L@LDH@JCJKJEFGHEHAHBFAJHBPHTHTHBJAHCLAF@HBHNLFDD@H@J@J@LBD@@H@H@H@HDHDHDJLDJDPFLFBFCHEBKBIDGDEHCFAJAHAJCFGNEFEHEHCHCJAJAPBRBFFNFHJFJDJ@LBLAL@L@DH@H@L@HDJFHJDJDHBRFNFRDRFPDPDNFFH@FCFMFKHFFHJ@PEJEJELCHAbFDD@NDJBNHFDFHHDL@LAHEJGFCLELDFDHFJBPDJ@NAJALCLKDCBE@EDED@DBFBDBBCFADAD@DBDBLHBDBBBDFDBCHCBADC@CF@D@FA@CACKGC@ADCFABCABE@CACBCFAFABCHKFAFBBFBBDBB@HCJCTGLENCLGNMHGLOFCLOHKJKFBLFJ@RCNING" ],
														[ "@@AAA@AB@@BB@@BB@B@@BBB@@@@@B@@A@@@@AA@AAA@@" ] ],
												"encodeOffsets" : [
														[ [ 115996, 32101 ] ],
														[ [ 115535, 31461 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));