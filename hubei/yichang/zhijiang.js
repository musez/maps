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
									'枝江市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420583",
											"properties" : {
												"name" : "枝江市",
												"cp" : [ 111.751799, 30.425364 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@BF@DBHBD@@BDBB@BD@BBB@DBBB@DBBBBB@B@D@B@BA@@DADBB@BABA@C@@@C@@B@@@@@@D@B@B@BBB@@B@BC@AAICE@ABADCHCDCFEBADA@@BABAB@B@BBBB@BABA@@BBBBBDBBBFDDDBBDLDFBDBBH@FAB@AC@E@C@EACAGCI@CAAAAA@C@E@AA@CACAE@C@EDECC@ADCDADC@ACI@CCGGM@ABC@ACCBEDCJGB@B@B@BDDDJJFFB@F@BBB@@B@BCD@H@@D@DADCDADAF@D@DBB@@@BABCBA@@D@@B@BA@AB@DBFBDB@@@B@@A@C@A@AB@@@B@BBBDB@BBH@B@DBBDDBDBBBDF@FB@B@J@B@@AAA@A@@BA@@BA@AAC@@@CB@@CB@BA@@@A@C@AB@D@B@DFB@B@B@F@@@BB@B@DB@@@@@BAD@B@@@BABCFCHG@CAA@A@C@ADABAB@DBB@B@L@B@HFBBBBD@B@DCDABABCDAHCD@D@FBDD@@BBB@D@D@BBB@DBD@BABC@@BAB@F@FDBBFDDD@D@@DBH@F@@@@C@@@A@@BABABAD@DABC@C@A@I@A@@CAK@CAA@CAA@AAAA@AAABC@C@CBABAB@DAB@B@DAF@BAB@B@D@HBDAB@BADC@A@AAA@A@A@CBABCBEPMBA@ADCBAJGHIBABA@ABA@ACAA@A@AAAA@ABABA@@@AB@@@@A@@@A@@G@C@CAAA@CAC@C@AAE@CAAAC@CAE@ACACA@A@AB@HCDAHAFAB@BA@@@AAAC@ACCCCC@A@ABCDEBAAAA@A@C@CBAB@BABABABAACAAAAA@CBA@ADADCBADADEDCDABAD@D@DBB@B@DAJEDAFAH@F@D@BB@@@B@@EBCBCB@BAB@@BBB@B@DADCFAB@B@BB@@ABABABA@@BB@D@F@DADCBAHEHIHOFODYAMCO@K@SBKAGAE@CDEHGJQRWNMVU\\SJCJEPAFEB@@ABAAC@C@CAEAAAAA@EAAA@A@A@ABA@A@CBAUCU@O@KBODCBMHOPCBMNORQTIPCJGPGLGJEBIHCBIBCEGE@CCACGAIAE@E@A@C@AEKEIAGAI@GAG@GAGAICKGCIAGBKDMBIBMFKBI@OCOAKAC@CFAD@HBHAFCDE@C@EEEAEHADADCFABCFCDEHEFGHCFCFAFAFAFADAHAH@FAFAFCHCFEFEFCBEDGBIBG@E@G@E@EAGAGAICGCIEGCEEIGCCGECAKKKEGEGCGCGCGCIEMEICGAKEGCGCGGGGCGACCGEICEEECGECAGEKAAA@AE]UECKAI@OJKFMJGHA@CFYTSRONGNM`@HBJ@@BDFLFHBDDFDDDDDFFDDHBHBDDHBDBJBNBLALCHAHEHEDEFGDEBEBMDKAIAKCIAGCKAMCI@IBE@EFEHEHAJDdDRBD@D@JD@HAHDBBBD@HBFFFDDBD@FBBBBBF@LAFAF@FBBBBHAJENMBAB@@B@@EDAB@B@BB@B@B@DAFAB@B@@BCD@@@B@BB@BH@F@FCDBD@@BBB@@@DCFI@ABA@@@C@G@A@CBAB@HHHJBBBDFFFDB@BB@D@@C@E@CBABEDCBCBG@CDAR@H@@BF@FDHHEFAD@D@DBDBFDFBDDDB@B@DHABBBB@FAB@D@DDBNBBDDJ@F@DBH@DBDD@F@F@D@HDDBD@D@F@HAFAD@BBDBBBDAF@D@DBBDD@D@D@JBHBHBF@B@FBB@D@B@B@@B@B@@@@B@B@@@@BA@@B@@B@@@B@@ADDB@@BBB@B@@@BD@BB@B@@@BB@B@D@@@BB@@BB@@B@@@@@B@D@BB@@B@@B@@@@@@B@@@@@@@B@B@@@@@@BB@@@B@@@@@@@B@@@BBB@@B@@B@@@B@@@@AB@@@B@@B@@@@@@BB@@@B@@B@BB@@B@B@BB@@A@@BB@@B@B@BCFABBBBD@BCDABCFABAD@B@DAD" ],
												"encodeOffsets" : [ [ 114331,
														31375 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));