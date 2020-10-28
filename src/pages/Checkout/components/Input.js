import React, { Component } from "react";

class Input extends Component {
  render() {
    return (
      <>
        <label htmlFor="">
          {this.props.label}
          {this.props.isRequired ? " *" : ""}
        </label>
        <input />
      </>
    );
  }
}

export default Input;
