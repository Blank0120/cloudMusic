let new_song  =document.querySelector(".new_song")

fetch("http://localhost:3000/personalized/newsong",{
	method:"get",
	mode:"cors"
}).then(function(data){
	return data.json()
}).then(function(data){
	let new_songArr = data.result
	let str = ``

	for(let i = 0;i<new_songArr.length;i++){
		str+=
		`
			<li>
				<a href="html/play.html?id=${new_songArr[i].id}">
					<p class="song_name">${new_songArr[i].name}</p>
					<p class="song_info">
					<span>${new_songArr[i].song.artists[0].name}</span>
					<span>${new_songArr[i].song.album.name}</span>
					</p>
					<div class="play_btn"></div>
				</a>
			</li>
		`
	}
	new_song.innerHTML = str
})