import dbConnect from "../../../lib/dbConnect";
import users from "../../../schema/users";
import { infoToken, generateToken } from "../../../lib/function";

export default async function (req, res) {
  const { method } = req;
  const userToken = infoToken(req, res);
  await dbConnect();

  if (method == "GET") {
    try {
      if (!userToken) {
        return res.status(401).send({
          message: "Access denied",
        });
      }
      const userData = await users.findOne({ _id: userToken._id });
      const token = generateToken({ _id: userData._id, role: userData.role });
      res.status(202).json({
        _id: userData._id,
        username: userData.username,
        name: userData.name,
        email: userData.email,
        role: userData.role,
        image: userData.image,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  }
}
