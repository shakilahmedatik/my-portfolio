import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/dataScience.json";

export default function DataScienceImg() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Lottie options={defaultOptions} height={450} width={450} />
    </div>
  );
}
