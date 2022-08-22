import dbConnect from "../../../lib/dbConnect";
import users from "../../../schema/users";
import { generateToken } from "../../../lib/function";

export default async function (req, res) {
  const { method } = req;
  await dbConnect();
  if (method == "POST") {
    try {
      const { body } = req;
      if (!body.email || !body.password) {
        return res
          .status(400)
          .send(
            !body.email
              ? "Please fill field email"
              : "Please fill field password"
          );
      }
      const userExist = await users.findOne({ email: body.email });
      if (!userExist)
        return res.status(400).send("This email hasn't registered");

      const veryfiedPassword = await userExist.comparePassword(body.password);
      if (!veryfiedPassword)
        return res.status(400).send("Email or password dosent match");

      const token = generateToken({ _id: userExist._id, role: userExist.role });

      res.status(202).json({
        _id: userExist._id,
        username: userExist.username,
        name: userExist.name,
        email: userExist.email,
        role: userExist.role,
        image: userExist.image,
        token,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
