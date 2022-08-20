import dbConnect from "../../../../../lib/dbConnect";
import projects from "../../../../../schema/projects";

export default async function (req, res) {
  const { method } = req;
  const { _id } = req.query;

  await dbConnect();

  if (method == "POST") {
    try {
      const { body } = req;

      const dataProject = await projects.findOne({ _id });
      console.log("data project: ", dataProject);
      dataProject.comments.push({
        ...body,
      });
      await dataProject.save();
      res.status(201).send("Add comment success");
    } catch (error) {
      console.log(error);
      res.status(500).send(`${error}`);
    }
  }
}
