import React from "react";
import styles from "./styles.module.scss";
import { createRequireFromPath } from "module";
import { Backpack } from "react-kawaii";
import SpeechBubble from "react-kawaii/lib/es/components/speechBubble/SpeechBubble";
import Typography from "@material-ui/core/Typography/Typography";
import { Container } from "@material-ui/core";

class Intro extends React.Component {
  render() {
    return (
      <div className="box-intro">
        <SpeechBubble style={{}} size={60} mood="happy" color="#83D1FB" />
        <Typography
          style={{ paddingTop: 10, fontWeight: "bolder", color: "#7a7a7a" }}
          variant="h3"
        >
          Who We Are ?
        </Typography>
        <Container style={{ paddingTop: 20, color: "#9e9c9c", width: "60%" }}>
          <p className="text-intro">
            Hi there dreamer! We are GitCamp team who were recently graduate
            from one the best bootcamp on "Front-End Web Development" in Turkey,
            provided by "Re:coded". We were so pleased to be in the Re:coded
            family this year.Although, there are millions of students waiting
            out there to learn coding, they hardly find a nice bootcamp.
          </p>

          <p>
            That's why we are here to help you to find your best bootcamp match!
            Check out our website and enjoy it!
          </p>
          <p>npm install ...</p>
          <p>Happy Hacking!</p>
        </Container>
      </div>
    );
  }
}

export default Intro;
