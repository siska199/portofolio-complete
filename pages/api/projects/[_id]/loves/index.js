import projects from "../../../../../schema/projects"
import dbConnect from "../../../../../lib/dbConnect";

export default async function(req,res){
    const {method} = req
    const {_id} = req.query
    await dbConnect()
    if(method=="POST"){
        try {
            const {body} = req
            const dataProject = await projects.findOne({_id})
            dataProject.loves.push({
                ...body
            })
            await dataProject.save()
            res.status(201).send("Love project success");
        } catch (error) {
            res.status(500).send(`${error}`)
        }

    }
}