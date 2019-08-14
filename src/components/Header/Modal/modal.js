import React from "react";
import Rodal from "rodal";
import { Button } from "@material-ui/core";
import TextFields from "../FormNBC/formNBC";

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
            backgroundColor: "#414860", // #97A067
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
            <span
              style={{
                fontSize: 16,
                fontStyle: "italic",
                fontFamily: "Helvetica",
                fontWeight: "bold",
                color: "#6C757D"
              }}
            >
              **Please kindly fill the form to add a New Bootcamp!**
            </span>
            <TextFields />
            <br />
            <br />
          </div>
        </Rodal>
      </div>
    );
  }
}

export default FormNBC;
