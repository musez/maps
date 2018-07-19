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
									'黄梅县',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421127",
											"properties" : {
												"name" : "黄梅县",
												"cp" : [ 115.942548, 30.075113 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@HDLDNDJAJBJAJAFAJEFALCFAFCFCBCBE@GBIBKBC@IBGDEFIFEHCD@J@HABAPIHCDCDK@EDCBCF@HCFAJ@DCHCFGFADEDEDEDC@ECOEIEGCG@G@KBCHUBEBGHODEDCDEDEHCFCHEBKBIBK@EAGAEACCE@CAE@GDG@G@EEICIAGBIDEFGHIDIBG@IACAECCECEIEG@G@EBGBC@SBI@E@CCICCCCCE@E@GDEDGFAFEDCHILMJMHIdiHKDCBAHO@ABG@EBC@E@EAEAE@EA]BM@KBED_yWSMSMSOSOeaiUckQmGS@A@oF`wRhtxCDDFBDTLDDF@D@L@NCB@DB@DADCBMDEBADGNIJEDEDGLALCHBFDHFDJAHBJ@\\BL@DDDFMF@@@@GDAJ@FDDHHLBLFHFFJDFD@@BBBBDBBDDFFHHDDBBBBFFHHFFDBHJBDLNJJDDHH@B@@ABILQNAFMREJMHGFCAC@I@EDEDAHBFDDFDFDFFBFCJ@LDHNHLHNLJHFHDHBFBDADIDIFGDIDKFKDGFEFIHKLGJGPALAJCL@J@LEJKLIJGP@N@LH@JDJBF@NBJBH@JBJFFFDFHLDHJHJFHBFAJBJDDFFHBJBJALBJ@LDJHFHDLBHDLDLDHBJFHBHDJDJBJBJBLFHBHBFFDHDL" ],
												"encodeOffsets" : [ [ 118705,
														31029 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));