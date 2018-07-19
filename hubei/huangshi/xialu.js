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
									'下陆区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420204",
											"properties" : {
												"name" : "下陆区",
												"cp" : [ 114.975755, 30.177845 ],
												"childNum" : 1
											},
											"geometry" : {
												"type" : "Polygon",
												"coordinates" : [ "@@A@CCEAAAKECAAAC@AC@@GMACACAAIIA@C@AAA@@@A@CBC@CBA@ABGDA@C@AAAC@G@@BADA@AA@@@CBABA@I@M@SAE@K@ACACACAECCCCE@MCIAE@GBUBG@O@A@A@C@EBCFADKHGD@BGF@B@FBBDDBB@B@@F@DB@@HCB@BBBBB@BDBBFB@BFLBF@FDFHH@DB@B@F@B@BAB@BABADGBADAD@@@F@D@DB@@DB@BBB@FBBBBB@D@BBBD@@B@B@@@D@D@BBFDD@H@B@DCFCDC@@@@B@@BBBB@@B@DB@@D@@B@B@BBFBBBB@D@B@@B@@AD@D@B@@A@ABA@CB@@@@@B@@B@D@@B@@B@B@DABAD@B@F@B@FAF@FAD@BCBC@IAA@@BABCB@FAL@RAH@F@D@BAB@FCBADC" ],
												"encodeOffsets" : [ [ 117831,
														30933 ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));