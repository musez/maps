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
									'房县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420325",
											"properties" : {
												"name" : "房县",
												"cp" : [ 110.741966, 32.055002 ],
												"childNum" : 4
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@AAA@ACAACAC@A@A@K@E@CAC@@@E@EAC@@ACA@AHI@AUOEAE@EBA@AABEACCGEAEBCA@@CAE@A@ABAD@BHBBBALBFBDBDDBNFDH@@@B@D@@@F@B@BBBBB@BBDDBDFBFDD@@BBB@B@FGDCBADEBABAB@B@B@D@@@FBBBBB@@@BBDBBBDBBB@D@D@DA@@BEFGFG" ],
														[ "@@BAD@@@BABABADAFEB@@A@GBCB@FCB@@A@AAAAAA@C@CBC@A@@@@ABABIBAACBA@CBCBADCBEBC@ACCAAC@A@AA@ECK@C@CAG[J@D@D@D@BBBB@B@@BBB@B@B@B@BABAB@@A@AA@@AAA@E@@@X" ],
														[ "@@HEFDDHBLBHHHHBLDTAJBB@FFBDCFIFKAcâXbCHKJQPENANCRMREFIFKFMFKDMFOHGHKXCRBRHNROFQBKFINEPCV@V@Z@ZBP@RF\\JHJNBNFNLTRLNHD@H@HBPFFFF@NBH@J@FBFDDBJHDADAHCD@BAB@BABABAAC@@AA@AACCC@A@ADABAB@BABAB@@A@@BCDAB@@AB@DBBBB@B@@CB@H@BABAB@B@B@@@@AACCACCACAEBCBCFAHCDCDEBEBEDCHBB@F@BABC@EACCCCE@ABAFAFAF@HAH@BBFBDFFBDDFDD@DCFCFBF@B@FB@B@DFDJLDFDANCNIFCBA@ABCBAB@B@F@D@BAJODEFEBGDKBGDIBGBGBEDCBAD@D@JBFBJFDDFDBHDDDFDDBBF@DBDBBDDBBDDBDBBL@DBBB@BCD@H@D@DAD@D@F@HAFADAFKD@H@D@F@D@FCBEDCFADGC@GBCACAAEDOD[H_F[DcDgDOHMLMPELAJ@NFLJNFJ@DIOUAIFCDBfJTEFGJGRCPFLLVFTJVDRCRGVGBEHQBMJUHGLETERBZBVJLLFHTdJLPFND\\RLPHFPJLBLBN@RGPIJG@@BABCBA@C@A@A@A@A@ADEFABAB@D@BBBBF@B@BBDD@FB@BA@CBADC@@D@B@JFB@BDB@B@B@BCBAD@B@FBBABB@A@@@AA@@@@AB@D@@@B@JECEKG@AAABABABAD@B@DAFCBABCD@@@B@B@B@BBBBDBBBD@DAB@F@@ABAAA@AEE@CAE@E@C@C@E@E@CBC@ABABAJADADABABCBC@ABADEBABGBAE]KWMUGMKWOMIOSOSKSKKE[MWEABGFEBA@C@A@C@AAEACACA@AA@@CEECCCCAA@AABC@CBC@AACICCCAIACAC@CCGECCAACCAAEA@@CFEBGDAHADA@CAEICCIAGGEMEKCM@E@@D@FDLFLBL@FABCBA@EAAAGAGEKGACAAE@QAC@CLGJBBAACAG@CAAE@C@AE@EACAAA@EDC@CAEECC@CAE@ABE@A@@@A@@CCA@@@BAFBBA@AAAAA@@@A@AD@BADABA@AB@@@B@@B@B@B@BBBD@BB@B@DBDBBFFB@B@BADAD@D@DEBABGBCB@@A@A@AC@AAA@AI@A@CBABC@@LEF@BABADAFQDCBA@C@AA@CCECEAA@A@A@ADGFABELGH@BCBCDCDABA@C@CAAACGAA@B@BCT@BCHMNADCJ@PAF@@AHCD@BADIHIBCAG@IBM@GAGCCAC@AAA@@I@ABCBA@A@@AA@@C@C@A@@@AAAAA@EIAC@ADAFCWC@G@C@A@A@A@AB@@ABAA@@@@@@@ABA@AFAFCBAD@@ABCBA@C@@BABA@@AC@ABA@CBA@@B@B@B@B@@B@@@B@F@B@B\\I@AACAA@@@@BAB@BADAF@@ADGDCCCKGCCEGA@A@@@A@@A@@@AB@BA@C@EDEB@@@B@@DB@@@BAFAB@B@@ABC@ABADC@A@YAG@EDCBCDCBADABCBC@C@C@CACAAA@C@C@EC@@@ABAD@BA@A@AAAA@AAEC@@EAIAAAAACAA@A@CFEFAH@DDJ@BAB@@CD@@@B@@@BD@HDB@BBBD@D@F@B@B@B@BABCFABABA@CAA@ACAACCECGCGGCCACCAE@AD@DCBADCBEBCBCDABADAD@J@DABA@KBABGHABA@A@A@GCECEAOEG@CA@C@ADC@A@C@CCBEBIBEBEDEDABCDADADABABC@E@G@IAECAAAA@@BABCHCBABA@A@AAAC@C@@@CFCBABABA@AAAC@CDEHG@A@A@@AAA@CAK@MCE@I@A@A@ABCDA@@BA@KAA@A@ABCDA@A@C@AAC@A@GDC@CBAAC@CACAAAA@ABADCDEH@BC@EDE@G@G@EA@A@EDEDO@ACCACCAC@K@C@EAECAC@A@EFCCCAA@AAAA@CBA@ABADAFCFABABABA@SDI@Y@CBEB@@A@KBEBIDEHO@ODMFOH@@EAECAA@CAIAE@AAAAAAAC@C@C@E@CBMHCBA@CAA@ICAAA@ABC@@BEDA@E@CAKGA@AAA@C@A@ABIF@BA@C@C@EAIEC@C@ABEDA@A@GAC@C@G@GBEBEBG@O@@@E@GBA@@AA@AIAA@AAA@@AAC@GAE@CAA@A@CDAB@@DFDF@BBB@BAD@DA@@BA@A@E@CBCBGAWEICKGACBCBAJEBA@A@AA@AAOEKECA@A@@@EBG@CAG@AA@AAA@GBA@AAGAGEGEA@A@A@ABABEDGBOB@B@@@B@BBBABADABA@ABOBCAA@A@CAE@E@EAAAAA@CCEAECCAACAEAEAAAC@GBIBC@C@CAEA@AA@@C@GAMBM@C@ABABE@C@@@AECECEAKCKCCAA@A@G@IBE@G@KAMAG@A@C@KDC@G@M@IAGBIEEEGGIEKCKAKCICGEGGEG@KBGAMCIEMEQAA@EAEAEEGEK@AD@D@DAB@DCJEDCFEBCBE@IAMACCCCCICICEACAEACEEEEIAGBA@AF@DAB@DEB@B@D@B@HC@@BAB@BCB@@A@A@@@ADAB@BA@@@A@AB@@@@AB@@A@@BA@A@A@@@@AC@@BA@AAABA@A@AC@KCCAAAAAAA@E@I@ECEAAAAC@ABABIHKHCBC@IBC@@BEHEFCDABABCL@BEDCBCBCBE@E@C@EAM@YBS@C@CACAEC@ACAGCSIMGCAAAGMGEKGOGIAKEEAKBI@GD@HHPFN@JHNFDDJFNDN@JBJBJFFDHFN@LAJ@JBFDJBNDNBJBLAVCLGPGJCJDBBBDD@@@B@B@B@B@B@B@BBB@@BDDD@@CBKDEBGBG@Q@CBA@AB@DBHBJBBBBHFFF@B@L@PBB@BBBLJBBFF@BBD@FBF@BBBB@@@HAFAFCF@NBFDDBAF@@D@FLBJDLHHDBFBHBNBDDNFJJJBJ@JAH@NDLFJHHLBN@JELALCNCRERDHHNBJBLCFEBKBIDCLCJEJIJKDGFAH@LFPLLJPHLRDVLLJFLBJBL@D@DCJDLJPJRPVPBlOnMPGX_NCNFNJ`B\\NRRHPFL@@@@DHJXNdDZ@N@JGFEFDTJF^AHBDHAL@PLP\\HL@HF@FCJIHDNJHZRDHCBQAUAKFCHIHNN" ],
														[ "@@WCEAKCKGAAEKEG@IDIMMKPALJH@LGRAHMDMBKIOQMGEFEXDXHFD@dpSbd@XTNL`Rdá" ] ],
												"encodeOffsets" : [
														[ [ 113819, 32805 ] ],
														[ [ 113664, 32754 ] ],
														[ [ 113044, 33004 ] ],
														[ [ 113076, 33034 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));