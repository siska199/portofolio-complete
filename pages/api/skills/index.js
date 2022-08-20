import skills from "../../../schema/skills"
import dbConnect from "../../../lib/dbConnect";

export default async function(req,res){
    const {method} = req
    await dbConnect()
    if(method=="POST"){
        try {
            const {body} = req
            const addSkill = await skills.create(body)
            console.log("add skill: ", addSkill)
            res.status(201).json(addSkill)
        } catch (error) {
            res.status(500).send(`${error}`)
        }
    }

    if(method=="GET"){
        try {
            const skillList = await skills.find()
                                        .sort("-createdAt")
            console.log("skill list: ", skillList)
            res.status(200).json(skillList)
        } catch (error) {
            res.status(500).send(`${error}`)
        }
    }
}