import { Schema, SchemaTypes, model, models } from 'mongoose';

const ProjectShema = new Schema({
    title :{
       type :String,
       required : [true, 'Please fill title of the project'] 
    },
    nameApp :{
        type : String,
        reqired : [true, 'Please fill name app of the project'],
    },
    imageApp : {
        type :String,
        required : [true, 'Please fill image app of the project']
    },
    logoApp :{
        type :String,
        required : [true, 'Please fill logo app of the project']
    },
    stacks : [
        {
            type:SchemaTypes.ObjectId,
            ref:"stacks",
            required : [true, 'Please choose at least one stack that you use in the project']
        }
    ],
    aboutApp : {
        type :String,
        required : true,
        required : [true, 'Please fill about app of the project']
    },
    linkGithub : {
        type : String,
        required : [true, 'Please fill link github of the project']
    },
    linkApp : {
        type : String,
        required : true,
        required : [true, 'Please fill link app of the project']
    }
},{
    timestamps:{createdAt:true,updatedAt:true}
})

export default models.projects || model("projects",  ProjectShema )