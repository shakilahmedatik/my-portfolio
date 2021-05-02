import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { greeting } from "../../portfolio";
import { Fade } from "react-reveal";
import FeelingProud from "./FeelingProud";
import { style } from "glamor";
import Typical from "react-typical";

export default function Greeting(props) {
  const theme = props.theme;

  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  return (
    <Fade bottom duration={2000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <h2 className="typical-text">
                I'm{" "}
                <Typical
                  steps={[
                    "Software Engineer",
                    1200,
                    "Web Developer",
                    1200,
                    "Android/ios Developer",
                    1200,
                    "ML & AI Enthusiast",
                    1200,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </h2>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="portfolio-repo-btn-div">
                <br />
                <br />
                <a
                  {...styles}
                  className="general-btn"
                  href={greeting.downloadLink}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Download my Resume
                </a>
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud theme={theme} />
          </div>
        </div>
      </div>
    </Fade>
  );
}
