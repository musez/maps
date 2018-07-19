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
									'蕲春县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421126",
											"properties" : {
												"name" : "蕲春县",
												"cp" : [ 115.433964, 30.234927 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@J@FCLGF@FCFCBE@E@EFEDAFAHEFE@CBA@GBI@EKKAEFMJMFGFCD@BF@FBDDDF@DAFAHAH@JAHCDKDEBCFAF@H@PIDAFGAEEKPU@GDIBG@EDAPEHCDGBCDI@CFEFEFAD@F@D@BACCEEIGCCCE@CGMCEAGCGAC@IBCBEBC@EACGCACAC@GBEDCF@FAFCDCDAFAF@DABCBE@GBC@CFCFBFAPARCCGCCGCABGBCBE@GCECEKCIIKCAIAG@CCCEKIECEG@EFKLOFQHKLGFEHGBCDC@C@MCEGEGEEEACDGJCHCJCHECKCGEEGAGAKEIAIAIAICGCGAIEGAKCKCGCKAGCGECI@KAIBKAIAIEGCEICIAEBGAIEIGCGGKCEEEIEIAG@IAMAE@IAICG@QEOCOESEMCM@K@IBEDI@IBG@IFCDEFEDWRKHKHIDKHEBKDGBKBK@ICGECECICCAECCIAK@EDGBGDIFEBIDK@KEKEIEECCGEEEEGGAECI@IDGDIBE@GCECCAEAGEGCECE@KDK@E@E@GEIAGCKEMAIGKEM@IAIAEAGAE@ECECGAEEEAGAE@GBG@G@CAGAICAEAGBG@GDGDEFGFEDGBE@G@ICECIEEGAGGUCCEAE@GAC@EBCDEBGA[OIRKTEDCFEDEDGFGDEDEDEFEDCFEJCHAHAF@D@H@FBH@JAH@JAHANCFAJGPOXCHEHEHGJEHABcjGHKNGDKLIHONEHGFMLGFMNEFCFCJBDBHDFDFDHBHCHAJAD@JDDDDDBFDHDNHDHFHDFDJBHDJFFFDFDHBHBHBFDFDBFEHEFEFAF@FBFBFFBJDFAJ@JBJBBB@@@@NDFALBJDLBJAHAPDJBPBHD@@@@FBJJFDHDHHBFDJBHBHDJFDJDLDPDXNLDNJHFRHL@JCJEHEH@F@HBDBDFDH@HDHBHBLBHBLDJDHDJBFBJDHDHDHFJBF@@@@BBDJFHFFHHJHJBJAHIFEFEFENGJ@JAJBLBJ@HBHFFBJDFDDF@H@JAF@LAJBHDLFLBLDBD@HIDIDEJEHCNBL@NDLBLHJDJFHFHFHFLDHDLBF@JDFFFJFFBLBLBH@J@HBHBHBFBH@JFHDDFDHF@F@H@H@FFFDFDDLJLJHHLHHFDDPADBDDBFDFBDADAJ@BBDB@D@NA" ],
												"encodeOffsets" : [ [ 118554,
														31405 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));