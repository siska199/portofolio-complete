import dbConnect from "../../../lib/dbConnect";
import journeys from "../../../schema/journeys";
import { infoToken } from "../../../lib/function";

export default async function (req, res) {
  const { method } = req;
  const userToken = infoToken(req, res);
  await dbConnect();

  if (method == "POST") {
    try {
      if (!userToken || userToken.role == "visitor")
        return res
          .status(401)
          .send("This user dont have authorization to add journeys data");

      const { body } = req;
      const addJourney = await journeys.create(body);
      res.status(201).json(addJourney);
    } catch (error) {
      let msgError = error.errors ? [] : "";
      if (error.errors) {
        Object.keys(error.errors).forEach((key) => {
          msgError.push(error.errors[key].message);
        });
      } else {
        msgError = error;
      }
      res.status(500).json(msgError);
    }
  }

  if (method == "GET") {
    try {
      const journeyList = await journeys.find().sort("createdAt");
      res.status(200).json(journeyList);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
