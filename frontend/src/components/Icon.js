import React, { Component } from "react";

class Icon extends Component {
  render() {
    return (
      <div className={`brand ${this.props.selected && 'selected'}`}>
        <img src={this.props.icon} alt={this.props.name} width='100' height='100'></img>
      </div>
    );
  }
}

export default Icon;
