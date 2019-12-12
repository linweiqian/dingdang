var jwt = require("jsonwebtoken");
// token数据
const payload ={
    username:"linweiqian",
    password:"123123",
    iat:Math.floor(Date.now()/1000)-30
}
//秘钥
const secret = "iloveyoumeinv";

const token = jwt.sign(payload,secret);
//生成令牌
console.log(token);
const decoded = jwt.verify(token,secret);
console.log(decoded)


