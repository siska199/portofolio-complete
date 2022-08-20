import jwt from "jsonwebtoken";

export const UppercaseEachLetter = (sentence) => {
  const sentenceResult = sentence
    .split(" ")
    .map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
  console.log("sentence: ", sentenceResult);
  return sentenceResult;
};

export const generateToken = (userInfo) => {
  const token = jwt.sign(userInfo, process.env.JWT_SCRET, {
    expiresIn: "1 days",
  });
  return token;
};

export const infoToken = (req, res) => {
  const autoHeader = req.headers.authorization;
  const token = autoHeader && autoHeader.split(" ")[1];
  console.log("token new; ", token);
  if (!token) {
    return res.status(401).send({
      message: "Access denied",
    });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SCRET);
    return verified;
  } catch (error) {
    res.status(400).send({
      message: "Invalid token",
    });
  }
};
