const express=require('express');
const port=8000;
const path=require('path');
const app=express();

//express to set ejs as view engine
app.set('view engine','ejs');

//setting view path
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

var contacts=[
    {
        "name":"Anuranjan",
        "number":12345
    },
    {
        "name":"Vijay",
        "number":123456
    },
    {
        "name":"John Cena",
        "number":432567
    },
    {
        "name":"Batista",
        "number":876543
    }
]

//request-response
app.get('/',function(req,res){
    return res.render('home',{title:"Contact_List",
    contact_number : contacts});
})
app.post('/create-action',function(req,res){
      contacts.push(req.body);
      return res.redirect('/');
})

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("My express server running on port:",port);
})