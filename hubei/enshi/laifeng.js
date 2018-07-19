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
									'来凤县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "422827",
											"properties" : {
												"name" : "来凤县",
												"cp" : [ 109.408328, 29.506945 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@AA@E@C@AAC@A@GAE@C@EBCBCBA@ABCBC@ABCBA@C@@AC@@A@AAC@CBABADCBABC@A@ABABAB@B@B@D@DAB@BCBA@E@AACBA@@BA@A@A@CAAAAAAA@A@ABC@A@AB@BA@AAC@C@CBCAG@CBC@ADADEDADA@CBCAAACA@CAA@ABA@CBCDIFEBCBA@A@A@@@AACAAAACCCBC@ABCB@@A@C@ECGCCCCACAA@ABABCDEBCDADCHEBC@C@CA@AAABAB@BC@A@CACCIC@@AABADABABAAA@C@A@@BA@A@AA@A@ABABABIDCBC@CACAAAAC@CA@@ACACAEAECCAAAA@@A@A@@@A@AA@AA@@@A@@@@@A@@@A@@AA@@@AAA@A@A@A@AB@B@BABAB@BABA@AB@BABA@ABABABCBABABCBA@C@CCCAEAA@AB@BAB@B@B@BCDCDCBC@A@@AA@@A@C@GDODABCHCBABC@AACAGCICIACAECCCAC@GAM@KAKAGAK@AH[BO@ECE@CBAF@HAB@BAAC@CBCBC@A@A@@@A@@@@A@@A@@@A@@AA@AA@@AB@@A@A@@@A@A@AAAAA@@AAAAAAAAA@@@A@@AAAAA@AAAA@AAA@AA@ACACCAAAAA@AAACCCAACAAACAA@AAAAA@AAAAAAABAAuSSKOGMGEE@E@EBADADCFEFEHGDEBCAGAKCIAE@E@EDEBA@A@ACAECEAIMAG@IBCDG@ABADC@ARIDC@M@EECUAID@@C@KKECCAEBIDGDA@@@@@AFAHABCFEHIFADCFA@@D@BA@GDIFGDABEHCDEFCBEBEDEDABADADA@CBA@A@A@ABADAB@BGBEDA@A@CCCACCAAAC@AA@AACBC@GAGCA@A@@@CFGHCHINGH@BDBBB@D@@CFABGFCDAD@@@B@B@BCFABCB@BA@BB@BJPB@DDB@@BAJFHDFBD@@@D@@@D@@BBD@@@B@BDBB@BBF@BBBBBJNHNCFILIHKDMDIB@@@@A@A@@@A@@@A@ABA@@@CH@BFJBFB@FTBF@D@BCBC@AB@B@BBFFLBDBB@B@BABADABCF@B@@BDBHDH@BADAF@BBB@BABABGF@BABADCFABEDA@EBCBEBKRGHQFABILCBA@EBABEAC@A@DHBDBDBBBD@HCDIPGJGLELIJCJ@HFFLFHHB@@BBD@DBDBBBDBBBBBDBDBDBD@B@BAFSH[@GFAJFNHPLLRAHANFBH@HAHBFBDNA\\UFCB@FBHDJDJHHHHHDJHFJFFFHLDJFHLHNFNHJDPHLDHDDDBBBD@H@DBBBBD@BBDB@B@H@DBDB@D@B@BABC@G@GBE@AFEHAB@BAFBD@BDBB@B@D@J@DBAH@D@JBDB@BBBBBDBB@DB@BABABA@@@B@D@B@DADAJIBAD@BB@D@DAD@DBBB@B@@@B@BBADAD@BADBDBBB@B@BCBCBGBADCDAD@FADCD@FADB@@BB@F@D@DBBBB@BDDHHHJDLDJDPDHHFJBL@HCN@NAJEAIEGBGLKTIJCLCJGFKBIBMAK@KDIHILIHLDJAHBLDFDFH@HAB@B@D@DABCBAH@FAD@DCB@FEBC@C@C@C@CDIB@B@D@BBD@DCFEBABAAA@A@A@C@CAAAC@C@ABCFEDAFCD@HCLCRCLA" ],
												"encodeOffsets" : [ [ 112089,
														30262 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));