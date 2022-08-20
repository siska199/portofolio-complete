import journeys from "../../../schema/journeys";

export default async function (req, res) {
  const { method } = req;

  if (method == "POST") {
    try {
      const { body } = req;
      const addJourney = await journeys.create(body);
      console.log("journey new: ", addJourney);
      res.status(201).json(addJourney);
    } catch (error) {
      res.status(500).send(error);
    }
  }

  if (method == "GET") {
    const journeyList = await journeys.find().sort("-createdAt");
    res.status(500).json(journeyList);
  }
}
