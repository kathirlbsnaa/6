//import require from 'requirejs';
var http=require("http");
var url=require("url");
var querystring=require("querystring");
function onRequest(req,res)
{
    var path=url.parse(req.url).pathname;
    console.log('Request for '+path+'received');
    var query=url.parse(req.url).query;
    console.log(query);
    var name=querystring.parse(query)["username"];
    var email=querystring.parse(query)["email"];
    var pass=querystring.parse(query)["pass"];
    var age=querystring.parse(query)["age"];
    var gender=querystring.parse(query)["radio1"];
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
}
http.createServer(onRequest).listen(8000);
console.log('server has started');