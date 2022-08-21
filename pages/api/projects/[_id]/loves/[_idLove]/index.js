import dbConnect from "../../../../../../lib/dbConnect";
import projects from "../../../../../../schema/projects";
import { infoToken } from "../../../../../../lib/function";

export default async function (req, res) {
  const { _id, _idLove } = req.query;
  const { method } = req;
  const userToken = infoToken(req, res);
  await dbConnect();
  if (!userToken)
    return res.status(401).send("You don't have access to do this");

  if (method == "DELETE") {
    try {
      const dataProject = await projects.findOne({ _id });
      if (!dataProject)
        return res.status(400).send("No data asociate with this project");
      dataProject.loves.pull({ _id: _idLove });
      await dataProject.save();
      res.status(201).json(`Delete love success`);
    } catch (error) {
      res.status(500).send(`${error}`);
    }
  }
}
