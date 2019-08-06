import React from "react";
import Rodal from "rodal";
import { Button } from "@material-ui/core";
import TextFields from "../FormNBC/formNBC";
import ModalButton from "../ModalButton/modalButton";

// include styles
import "rodal/lib/rodal.css";
import { flexbox } from "@material-ui/system";

class FormNBC extends React.Component {
  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  show() {
    this.setState({ visible: true });
  }

  hide() {
    this.setState({ visible: false });
  }

  render() {
    return (
      <div>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#97A067",
            opacity: 0.8,
            color: "white",
            marginLeft: 25
          }}
          onClick={this.show.bind(this)}
        >
          New Bootcamp
        </Button>
        {/*Modal Here  !*/}
        <Rodal
          customStyles={{
            marginTop: "3%",
            height: "auto",
            bottom: "auto",
            top: "auto"
          }}
          visible={this.state.visible}
          onClose={this.hide.bind(this)}
          animation="rotate"
        >
          <div style={{ color: "black", opacity: "none" }}>
            <h4
              style={{ textDecoration: "underline", color: "rgb(84, 83, 83)" }}
            >
              Please kindly fill the form to add a New Bootcamp !
            </h4>
            <TextFields />
            <br />
            <br />
            <ModalButton />
          </div>
        </Rodal>
      </div>
    );
  }
}

export default FormNBC;
