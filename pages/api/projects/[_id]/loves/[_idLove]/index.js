import dbConnect from "../../../../../../lib/dbConnect";
import projects from "../../../../../../schema/projects";

export default async function (req, res) {
  const { _id, _idLove } = req.query;
  const { method } = req;
  await dbConnect();

  if (method == "DELETE") {
    try {
      const dataProject = await projects.findOne({ _id });
      dataProject.loves.pull({ _id: _idLove });
      await dataProject.save();
      res.status(201).json(`Delete love success`);
    } catch (error) {
      res.status(500).send(`${error}`);
    }
  }
}
