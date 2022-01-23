const mongoose = require('mongoose');


mongoose.connect(process.env.DATABASE_URL ,{useNewUrlParser:true,
  useUnifiedTopology: true,
});

const db= mongoose.connection;

db.on('error',console.error.bind(console,'connrction error'));
db.once('open',function(){
    console.log('successfully connected');
})

//using async




/*main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/contact_list_db');
  console.log('successful connection');
}*/