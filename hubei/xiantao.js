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
									'仙桃市',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "429004",
											"properties" : {
												"name" : "仙桃市",
												"cp" : [ 113.453974, 30.364953 ],
												"childNum" : 5
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@@A@CACACBABAD@H@@AD@FADADAFDD@D@BCDC@E@ACAA@CEA@J@DEN@DADBFBJBHBD@D@H@D@FBHDBF@BD@DAHCDCFAH@FBDBFBDBFCFADADAD@BGDCDGDG@IDGDCFCFCLAHAJBJDHHFDD@DEFEFKHEHGHGLCFAHCJBFHHDFDFFHDHDHBFDBHDBBBB@@DFDBBB@D@D@@CD@B@BD@F@FB@D@D@BADADEDGFCBCD@BBDBDFBDDBBBB@H@DB@BBLBB@B@BB@F@B@DAFEHA@@BA@@ACAAAC@A@@B@@@BA@A@CAC@A@@@ACA@@@A@@@@@A@CHCDCBABA@A@CCAAACAAC@A@CBCBC@GDCD@BDDD@BF@BABCDEDAFCJAH@F@NDFDHHHFDDCJCJBXH^H\\BVALATITONGTETBFBFADCBE@CCGCGCKEI@KBGFEHAN@LDPHJHRHP@LCDCBEAGCGAGBEBEJIFIDIHCNEHIHKHAB@FBJJ@@HNHHFDHAPEJGDGBIDKHEJARDZD¢DbA\\ETGRAJDJDTDXCREPKNIPAL@HCJIPKPCNFPAJCRWFCFADAH@FBDBBH@NBBBBDBJ@LEHGJILCJBFF@HAJBJFNLLJHNFVBHDHFDJB`DLJJJJHPHPJFFDD@RBFBRPDBDCBCBIBCDAF@DABABCD@FFDDBBFHDBFADCBCBCBC@CBC@EFCFGBAAECICAACAEAA@GAGAGAE@GAEEECEHCXAR@N@LCJCHIFIJKFEFEB@BADAFAJ@F@H@F@F@F@FAAC@@ECAC@C@ABAFCH@JCHADBD@FAD@DAHADBBB@BJBNADA@CCGEEEGAC@EBA@A@@@AEEAAAADGDG@A@@BC@ADCBAFADADCBADADADCBA@CCACC@C@CBC@CBEBCBABC@@@A@@@AA@AA@@@A@C@@A@@@@@A@@@@A@@@A@A@@B@@@@B@@B@@CBEBEDABCDAH@DAD@DBD@BBD@DBDBD@DABE@EACCCAAACACACACAGAE@C@E@EACAAAAC@GACAMCAC@@@@AAACCAAAAAACAC@C@ABCDADABABABCBC@ABC@@@AHCDAHADAFADAFADAPEJEH@HBFBFABCDGDEBK@IAEBC@@DCBEBE@A@@BQ@AAAAAQOc]KICAC@EA@@ABA@@BA@AAAA@@C@A@@@AABA@A@A@AA@@AGBAA@@A@@C@A@AA@CAA@EBCBC@ABCBABCH@BA@C@A@ABABABA@CBIDA@A@A@A@CEAA@A@AB@@AAA@@BABABC@A@CA@@AA@EAA@@BA@E@GAC@AACAAAAA@CAC@C@C@CCI@ACCCCAAC@KAC@EAA@ABABA@A@A@C@AAAAACEG@AA@IEC@AACAC@EBEBGDCBEDABABCBA@C@MESAGAKCC@A@CBA@GCC@Q@A@CAC@EAECCACAE@CAE@G@AAIAIEC@AAABA@A@CA@BC@GDCBC@AAC@AAAAAAA@@AC@C@EBC@CBCBABC@EFCDAD@B@D@DBF@@BBB@@BABAFABABABCBEBA@ABABABABCBABABEB@@ABEFCBABMFAB@BA@@B@F@B@B@BADABABA@@BADABCD@BABABAD@@@DB@@BB@ABCDKJEDIBGDKDADCDGHCDEBQ@K@GDOLGDKFEDGFCDEFSJC@E@EAE@G@KBIBE@EACCCC@C@CACCGCECECCCEIGGCGEICEAKAQCOAOAQ@O@WBE@IEE@G@CBIDEDE@E@CBCBC@C@GAICIAGAEACAEAE@G@QEKAKAGACAGAOBE@C@C@CB@BA@EFCDEBGBGBEAGAKCCAEAE@C@EBEBONGFEDIFCFO^CFEDEDA@GFEBG@GAEAAB@B@BADABABA@" ],
														[ "@@@@B@@@A@@A@@AB@@@@@@B@@@@@" ],
														[ "@@EECCAAA@A@@B@B@@@B@@F@BBBDBD@@D@@@@A@A" ],
														[ "@@@@@@@A@@A@@@@@@DB@@A" ],
														[ "@@@CA@@B@BB@" ] ],
												"encodeOffsets" : [
														[ [ 115742, 30921 ] ],
														[ [ 115691, 31203 ] ],
														[ [ 115882, 31168 ] ],
														[ [ 115693, 31148 ] ],
														[ [ 116493, 31026 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));