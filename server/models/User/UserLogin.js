const mongoose=require("mongoose");

const bcrypt=require("bcrypt")
const jwt=require("jsonwebtoken")


// const PdfDetailsSchema = new mongoose.Schema(
//   {
//     pdf: String,
//     title: String,
//    email: String,
//    interestedSubjects: String,
//     password: String,
//     cpassword: String,
//     education: String,
    
//   },
//   { collection: "PdfDetails" }
// );

// mongoose.model("PdfDetails", PdfDetailsSchema);
const user=mongoose.Schema({
   
   name: String,
   email: String,
   interestedSubjects: String,
    password: String,
    cpassword: String,
    photo: String,
   
    tokens:[{
token:
{
    type:String,
    required:true
}
    }]
    
})
user.pre("save",async function (next){
    console.log("yfiug")
    if(this.isModified("password")){
        this.password=await bcrypt.hash(this.password,12);
        this.cpassword=await bcrypt.hash(this.cpassword,12);
    }
    next()
})
user.method.generateAuthToken=async function (){
    try{
        let tokenThapa=jwt.sign({_id:this._id},"drdtysertyuiopsxcftyi")
        this.tokens=this.tokens.concat({token:tokenThapa})
        await this.save()
        return tokenThapa;
    }catch(err){
        console.log(err)
    }
}
const Usermodel=mongoose.model("user",user)

module.exports=Usermodel;

