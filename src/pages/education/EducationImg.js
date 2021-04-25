import React from "react";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/education.json";

export default function EducationImg() {
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
