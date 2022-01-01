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
const Contact =mongoose.model('Contact',ContactSchema);
//exporting collection to index
module.exports=Contact;