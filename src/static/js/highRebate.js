//选项卡
$(".rebate_tab span").on("click",function(){
	var index = $(this).index();
	$(this).addClass("rebate_tab_active").siblings().removeClass("rebate_tab_active");
	$(".tabItem").eq(index).show().siblings().hide();
});
$(".rebate_tab span").eq(0).trigger("click");
//上拉加载
$(function(){
    // 页数
    var page = 0;
    // 每页展示5个
    var size = 5;
    // dropload
    $('.content').dropload({
        scrollArea : window,
        loadDownFn : function(me){
            page++;
            // 拼接HTML
            var html = '';
            $.ajax({
                type: 'GET',
                url: 'http://ons.me/tools/dropload/json.php?page='+page+'&size='+size,
                dataType: 'json',
                success: function(data){
                    var arrLen = data.length;
                    if(arrLen > 0){
                        for(var i=0; i<arrLen; i++){
                            html+= `
                            	<div class="taskItem">
						<div class="taskInfo">
							<div class="l">
								<span><img src="./images/taskIcon.png" alt="" /></span>
								P2P金融理财2000起投
							</div>
							<div class="r">
								<span><img src="./img/investLink.png" alt="" /></span>
								银行存管
							</div>
						</div>
						<div class="taskCon">
							<div class="taskWrap">
								<div class="l">
									<span>15<span style="font-size:0.16rem;">%</span></span>
									<span>预计年化</span>
								</div>
								<div class="r">
									<span >500<span style="font-size:0.16rem;">元</span></span>
									<span>首次投资返利</span>
								</div>
							</div>
							<button class="btn">投资拿返利</button>
						</div>
					</div>
                            `;
                        }
                    // 如果没有数据
                    }else{
                        // 锁定
                        me.lock();
                        // 无数据
                        me.noData();
                    }
                    // 为了测试，延迟1秒加载
                    setTimeout(function(){
                    	console.log($('.taskList'));
                        // 插入数据到页面，放到最后面
                        $('.taskList').eq(0).append(html);
                        // 每次数据插入，必须重置
                        me.resetload();
                    },1000);
                },
                error: function(xhr, type){
                    alert('Ajax error!');
                    // 即使加载出错，也得重置
                    me.resetload();
                }
            });
        }
    });
});
