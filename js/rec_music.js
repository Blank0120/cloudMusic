// 获取index页面中的rec_music的ul列表
// let rec_music = document.getElementById("rec_music")
let rec_music = document.querySelector(".rec_music")

// 获取接口数据
fetch("http://localhost:3000/personalized?limit=6",{
	method:"get",
	mode:"cors"
}).then(function(data){
	return data.json()
})
.then(function(data){
	// 音乐数组
	let rec_musicArr = data.result

	let str = ``
	for(let i =0 ;i<rec_musicArr.length;i++){
		str+=
		`
			<li>
				<a href="html/play.html?id=${rec_musicArr[i].id}">
					<img src="${rec_musicArr[i].picUrl}" />
					<p>${rec_musicArr[i].name}</p>
				</a>
			</li>	
		`
	}
	// console.log(str)
	// 写入数据
	rec_music.innerHTML=str
})