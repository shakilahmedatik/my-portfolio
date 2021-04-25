import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/manCoding.json";

export default function FullStackImg() {
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
