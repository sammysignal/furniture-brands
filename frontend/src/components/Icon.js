import React, { Component } from "react";

const brandStyle = {
  display: "inline-block",
  border: "1px solid black",
  width: "100px",
  height: "100px"
};

const logoStyle = {
};

class Icon extends Component {
  render() {
    return (
      <div className='brand' style={brandStyle}>
        <img src={this.props.icon} alt={this.props.name} width='100' height='100' style={logoStyle}></img>
      </div>
    );
  }
}

export default Icon;
