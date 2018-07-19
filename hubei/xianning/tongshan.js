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
									'通山县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421224",
											"properties" : {
												"name" : "通山县",
												"cp" : [ 114.493163, 29.604455 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@BADAHAJ@P@D@BABWAMAKACBEDGBE@EEIEG@IAKAIIKAE@EBCBCFEHGRKFEDA@BHBDBBBH@DAF@DADA@CB@B@B@D@B@B@D@BAF@B@D@BCBA@@B@B@B@F@B@@@@@@FB@B@B@@@B@BAL@F@FBD@J@B@DAFABAH@H@D@DADAB@BAFGFI@G@A@C@A@ADEDG@CAI@ABCD@PAXCFA@@BEBCV_BC@W@CDIFGDCHGBABCCSCI@G@EBIBCFCHILKBECG@GBEFAL@L@RCNAAQCSDCFADAFGHAJ@HCEMGECAAG@O@CBCBCD@HAXCDABCAEEGCAAKCEECC@ECGACAEAA@@@CAAAABABC@A@AB@B@@@BAB@@A@C@C@A@AA@@@@A@ADAB@@@B@B@DBFBDBF@DBD@BAD@BAB@@A@C@@AA@@ACE@CAABC@AAAAAA@EACAC@C@C@@@A@@BCAAAA@A@@@@@@@BB@BBBBB@B@@AB@BBBBB@@@B@BB@@BBB@@D@@BB@AB@BABABAFAD@@EBEAAC@CAEAEAECCAGAKISOECAEKACGEECEAAAAABADABC@AB@DBDBF@DAFENwBEBCF@DBPNLHJ@LFDDDDAHEDIBEBCFAFADDFNHDDJHJDJBHBH@DEBA@@@A@ACE@@@@CE@@@A@@@A@AB@@@@AB@@@@@BAB@@@@A@@A@@A@AA@@@@@@@A@@@@@@@A@@A@@@@B@@@D@@@B@@@B@@@@@@@B@@@@@@@@@@@@@@@@B@@@@@@@@@@@@@B@@@@@@@@@@@@@@BB@@@@@@@@@@BA@@@@@@@@@@@@@@@@BA@@@@@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@@@@@@B@@@@@@A@@@@@@@@A@@A@@@@@@@@@A@@@@@@@@A@@@@@@@@@A@@@@@@@@@@@@@A@@@@@@B@@@@A@@@@@@@@A@@@@@@@@@@AIACCCCAEGEE@@CBA@@@A@@A@@BA@@@C@A@@@AB@@AA@@ABAB@BCBA@@@A@AAC@A@A@C@C@A@A@@@AAACCAA@A@A@@A@A@C@EDABCBE@CBA@AA@@@@@A@@@@@A@AA@AA@@@@@@A@A@@AA@@@@@@AA@@A@@@@@A@@@A@@@@A@@@AA@A@@@@@@@AB@@@@@@A@@AA@@@@@@@@@A@@A@@@A@@A@A@@A@@@@A@@@@AA@@@@@AA@@@@@@AA@@@A@@@@@AA@@@A@@@A@@@@A@A@@@AAA@@@@@A@@@AA@@A@@@A@A@@@@@A@@@@A@@A@@A@@@@MCAFBF@DCFCDGBE@IAKCMAIAMCKAGEEACCGEGEECGAEAEBUFMBSEKIIMEMAC_DGD@HBXAHILED[FQ@OESCG@UHI@ICOAIAOESGaIECECCCGECCACCCGEEEEEECECGCIAIAIAKCOCIEGGKCmScCCDABCBG@I@I@UAMEMBCBCD@DABBB@FBB@@A@@@C@C@AA@@ABMH@@@BDBDBFBB@@BA@@BCBABADA@A@AAA@AA@AAC@EA@A@A@CACAGC@@KBK@eCC@ME]UEAE@IFGAO@G@GDGDMTGLEJGTGFIBLHJDH@LDJFHFLNHJ@JALAJEJchCDGVEHGFKFULKDABEFABE@IBGBOFEDCDAFCNINABUDC@AD@FHHFDjLHFDD@DBL@JALAL@NBJFHJJJJJLBFDHH^@HDLFFHFJJJFJFJHHHFHHJFJDJFJ@LFrdNFBD@DABE@AACCCEAAAAE@[DAFAD@RJHBD@HABADCD@F@FDHDHLBFDFHNBDFBB@@D@BAHBDDDD@dDH@RFXHPJHDB@D@LAF@B@BD@HBFBDDD^ZLFDDbXFBF@LANAJBJDFDPDJDDDHBJBJ@FFHFHF@D@DEHIHEHABE@EBEFAJ@F@DBDD@\\BN@FAD@DADBF@X@FBHBDDBF@J@FBDBLBBBBF@@@F`BBBBF@L@FANCHAFBLDDBD@@ADALBLCNC" ],
												"encodeOffsets" : [ [ 117466,
														30557 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));