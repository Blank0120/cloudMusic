const postData = function(request){
	let promise = new Promise((res,rej)=>{
		let postResult = ``
		request.on('data',(data)=>{
			postResult+=data.toString()
		})
		request.on('end',()=>{
			res(postResult)
		})
	})
	return promise
}

module.exports = postData