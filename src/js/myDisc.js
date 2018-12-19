$(function(){
//公共变量。
var userID = TJY.getUrlParams("userId");
var pageNumber = 0;//第几页。
var droploader = null;
console.log(userID)
/** 有查询条件时，过滤数据方法  **/
function droploaderForQuery() {
	/****************设置查询条件，加到url中，此处省略。***************************/	
	pageZero = true;//公共变量，设置页码从第一页开始，否则页码会接着上次查询页码，不会从第一页开始。
	$("#list").children().remove();//或者$("#list").html("");一样的功能，清空之前的数据。
	// 解锁loadDownFn里锁定的情况，当上一页面翻到最后一页时会锁定。
	droploader.unlock();
	droploader.noData(false);
	droploader.resetload();
}
/**只在页面加载时初始化一次。**/
$(function(){
	droploadMethod();
});
/* *上拉加载、下拉刷新方法 * */
function droploadMethod() {
    droploader = $('#content').dropload({
        scrollArea : window,
        //threshold : '100',                                                      // 提前加载距离
	    domDown : {                                                          // 下方DOM
	        domClass   : 'dropload-down',
	        domRefresh : '<div class="dropload-refresh">↑上拉加载更多</div>',
	        domLoad    : '<div class="dropload-load"><span class="loading"></span>加载中...</div>',
	       // domNoData  : '<div class="dropload-noData" style="display:none;"></div>'
	      domNoData  : '<div class="dropload-noData">暂无数据</div>'
	    },
        //上拉加载
        loadDownFn : function(me){
        	pageNumber++;
        	ajaxForContent(me);
        }
    });
}
/**上拉、下拉公共部分提取，避免太多重复代码 **/
function ajaxForContent(me) {
    var result = "";//拼接html
	//ajax若需要封装，可自行封装，本例中为方便理解不进行封装。
	ajaxUrl = urlTest;
	$.ajax({
        url: ajaxUrl+"/apprentice/list",
        type:'GET',
    	dataType:'json',
    	data:{
    		userId:userID,
    		pageNo:pageNumber,
    		pageSize:15,
    		random:Math.random()
    	},
    	async:true,
        success: function(data){

        	var res = data.data;
			var arrLen = res.length;
			//如果有数据
			if(arrLen > 0){
				//会员类型：0（普通会员）、1（VIP）、2（金咖）、3（合伙人）
				res.map((item,index)=>{
					let grade;
					switch (item.memberType){
						case 1:
							grade = "普通";
							break;
						case 2:
							grade = "会员";
							break;
						case 3:
							grade = "金咖";
								break;
						case 0:
							grade = "合伙人";
							break;
						default:
							break;
					}
					result += `<li>
					<div class="user">
						<div class="icon">
							<img src="${item.headPath}" alt="" />
						</div>
						<div >
							<div class="p1 pp">${item.nickName}</div>
							<div class="p2 pp">${item.telephone}</div>
						</div>
					</div>
					<div class="grade">${grade}</div>
					<div class="num">${item.peopleNum}</div>
					<div class="team"><a  href="./myDisc.html?userId=${item.userId}">查看团队</a></div>
				</li>`;
				})				
			// 如果没有数据
			}else{
				if(pageNumber==1){
					$(".noDisc").show();
					$(".dropload-down").hide();
				}
				me.lock();// 锁定
				me.noData();// 无数据
			}
			// 插入数据到页面，放到最后面
			$("#list").append(result);
			// 每次数据插入，必须重置
			me.resetload();
		},
        error: function(xhr, textStatus, errorThrown){
			// 即使加载出错，也得重置
            me.resetload();
        }
    });
}
})
