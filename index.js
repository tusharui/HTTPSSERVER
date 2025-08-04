const express = require("express");
const app = express();
app.use(express.json());

function middleware(req,res,next){
    console.log("method is"+ req.method);
    console.log("method is"+ req.protocol);
    console.log(new Date());
    console.log("URL: " + req.protocol + "://" + req.get('host') + req.originalUrl);


    next();
}
app.use(middleware);

app.get('/sum',function(req,res,next){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans : a+b,
});
});

app.get('/multiply',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans : a*b,
});
});

app.get('/divide',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans : a/b,
});
});

app.get('/subtract',function(req,res){
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    res.json({
        ans : a-b,
});
});

app.listen(3000);

