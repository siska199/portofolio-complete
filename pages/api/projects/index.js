import dbConnect from "../../../lib/dbConnect";
import projects from "../../../schema/projects";

export default async function (req, res) {
  const { method } = req;
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
      console.log(error);
      res.status(500).send(error);
    }
  }

  if (method == "POST") {
    const { body } = req;
    const newProject = await projects.create(body);
    res.status(201).json(newProject);
  }
}
