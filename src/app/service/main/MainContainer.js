import React, { Component } from "react";

import { mapInfo } from "assets/translation/map.js";
import { monsterInfo } from "assets/translation/monster.js";

import Map from "app/components/main/Map";
import Monster from "app/components/main/Monster";

import SearchBox from "app/service/search/SearchContainer";
// import Item from "app/components/main/Item";

import "./MainContainer.scss";

export default class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lang: "en",
      keyword: ""
    };
    this.handleLang = this.handleLang.bind(this);
    this.handleKeyword = this.handleKeyword.bind(this);
    this.makeList = this.makeList.bind(this);
  }

  handleLang() {
    if (this.state.lang === "en") {
      this.setState({
        lang: "kr"
      });
    } else {
      this.setState({
        lang: "en"
      });
    }
  }

  handleKeyword(value) {
    this.setState({
      keyword: value
    });
  }

  makeList() {
    /* Map */
    let indexList = [];

    Object.keys(mapInfo[this.state.lang]).forEach((mapName, i) => {
      /* Monsters*/
      let monsterList = mapInfo[this.state.lang][mapName].filter(
        monsterName =>
          monsterName
            .toUpperCase()
            .indexOf(this.state.keyword.toUpperCase()) !== -1
      );
      if (monsterList.length !== 0) {
        indexList.push(
          <div key={i}>
            <Map name={mapName} />
            {monsterList.map((monsterName, j) => (
              <Monster
                name={monsterName}
                info={monsterInfo[this.state.lang][monsterName]}
                key={j}
              />
            ))}
          </div>
        );
      } else {
        if (
          mapName.toUpperCase().indexOf(this.state.keyword.toUpperCase()) !== -1
        ) {
          indexList.push(
            <div key={i}>
              <Map name={mapName} />
              {mapInfo[this.state.lang][mapName].map((monsterName, j) => (
                <Monster
                  name={monsterName}
                  info={monsterInfo[this.state.lang][monsterName]}
                  key={j}
                />
              ))}
            </div>
          );
        }
      }
    });

    return indexList;
  }

  render() {
    return (
      <div className="Main">
        <SearchBox handleKeyword={this.handleKeyword} />
        <button onClick={this.handleLang}>언어 변경</button>
        {this.makeList()}
        <div>많은 내용은 아이모 Fandom에서 가져왔습니다. </div>
      </div>
    );
  }
}
