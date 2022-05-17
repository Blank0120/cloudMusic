_getEle("#send_comments").addEventListener('click',postComments)

function postComments(){
	console.log("postComments")
	let json = {
		name:_getEle("#name").value,
		content:_getEle("#content").value,
		time:Date.now(),
		songID:location.search.slice(4),
		agree:0
	}
	axios({
		method:"post",
		url:"http://localhost:3003/sendcomments",
		data:JSON.stringify(json)
	})
	.then(data=>{
		if(data.data.status==200){
			get_info()
		}
	})
}