"use strict";
var _PageHeight = document.documentElement.clientHeight,
	_PageWidth = document.documentElement.clientWidth,
	_LoadingTop = 61 < _PageHeight ? (_PageHeight - 61) / 2 : 0,
	_LoadingLeft = 215 < _PageWidth ? (_PageWidth - 215) / 2 : 0,
	_LoadingHtml = '<div id="loadingDiv" style="position:absolute;left:0;width:100%;height:' + _PageHeight + 'px;top:0;background:url(../img/details_loading.png) no-repeat center center;background-size:100% 100%;opacity:100;filter:alpha(opacity=100);z-index:10000;"></div>';

function completeLoading() {
	if("complete" == document.readyState) {
		var loadingMask = document.getElementById("loadingDiv");
		loadingMask.parentNode.removeChild(loadingMask), $("#loadingDiv").remove(), $("#main").css({
			opacity: 100,
			filter: "alpha(opacity=100)"
		})
	}
}
document.write(_LoadingHtml), document.onreadystatechange = completeLoading;