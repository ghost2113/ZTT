const loadingMask = document.getElementById('loadingDiv');
loadingMask.parentNode.removeChild(loadingMask);
$("#loadingDiv").remove();
$("#main").css({
	"opacity": 100,
	"filter": "alpha(opacity=100)"
});
//获取Url地址中userId参数
const getUrlParams = (name) => {
	const reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式 
	let r = window.location.search.substr(1).match(reg);
	if(r != null) return unescape(r[2]);
	return null;
};
const userID = getUrlParams("userId");

//初始化宝箱状态
const initTreasureStatus = () => {
	$.ajax({
		type: "get",
		url: ajaxUrl + "/open/treasure",
		data: {
			userId: userID,
			isSubmit: 0
		},
		async: true,
		success: function(res) {
			const memberType = res.memberType; //会员信息
			const nextOpen = res.leadTime.nextOpen; //下次开启宝箱时间
			const msg = res.msg; //宝箱开启信息
			//根据是否为VIP，设置弹出层样式			
			popStyle(memberType);
			//是否可以开宝箱			
			canOpenTreasure(msg,nextOpen);
		},
		error: function(error) {
			console.log(error)
		}
	});
}
//开启宝箱
const openTreasure = () => {
	$.ajax({
		type: "get",
		url: ajaxUrl + "/open/treasure",
		data: {
			userId: userID,
			isSubmit: 1
		},
		async: true,
		success: function(response) {
			const nextOpen = response.leadTime.nextOpen;
			//计时器			
			const countTime = setInterval(function() {
				countdown(nextOpen);
			}, 1000);
			$(".getGold").text(response.getGold);
			//弹出层
			showMask();
		},
		error: function(error) {
			console.log(error)
		}
	});
}
//宝箱样式
const popStyle = (memberType) => {
	//novip
	if(memberType == 0 || memberType == null) {
		$(".vip").remove();
	} else {
		//vip
		$(".novip").remove();
	}
}
//是否可以开启宝箱
const canOpenTreasure = (msg,nextopen) => {
	switch(msg) {
		case "可以开宝箱":
			$(".open").show();
			$(".countdown").hide();
			break;
		case "该用户还没开过宝箱,可以开启宝箱":
			$(".open").show();
			$(".countdown").hide();
			break;
		case "该用户还没开过宝箱,直接开启宝箱":
			$(".open").show();
			$(".countdown").hide();
			break;
		case "可以开宝箱，已开":
			$(".open").show();
			$(".countdown").hide();
			break;
		case "已经达到今日最多开宝箱获得金币数":
			$(".open").show();
			$(".countdown").hide();
			break;
		case "还未到下次开宝箱时间，返回下次开箱时间":
			//计时器			
			const countTime = setInterval(function() {
				countdown(nextopen);
			}, 1000);
			$(".open").hide();
			$(".countdown").show();
			break;
		default:
			break;
	}
}
//获取倒计时时间
const countdown = (nextopentime) => {
	let leftTime = nextopentime - new Date();
	let d, h, m, s;
	if(leftTime >= 0) {
		d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
		h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
		m = Math.floor(leftTime / 1000 / 60 % 60);
		s = Math.floor(leftTime / 1000 % 60);
	}
	//将倒计时赋值到div中  				
	document.getElementById("_h").innerHTML = h + "时";
	document.getElementById("_m").innerHTML = m + "分";
	document.getElementById("_s").innerHTML = s + "秒后可再次开启";
	if(leftTime === 0) {
		clearInterval(countTime);
	};
	$("#loadingDiv").hide();
}
//关闭弹出层
const closeMask = () => {
	$(".mask").hide();
	$(".open").hide();
	$(".countdown").show();
}
//显示弹出层
const showMask = () => {
	$(".mask").show();
}
/**
 * 成为vip
 */
const jumpPage = () => {
	const u = navigator.userAgent;
	const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
	const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
	if(isAndroid) {
		window.jsi.jumpPage("turnVip");
	} else if(isiOS) {
		/*alert('是否是iOS：'+isiOS);*/
		window.webkit.messageHandlers.jumpPage.postMessage("turnVip");
	}
}

initTreasureStatus();
$(".open").on("click",openTreasure)
$(".closeBtn").on("click", closeMask);