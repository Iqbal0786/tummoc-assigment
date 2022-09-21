const mongoose=require("mongoose");

const citySchema= new mongoose.Schema({
     cityName:{type:String,required:true},
     cityState:{type:String,required:true},
     cityPincode:{type:String,required:true},
     user_id:{type:mongoose.Schema.Types.ObjectId,ref:"user" , required:true}
},{
    versionKey:false,
    timestamps:true
})
module.exports=mongoose.model("city" , citySchema);