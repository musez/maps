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
									'郧西县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420322",
											"properties" : {
												"name" : "郧西县",
												"cp" : [ 110.426472, 32.991457 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@CEEIKMGMOOIMOQMGSEGEIKECIEEK@QAE@A@A@E@A@A@C@A@A@CAA@AA@C@ABABABC@A@@AA@@ABCBCBCBA@@BAD@BABC@ABAB@BAB@FAB@FAD@DADCBABADAB@BADCBAFECAC@EAAE@C@CC@E@EA@EBAHABBF@@EFABBF@FCFCDAHEJE@CCCMAGAECCEAG@GBGDCFCDC@C@GAECCEBEBEADEDE@CACAC@CBCDCBEAEACACDADGDGCACCGCAB@HBBEBE@ICA@GBI@C@EDCDCDEBCAAC@ECAACHGBEFCDCDC@CEIAC@CBAFCDCBGAAEACBE@@ECCCAE@CB@FBFDFBDCDC@CBCAMKGCE@@D@FBD@LC@AGAECAKAGA@CBCBG@CBG@E@CAECI@CBCDAFCBC@ECCAAICGAWIKGIGKCIAK@QDGDCFGHCDCHBDDD@DABAHBFBJCNE@CAEAC@CDADAFIHAFCFADG@CAAEAKAECE@EAAAAA@CCA@A@CD@@AB@BEFA@@@@B@@BBB@@@DADAB@B@BD@@ABABADCDCBIHGFCAAEAE@ECE@C@CBA@ABA@A@C@E@E@CACACCCA@A@A@A@C@A@C@@AAA@@BABA@A@AA@KCG@IAGBCB@FFDDDBHBFHJDFBN@FCHE@C@A@A@M@A@AAYIAAmiAASIAAG@CAE@CA]MKcQECAE@MAcMG@AB]Z@@@@IH]FCBK@C@E@YBE@KBG@G@C@IBC@IBE@KBA@[AC@I@G@GAC@A@GAIAEBEBEDADCNCFCFGHIFGDIDGDOJOFODQDG@IDKFGFCBEDCHCHADADG@E@GCI@IBKDGDEDEJCDCDC@G@GAIAE@G@QDIBIAC@GAG@GBC@CAC@CBCBEHEJEFEDCBGBCBO@I@EAGAC@E@EDKJEDCDE@EBEAC@CCAEISAECC@@E@G@G@EAEAG@ICEAECECGGCAECG@C@GBKHGJABADABCDCFCFCDCFGFGDABF^LX@bDPJXJ\\F^BP@ZDdHXBP@LAFEFI@eJMJSHI@KFIFSHIFKFMDGBEHGHEHMFMA]ASFU@O@I@MCMGKEQAE@IFCNEDKCIECGEAKHKRIFMBODSHKFOFODM@I@KBKA]@O@SFOFGFIBEDLLRPVPPPJTJTLHVFNTDZNPXHXDXAPCVGXIPC\\FLFAZ@RBNDFJFFHFBbBNIJEDM@SFEN@RJPFVALALQFGFC\\K^EdFZDTA\\AXB^D^JZHJBNBPCHAVKXEVC\\ELANELCJI`MTIRGLARDVJLDNALEHGDIZOTAXFXJ\\FLBRBVBXANARAZJ\\DPBTMJI@CLK@@@AA@@@@@A@@@@@AA@@B@@@@@@@@@@@@@@A@@@A@@@@@A@@@@@@@@BA@@B@@@@A@@B@@@@@@@@@@B@@B@@B@@B@@B@@@@B@@@@@@@@@@@B@@@@A@@@@BA@@@@@@@@B@@@@BB@@@LELEJMRQJERCPBVBJDRHPDLBPDN@B@BAD@B@B@B@BAB@D@D@DA@@B@BABAF@BA\\ELEHBBB@@@@AB@@@@@B@@@@A@@@@@A@@@@@A@@@@@@@@@@@@@BBB@@BB@@@BB@@@@B@@@B@@@@@@@B@@B@@@@@@A@@@@@@@@B@@A@A@@@A@@@@@@@@@@@@@A@@@@B@@@@@@@@@@@@@BB@@@@@@@@@@@B@@A@@@@@@@@@@@@B@@@@@@@@@@@@B@@@@A@@@@@@@@@@BB@@@@A@@B@@@@@@@@@B@@@@@@B@@@@A@@@@@@@@@B@@B@@@@@@D@D@B@D@BABBB@@@D@BBB@BBBBBB@BBB@BBBBB@@BBB@D@B@BBB@B@BA@@BD@@@B@@@@@B@@@@@@@@@@B@@B@@@@@@@@@@BA@@@@@@BA@A@@@@@@@@@@@A@@@@@@@@@@@@@A@@BB@@@@BB@@BB@@@@@@@@B@@A@@@@@@@@@A@@@@@@@@@@@AA@@@@@A@@@@@A@@A@@@@@@@@@@B@@A@@@@@@@@@A@@@@@@@@A@@@AB@@A@@@A@@@@@@@@A@@@@@AB@@@BA@@@@@@@@@@@@BA@@@@@@@@A@@@@@@@@@D@B@B@BBBBB@RA@@B@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@A@@@@A@@A@@@@@@@@B@@@@@@@@@@@@@@@@BB@@@@A@@@@@@@@@@@@@@@@BA@@@B@@@@@@@@@@@@B@@B@@@A@@@@B@@@@@@@@A@@@@@@@B@@B@BB@@@@@@@B@@@@@@@@@@@@@A@@B@@@@@@A@@@@@A@@@@@@B@@@@@@@@B@@@@@@@@@@@@@@@@@B@@@@@@@B@@@@@@@@@@@@B@@@@A@@@@@@B@@@@@@@@@H@TGRCJ@HF@@D@BBBBB@FBFBRDB@NEDCF@DAB@@AB@B@B@@AB@B@BB@@@B@@@@@@@@@@@@A@@@@@AB@@@@@@@@@@@@@@@@@@@@@@@@B@@@@@B@@@@@@@@B@@@@@@@@AB@B@@@@BB@@@B@@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@C@@@@@A@@@@@@B@@@@@@@@B@@@B@@B@@@@B@@@@@@B@@@@@B@@@@@@@BA@@@@@B@@@@@@@B@@B@@@@@@@@@@@@@@B@@@@@@BB@@@@@@@BB@@@@@@B@@A@@B@@@@@@@@@@B@@@@@@@B@B@@BB@@@@@@@@@@B@@@B@@@BB@@@@@A@@@@@@@@@@@A@@B@@B@@@@@@@@@@@B@@@@@@@BB@@@@@@@@@@B@@@B@@@@@B@@@@@B@@AB@@@@@@@B@@@@@@@@@@@@@@B@B@BA@@@@@@@@@@@@@A@@@@@@@@@@B@@@B@@@@B@@@@@@@@@@@@A@@@@B@@@@@@@@@B@@@@@@@@@@@@B@@A@@B@@@@@@@B@@@@@@@@@@@@BA@@B@@@@B@@@@@@@@@@@@@@@@A@@@@@@B@@@@@@@@@@@@@@@@BB@@B@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@@B@@@@@@@@@@BB@BBBBBBBBBBDB@@DDB@BDBBBDDBBBBBBNDNHJFDVALJLNFL@dAPALEHMFW@MLUHM@MBOBS@OCMBKLONIRGNCRDJHPJLFNGJQFOHMDEHG" ],
												"encodeOffsets" : [ [ 113332,
														33919 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));