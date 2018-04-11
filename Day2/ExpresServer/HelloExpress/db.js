var mongoose=require("mongoose");

//ornek-uygulama db nin adı
mongoose.connect('mongodb://127.0.0.1:50000/sampledb');

var Schema=mongoose.Schema;

var userSchema=new Schema(
{
    name:String,
    lastname:String,
    username:String,
    password:String
}
);

mongoose.model('users',userSchema);