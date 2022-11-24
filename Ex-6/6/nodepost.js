//import require from 'requirejs';
var http=require("http");
var querystring=require("querystring");
var qs,name,email;
function onRequest(req,res)
{
    var data1='';
    req.on('data',function(chunk)
    {
        console.log(chunk);
        data1+=chunk;
        console.log("data string format</h1>"+data1);
    });

req.on('end',function()
{
    qs=querystring.parse(data1);
    console.log(qs);
    name=qs['username'];
    email=qs['email'];
    age=qs['age'];
    gender=qs['radio1'];
    res.write("<style>");
    res.write("div{background-color: black;color: white;}h1{background-color:white;color:black;}");
    res.write("</style>");
    res.write("<body></body>")
    res.write("<center><div><img src='https://static.vecteezy.com/system/resources/thumbnails/005/502/055/small/logotype-letter-login-logo-design-graphic-symbol-icon-sign-illustration-creative-idea-vector.jpg' width='10%'><h2>Login Details</h2></div></center>");
    res.write("<h1>Name : "+name);
    res.write("<h1>Email : "+email);
    res.write("<h1>Age : "+age);
    res.write("<h1>Gender : "+gender);
    res.end();
});
}
http.createServer(onRequest).listen(7700);
console.log('server has started');