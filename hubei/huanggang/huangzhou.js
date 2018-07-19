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
									'黄州区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "421102",
											"properties" : {
												"name" : "黄州区",
												"cp" : [ 114.878934, 30.447435 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@DJBDBFBHDF@BHDRBHBHDFDHFJFJDXJB@BABABEDGDCFAJ@@@B@F@D@D@BABCBC@E@EBE@CAC@CACAC@E@C@C@ABADADBF@FBDAFCDAHAF@FAF@F@D@DBBDBDFBDDF@D@H@FDHDDBBB@@@@DDDBJHFFJHJHH@B@D@@@BAF@B@DDDD@DDHAD@BBD@BAH@B@@@@D@F@F@@AD@DD@DH\\DHFFDJBFFDDDF@B@@AJGFCJIDEBCDGDE@E@C@AAAAABC@ADCHCHBBACAG@CACCCECKEC@C@EBIBU@KBIBG@EACACCMCCACAAA@C@CBC@KBCB@DCBA@E@GAICGEEGCKEUIWEICIEICKCMAO@G@@@@BA@A@AACAA@A@ABADEDEDADC@C@A@ECEAC@EBEDGDGBQJU]@A@ICKAK@KAK@KBKBKBMBOBOBQ@MBKBQFUDQHKFMHMFKJKLABIPMZCJAJAJ@J@L@H@JBJBJ@LDN@JBL@N@P@L@HAJABBHAP@@" ],
												"encodeOffsets" : [ [ 117595,
														31303 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));