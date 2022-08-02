import {model, models, Schema, ShemaTypes} from "mongoose"
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
        unique : [true, 'This username has been taken'],
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
        default : "user",
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
   const emailRegex = new RegExp("/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/");
   return emailRegex.test(email);
},'Please fill an correct email address')

UserShema.path("password").validate((email)=>{
   const passwordRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,20})");
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
   console.log("this field: ", this)
   if(!this.isModifiend('password')) return next()
   const salt = await bcrypt.genSalt()
   console.log("salt: ", salt)
   this.password = await bcrypt.hash(this.password,salt)
   next()
})

UserShema.methods.comparePassword = (password,cb)=>{
   bcrypt.compare(password, this.password, (err, isMatch)=>{
      if(err) return cb(err)
      cb(null, isMatch)
   })
}

export default models.users || model("users", UserShema) 