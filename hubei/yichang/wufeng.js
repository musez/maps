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
									'五峰土家族自治县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420529",
											"properties" : {
												"name" : "五峰土家族自治县",
												"cp" : [ 110.674938, 30.199252 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@TLNJNNLFLDLHHFHBBDLDJFHBDFX^FH@DFFFF@HBNBJHFDHHFJDJBD@D@D@LDDBBBBDB@DBB@DALGDABCBC@AF@FBL@D@L@DCBCFADAB@DCHALAPAFCH@DGDKBGBEBI@IAKCCGGGGACBCJ@V@P@VDX@N@FAJEFENITOHGHCLAJ@NALCJEDKBIBIFGFIJGPIJCLGRCR@PAPBLBLBHCDIDGFKDGBA@@@@DAH@JBJDLBJ@L@PBJBRDFBFDHDLFJ@FEDGLKDEHCN@JBJDLAHCJCJ@LALAFAJAFBDJFHFFFHHBJDLFHDJFHDHFHAL@FADAFDNJHJFDJDN@LBP@LEHEJCLEJCJCHCBEBGBIBIHEFCDCD@@@BA@@CA@A@EFEBABA@@EEAABAD@DB@@@A@GAEDAL@@@@C@OBAB@FBDBD@D@DAFCHABA@AFCDABABC@@BCD@DBDA@@@C@A@A@ABAB@BAAC@CA@@@AA@AA@@C@ABEDEBABA@ABA@C@A@@@A@ABAD@D@@BD@BAB@BA@ABEA@AA@AAA@@Y]EGEGDKFCNCXBJ@JBJ@FFRFPJLHLDLCF@TCZCT@R@NBPCT@PBH@NCNEFIFGACF@H@HBFFNLHDPDJ@LAHEDCNGHK@@@@FGBCFE@AB@@@FIDCJKLSECGEEEMCMCMCGECECGAGAKAKCICGGCMCK@G@I@M@K@SAGAG@GAA@ABCAC@C@A@CAEEAB@@E@E@IAI@E@GBGBE@C@C@CAC@G@C@GBC@EBE@CBEBC@A@AC@A@AA@E@CBEBC@EBC@C@E@CAC@CBC@A@EBE@E@G@GBG@G@CAC@EBGBG@EBA@GBE@C@C@E@EBC@C@E@C@E@CAAAC@C@C@CBC@C@E@C@G@G@E@G@C@EBI@C@A@C@EBGBGBEBE@I@ABC@ADADCBE@C@GAG@G@C@EBC@G@E@EBABGBG@GAGAE@GBG@EDCBE@E@@AABCBABAD@B@B@B@DABADADB@@HBJBJ@F@FADADBFAHBD@BADC@E@I@E@GAE@EAEAG@ABEBCBGBK@I@E@EBCBEDG@ABABAFCDABCBE@ECEACAE@A@IDCBE@GBE@E@E@AA@CACCCECCAAAAAC@EBEDGBEBGBG@GAG@EBGAEAGAEAGCEAEA@@AEDCJEBGEICG@GFEFCDA@@@AAC@GAO@GBE@CBC@A@CAAEGGGGCECEAEAEBCBE@EAEAECECGEE@CBCBGDEDEDCB@@EH@@A@AB@@AB@BAB@@ABAB@@A@AB@@@@@@@@AB@@@B@@@@BBBBB@BB@D@@ABCDABE@EBC@GDKFGDA@ADAFCBEBC@CAEAGCEAECCCEACCECCAG@CAECCAIACAECEAG@EBCBC@EBC@C@EBA@A@CBE@C@AAAAACAAE@ABABABCBAAE@CACAA@EBEBCBEBEBG@CBC@@@EACAC@C@AGECEAKCC@ABABCDABG@AA@@@AFE@CGOBGDEBCBA@@@CACCCEAACCCGEA@EAEAACAAAACAAAMCA@AAOKKIIIKMGKEMEGAE@@@@ACEEGCKAUBQCM@Q@KDKDSCKCMMEEIESD_LOHGHAHFHFHFHDH@HENGLAH@FDJDFHFHJ@P@H@JBHFFFHBFCHALALHLJFVNFFBHAHCHKBUJKDBDFFLJNJNHFHFHAFEFCDKFQFIFKBOFCBCFAD@H@JANWJMDIDCDCDAFBJBDBBFD@@JDNBD@FBFBBBBDADCHCHCBA@@@GB@BKHABG@AB@@IAEBE@CBC@EDADCHCFADBBFBDD@@FBNFJBR@J@R@JBPFHBRDFATEPCLABDBN@LDJDJDLHNDJLRFPBDAHCFAB" ],
												"encodeOffsets" : [ [ 113019,
														31040 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));