import React, { Component } from "react";

/*
"level": integer
"attack range": 0 , 1 // short | long
"attack style": 0 , 1 // first attack | second attack 
"respawn time": string
"exp": interge
"drop item": list
"type": 0,1,2 // normal, semi-boss, boss
*/

export default class Monster extends Component {
  render() {
    return (
      <div className="Monster">
        <div className="Monster-name">{this.props.name}</div>
        {/* <div className="Monster-lvl">{console.log(this.props.info)}</div> */}
      </div>
    );
  }
}
