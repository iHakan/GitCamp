import React from "react";
import Rodal from "rodal";
import { Button } from "@material-ui/core";

// include styles
import "rodal/lib/rodal.css";

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

        <Rodal
          visible={this.state.visible}
          onClose={this.hide.bind(this)}
          animation="rotate"
        >
          <div style={{ color: "black", opacity: "none" }}>
            <h2>Welcome To The Bootcamp Finder !</h2>
          </div>
        </Rodal>
      </div>
    );
  }
}

export default FormNBC;
