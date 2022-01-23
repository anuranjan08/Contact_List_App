const express=require('express');
const port=process.env.PORT ||8000;
const path=require('path');
const db=require('./config/mongoose');
const Contact=require('./model/Contact');

const app=express();

//express to set ejs as view engine
app.set('view engine','ejs');

//setting view path
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static('store'));

/*var contacts=[
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
]*/

//request-response
app.get('/',function(req,res){
    Contact.find({},function(err,contacts){
        if (err){
            console.log('error in fetching the data',err);
            return;
        }
        
        return res.render('home',
        {title:"Contact_List",
        contact_number : contacts
    });
    });
    
});
app.post('/create-action',function(req,res){
      //contacts.push(req.body);
      Contact.create({
          name : req.body.name,
          number : req.body.number
      },function(err,newcontact){
          if(err){
              console.log(err);
              return;
          }
          console.log('*********',newcontact);
          return res.redirect('back');
      });
      //return res.redirect('/');
});
// using query param to delete contact
app.get('/delete-contact',function(req,res){
    let id=req.query.id;
    Contact.findOneAndDelete(id,function(err){
        if (err){
            console.log('error in deleting conatcts');
            return;
        }
        return res.redirect('back');
    });
    
});

app.listen(port,function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log("My express server running on port:",port);
})
