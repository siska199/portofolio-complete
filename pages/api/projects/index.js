import dbConnect from "../../../lib/dbConnect"
import projects from "../../../schema/projects"

export default async function(req,res){
    const {method} = req
    await dbConnect()
    if(method=="GET"){
        try {
            const projects = await projects.find()
                                            .sort("-createdAt")
            res.status(200).json(projects)
        } catch (error) {
            res.status(500).send(error)
        }   
    }

    if(method=="POST"){
        const {body} = req
        const newProject = await projects.create(body)
        console.log("newProject :", newProject)
        res.status(201).json(newProject)
    }
}