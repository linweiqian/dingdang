const express = require("express");
const app = express();
// const jwt = require("jsonwebtoken");
// //跨域
// app.all('*', function (req, res, next) {
//     res.header('Access-Control-Allow-Origin', '*');
//     //Access-Control-Allow-Headers ,可根据浏览器的F12查看,把对应的粘贴在这里就行
//     res.header('Access-Control-Allow-Headers', 'Content-Type');
//     res.header('Access-Control-Allow-Methods', '*');
//     res.header('Content-Type', 'application/json;charset=utf-8');
//     next();
//   });

// app.get("/",(req,res)=>{ 
//     res.json({code:200,result:"后台数据"})
// })
// var userlists = [];
// //秘钥
// const secret = "iloveyoumeinv";
// app.get("/login",(req,res)=>{
//     // console.log(res.query)
//     // 获取前台用户名密码，判断验证
//     let {username,password} = req.query;
//     let data = req.query;
//     data['iat'] = Math.floor(Date.now()/1000)-30;
//     // 数据里面的用户名与前台登录用户名相同  -1失败
//     let passindex = userlists.findIndex(value=>value.username==username);
//     if(password != "-1" && password == userlists[passindex].password){
//         //令牌
//         var token = jwt.sign(data,secret)
//         res.json({code:200,result:{token}})
//     }else{
//         res.json({code:201,result:"登录失败"})
//     }
// })
// //注册功能
// app.get("/register",(req,res)=>{
//     userlists.push(req.query)
//     res.json({code:200,result:"注册成功"})
// })
// //过滤
// app.use((req,res,next)=>{
//     try{
//         var tokendata = jwt.verify(req.query.token,secret);
//         let passindex = userlists.findIndex(value => value.username == tokendata.username);
//         if(passindex != "-1"){
//             next();
//         }else{
//             res.json({code:201,result:"请求数据失败"})
//         }
//     } 
//     catch(err){
//         res.json({code:201,result:"请求数据失败"})
//     }
// })
// app.get("/getdata",(req,res)=>{
//     if(req.query.token){
//         res.json({code:200,result:{
//             img:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3087187745,2226503710&fm=26&gp=0.jpg",
//             name:"林伟谦"
//         }})
//     }else{
//         res.json({code:201,result:"请求数据失败"})
//     }
// })

app.use(express.static("./dist"));
app.get("/",(req,res)=>{    
    res.send("hello world");
})
app.listen(4001,()=>{
    console.log("请访问:http://127.0.0.1:4001");
})
// 登录api：http://192.168.54.21:3000/login?username=linweiqian&password=123123