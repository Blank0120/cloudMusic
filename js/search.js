_getEle("#search").onfocus = ()=>{
	_getEle("#search").onkeyup = (e)=>{
		// 没有内容
		if(_getEle("#search").value==""){
			_getEle(".search_default").style.display = "block"
			_getEle(".search_result").style.display = "none"
			_getEle(".search_adv").style.display = "none"
		}
		else{
			if(e.keyCode==13){
				_getEle(".search_default").style.display = "none"
				_getEle(".search_result").style.display = "block"
				_getEle(".search_adv").style.display = "none"
	
				// 放入本地存储
				searchArr.push(_getEle("#search").value)
				add_localStorage()
			}else{
				_getEle(".search_default").style.display = "none"
				_getEle(".search_result").style.display = "none"
				_getEle(".search_adv").style.display = "block"
				
				search_adv()
			}
		}
	}
}


searchHot()
function searchHot(){
	axios.get("http://localhost:3000/search/hot").then((data)=>{
		let hot_search_data = data.data.result.hots
		let str = ``
		for(i=0 ;i<hot_search_data.length;i++){
			str += `<span>${hot_search_data[i].first}</span>`
		}
		_getEle(".hot_search").innerHTML = str
	})
}


init_localStorage()
function init_localStorage(){
	searchArr = JSON.parse(localStorage.getItem("search_info")) || []
}

function add_localStorage(){
	localStorage.setItem("search_info",JSON.stringify(searchArr))
	list_localStorage()
}
list_localStorage()
function list_localStorage(){
	let str = ``
	for(i=0;i<searchArr.length;i++){
		str+=
		`
			<li>
				<span>${searchArr[i]}</span>
				<span onclick = "remove_localStorage(${i})">x</span>
			</li>
		`
	}
	_getEle(".search_history>ul").innerHTML = str
}
function remove_localStorage(id){
	searchArr.splice(id,1)
	add_localStorage()
}
function search_adv(){
	axios.get(`http://localhost:3000/search/suggest?keywords=${_getEle("#search").value}&type=mobile`).then(
		(data)=>{
			let search_adv_arr = data.data.result.allMatch
			let str=``
			for(i=0;i<search_adv_arr.length;i++){
				str+=
				`
				<li>
					<a href="" class="search_adv_list">
						<span>${search_adv_arr[i].keyword}</span>
						<span class="fa fa-search"></span>
					</a>
				</li>
				`
			}
			_getEle(".search_adv>ul").innerHTML = str
		}
	)
}
