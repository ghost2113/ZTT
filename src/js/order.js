		/**
		 * 取消loading效果
		 */
		var loadingMask = document.getElementById('loadingDiv');
		loadingMask.parentNode.removeChild(loadingMask);
		var main = document.getElementById('main');
		main.style.opacity = '100';
		main.style.filter = 'alpha(opacity=100)';
		/**
		 * 点击延迟
		 */
		if('addEventListener' in document) {
			document.addEventListener('DOMContentLoaded', function() {
				FastClick.attach(document.body)
			}, false)
		}
		let keywords = ''; //搜索关键词
		let pageNo = 1; //请求页数
		let total = 0; //总页数
		let type = 0; //0 全部  1 搜索  
		const ajaxUrl = ["https://zhishun888.com/zaotoutiao-api-home-1.0.0/order/info", "https://zhishun888.com/zaotoutiao-api-home-1.0.0/order/search"];
		const home = () => {
			type = 0;
			pageNo = 1;
			getData();
			$(".goBack").hide();
		}
		const search = () => {
			$(".goBack").show();
			type = 1;
			keywords = $(".searchInfo").val();
			pageNo = 1;
			getData();
		}
		//数据请求
		const getData = () => {
			$(".noDataTip").hide();
			$("#mask").show();
			$.ajax({
				url: ajaxUrl[type],
				type: "GET",
				dataType: "json", //指定服务器返回的数据类型
				data: {
					pageNo: pageNo,
					keyword: keywords
				},
				success: function(res) {
					$("#mask").hide();
					if(res.success) {
						total = res.page;
						if(type==0){
							console.log($(".num").html())
							$(".num").html(res.count);
						}						
						if(pageNo==1){
							$(".last").removeClass('btn-active');							
						}else{
							$(".last").addClass('btn-active');
						} 
						if(pageNo==total){
							$(".next").removeClass('btn-active');
						}else{
							$(".next").addClass('btn-active');							
						}
						$(".pageNo").html(pageNo);
						$(".total").html(total);
						let data = res.data;
						let len = data.length;
						renderDom(data)
						if(!len > 0) {
							$(".noDataTip").show();
						}

					}
				},
				error: function(err) {
					console.log(err)
					$("#mask").hide();
				}
			})
		}
		//渲染数据
		const renderDom = (data) => {
			let result = '';
			data.map((item, index) => {
				result += `
			<tr>
		      <td>${item.userName}</td>
		      <td>${item.telephone==null?"无手机号":item.telephone}</td>
		      <th>${item.buyMoney}</th>
		    </tr>
		`;
			})
			$(".renderDom").html(result);
		}
		const last = () => {
			console.log('last')
			if(pageNo > 1) {
				pageNo--;
				getData()
			}
		}
		const next = () => {
			console.log('next')
			if(pageNo < total) {
				pageNo++;
				getData()
			}
		}
		home();