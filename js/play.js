let myaudio = document.querySelector("#myaudio")
let disk = document.querySelector(".disk")

let album_img = document.querySelector(".album_img>img")
let bg_img = document.querySelector(".bg>img")
let song_name = document.querySelector(".lyric>h3")
let lyric_info  = document.querySelector(".lyric>p")

let slider = document.querySelector("#slider")

const comments_button = document.querySelector(".comments_button > button")
const comments_container = document.querySelector(".comments_container")


// 截取play.html的id参数
let songId = location.search.slice(4)

// console.log(songId)
function getLyric() {
return axios.get(`http://localhost:3000/lyric?id=${songId}`);
}
      
function getSong() {
return axios.get(`http://localhost:3000/song/url?id=${songId}`);
}

function getDetail() {
return axios.get(`http://localhost:3000/song/detail?ids=${songId}`);
}


//显示隐藏评论
comments_button.addEventListener("click",()=>{
	console.log("test");
	console.log(comments_container.style.display);
	if (comments_container.style.display === 'none') {
		comments_container.setAttribute('style','display:block')
	}else{
		comments_container.setAttribute('style','display:none')
	}
})

// 获取评论数据
function getComments(){
	return axios.get("http://localhost:3003/comments")
}
function get_info(){
	axios.all([getLyric(), getSong(),getDetail(),getComments()])
	.then(axios.spread(function (lyricData, songData,detailData,commentsData) {
	// 渲染评论
	let commentstr = ``
	commentsData.data.forEach(value=>{
		commentstr+=`
		<li>
		<div class="com_header">
		  <div>
		    <p>${value.name}</p>
		    <p>${value.time}</p>
		  </div>
		  <div>
		    <span class="fa fa-thumbs-o-up"></span>
		    <span>${value.agree}</span>
		  </div>
		</div>
      
		<div class="com_content">
		  <p>
		  ${value.comments}
		  </p>
		</div>
	      </li>
		`
	})
	// console.log(commentstr)
	_getEle(".comments_list").innerHTML = commentstr

	album_img.setAttribute("src",detailData.data.songs[0].al.picUrl)
	bg_img.setAttribute("src",detailData.data.songs[0].al.picUrl)
	song_name.innerHTML = detailData.data.songs[0].name
	// lyric_info.innerHTML = lyricData.data.lrc.lyric
	myaudio.setAttribute("src",songData.data.data[0].url)

	disk.addEventListener("click",play)

	// 初始化lyric对象
	var lyric = new window.Lyric(lyricData.data.lrc.lyric,function(obj){
		// obj包含行数与歌词
		lyric_info.innerHTML = obj.txt
	})


	// 根据播放器的状态来控制光盘显示的样式, 转与不转
	function play(){
		if(myaudio.paused){
			myaudio.play()
		}else{
			myaudio.pause()
		}
		lyric.togglePlay()
		disk.classList.toggle("play_state")
	}
	// sliderDrag()
	// 进度条拖动
	function sliderDrag(){
		slider.oninput = ()=>{
			myaudio.currentTime = slider.value * myaudio.duration / 100
			console.log(slider.value * myaudio.duration / 100)
			lyric.seek(myaudio.currentTime*1000)
			myaudio.play()
			disk.classList.add("play_state")
		}
	}

	// sliderMove()
	function sliderMove(){
		myaudio.ontimeupdate = (e) => {
			// console.log(e)
			slider.value = 100 * myaudio.currentTime/myaudio.duration
		}
	}
	myaudio.onloadedmetadata = function(){
		sliderDrag()
		sliderMove()
	}
}));
}

get_info()