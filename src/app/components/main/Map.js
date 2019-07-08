import React, { Component } from "react";

export default class Map extends Component {
  render() {
    return (
      <div className="Map">
        <div className="Map-name">{this.props.name}</div>
      </div>
    );
  }
}
