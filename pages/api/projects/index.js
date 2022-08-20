import dbConnect from "../../../lib/dbConnect";
import projects from "../../../schema/projects";
import { infoToken } from "../../../lib/function";

export default async function (req, res) {
  const { method } = req;
  const userToken = infoToken(req, res);

  await dbConnect();
  if (method == "GET") {
    try {
      const projectList = await projects
        .find()
        .sort("-createdAt")
        .populate("stacks", ["type", "name", "image", "_id"])
        .populate("comments")
        .populate("loves");
      res.status(200).json(projectList);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method == "POST") {
    const { body } = req;
    try {
      if (!userToken || userToken.role == "visitor")
        return res
          .status(401)
          .send("This user dont have authorization to add project data");
      const newProject = await projects.create(body);
      res.status(201).json(newProject);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
