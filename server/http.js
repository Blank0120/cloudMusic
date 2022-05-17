let http = require("http")

let sql  = require("./sql/sql")
let postData = require("./methods/postData")
let server = http.createServer((req,res)=>{
	
	// 开放浏览器访问权限
	res.setHeader("Access-Control-Allow-Origin","*")
	res.setHeader("Access-Control-Allow-Heardes","*")
	res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,OPTIONS")
	
	res.setHeader("content-type","application/json")
	if(req.url=="/comments"){
		sql('select * from hot_comments').then(result => {
			// console.log(result)
			res.end( JSON.stringify(result))
		})
	}

	if(req.url=="/sendcomments"){
		postData(req).then(data=>{
			let post_result = JSON.parse(data)
			console.log(post_result)
			sql(`insert into hot_comments values(null,"${post_result.songID}","${post_result.name}","${post_result.time}","${post_result.agree}","${post_result.content}")`)
			.then(result=>{
				if(result.affectedRows==1){
					console.log("affected")
					res.end(JSON.stringify({"status":200}))
				}
			})
		})
	}

})

server.listen('3003',()=>{
	console.log("server is running on localhost:3003")
})