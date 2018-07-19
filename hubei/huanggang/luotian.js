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
									'罗田县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421123",
											"properties" : {
												"name" : "罗田县",
												"cp" : [ 115.398984, 30.781679 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@CQCM@SEKEGEGGCECECIAKAGAIAI@GDGBCBIAECEECGAGAIAGCEEECC@CBIFAJ@HAHAFCDEAEAEAG@GAEEGEEOKKEIEIKMIMEIIGEEEIEIEKEGCKCICKEKGGEGGEEGECCEGEGEGCECICGAIAGCGBG@G@GAECECEEGEGGIMOIKEEIICGCIAICEAICCCI@G@IDEFAF@H@JDLHHDHHHFBFFFHH@DFFDBHDDCHEDEFEHAHCFAFAASCOAEKM@EB@TGBCKKBANUBKDG@G@I@GCEAECECECCAEAEFCFEFEDG@E@CEKQKIEGCGCGAIAGAEEAE@I@GBKBGAGCCEEGCE@IBCAAGBIBGAECECCCECAACK@CAEBIBE@I@GDEBIDGHGDGACCCEEEAECEAGAGAGBKCGGCK@KAOCSAIBGBIL_BDH@HMNCH@LAFGBEFCFCHENKNCDG@CAGCCCGEE@IAEDED@FAF@LCJCFCDEACAGCGAKAEBGFEFIDKHEHEDEDAH@HBFDHFFFJDDDHDFDHDFDHDFBJ@DAFAJBFBFFFDDAF@FCJGDGDEFAFABAPBPMJEL@VCBY@MEOKIAMDOBI@OGSKSMEQKAI@EBEDKDGDEFGHEFGFEHCFGHGDEBI@GCKAMAMBKDGDGDEFEJAJ@J@L@JCFAHEHCDIBIBGAOHPNDDDFFFFFHFHFJFHDHDJDDFCLCJ@HBFFHFDHBD@HBJBJ@FDDDFHFBF@HAJCF@J@HFDFDJBHFFHCFCDCHCFEAE@G@GBMBALBLFFBH@JBFFFHBJAFEHCHCJDFFHBLFFFFFBJAF@FCHAHEHEJAH@J@J@F@N@F@H@F@JBFDFHBFFHDFBF@HBJDJBJDJJPBNJ`LRDPDLDJDHDHFHFFLJFHFFFFBBHDDDBBBB@BBB@HBBBDBB@D@B@B@H@B@BB@MAICE@EDCBAHBFBDFBHFFBDFHHFDFFDJBF@H@HBJDJBFEDEBEBEFED@FFFFHFFDDFDFDFFFDDFHFHFHBHDHDFDFDDHBJDNDLFJDHFLFNFLPBHBHDD@HBH@FAFAHCDAFCFCFGJGFGFIBEHIBEBCBEAE@CAIBG@K@E@EBE@K@GDGHKFGDEHIDGBEDCFEDCHEHCLGFCHAD@HBFDFFBFDFBFBJ@HBHBDDDHBHBHBHBFDJHFH@FDHDHDFFHFDDBJBHBJAF@HALALARCJCJAHCDCJIFEJIJIDCDADCDCDEDIDGDGDEFEFCFADCDADEFCFMFMDG@EBEFEFELAFB" ],
												"encodeOffsets" : [ [ 118558,
														31860 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));