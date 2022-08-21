import dbConnect from "../../../../../lib/dbConnect";
import projects from "../../../../../schema/projects";
import { infoToken } from "../../../../../lib/function";

export default async function (req, res) {
  const { method } = req;
  const { _id } = req.query;
  const userToken = infoToken(req, res);
  await dbConnect();

  if (method == "GET") {
    try {
      const dataProject = await projects
        .findOne({ _id })
        .populate("comments.user", { username: 1, image: 1 });
      res.status(200).json({
        _id: dataProject._id,
        title: dataProject.title,
        comments: dataProject.comments,
      });
    } catch (error) {
      res.status(500).send(`${error}`);
    }
  }

  if (method == "POST") {
    try {
      if (!userToken)
        return res.status(401).send("You don't have access to do this");
      const { body } = req;
      const dataProject = await projects.findOne({ _id });
      if (!dataProject)
        return res.status(400).send("No data asociate with this project");
      dataProject.comments.push({
        user: userToken._id,
        body: body.body,
      });
      await dataProject.save();
      res.status(201).send("Add comment success");
    } catch (error) {
      res.status(500).send(`${error}`);
    }
  }
}
