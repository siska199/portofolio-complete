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
