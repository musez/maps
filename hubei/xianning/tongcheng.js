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
									'通城县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421222",
											"properties" : {
												"name" : "通城县",
												"cp" : [ 113.814131, 29.246076 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@JIBE@CFENIHCPMBEFCHCFAJCLGDGBGAMAGDONEFCFEFEDGDO@IBGDEF@H@HDD@TANC\\ELEXCH@FDHFNRBN@PBHFDH@JDJBDBBHEL@FDFFBDB@BADEDIBGDEDCD@JFJJFLBRBHAFCBAACDADAFAFBHDHHF@DBBD@F@HDDLFJ@DAJAJ@H@DBNFDBD@DAFCF@F@FDDBPDHAFAFADABEBCBAF@DBDABADCB@B@DBHDBDDDDBD@DCNSBEBE@EACAAGG@C@A@ALGDEBAAAA@ECE@C@GBC@ICIEaOAAAA@C@GAACGAA@ABABABC@CEI@K@GBABAFADCFIDEBA@@D@NDH@F@D@BABC@C@KAG@C@A@C@CCCAC@EFYFUDGFELGFAFABCDOIAAAAA@GBIAEAIGKACECKEA@CACCAEASCEEEICGEIEGAGAIEMKGEEAKCCACMEIEIEIEEKBIAECGCCEAEAC@EAY@GBE@GGM@CCAAACCAE@AC@E@CAC@ECCCCACAEACAA@GCAE@ACCCAGBE@C@EAE@A@CBCBCBIBC@GD@BADBBBFAFCFAD@FDHBDDDBDDB@DC@EACBI@C@CAC@ECCCCAEAC@C@C@CBADCDCBCBCBC@CBED@DBFDBBH@FBDBD@FADEFCDADCFABCBEBC@CBE@E@CAGCIAGAGCCAC@ABABGCCACCC@EBEAECCCCA@C@C@AAIAAAACEECCECCACCCCECCEAE@CBABABA@@BABCDAFADBDADEFABCL@HBFDFBDDJBD@BADCBE@CAC@ECCEECA@GGACAE@EAEAAEACCEACAE@E@CBED@DAD@DBFBFBDBL@B@HBD@F@DBFCFEHA@AFBF@D@DCBEBGBGDCFADAF@D@HBDBD@B@BABCBEBABAJAFBDDDDFHFDDDDFBD@B@BDDDFFBDBDDDDDDJ@F@FAH@HAHBF@D@DEJCBGBCBC@CAC@GCEBC@C@CAAA@C@CAACAA@CBC@C@ABABCDABCB@DCFADEF@@ADAD@FADCBCBA@CAC@C@KBE@EAIBCBAB@B@B@D@D@B@D@D@D@DDBBBBBFB@@@DDHDJHPJTBLB@BFDHBFBFDDJFFFHDFBB@HBFBDBBBFL@DBB@DBD@B@BADCD@B@D@D@F@D@DAB@DADBDDHBDDFBDFFDDDDDBF@DBFBDBD@D@DBD@BAF@D@B@B@JBHBFAD@FC@@BAD@DADBBBBBDBDBBB" ],
												"encodeOffsets" : [ [ 116462,
														30101 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));