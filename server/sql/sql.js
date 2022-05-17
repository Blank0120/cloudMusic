// 接受配置
const MYSQL_CONF = require("../config/config")
// 2 导入数据库下载包(modules)
const mysql = require("mysql")

// 3. 连接
const con = mysql.createConnection(MYSQL_CONF)
con.connect()
// 5.操作数据库
// con.query('select * from comments',(err,result)=>{
// 	if(err){
// 		console.log(err)
// 	}else{
// 		console.log(result)
// 	}
// })


function sql(str){
	let promise = new Promise((res,rej)=>{
		con.query(str,(err,result)=>{
			if(err){
				rej(err)
			}else{
				res(result)
			}
		})
	})
	return promise
}

module.exports = sql