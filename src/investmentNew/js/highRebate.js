//获取Url地址中userId参数
function getUrlParams(name) { 
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i"); //定义正则表达式 
    var r = window.location.search.substr(1).match(reg);  
    if (r != null) return unescape(r[2]); 
    return null; 
};
/**
 * @param   userId 用户Id
 */
var userID = getUrlParams("userId");
var isUser = getUrlParams("isUser");
var type = 0;// 0 返利列表，1 返利记录;
var isTelephone = false;
/**
 * 初始化轮播图
 */
$(".head").map((index,item)=>{
	$(".head").eq(index).css("background-position",`0 -${(index+1)*0.3}rem`)
})
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    followFinger : false,
    observer:true,
    initialSlide :Math.floor(Math.random()*29+1),
    observeParents:true,
    autoplay: {
        delay:1500,//1秒切换一次
    },
})   
/**
 * 获取用户信息 是否绑定手机
 */
$.ajax({
	url:ajaxUrl+"/user/get?userId="+userID,
	type:"post",
	async:false,
	success:function(res){	
		//是否绑定手机
		if(res.data.telephone!==null) {isTelephone = true;};
		//是否是会员
		//会员类型：0（普通会员）、1（VIP）、2（金咖）、3（合伙人）
		//console.log(res.data.memberType);
		res.data.memberType==0?$("#mask").show():$("#mask").hide();
	},
	error:function(error){
		console.log(error);
	}
})	
/**
 * 上拉加载
 */
