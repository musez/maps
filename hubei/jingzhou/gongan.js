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
									'公安县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421022",
											"properties" : {
												"name" : "公安县",
												"cp" : [ 112.230179, 30.059065 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@AACEEICECCACCACCCCECCCEEEACCCACAECECEACACCEAECEAAAGCEACAACGCECACCAECAACCCCCECCAACEAEAEAE@E@CBC@CBCBEBCBEDCDEBCDEBEBEBCBCDGBABCBEBCBEBCDEDGBCBCFEBCDADEDCDCHEFCDAD@DAFAB@H@H@FBF@FBHDFBHBLDLDH@@@@@JBL@JAJAJAFANCNAL@PANCPCLAFCFAFAFAFAFCDADAFGDCBEDEBCDEBCDEBCBADEDCDCBCBCBCBEDCBEBGBCBCBCBEBEBKFOBOBK@IBKBCCGAMAI@IAAAKCKCKCGCCCGACAEAGCEACACAEACCECCCECECCACEEEEAACECEAECCAE@CCEAEECGEGEIEICECECEACAAAEAEAAAEAECCCECAACCCEACAEAE@E@EAEBG@E@C@EBGBIBMBKDK@KGME@KCI@I@IBIDKBKBGCCCCEAI@G@MCGCGCGGCKGIGEE@A@C@@@A@A@C@AAA@C@AAA@@@AAEACAA@AAA@@ACAA@A@AAC@AC@@@A@A@@@C@AAC@AAAAAAA@CACACCIE@@AAAAAA@@@A@@@ABABA@A@@@A@A@CAA@@CCAAC@C@ABA@CBC@A@CAA@ACCC@AAA@C@A@C@C@@@A@A@@@A@@@A@@GHCBABABAB@F@BABAB@@CD@BAL@FAJCFCFADABCDC@CDC@ABCB@@C@A@@AA@CC@@AACAAAGAAA@@C@EBABEBC@C@A@A@E@A@E@A@A@C@CA@@A@CB@@ADADABA@AAA@AA@AA@CA@@@@ABADAD@FCF@DABCBADCBGDCFA@ABADAB@BA@A@@ACA@A@AA@CA@@C@@AC@A@ABC@A@A@CAAAA@C@CBCB@@@BAB@DAD@BADADABAD@B@BBBBBB@B@@B@@BB@DAB@B@@ABBD@D@@BB@@B@@@BBD@BBBBDDBB@B@B@B@BAB@B@B@H@D@D@DBD@B@BBDBDBB@@@B@BABA@CBCBAB@@ADADADA@@B@B@BBD@D@BAB@DAD@B@B@BAB@AACAAAAC@AAAA@AA@AE@@AABA@A@@B@BCFCBABA@A@@BA@ABABA@@@A@@@@@AA@AA@@A@ABABABCD@@AB@@A@@@ABA@A@@@A@@@A@@BA@@B@@@@AB@BAD@BA@ADABCB@@C@CBC@C@ABE@CHCBABKFGDEDCDCB@@ABCACAEBABAB@BC@E@A@ABAB@@GRAFA@C@E@CAAAAC@@@@A@C@ABC@A@EBC@CBABEBAB@@A@CAAB@BBB@D@D@@AB@FADAD@@@DAB@B@DBD@@BBBBBDDDDDBBDDBBBBBB@B@DABABABA@C@A@E@G@A@CAA@EACAA@AACAC@A@A@ABEBEBCBAD@@@@ABABC@A@@BABAHCHABAB@B@@@@A@@@@@A@@@@@A@ABC@A@A@AB@@ABA@A@A@@@A@@@A@A@@@@@A@@BA@@@@@A@@@@@@@A@@@A@@@A@A@@BA@@@A@@@AB@@AA@@@@@@A@A@@@A@ABA@@@ABA@@@A@@DBD@DA@A@@@AC@C@CA@GAA@A@CAGAA@A@A@A@ED@B@@CFADCDAD@@CBABIHEB@@ABC@E@A@AAA@CCA@C@@D@DBBBB@D@F@HABA@C@@AA@@@A@@@A@A@ABCBCBCBA@C@CBAB@BBB@B@F@BB@@@B@B@@BBB@@@B@@BBBBB@B@@@B@B@@@@@BA@@B@@@JDH@JDD@NAJ@NAHAJADBTABBBBBBFJFFLFJHLHFF@B@DADCD@BADALAF@JAH@HAHAJAR@BAJ@D@D@DBD@DDBBBDDFJBFFLFHFFFJFHDHHLHJHDHB@D@FAJANALCRAJANCLCLEJGHKFIFDF@BDDBFDFDFHFHHFFDJBF@JBJDFHFDDD@DBDABBD@DBDDBDDFBHBF@BBBBBD@BBFAFBF@F@B@D@B@F@@EACAAHAJANDCEEMCEAGDEHELANCPDF@HDJBHFFFJFHDHDF@NDFHHHFFHFJ@@C@E@G@G@EFIFAD@NE@ICI@AAACCACAA@C@CBACGACCCGK@AB@BADBBBFBDBB@BB@DDBB@DAFGDABAF@@AB@BGFEHAF@BB@FAF@D@BDDJDN@JBDBDDDFDDHDTFD@DDDD@BADCDEFGDG@C@E@CAC@CBABAB@DDFBDDD@D@DAF@FBDDDFBDBBD@DADGBADADBFBDDBH@DBBDBBAD@DEDC@E@EAC@CBCBADAFBJHZ@FAHAFAF@F@NFTBLBJAJAHCDAF@FlN`LfJ^FN@`@FAF@HCHENILIRIPGLKNMLOJS@KBQ@ICGAK" ],
												"encodeOffsets" : [ [ 114982,
														30955 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));