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
      <div className={"Monster " + (this.props.disable ? "disable" : "")}>
        <div className="Monster-name">{this.props.info[this.props.lang]}</div>
        <div className="Monster-image">
          <img src={"img/" + this.props.info.en + ".png"} alt="img" />
        </div>
        <div className="Monster-level">{this.props.info.level}</div>
        <div className="Monster-range">근거리</div>
        <div className="Monster-style">선공</div>
        <div className="Monster-respawn">30 초</div>
        <div className="Monster-exp">60</div>
        <div className="Monster-item">아이템</div>
        <div className="Monster-type">일반몹</div>
        {/* <div className="Monster-lvl">{console.log(this.props.info)}</div> */}
      </div>
    );
  }
}
