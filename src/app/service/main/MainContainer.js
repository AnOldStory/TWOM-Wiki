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
      keywordlang: false,
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
      keyword: value,
      keywordlang: /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(this.state.keyword)
    });
  }

  validCheck(monsterName) {
    return !this.state.keyword
      ? false
      : this.state.keywordlang
      ? monsterInfo[monsterName]["kr"]
          .replace(" ", "")
          .indexOf(this.state.keyword.replace(" ", "")) === -1
      : monsterInfo[monsterName]["en"]
          .toUpperCase()
          .replace(" ", "")
          .indexOf(this.state.keyword.toUpperCase().replace(" ", "")) === -1;
  }

  mapvalidCheck(mapName) {
    return !this.state.keyword
      ? false
      : this.state.keywordlang
      ? mapInfo[mapName]["kr"]
          .replace(" ", "")
          .indexOf(this.state.keyword.replace(" ", "")) === -1
      : mapInfo[mapName]["en"]
          .toUpperCase()
          .replace(" ", "")
          .indexOf(this.state.keyword.toUpperCase().replace(" ", "")) === -1;
  }

  mapCheck(mapName) {
    return (
      mapInfo[mapName]["mobs"].filter(
        monsterName => !this.validCheck(monsterName)
      ).length === 0
    );
  }

  makeList() {
    /* Map */
    let indexList = [];
    Object.keys(mapInfo).forEach((mapName, i) => {
      /* Monsters*/
      if (!this.mapvalidCheck(mapName)) {
        indexList.push(
          <div key={i}>
            <Map name={mapInfo[mapName][this.state.lang]} disable={false} />
            {mapInfo[mapName]["mobs"].map((monsterName, j) => (
              <Monster
                info={monsterInfo[monsterName]}
                lang={this.state.lang}
                key={j}
                disable={false}
              />
            ))}
          </div>
        );
      } else {
        indexList.push(
          <div key={i}>
            <Map
              name={mapInfo[mapName][this.state.lang]}
              disable={this.mapCheck(mapName)}
            />
            {mapInfo[mapName]["mobs"].map((monsterName, j) => (
              <Monster
                info={monsterInfo[monsterName]}
                lang={this.state.lang}
                key={j}
                disable={this.validCheck(monsterName)}
              />
            ))}
          </div>
        );
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
