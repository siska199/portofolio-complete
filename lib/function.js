import jwt from "jsonwebtoken"

export const UppercaseEachLetter = (sentence) => {
  const sentenceResult = sentence
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  console.log("sentence: ", sentenceResult);
  return sentenceResult
};

export const generateToken = (userInfo)=>{
  const token = jwt.sign(userInfo,process.env.JWT_SCRET,{expiresIn:'1 days'})
  return token
}