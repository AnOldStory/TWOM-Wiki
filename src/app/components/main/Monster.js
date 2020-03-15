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
    const aRange = {
      en: ["Melee", "Ranged"],
      kr: ["단거리", "원거리"]
    };
    const aType = {
      en: ["Aggrresive", "Non-Aggressive"],
      kr: ["선공", "후공"]
    };
    const mType = {
      en: ["Normal", "Semi-Named", "Named"],
      kr: ["일반몹", "세미네임드", "네임드"]
    };
    return (
      <div className={"Monster " + (this.props.disable ? "disable" : "")}>
        <div className="Monster-name">{this.props.info[this.props.lang]}</div>
        <div className="Monster-image">
          <img src={"img/" + this.props.info["en"] + ".png"} alt="img" />
        </div>
        <div className="Monster-level">{this.props.info["level"]}</div>
        <div className="Monster-range">
          {aRange[this.props.lang][this.props.info["attack range"]]}
        </div>
        <div className="Monster-style">
          {aType[this.props.lang][this.props.info["attack style"]]}
        </div>
        <div className="Monster-respawn">{this.props.info["respawn time"]}</div>
        <div className="Monster-item">아이템</div>
        <div className="Monster-type">
          {mType[this.props.lang][this.props.info["type"]]}
        </div>
        {/* <div className="Monster-lvl">{console.log(this.props.info)}</div> */}
      </div>
    );
  }
}
