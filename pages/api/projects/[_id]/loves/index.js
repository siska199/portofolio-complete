import projects from "../../../../../schema/projects";
import dbConnect from "../../../../../lib/dbConnect";
import { infoToken } from "../../../../../lib/function";

export default async function (req, res) {
  const { method } = req;
  const { _id } = req.query;
  const userToken = infoToken(req, res);
  await dbConnect();
  if (!userToken)
    return res.status(401).send("You don't have access to do this");

  if (method == "POST") {
    try {
      const { body } = req;
      const dataProject = await projects.findOne({ _id });
      if (!dataProject)
        return res.status(400).send("No data asociate with this project");
      dataProject.loves.push({
        user: userToken._id,
        body: body.body,
      });
      await dataProject.save();
      res.status(201).send("Love project success");
    } catch (error) {
      console.log(error);
      res.status(500).send(`${error}`);
    }
  }
}
