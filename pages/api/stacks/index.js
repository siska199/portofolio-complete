import dbConnect from "../../../lib/dbConnect";
import { UppercaseEachLetter } from "../../../lib/function";
import stacks from "../../../schema/stacks";

export default async function (req, res) {
  await dbConnect();

  const { method } = req;
  if (method == "GET") {
    try {
      const listStack = await stacks
        .find()
        .sort("-type.identity")
        .select(["name", "image"]);
      console.log("stacks; ", listStack);
      res.status(200).json(listStack);
    } catch (error) {
      res.status(200).send(error);
    }
  }

  if (method == "POST") {
    try {
      const { body } = req;
      const data = {
        ...body,
        name : UppercaseEachLetter(body.name),
        type :{
          name :  UppercaseEachLetter(body.type.name)
        }
      }
      const createStack = await stacks.create(data);
      res.status(201).json(createStack);
    } catch (error) {
      console.log(error)
      let msgError = error.errors? [] :""
      if(error.errors){
          Object.keys(error.errors).forEach((key) => {
              msgError.push(error.errors[key].message);
      });
      }else{
          msgError = error
      }
      res.status(500).json(msgError);
    }
  }
}
