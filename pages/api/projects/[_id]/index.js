import projects from "../../../../schema/projects"
import dbConnect from "../../../../lib/dbConnect"


export default async function (req, res){
    const {method} =req
    const {_id} = req.query
    await dbConnect()

    if(method=="GET"){
        try {
            const dataProject = await projects.findOne({_id}) 
                                    .populate("stacks", ["type", "name", "image", "_id"])
                                    .populate("comments")
                                    .populate("loves");
            res.status(200).json(dataProject)
        } catch (error) {
            res.status(500).send(`${error}`)
        }
    }


}