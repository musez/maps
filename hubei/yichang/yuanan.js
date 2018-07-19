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
									'远安县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420525",
											"properties" : {
												"name" : "远安县",
												"cp" : [ 111.64331, 31.059626 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@D@@@DABABAFAD@FBFA@@D@HADEAEAG@IBIDMBE@@AMAODEFIPENAPCN@ZAXATCLA@@@@J@N@THPHJFPFLHRDLFHHPHJFJDLFHHJLLLLJDJFHDFH@VKRIJCHEJCJ@LANBJBNDLDLBJ@HBR@PFNFLFNC@CEKAGBCBEDAFCDICEEGECCE@ADEB@H@JAFA@EGAAAACAECEGCGEAC@C@EFEFEDEFGDGFCFAH@HDDADEDMFGDADBFFDHF@DEFCDGBEBADCBC@A@AHADCLCL@LGJGHIHIFAHCH@D@@@B@B@BAFEB@BBBBAD@FB@B@D@B@BABA@C@EAA@CBABABAJ@D@BABA@C@AAAAAAA@C@ABAD@HBB@F@DABA@ABA@AAAEGCIAA@A@A@A@@BAFCDCBABC@CACACBE@CBAA@ACA@AAE@GBG@AAAAAG@C@ABC@AAA@IEEGCGCEBC@A@AACEAAACACCGM@CAAAAA@C@CBCBAB@BABABCACCAE@EAEAACCIAGEMAGAECECCKCECIGACCACAA@CBEFCFC@A@CAGGKMEG@EAIAECAACBCHGBABEBC@EACICCACABEBIBGDEFE@CECGCGACBC@@@@BBBDB@B@@@@@@A@E@A@A@ABCHABCFCBABIFE@C@A@@@@CBK@CAC@ACAAAABMHCDC@C@E@CCACCCBCAECCEAC@CAAEAEBCB@DABAB@BA@CAA@AAACCA@@BA@A@A@@A@A@ABA@@AC@A@CBCBI@@@AFC@AEE@@@C@AAAAAE@G@G@C@AAECAAC@C@IBAB@@A@CD@@@BADABEBA@@@AAA@AAA@AAA@@BA@A@AAA@ABAB@@AAACAC@@@A@A@@BC@@BABAHABAB@D@@@@B@@BBBADA@BD@B@FADAFGBAFA@ABAACEEAI@A@@@EA@AAA@AA@@BA@@@AEA@@AABA@A@@@AI@EBCAEI@A@A@@DBBA@@BA@C@AAAAAGFABCB@BAAA@@@A@CB@BA@A@A@EECECAA@EFKFCBOBCBAACAAAAAEE@A@ABA@ACE@A@AB@FAB@@A@@ACA@ABA@A@CAACCACAC@CAAAACCAACCEECE@EBCFCD@BDF@F@DCDCDEBOHKB@BABABABIBKDABABABC@ABCDABABCHABABEDC@CBABAD@D@BBDBDBBFFDBBBBB@B@DAHER@@@B@@@BAB@B@B@B@BBDBB@@@@BBDBDDDB@BBBABA@C@A@ABBHBB@D@DAF@F@DA@CBBBADCFAB@D@DBDHHFBJFBDBBAFCBCBAD@BCDEBCDCBCBEBI@ECEAC@IGCAA@ABA@ADABC@E@ABABALDHBDDF@F@DDBF@DBDFBNAF@@C@CAA@CAC@A@@BABAB@BA@@BABEBA@IFEBIBG@AACAGCA@A@CBEFCFAFCHCDAH@BABCBCDGB@@@@ADED@@ABCDCBCBCBEBEBCDEBCDCBGDIDGBCBEBKDE@CBOFABQAEBAB@@@BB@@AB@@BB@@@@BCB@@@B@BDDBB@B@FBB@BBBB@DBD@B@@B@@@BABA@CBABABC@A@ICGEC@KDEFIFCDCFCDEDC@A@M@A@ADADADE@C@IEGAE@CBEDORCBCBG@G@KFIFCFIBC@EDABAF@F@P@DDBD@L@D@DDDDDF@H@P@LBFJ\\FFHBL@NEJEFAFAHDTN@D@DCDGB_AEBGDADGJGJKDIBCBEH@HJLJDHFDDBD@DABIDCBABCHABBDBDBD@@^TPNJDNBL@HCFEHGPMB@B@B@FBLHBD@DCFCDEFAFCDAB@BJDBBDAJADADAFAD@JBH@D@DDLJJHHBLBB@DAD@DBJDD@B@DBFDBDDD" ],
												"encodeOffsets" : [ [ 114083,
														32123 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));