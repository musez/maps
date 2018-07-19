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
									'汉南区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420113",
											"properties" : {
												"name" : "汉南区",
												"cp" : [ 114.08124, 30.309637 ],
												"childNum" : 5
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@BC@A@A@@@AA@@@ABA@@@AADAB@@@BBB@@B@B@B@BAB@@A" ],
														[ "@@ACABEBE@C@@DD@HAHA" ],
														[ "@@CAABAB@@A@CAEFB@BBB@B@B@DABABABA" ],
														[ "@@@BBABABABADADAB@BB@BBBBBB@FBFAH@H@HBH@H@B@@CA@A@@A@A@G@C@@BA@@DBDBBBD@B@BA@ABA@ABBBB@B@D@B@B@BC@BDB@FAJCLCJEBAAC@@@@AB@A@@@A@A@@@@@@@A@@@A@@@A@@@@B@@@BCB@B@BBBB@B@@@BFBD@BBDBBDDD@FBDBBB@FBJAHAJ@FAFAFAF@FBFBD@F@DAHADAD@DBDBFDDDDDBDBB@B@D@BBDBD@BB@@@B@DEFEBADCBABADABA@A@AB@JELEHCLCQMKIEIKiAAO{AO@MK_S_[YKGMAA@GBQJAFGPADCLMZMVONKJ[TUNOBQBKAqMSOOMQY]oACCEOUS[GS@C@A@EFGKC@AA@ICGCC@C@CFABA@EACACAKCI@CAGC@@ADBF@JALCFCHADEBEAGAG@IFOFCBEBCBEBCBGBCBGD@B@@AD@BADADABABCBCBAD@B@DBDBDBBBBDBBDBB@@@@BDNDDBHBD@D@P@BBBBBBBD@D@BB@D@B@@BDBBDDBDBB@D@BAB@@C@C@@B@D@B@DBBDDBDDDBBBBB@B@BBBBB@B@D@BB@B@B@B@BBHBDBBBFEECCCA@@ADADC@AB@BAFFDD@D@B@BDB@@BCB@BA@A@A@@AAA@@A@@BA@ADADAFAD@DAD@BBB@DDBBBDBB@D@BB@BBDBDBBB@@@B@B@BADADCBADADAB@BBB@BB@DBD@DBBBB@BB@BB@B@B@@C@A@A@ABABAB@B@BB@@@B@B@D@BABADAD@B@@@BBBB@BAB@BC@ABABAB@@BBBBBBD@B@D@BBB@BB@@BB@DBBB@B@B@BBBBBBB@B@BAB@BBB@BBBB@BBDBBBBB@B@BABEJ@BAFAB@BA@AB@B@B@@B@B@B@BABAD@B@B@BB@B@@@DBD@BBBDDDBBBB@B@B@B@@AD@B@DDD@DBDB@@BB@@AB@BBA@@B@B@DB@@@B@BA@" ],
														[ "@@DCDADAB@EA@@A@@BA@CBABBD" ] ],
												"encodeOffsets" : [
														[ [ 116673, 31092 ] ],
														[ [ 116723, 31090 ] ],
														[ [ 116580, 31003 ] ],
														[ [ 116673, 31092 ] ],
														[ [ 116744, 31081 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));