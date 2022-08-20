import dbConnect from "../../../lib/dbConnect";
import users from "../../../schema/users";
import { generateToken } from "../../../lib/function";

export default async function (req, res) {
  const { method } = req;
  await dbConnect();

  if (method == "POST") {
    const { body } = req;

    const userEmailExist = await users.findOne({ email: body.email });
    if (userEmailExist)
      return res.status(500).send("This email has been registered");

    const userUsernameExist = await users.findOne({ username: body.username });
    if (userUsernameExist)
      return res.status(500).send("This username has been taken by other user");

    try {
      const addUser = await users.create({
        ...body,
        image : body.image?body.image: "https://static.wikia.nocookie.net/itstabletoptime/images/b/b5/Default.jpg/revision/latest?cb=20210606184459"
      });
      const token = generateToken({ _id: addUser._id, role: addUser.role });
      res.status(201).json({
        _id: addUser._id,
        username: addUser.username,
        name: addUser.name,
        email: addUser.email,
        role: addUser.role,
        image: addUser.image,
        token,
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
