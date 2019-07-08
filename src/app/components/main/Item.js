import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="Item">
        <div className="Item-name">{this.props.name}</div>
      </div>
    );
  }
}
