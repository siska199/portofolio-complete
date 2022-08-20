import {model, models, Schema} from "mongoose"
import bcrypt from "bcrypt"

const UserShema = new Schema({
     name : {
        type :String,
        trim : true
     },
     username : {
        type :String,
        required : [true, "Plaese fill a username"],
        trim : true,
        unique : [true, 'This username should be unique'],
        minLength : [3, 'username length cannot be less than 10 character'],
        maxLength : [10, 'username length cannot be more than 10 character'],
     },
     email :{
        type :String,
        required : [true,"Please fill an email"],
        trim : true,
        unique : true,
     },
     password : {
        type :String,
        required : [true, "Please fill a password"]
     },
     role : {
        type : String,
        trim : true,
        enum : {
          values : ["visitor","owner"],
          messages:  '{VALUE} is not supported'
        },
        default : "visitor",
     },
     image : {
        type :String,
        trim : true
     },
},{
   timestamps:{createdAt:true,updatedAt:true}
})

/*Validation section*/
UserShema.path("email").validate((email)=>{
   const emailRegex = new RegExp("^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$");
   return emailRegex.test(email);
},'Please fill an correct email address')

UserShema.path("password").validate((password)=>{
   const passwordRegex = new RegExp("^(?=.*[a-z])(?!.* )(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,20})");
   return passwordRegex.test(password)
},`Password at least have :
   one numeric character,
   one lowercase character,
   one uppercase character,
   one special symbol
   and password length should be minimum 8 untul 20 character
`)

/* Fire a function before doc save */
UserShema.pre('save', async function(next){
   if(!this.isModified('password')) return next()
   const salt = await bcrypt.genSalt()
   this.password = await bcrypt.hash(this.password,salt)
   next()
})

UserShema.methods.comparePassword = async function(password){
   try{
      return await bcrypt.compare(password, this.password);
  } catch(err){
      throw new Error(err.message);
  }
}

export default models.users || model("users", UserShema) 