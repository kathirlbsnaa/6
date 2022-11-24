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
    var father=querystring.parse(query)["father"];
    var mother=querystring.parse(query)["mother"];
    var phn=querystring.parse(query)["phone"];
    var age=querystring.parse(query)["age"];
    var gender=querystring.parse(query)["radio1"];
    var add=querystring.parse(query)["address"];
    var type=querystring.parse(query)["chechbox2"];
    var item=querystring.parse(query)["checkbox1"];
    res.write("<style>");
    res.write("h1{background-color:white;color:black;}");
    res.write("</style>");
    res.write("<body></body>")
    res.write("<h1>Name : "+name);
    res.write("<h1>Email : "+email);
    res.write("<h1>Father's Name : "+father);
    res.write("<h1>Mother's Name : "+mother);
    res.write("<h1>Mobile number : "+phn);
    res.write("<h1>Age : "+age);
    res.write("<h1>Gender : "+gender);
    res.write("<h1>Type of Wood : "+type);
    res.write("<h1>List of HOuse hold items : "+item);
    res.write("<h1>Address : "+add);
    res.write("<img src='https://images.jdmagicbox.com/comp/namakkal/m9/9999p4286.4286.190328133659.w8m9/catalogue/the-maark-trendz-bazaar-namakkal-furniture-dealers-t0f8es3ics.jpg?clr=' width='100%' height='300px' alt='furniture'   ><br><br>");
    res.end();
}
http.createServer(onRequest).listen(8000);
console.log('server has started');