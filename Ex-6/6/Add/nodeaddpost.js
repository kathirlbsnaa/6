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
    father=qs['father'];
    mother=qs['mother'];
    phn=qs['phone'];
    age=qs['age'];
    gender=qs['radio1'];
    add=qs['address'];
    type=qs['checkbox2'];
    item=qs['checkbox1'];
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
});
}
http.createServer(onRequest).listen(7777);
console.log('server has started');