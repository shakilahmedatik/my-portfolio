import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/experience.json";

export default function ExperienceImg() {
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
