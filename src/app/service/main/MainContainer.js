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
      keyword: "",
      sort: "normal"
    };
    this.handleLang = this.handleLang.bind(this);
    this.handleSort = this.handleSort.bind(this);
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

  handleSort() {
    if (this.state.sort === "normal") {
      this.setState({
        sort: "level"
      });
    } else {
      this.setState({
        sort: "normal"
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
    Object.keys(mapInfo).forEach((mapName, i) => {
      /* Monsters*/
      let monsterList = mapInfo[mapName]["mobs"].filter(
        monsterName =>
          monsterName
            .toUpperCase()
            .indexOf(this.state.keyword.toUpperCase()) !== -1
      );
      if (monsterList.length !== 0) {
        if (this.state.sort === "normal") {
          indexList.push(
            <div key={i}>
              <Map name={mapName} />
              {monsterList.map((monsterName, j) => (
                <Monster
                  info={monsterInfo[monsterName]}
                  lang={this.state.lang}
                  key={j}
                />
              ))}
            </div>
          );
        } else if (this.state.sort === "level") {
          indexList.push(
            <div key={i}>
              {monsterList.sort().map((monsterName, j) => (
                <Monster
                  info={monsterInfo[monsterName]}
                  lang={this.state.lang}
                  key={j}
                />
              ))}
            </div>
          );
        }
      } else {
        if (
          mapName.toUpperCase().indexOf(this.state.keyword.toUpperCase()) !== -1
        ) {
          indexList.push(
            <div key={i}>
              <Map name={mapName} />
              {mapInfo[mapName]["mobs"].map((monsterName, j) => (
                <Monster
                  info={monsterInfo[monsterName]}
                  lang={this.state.lang}
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
        <button onClick={this.handleSort}>정렬 방식 변경</button>
        {this.makeList()}
        <div>많은 내용은 아이모 Fandom에서 가져왔습니다. </div>
      </div>
    );
  }
}
