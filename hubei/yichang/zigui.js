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
									'秭归县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420527",
											"properties" : {
												"name" : "秭归县",
												"cp" : [ 110.976785, 30.823908 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@CG@@@@@A@@AA@@@@@@B@@@@@RA@ABA@@B@BBDFB@D@BCBE@AAAGS@CB@@CAGEAA@EDAA@A@IDCFABA@CAE@CBC@@D@JFJFDDD@DCNOFADC@CAAAA@CBCFELEJ@ZHJDJDPHHHDBDAFADAFBFBDDJDB@B@DE@C@@BCBCDAB@D@@BHDD@F@DADCDGDEDAHALADADABAHE@@DAF@L@B@BB@@@H@BB@B@BA@@BADAB@DBB@B@F@FAB@AC@AB@@A@A@A@@CAAABC@@AAA@AAEAOAGAEAACA@BABCBE@CBCBAB@BAB@B@BBBABAB@B@HDFBF@BAB@BABCBA@AIKGAWGKAC@AAA@AAAA@A@E@E@ADCBA@@@@AACCCAKEA@A@IDE@A@C@GAECAA@@@EAEBCBCBA@ABA@AAC@C@C@ABEBABABC@GAC@A@A@@BEDGHaBGFEDELKDGBEACBA@CACAAEAEAEAGAEC@CAGBEBGDCDAHCFEJCH@BBBADABABEBC@CAC@A@@@A@A@A@@@EBCBAD@H@LBB@NCPENELENEZC@@TANCFAHEHGJIDEFIDCDGJIBEBADABABA@E@GA@@AAAC@A@CDABABAAA@AA@ABABCDAB@@A@A@AC@A@GDA@AABE@M@CBCHCHADADCFAB@@A@@AC@A@@@A@A@C@E@@@A@A@@A@ACECEEEEEEEEAEBE@CDCJC@C@CAA@@CGC@GCEAKAGAGCEC@C@A@CCEAA@@C@@@CGCECECCC@C@IBEBEBCBCBABAB@@CBA@GCKICGCEACACAAC@@BAD@D@B@@@BBBCBCDADCB@BCNAHCJGFE@I@IAECCECGAK@I@M@ICIECGCKCECEG@A@A@E@CBC@CCGCCC@ABC@CBAB@B@BADABABADABCBC@C@CDBD@BABAFAFGHGDEFCBC@C@ACACCAA@GCIEEGCGAIBIAGCKCICEECECGBIBK@Q@EAGAEAEE@@@@@AEKEKAEIEEA[BSBSB]DYFQDKDEHAHBHAHCHGDGBQHQBmNKFAJ@J@NDLAH@JAHCHEHIJAFCDADDFDJDHDF@HAJ@NEDEBG@MAEAICECICOGEEKEIEIICGEEEEEAGAA@C@CAC@IDCAK@EAUBE@A@E@ECOAICE@G@CDGLEDEFCBAFCHAJAHAH@D@DAHKNKFUBW@Q@KAAACCAE@@CE@@CEAAAA@@AACAEAAAA@AACCEEAA@@ICEAGASAI@EBKBEDCDCDADH^FNHJ@@DDDDDDBDFLBHGFCFABBD@DAD@DBBB@BBDB@@ADABPDL@FBDBDBBDDHFHBBFDD@F@DBD@DDBDBDDBDDDDD@@@BBBDDD@BFFJHHFFBJDFBB@HCHED@@BD@DBB@B@BBB@BBB@B@JFBBBBB@BB@BB@@B@DCD@BA@@B@D@DABGJCDAD@D@B@B@BADADA@A@E@A@AB@BB@BBBDBB@B@@@B@F@BBB@@BB@BBD@@BLDJDJHJBHAHJ\\B\\ALCVBL@N@XFNH@RBVDPF@@ALCNM\\CLCL@HDFFBJBJBJ@NBP@RLJLBB@FDFBBBFB@BBBBFBB@BBBBDDDBBDJFDDBDBNBBD@@@JFB@D@BANGDCFCBCFIDAB@JBDADCB@B@D@DBTPHDFBBB@BB@BJBDDFBB@B@D@D@BABAB@DADABCFCDA@A@ABAB@BA@AB@BAHFHHLFFPHHBJAHAJ@FBJFFBHCDBDBFBD@DCDAFAHCFADAAEBC@@BAFADABAFGHCD@FDDBDB@FDFBBFBJFJBLDD@DCDE@AFCDABAJ@B@BA@@@@ACCCCG@CBCDA" ],
														[ "@@HCFA@A@A@CQB@B@@B@@B@@A@DH" ] ],
												"encodeOffsets" : [
														[ [ 113386, 31909 ] ],
														[ [ 113386, 31909 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));