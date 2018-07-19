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
									'团风县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421121",
											"properties" : {
												"name" : "团风县",
												"cp" : [ 114.872029, 30.63569 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@ABGAGDCD@BADBBBB@B@D@FCFCHADCFIJEDIH@BA@E@CCECAECIEECGG[@CCCC@@BE@E@C@@@@@@ABG@AAC@ABCCG@CCCCCA@E@AB@@C@A@G@IGIGEEIGCACC@@@@AACAGCECG@C@E@CCEAACACCAC@E@E@EBE@GBCBEDCBEAE@CACBAB@B@D@D@FBDBD@DBD@DAF@F@FADADABC@C@E@A@@@I@EBCDCHAFABABA@WIICIEGEECGCGAQAGC@ACEAGAEACCICXO`[^KJSBO@FDRFRDZD\\BNBLBDDBDBB@@B@B@D@@BBB@BAB@BAB@@@BAB@BA@ABA@A@@AAA@@AAA@A@A@@B@D@B@DADCBADABADABAF@BABEFABABABAB@BA@ABA@ABA@ABA@@@A@@A@A@@@A@A@AA@@AAAA@CAA@AAA@@AA@@AA@A@CBAD@@AB@BAB@@@B@BAB@@AB@BA@@B@B@B@BBB@@@B@DBB@@BBB@BBBBB@@B@B@B@BA@AD@BEBAB@BABA@@B@BAB@@CFAB@DCDEHAB@DABADAB@BAB@B@B@B@@BBBDBBBB@B@BDHBDFBD@FEJGDBFFDBHBFBDBFBFBHBF@FDFBFDHFDFHHDDHFFBFBDDDDDDDL@FBH@F@F@FAF@D@D@FFBD@BBF@FAF@DCD@BBB@B@BA@EBEBAB@@@DAD@DAB@DAD@DAD@@@B@DDJL@@LDFAFCDGB@BCB@DABADA@ADC@ADCDC@@BBDBBB@BDF@D@D@D@DCDABABADA@@BA@A@A@A@ABAB@B@@@FDDF@FBF@DBDBDBDBDD@@BBB@B@BC@A@A@A@@B@B@@@D@DBB@BD@B@BBF@B@BB@B@B@B@@@@@@A@@@@@C@E@CBA@@B@BBB@DBBBAD@D@FBD@FBBDDBBB@D@@@B@BBDDBDADADADADABA@@BCBABAB@D@BBBBDAB@BA@@@HHFFF@D@DEBADABA@@BB@@B@@B@@@@@@@B@@@@AD@B@B@@LBHAHC@@B@B@BBB@@@B@BABA@AB@AAAAACAA@@DCDAD@D@F@@@BDBBBBBB@@B@@@FDD@B@BA@@B@@@B@@BB@BBB@@B@@B@AB@B@@ABC@ABADBB@BB@D@B@DF@@FBBBBBD@@BDBB@DBBBJBFBFFBB@D@BCB@B@BADBDADABA@ABA@C@CBA@H@HDD@BB@@BA@@@ABA@CBAD@DADEDCDCDGFIDIBIBKPGHBJAJADCFGBGDE@I@K@IBIFIFEHCHCLCNANBLBHDJ@FAHCHGDEFGHEFEHGFEHCLCFCFAJ@LBCGG]IQAKUMEEIDODEJOHG@IECGAMBQEKGGOEIGIYESGmCMQUWO[@O@CAECACAGCGECACAE@GCEEGEC" ],
												"encodeOffsets" : [ [ 117843,
														31341 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));