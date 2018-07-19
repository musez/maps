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
									'谷城县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420625",
											"properties" : {
												"name" : "谷城县",
												"cp" : [ 111.640147, 32.262676 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@NKPEHCPERGRGXIXELCTGVMNKJKLIJIFEHELIJKFM@MEIEGGIKKQKCC@@@@GGGEGICIAGCG@IBKBGHKPMXKZKZILENQLMFQDEJKDOEgAM@KCSCSFKPSPMLKRCHAXERIPIJGNUPOTYNSBWDOHSJQFMFEHGLOJGNER@P@TBJBB@DE@A@@AC@A@AAA@CBA@CBA@C@CAAAAACC@EAA@AAEEE@E@IAAB@@ADAF@F@BA@@BA@CBA@C@EBAA@@@A@A@@DE@@BCAAAA@AA@AC@A@A@AAAAGAE@@AC@A@ABABA@CDABCBAB@AC@AC@@A@@AAA@@ACBCAA@@BABABA@A@AA@@@@AEAABEBEBABAD@HBH@BADAF@JC@AA@@A@AB@DAB@@ABAD@B@@EBEAC@CAACAGAG@AAAA@ACCA@@ACGC@ABA@CBCBEBEDABABC@EAE@ABG@EBGDCBIDA@CC@EA@EAICA@CBABECEAE@CACCCAG@E@E@GAGAEBEBCBABCBA@EAC@C@@@ABEH@B@BB@BB@B@BC@ABA@E@]JQHUFSDUB[JKFGHCDAD@BA@GDGBA@A@A@ABE@A@EACBC@A@A@A@ECA@A@A@ABA@A@A@C@@@A@CB@BABA@CBC@C@ABGBE@C@A@C@C@CAC@A@C@IBI@GBA@AAA@@AA@@A@ACEAAAAA@CA@AAA@C@CBCFCDEAECAE@CE@A@EAEAECCCCEBABABEDG@CAEAIAEBA@ACBEDEAAAAAC@IAEEACCAA@ABEBC@G@S@E@A@E@ECC@CBADCFADCDADADCDCDCDC@CAC@AEAEAE@E@EBCDC@C@CBEACEECACCEAAECEAE@E@CDGHCACCCAEAE@GBABCDEFCDEDC@EDKFEHGJGHGFEAIAGCIBEBCHKFYDMBMDKFE@KBKDBH@HAPEPINGLEJGJIJIHILCHBH@DObGFIDKBY@[F[AMAYGEQBOFKJCFAD@D@DCBKBCBABEHEHAF@@AB@DCD@BGFA@ABABAB@D@BBB@B@@AB@B@B@@DBD@DB@@BB@BADAB@BEDABADABAD@BBFAFAF@DCF@B@B@B@BBB@B@BAD@B@BBBDDDDFF@DB@@BDBDBFBBBD@B@D@B@FAHEBAXF\\NLFTLTLTPJPPNLXHNNVLXF^ABAHABCFAB@BADADABCBCBIBABAB@BAD@D@F@F@D@D@FBF@DFF@BBBAB@BE@A@CBC@AACAAAAAA@A@A@@@C@ADABEDCBA@C@ABABABBB@BLHDFFDFDDBHFBBDDDFBB@BABEDCBA@@D@B@B@BB@BBBB@DFTRNTRXNTHTDVBPFLHJRDRFFLNHHJB@@@@DBPBVJPJPFJHFLFJGHBDHFLANIVODGT@NFVRLFTDTBLHNLJJHHFD@B@BCFCD@@@B@B@F@@ADABCBEDA@@D@B@BB@B@F@D@@AB@BBB@DFDDDDBBD@BADADAB@@@D@@BDDDD@BBBBB@B@BBDBD@@BBB@D@B@@DBBDAHBJHDBNM" ],
												"encodeOffsets" : [ [ 114210,
														33271 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));