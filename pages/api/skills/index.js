import skills from "../../../schema/skills";
import dbConnect from "../../../lib/dbConnect";
import { infoToken } from "../../../lib/function";

export default async function (req, res) {
  const { method } = req;
  const userToken = infoToken(req, res);
  await dbConnect();
  if (method == "POST") {
    try {
      if (!userToken || userToken.role == "visitor")
        return res
          .status(401)
          .send("This user dont have authorization to add skill data");

      const { body } = req;
      const addSkill = await skills.create(body);
      res.status(201).json(addSkill);
    } catch (error) {
      let msgError = error.errors ? [] : "";
      if (error.errors) {
        Object.keys(error.errors).forEach((key) => {
          msgError.push(error.errors[key].message);
        });
      } else {
        msgError = error;
      }
      res.status(500).json(msgError);
    }
  }

  if (method == "GET") {
    try {
      const skillFrontendList = await skills
        .find({ type: "frontend" })
        .sort("-createdAt")
        .lean();
      const skillBackendList = await skills
        .find({ type: "backend" })
        .sort("-createdAt")
        .lean();

      const combineSkillList = {
        frontend: skillFrontendList,
        backend: skillBackendList,
      };

      res.status(200).json(combineSkillList);
    } catch (error) {
      res.status(500).send(`${error}`);
    }
  }
}
