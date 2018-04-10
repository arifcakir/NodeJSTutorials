var mongoose=require("mongoose");

//ornek-uygulama db nin adı
mongoose.connect('mongodb://127.0.0.1/sampledb');

var Schema=mongoose.Schema;

var userSchema=new Schema(
{
    _id:Object,
    name:String,
    lastname:String,
    username:String,
    password:String
}
);

mongoose.model('User',userSchema);