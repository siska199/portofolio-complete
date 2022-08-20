import dbConnect from "../../../../../../lib/dbConnect";
import projects from "../../../../../../schema/projects";

export default async function (req, res) {
  const { _id, _idComment } = req.query;
  const { method } = req;
  await dbConnect();

  if (method == "DELETE") {
    try {
      const dataProject = await projects.findOne({ _id });
      dataProject.comments.pull({ _id: _idComment });
      await dataProject.save();
      res.status(201).json(`Delete comment success`);
    } catch (error) {
      res.status(500).send(`${error}`);
    }
  }

  if (method == "PUT") {
    try {
      const { body } = req;
      await projects.updateOne(
        { _id, "comments._id": _idComment },
        { $set: { "comments.$.body": body.body } }
      );
      res.status(200).send("Update comment success");
    } catch (error) {
      res.status(500).send(`${error}`);
    }
  }
}
