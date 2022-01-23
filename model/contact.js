const mongoose= require('mongoose');

const ContactSchema= new mongoose.Schema({
    name:{
        type : String,
        required: true
    },
    number:{
        type: String,
        required: true
    }
});
//defining collections
const contact =mongoose.model('contact',ContactSchema);
//exporting collection to index
module.exports=contact;