// 页数
var page = 0;
$(".rebate_tab li").on("click",function(){	
	$(".dropload-down").remove(); 
	$(".noDataTip").hide();	
	page = 0;
	var index = $(this).index();
	$(this).addClass("rebate_tab_active").siblings().removeClass("rebate_tab_active")
	if(index==0){
		taskList();
	}else if(index==1){
		taskRecord();
	}
})
if(isUser=="true"){
	$(".rebate_tab li").eq(1).trigger("click")
}
$(".rebate_tab li").eq(0).trigger("click")
function taskList(){	
	$(".noDataTip").hide();
	$(".taskList").html(""), 
	$(".instruc").hide(), 
	$(".instruc").html("");
	$(".list").show(), 
	$(".swiper-container").show();
    $('.content').dropload({   	
        scrollArea :window,
        loadDownFn : function(me){
            page++;
            // 拼接HTML
            var html = '';
            $.ajax({
                type: "GET",
                url: ajaxUrl+"/investment/task/list?pageNo="+page+"&userId="+userID+"&random="+Math.random(),
                dataType: 'json',
                success: function(data){ 
                	var swiper = [];
                	var reward = [];
                	var money = [];
                	var swiperHtml = "";
                    if(data.state=="success"){  
                    	var result = data.data;  
                    	var strLen = data.data.length;
                    	//console.log(strLen);
                        for(var i=0; i<strLen; i++){
                    		html+= `
                    		<div class="taskItem borderT1" onclick="getRebate(${isTelephone+","+userID+","+result[i].id})">
								<div class="l">
									<div class="logo"><img src="${result[i].logoUrl}" alt="" /></div>
									<div class="info">
										<p>${result[i].taskName}</p>
										<p class="taskInstr">${result[i].taskPresent==null?"":result[i].taskPresent}<span class="red">${result[i].rebateAmount}元+额外${result[i].rebateGold}金币</span></p>
									</div>
								</div>
								<div class="r">
									<span>${result[i].rebateAmount}元</span>
									<span>奖励</span>
								</div>
							</div>	                        	
                        	`;   	                        	
                        	swiper.push({"taskName":result[i].taskName,"reward":result[i].rebateGold,"money":result[i].rebateAmount});
                        }    
                        var len = swiper.length;
                        
                        $(".taskName").map(function(index,item){
                        	var num = Math.floor(Math.random()*len);
							item.innerHTML=swiper[num].taskName;
							
							$(".rewardd").eq(index).html(`${swiper[num].money}元+${swiper[num].reward}金币`);
						});
						$(".swiper-container").show();
						mySwiper.autoplay.start();
                    // 如果没有数据
                    }else{	
                		// 锁定
                        me.lock();
                		// 无数据
                    	me.noData();   		                    	
						if(page==1){						
                    		$(".noDataTip").show();
                    		$(".noDataTip").html("暂无返利任务");
                    		$(".dropload-load").remove();
                    		$(".dropload-refresh").remove();
                    		$(".swiper-container").hide();
                    	}
                    }
                    $(".taskList").append(html);
                    me.resetload();
                    $(".dropload-refresh").remove();
                },
                error: function(xhr, type){
                    //alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        }
    });
}
function taskRecord(){
	mySwiper.autoplay.stop();
	$(".list").hide(), 
	$(".instruc").html("");
	$(".swiper-container").hide(), 
	$(".instruc").show();		
    $('.content').dropload({   	
        scrollArea : window,
        loadDownFn : function(me){
            page++;
            // 拼接HTML
            var html = '';
            $.ajax({
                type: "post",
                url: ajaxUrl+"/investment/record/list?userId="+userID+"&pageNo="+page,
                dataType: 'json',
                success: function(data){ 
                	console.log(data);
                	console.log("page",page)	
                    if(data.state=="success"){                    	
                    	var result = data.data;  
                    	var strLen = data.data.length;
                    	var recordState;
                    	var taskProcess;  
                        for(var i=0; i<strLen; i++){  
                        	if(result[i].recordState==1){
                        		recordState=`<span class="red">审核中</span>`;
                        		taskProcess="人工审核中请耐心等待";
                        	}else if(result[i].recordState==2){
                        		recordState="已通过";
                        		taskProcess="奖励已发放，请在我的奖励内查看";
                        	}else if(result[i].recordState==3){
                        		recordState="未通过";
                        		taskProcess="没有相关记录，如有疑问请咨询客服";
                        	}                        	
                    		html+=`
                    			<li class="instrucItem">
                    				<span class="logoUrl"><img src="${result[i].logoUrl}" alt="" /></span>
									<p class="p1">
										<span class="task ">${result[i].taskName} <span class="red">${result[i].rebateAmount==null?"":"+"+result[i].rebateAmount+"元"}${result[i].rebateGold==null?"":"+"+result[i].rebateGold+"金币"}</span></span>
										<span class="status gray">${recordState}</span>
									</p>
									<p class="p2 taskProcess">
										${taskProcess}
									</p>
								</li>
                    		`;                            
                        }  
                    // 如果没有数据
                    }else{		                    	
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
						if(page==1){
							console.log("page",page)	
                    		$(".noDataTip").show();
                    		$(".noDataTip").html("暂无返利记录");
                    		$(".dropload-load").remove();
                    		$(".dropload-refresh").remove();
                    	}
                    }
                    // 插入数据到页面，放到最后面
                    $(".instruc").append(html);	                        
                    // 每次数据插入，必须重置
                    me.resetload();
                    $(".dropload-refresh").remove();
                },
                error: function(xhr, type){
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        }
    });	
}
/**
 * 立即赚返利
 */
function getRebate(isTelephone,userID,id){
	console.log(isTelephone,userID,id)
	if(isTelephone){
		window.location.href = "./instrTask.html?userId="+userID+"&id="+id;
	}else{
		bindTele(userID);
	}
};
/**
 * 绑定手机
 */
function bindTele(userID){  
   var u = navigator.userAgent;
   var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
   var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
   if(isAndroid){
        /*alert('是否是Android：'+isAndroid);*/
       window.jsi.bindTele(userID)
   }else if(isiOS){
       /* alert('是否是iOS：'+isiOS);*/
       window.webkit.messageHandlers.bindTele.postMessage(userID);
   }		       	  
};
/**
 * 立即邀请好友
 */
function disciple(){    
   var u = navigator.userAgent;
   var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
   var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
   if(isAndroid){
       window.jsi.disciple("ok");
   }else if(isiOS){
       window.webkit.messageHandlers.disciple.postMessage("ok");
   }	       	   
};
function jumpPage(page){
	//回退到首页
	var u = navigator.userAgent;
    var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    if(isAndroid){
    	console.log(page)
       window.jsi.jumpPage(page);
    }else if(isiOS){
    	console.log(page)
       window.webkit.messageHandlers.jumpPage.postMessage(page);
	}	       	       
}
