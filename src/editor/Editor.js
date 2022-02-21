import React, { Component } from "react";
import ReactQuill from "react-quill";
import { debounce } from "../helpers";
import BorderColorIcon from "@material-ui/icons/BorderColor";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles";

class Editor extends Component {
  constructor() {
    super();
    this.state = {
      text: "",
      title: "",
      id: "",
    };
  }
  render() {
    return (
      <div>
        <ReactQuill
          value={this.state.text}
          onChange={this.updateBody}
        ></ReactQuill>
      </div>
    );
  }
  updateBody = async (val) => {
    await this.setState({ text: val });
    this.update();
  };
  update = debounce(() => {
    console.log("UPDATING DATABASE");
  }, 1500);
}

export default withStyles(styles)(Editor);
