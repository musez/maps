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
									'茅箭区',
									{
										"type" : "FeatureCollection",
										"features" : [ {
											"type" : "Feature",
											"id" : "420302",
											"properties" : {
												"name" : "茅箭区",
												"cp" : [ 110.78621, 32.644463 ],
												"childNum" : 2
											},
											"geometry" : {
												"type" : "MultiPolygon",
												"coordinates" : [
														[ "@@@@@AA@A@@@AA@ACA@@@@C@A@CB@B@@@B@@BB@B@@@B@BAB@H@@@@ADA@@@B@@BFD@@BBBBBB@@BABA@@@AB@BA@A@A@A@A@@@AB@DABA@A@@AA@AAAAA" ],
														[ "@@DCJKDEDGHCDCDEBGBGAC@ADAFAHAHJDC@@HCBAA@BAD@@@BBB@@@BCDGFAFCFEJAD@JBB@B@@E@@CAAB@BCAAAAA@@BCBADAD@DAFADAPEDBD@DABA@AACCA@@@ABEAAA@EDGBAAGE@C@@FCBABC@AAA@EBC@CBEAA@CA@C@C@A@@A@A@ACA@ABCBAGKEACDA@A@AAAACBAA@@DCBE@EBABEFADCBC@A@C@EDC@C@EBI@EACACACACC@E@A@CG@@@A@A@C@A@CAECECCACCKAECKCKAEECGCCEECICECGAGCGCEA@AAE@E@CACAAC@GAA@AAAACECEA@A@CACAAAAEAACAEAE@G@CACCAACEACCAC@E@EBCHEBCDAFEDC@E@C@G@C@ELCBEBGBE@C@C@CBC@G@C@ADA@AA@CAKCACAACCAACCACAE@AACCCECCAGECCCIEEAIAC@C@ABCDAFAHAHCJAHCLAHEFCFIPABC@E@A@A@ABAD@BABEDMJMDCBCEIKEC@C@AEAA@E@EAEDCDC@ECCCEACEEAAAG@GBE@EBEBAB@BDFDDBD@FADABE@A@GACDAFAFCFCDGDEBADADBFBDDDDBBD@B@@@@BBBFBDLBPFDD@HBJ@FDN@HFDJBF@FDBLHFDBB@DAFBB@JAFAHEB@B@JFFBBF@BBD@DDLBDLBHDJ@B@DDFBJ@HBBBBFBBD@F@FDDF@D@D@BBBJBDAH@BB@HBBB@DAJBFDFFDFBHBDDD@BDBFBBBDFDBB@DAL@B@@@@BDFBD@B@@@BCAKC@@@@BF@@@BAB@@@H@@BBB@@BBBBB@B@B@BBBDJ@FB@@BBBDB@BD@BB@D@B@J@B@@BB@B@@D@BB@@@BA@@@A@AD@@@D@@BB@@@@@@@B@@BBB@D@BB@@@B@B@BABBD@@B@B@HA@@BB@@D@B@BAD@B@FB@@B@@A@A@CAABCBADAFABABCBE@AB@D@B@@A@C@CAEB@BADA@AB@BC@@D@BA@@BE@A@@D@JAB@B@B@BBBF@BBBB@BABAB@@@@B@B@BAB@BB@@@FCB@B@BB@DBB@@AD@@DBDBDBB@@B@B@BB@D@B@@@@BAD@BDBDB@H@BBDDFBF@DBF" ] ],
												"encodeOffsets" : [
														[ [ 113440, 33454 ] ],
														[ [ 113521, 33446 ] ] ]
											}
										} ],
										"UTF8Encoding" : true
									});
				}));