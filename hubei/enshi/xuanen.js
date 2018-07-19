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
									'宣恩县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "422825",
											"properties" : {
												"name" : "宣恩县",
												"cp" : [ 109.482819, 29.98867 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@MCICKGICGEGCGAGAEEGGCIGKOGIECGAKBI@OKIKKUKOI@G@GBEHCLEDCFAAECECAMGMGAC@I@KAICECGEGEEKIQMSOOGIEGCKCCCAE@GBK@CAKCECGAGAGBIDGDGDGJMHGFOBKBMBKCICIEKEICE@GLIHKJEDEKEKEGCGGEG@ECAEAOBA@@A@@@@@@A@@@@A@@AAA@@@@A@@@@@A@@BA@A@@@@@A@@@A@A@@B@@@@@B@@A@@B@@@@@BB@@@B@@B@@@@AB@@@@@@@AA@@A@@@@@@AB@@@VGDCDC@A@AAACCKEECAAAC@C@AFCB@DCBC@C@C@CACACCCCCIEGAGAGCECGCWEEAC@IAA@AEBGHO@EEKGKIGGEAA@CRIDEDEDEBEBEAACAGCECGAE@WBKAI@GACAGEECCAA@C@C@CDEFGJ@D@BBV@D@BA@A@EAEAEACBIBQFCBGBEBGFC@A@SAQAIAOCCAAAAA@CBC@C@AAACCGEEEGCCAAAA@ABEDCDEBABI@A@C@A@A@A@@BC@@@@@C@@@A@@@@@A@@@@BA@@@@BB@@B@@@@@@@B@@@@BB@@@@@@@B@@@B@@A@@@A@AB@D@BABA@AA@@AAA@@@A@ABA@A@A@C@CBAAAA@A@C@A@C@ABABA@ABABABAB@B@DAB@B@@A@@@A@AA@A@A@ABA@@@@AAA@A@A@A@AAAAAAAA@A@CBCBCBCBIBC@CAAAAA@C@ABAD@F@B@B@@A@C@C@A@CBCAAESAGCKCCEE@@AA@AAC@CAA@C@AA@A@A@A@A@E@C@C@ABCB@@ABA@C@@B@@AB@BA@AB@@A@AACAAA@ACC@A@AKBQDKDGDC@EDCBEFAD@B@DBDBB@D@D@B@BBBABABEFCDC@AAC@A@A@CJ@D@D@D@DADEFA@CDC@EBG@ABADCBC@A@A@GBG@CECEAKBGCIGKKJGJCJ@LBLANAJELIHKDIDSJKLAHFHBJJADBDBFFBJCJKJKHMHEFCLALBHFHDH@FEHGFGFEJADBDDFHHDDFFDFBHAFIDIFED@FBJJHJJLJLJBF@J@F@J@F@FEFE@GFCFAFAHGDIBWEOAIAYDSECAGIMMKKOIKBGBKNGHOFMJCHCR@HBD@HAJ@JDPDJDHHFFBN@J@L@RBH@JFBH@F@J@J@JBLDHHHNJVL^VLLBLBJBLFFNFDFDFBLBLDPFPDJFJBFDDHHJHLLFFFFFFDHFJFDFJDLFNFHNFN@L@J@PEPEHAFBHHLHVHH@PBH@JIDMDOJKDILGHEH@HALFHJFJLVDHFNDDHLJLFJ@FCFCDEDKJFNHPJ`@@FHDHDFBDDFDHBBFDFF@DABCHBDDH@FEBO@@F@BBBB@D@BBDBBB@@ABCBCBABAD@B@DBBDBF@FBFBB@@BDFBB@@J@D@H@FADAB@B@DBDFBBBHFJBB@BDBBBB@B@HAJ@JBFAB@D@D@B@D@BAJCFCD@FADAB@B@HBB@B@DAB@B@@@B@BBBDBBDFBBBBBBB@J@F@DAB@D@@@@A@A@@BA@ABAFCBA@A@A@AAC@@@A@CAECGA@CGEI@ICI@IAGAI@G@CACFCJINGREJCJCNOHKBKBIFCPBLBNFXDNAPAJENGHEJMHMDMFOHOFGHCNBHFFJBJAF@L@JTb@@DDJNDBH@@A@CDCLEF@D@B@BJBJBDB@NFB@FAF@H@FAJ@FBDDFBF@DBFAJB@@B@LKJIFGFCF@NFPFPGHIFMDKDIFOBI" ],
												"encodeOffsets" : [ [ 112570,
														30800 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));