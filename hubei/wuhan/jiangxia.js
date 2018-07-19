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
									'江夏区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420115",
											"properties" : {
												"name" : "江夏区",
												"cp" : [ 114.313961, 30.349045 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@NIHCBA@@@@@@JEB@B@@AB@DA@@D@D@@@@@B@@B@@@@@@@@BB@@@@@@@B@@@@@B@B@BA@@@@B@@@@@B@@@@@@@@BB@BBDBB@@@@DD@@@@B@BAFC@@BC@A@@DEDEFIBABABA@ABAB@DCB@B@@@B@B@BBBBBB@BBB@BB@B@DBB@BB@@@@@@@D@@AB@BAB@B@BBF@B@F@BAB@D@B@B@B@@@B@D@@@BBF@DBDBD@@BB@@B@B@B@@@B@@@B@BAB@B@@@@A@@BABABAB@@A@@B@@A@@B@@@B@@@B@@@B@@@@@@A@@@A@@BA@@@@@@BA@@@AB@B@B@B@D@@@B@@@B@@B@@@DBB@@BBB@@BDDB@BBB@B@D@B@@@BBBH@DBBBDBB@@BD@B@BBBBBBD@@@B@B@B@BBB@BBBB@BB@@@BF@FA@@F@JEJEDCFIHEFAJ@BAJA@@BABAB@DA@@BA@@@@@A@A@@@@BAHAB@B@BAD@B@DAB@D@B@D@B@B@B@BBD@@BBB@BBDBD@B@B@B@@@DBD@B@B@B@@DFBB@B@D@D@DAD@DAF@B@B@BA@@D@@@@@@@@@@@B@B@@@B@@BBBBBBBBBB@@@B@@@@B@@B@@@@@@BB@BF@@@@@B@@@@@BB@@@@@@@B@@@@@B@@@@A@@B@@@@AB@@@BBBA@@@@B@@@@BB@B@@@@B@@@B@@@@@BAB@B@B@BAB@@@B@B@B@B@D@@@B@B@B@B@@@@@BBB@@@B@@AB@DA@@B@@@B@@A@@@AAA@A@A@@@A@@@A@@@AB@@@@A@A@AA@@AB@@A@@BBFBD@BBHB@@B@BBB@@B@@@@@@@B@@@B@@@B@@@B@@BB@@BDBBBB@@@B@BBB@BBB@@BB@@BBB@BD@@@BBBBDBBF@H@N@L@HAH@F@DAD@DA@@@@@A@C@A@A@@@CBABADAB@BADAB@@ABE@A@@@@@E@EBIFGH@LA@@B@B@@@@@F@FA@@@@DAB@BAD@@BBB@@BD@B@BBB@BBB@@BBB@BB@BB@BBB@D@D@FA@@@@B@@B@@@BABADAD@B@BBBBDFFBDBDBDBDBD@B@BBBBD@FADABCBKAI@CB@B@B@BD@BBBB@@@@B@@BB@@BB@B@D@@@DBDBB@FBDBD@BBBBBB@D@D@@@BB@@B@BBBB@@BDB@@DBNJDBPAB@VCB@B@D@B@D@BAB@DADABABA@@@A@@@A@@@@B@@@@AD@@@BAB@@A@A@CAA@@AA@@@@@AAA@@CC@@AA@@CECCCC@AACCCACAE@@AC@A@@@A@@@@B@DAB@D@B@D@DA@@BBBB@@BABABA@@D@DAB@@A@A@A@@@C@@@@CEAC@@@@ACA@ACAAAAACAAAA@@@A@@@A@@@A@A@@B@@AB@BAB@@@B@@ABC@AB@@@@@B@AAAC@C@CB@@AB@@@BA@A@A@A@AA@@AC@@@@A@@A@AAAAAAAA@A@A@@@CDCDEDCBEBG@GAIFCASACAQ@MAQEK@KFOHIHEBGBGAGAGAGAIAEAE@E@E@EBG@GBGAIAEEGECGCECEEG@GEAC@EAE@E@G@GCGECGEECGEIEEEAG@G@GBIAGAGAGAGCGGGGEE@GBA@C@@AAAAC@C@C@CBG@ECCEACA@C@CDC@@BGACCGECACCCAA@A@ADC@@@A@C@A@@@@@@@A@@@@@A@A@@@AA@AAAAAA@AAABA@CBC@A@A@@@EHEFGBADCDCBC@A@@B@@@BC@@AA@A@CA@BABADCD@@@B@B@BADAHCBA@@@ABC@A@A@A@@@A@ABCBEDADADCB@BCBA@A@@@A@AAAAA@CA@BA@AB@@@BABCAC@E@C@CBEBEDEDGDEBAB@F@BABA@ABCBADABAB@@AA@@AAAC@A@CB@@ABC@ABA@ABA@ABA@@@AA@@@AA@@A@@@ABABA@@@A@A@@AA@A@AA@A@A@A@A@A@@BABCDCBAB@@AB@AA@@AAA@A@A@A@AB@D@BABA@AAAAA@CBADCBABABA@@BCBAAA@A@@A@A@A@@@A@A@@A@@@@@A@@@@A@@@@@@A@@@@@A@@@A@@AA@@@A@@@@@@A@@@@A@@@@@A@@A@@AA@@A@@@@@@@A@@B@@@B@@@@@@@B@BABA@@@@@@@A@@A@@A@A@@@@A@@@@@@@@@AA@@@@@@AA@@@@A@@@@@A@@@@A@@@@@@@@@@B@@AB@B@@@B@@ABA@@@A@@B@BA@@@@BA@@@A@@@A@AA@EGECA@A@A@@@@BA@@@A@@@A@@@@@AB@@CHABA@@@C@A@A@A@A@@@A@AA@@@@A@A@@@ADABA@ED@@A@@@AB@@@@A@@@@A@B@@A@@@@B@@@@@@@B@@@@@B@@A@@@A@A@A@A@A@A@@@AB@@@D@@@B@@@@B@@B@@BB@@@@@B@@@@@@@B@@A@@@@@A@A@C@ABA@A@CB@@A@@@@@AAA@A@A@CAA@A@@@@A@@@@BA@@@@BAA@@A@@A@A@@B@@A@B@AB@@@@CBCDEB@@@BA@@@@@A@A@A@@@@@A@A@@B@@@@A@@@@@@@A@@@@@A@@@A@@@ABA@@B@@CBBDABABGBCBEBC@E@E@E@KDABEBA@EDABAB@@ABCBEBABGBGFGBGBEBEBE@E@G@GBGBEBGDEBGDA@C@CEE@A@CCGCA@C@EBCBC@E@CCCCEE@@GGEA@@GCC@OCA@AAGCEEE@GAEAE@GAEAEAG@EAGAGAG@E@CAA@@@CAC@E@IAA@A@A@ABA@ABkL@J@DBD@FBF@FADAHADEFCDEDEFCDAFADAD@D@F@DBD@F@DBF@D@F@DAF@FAD@FADADABEBOBKBKBE@CDAD@DAF@F@HAHEHKDEBBF@BBDBDBD@B@DAJ@FAHCFABCDAFCDADEBCDADCDINCBCFCFEJCFCF@F@BELCDCBKJGBQ@@@GBCBMD@@CBA@C@GAE@@@EAEAC@@@A@A@E@CCCA@@ACACCACAGAC@CD@DAD@BAD@D@DBB@BBBB@D@FABBDF@DBFB@NBLH\\ZT`L`@NBPP|BBLjFJLJRNLJXZXVT\\TX" ],
												"encodeOffsets" : [ [ 116914,
														31134 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));