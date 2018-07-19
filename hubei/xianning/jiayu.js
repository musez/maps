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
									'嘉鱼县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421221",
											"properties" : {
												"name" : "嘉鱼县",
												"cp" : [ 113.921547, 29.973363 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@AE@CCEAAEBC@A@AA@AAA@C@CBC@ABC@CDCD@HBDBDBBDBD@@DBDDF@B@B@@@D@FBFB@@F@HBD@B@DA@@NCDAHA@@R@HALIDADCFK@A@EDEDEFIDEDEDAJMDCBCDCFABCDCBEDCBADEBG@EBI@C@AACACAC@AAEFALCFGBG@G@EBE@CBCDCF@LALAPAFABABCBC@EBC@EBE@C@E@CAE@C@EAC@C@E@CBCBCBEDCFEFCDCFEBCBGBC@EAE@EAC@C@IEAGC@@KUIM[YICEAGBIFEBE@ECCCCAC@EBQBoAI\\CBCDIBKBWBKAICGCCIAEGgE[MWIOAGHW@EACAAEACACBEBOLCDC@AAKECAAABC@A@ACAC@EECAC@EBA@@AAAACAACACAC@GBUHGFCBC@CACCACAI@EBCBEBCBCAC@ACAECGAS@E@CBCDCDCBCBE@EAECEEECGCCEAC@G@CDADCFADCFEDG@C@CA@EAE@CA@ABCJI@AAAAACAC@EBGDCBA@AACCCEA@CAECECE@ECEEEEEEOGCAC@E@EBC@EAICGCGACA@@@C@C@AA@GAMAE@A@AB@DAH@DAB@@C@E@AACCCAAGAAAAC@I@C@CDAFCDCBGFCDADADAN@BCBABEBE@SAA@ABAD@BA@A@AACACCC@CAC@E@CCEAGMAACAABEBEDEDEHGHQPCH@B@H@BADABEBGBKDEBIFEDIDOFEDCDAFCRAHCHAF@BFJBDAD@DABGHADAB@DBB@BDBJDDDBBBDCRjJJBXCbCbAFfD`JXLNNVZ`jDF\\fTXPE@AEEAC@ADAD@BBDBXPBBDBDDDDJHFDBBPJHDBBDBB@@BA@@BEAICA@ALPDbJVHBBæv`NLHLDNDJALCHEF`uf©OJODG@CBI@EBGAOCCCSG_MC@YEOAMBK@GDED@@EH@F@B@DHTT\\PVDFBD^pRZPNTPrNLBRAPAVM\\SLIPMNUNYDKBCHOBERIHA" ],
														[ "@@KAAAIAECC@EAAAECAACCCCECACGIOFHHZV^PXFBK" ] ],
												"encodeOffsets" : [
														[ [ 116786, 30945 ] ],
														[ [ 116665, 30749 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));