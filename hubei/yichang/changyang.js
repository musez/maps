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
									'长阳土家族自治县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420528",
											"properties" : {
												"name" : "长阳土家族自治县",
												"cp" : [ 111.198475, 30.466534 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@@EAA@@CAG@AAA@C@@A@AEECCEAAA@ADCHEB@DKFCDCB@DBF@NIHEDAFERWBA@E@EBCB@B@F@BBBB@@BAA@@ACACA@@A@@AB@BCB@B@BBBA@@BAFADABEFEBCBAHEDEDADABADCB@DCDAB@D@B@FJFDHBFBF@D@HAF@B@F@T@H@D@D@DADBFBB@D@DAD@F@D@BABADAHGDAHCB@F@JBDAFCHEHGDAFADAF@D@DBDDBDAF@BFBB@B@@A@@@CB@D@FDBBD@DCNCFAHCFCBA@A@A@E@A@AB@BA@EBAB@BA@@B@@BAF@D@BBBJDB@D@@A@C@ADABABA@AEAAC@@@CBADEHCFC@C@CAECGAABCFCFAFBH@H@F@D@B@DB@BHDB@F@BABADABA@ABCBE@@B@FABABABAAGBCBAFG@A@AACAA@ABCDC@@@ABC@@JAJEDCDE@CAI@EBABAHCFCD@@@DAD@D@F@D@DABABABE@CAAAAC@G@CACA@ABMBA@@DABA@@ACA@A@GBC@K@EA@AAAB@@ABAL@DADAB@B@NFHBJFFDFJFDDJBAVCFAHCDCDGDCDOBE@KACKQGIGEGECCAAAAAA@A@I@GAABABE@C@C@EAC@AAAAACAA@C@A@IDCBC@C@A@A@AAAAAA@CAA@C@CBCBABABADABCDCFCFAB@@E@AAAAAA@ICC@FAHCHE@A@A@A@EAECC@AC@AAAAC@A@G@CAACCA@@CGEEEAG@G@GEAAAAA@EAA@A@AD@@A@@@A@@@EBABAA@@EAGCA@@A@KAA@@EAG@C@@ABI@@AA@@C@A@A@CDC@@BAD@B@@A@A@@@AAA@ABAB@@A@ABCAAA@A@G@G@A@C@@D@DBB@JEBA@AEG@ABABC@C@CAAEBGBAB@B@BC@GBC@C@OBGBUJIBIBA@CIGGCCAC@E@CAEACEECC@A@CAC@CAACCACAA@A@ADEBABAB@HAB@ACCGECKEAAAA@ABABEDABAD@DBBBB@DA@ABKAACA@@CBA@A@@AMUA@C@CA@CEAC@CBADC@AAAAAA@A@C@AAG@A@@@@CCAC@CACAE@C@C@GAA@@AAAAA@ECA@AAA@ACA@CAACA@C@A@@DBDABA@AB@B@B@B@D@@CBCAC@AD@@ADABCBED@BABGBEDCBC@C@CAEAA@AB@P@D@@K@CBBF@H@B@@CAC@ABBBFF@@ABABEF@F@BDB@@AB@@C@CDEDGFAJAJAHAFGDIDIDKFIDGFKFO@KAM@ICECGIMIECCBEBK@GBGEGCIEGCKEICGAEGEEEGCIEAIBEBKBKBI@IDGDKBICIAM@GDCFKLCHEFI@KEGCECEAQCIAOAK@I@KAICIAG@CB@@@@ABCHELCHCJGDKAKAOAOBQ@QDKHIDOJIHEJEHAJAJCLIFKDMBI@KBGDGHSPMJEFIFEBM@W@UCO@U@I@ADBDHHHHDDBL@JAJAFAHCLCHG@EDOBKBGBCDA@CBEBADCDK@C@K@EAE@@BADADCBKHCBA@CAA@ACAACAKCC@C@C@IAICGECGGEAIAM@GEEEE@CEGW]CEGAIEKCACGAGEKGKCKEMMMISKCFIHGFIJEJDDF@J@LFABEFGDKJ@P@JDNFHBDDFFLBDDBFFDBDBDDBBDF@D@H@@MDABABCB@DAFBLBDBBJFBB@F@FALAF@FBDFF@BADCFMZ@D@D@DDDFDB@HCJED@F@FDFDTHHBDBB@@BABABCBIH@B@DB@HCFC@ADADABBBBD@B@F@D@D@F@BBBBDBDBD@D@FBBB@B@BAB@BBBBBBDBLBD@D@D@BBBDDDBBBBB@D@DFBD@DAB@F@DBDBHTHR@F@BCBAD@DBBDBDBB@@BB@FBB@LABB@DENABA@CCEAI@MBA@@B@@@FBB@BB@DDB@@B@B@DBFABAB@B@HAB@DABAFAF@@IHEDIFGBA@EACBCDEHADCDCBAB@D@BBDTJDFBDBBAB@DBDBD@JBFAHF@F@F@D@FBB@FADAB@@FCFCHAFAH@BM@ABEDAHBD@DFD@F@D@HBH@H@JBDBBB@DBBFDDBHAFEDAF@FBNJDPBFDF@B@F@VAFBL@DBJCD@DBD@B@HBFBFFFFDHJJJFLFFFPHJDFDJDFBNBH@FAFC@MBI@GCECGCICEBCDCBEJIFGDGBG@IBGCK@M@IBILEnMRARGHAHCDGBGAGBGFGLCRCZE^CTATA\\AFBJFBFFLFL@B@@@@FFFBHBFBR@L@JAHAFDFDDFDJDLBHAJBJDHFHJFHDB@DBBDBDD@D@DAFEHCHGBEBEBA@AACDCD@D@DABABCBABABC@A@ABADAD@BAD@DDDH@DAD@D@F@B@BFHFDLDHDFDDJ@J@N@JBLDHDFFDJBJ@F@HEDIBGDM@ADABCDCDAAA@A@@@A@CBC@AD@BBBDBDDFDHLJHDB@DA@@EK@CDCFBFCDAB@B@D@D@B@BAB@B@BAH@B@B@B@F@B@BBB@B@B@D@B@BABAB@BAB@@@" ],
												"encodeOffsets" : [ [ 113639,
														31446 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));