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
									'浠水县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421125",
											"properties" : {
												"name" : "浠水县",
												"cp" : [ 115.26344, 30.454837 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@FRTNTLPHJ@PANCJBPLNFZ@DA@UFKNIAOBOBABEFEHCHCDI@EBECCEEAEAEBIBE@CAICECGCECGCECGCCEIEECGAE@GBGFCFCFGLGJCFEHEFALBHBHDDBFBDCDEDI@KBE@EFCFCJBF@HFDDHDDBH@DCLMFMDGDEFEHABE@KDGNM@GCG`AJKHAJATBPDLBL@HDDHALBHBHBHDFBFFFDFDDHBHCHGJCFAHCJ@F@JAFADBL@CIBIHG@I@G@GJIFEJAL@H@J@J@F@L@HDLAL@HEDGAICG@G@GAEBGFEFCDKBG@GBE@G@CDGFKMCK@MAGDIFCFCJGJC@CAAKEKCKAGBI@KBE@I@GCEECICEAGEGAI@KAIAIBI@MHEFEFEFGJIBIAIGGGEEEGCIAA@@@@AEEICGCGCGAIAECICGCIAKAGAKAGCG@GCGCECAGAE@G@GFIFIDK@QGGEMIKCWMOCKCICECCIAGAGCIAEGGGCECIIEA@@@@GCOAIAOCGBIBKAICKAEBMC@@@@AAIAIAI@EBICEAAEAE@EBEFEFEFGAEECECGAGAGAECECEECIAGCICEEGCGMGGCECCACCCC@IBCBIDGAGCGCECEAGACMBE@GBGBEBEBCBIBGAGAGCMIGCKAC@A@kD[FULMFUVGNALATBHDZJRDV@B@@@H@HALCNANCTAJAHALCJAFCJCJCJELGNGJGJGDMLGDEDA@gHA@IVARCHCHAF@FBDDF@F@B@DCDCBCFCFAB@B@BBBBD@B@BAB@@@@@HBPDNDLFJDJFJJXFVDLFHHFJDHBF@B@DA@CDALAD@DAD@B@BBBDDDDNBDBD@FAHAJ@LAVAJ@F@DFDDLDFDDDBH@DBFDFHDF@HBFBDFDDHBHBDFDDBP@\\@XPRVDNHnFTJZJHPFHHFLARBNDHJFH@PGFIPCJCFFVNBLJRH^DH" ],
												"encodeOffsets" : [ [ 118003,
														31517 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));