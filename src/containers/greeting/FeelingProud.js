import React from "react";
import "./FeelingProud.css";
import Lottie from "react-lottie";
import animationData from "../../assets/lotties/mainLottie.json";
function FeelingProud(props) {
  // const theme = props.theme;
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
      <br />
      <br />
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
}

export default FeelingProud;
