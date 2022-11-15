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
        .populate("stacks", ["type", "name", "image", "_id"])
        .populate("comments")
        .sort("-createdAt")
        .lean();

      const modifiedProjectList = projectList.map((project) => ({
        ...project,
        love: userToken
          ? project.loves.filter((love) => {
              return love.user.toString() == userToken._id;
            })[0]
          : false,
      }));
      res.status(200).json(modifiedProjectList);
    } catch (error) {
      console.log("error", error);
      res.status(500).json(error);
    }
  }

  if (method == "POST") {
    try {
      const { body } = req;
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
