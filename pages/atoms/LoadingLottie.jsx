import React from "react";
import Lottie from "lottie-react";
import animation from "../../public/loading.json";

const LoadingLottie = () => {
  return (
    <div className="w-full flex justify-center ">
      <Lottie animationData={animation} style={{ width: 100, height: 100 }} />
    </div>
  );
};

export default LoadingLottie;
