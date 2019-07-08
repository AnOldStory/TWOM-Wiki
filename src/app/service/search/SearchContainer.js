import React, { Component } from "react";

import "./SearchContainer.scss";

export default class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputWord: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.handleKeyword(e.target.value);
    this.setState({
      inputWord: e.target.value
    });
  }

  render() {
    return (
      <div className="Search">
        <input
          type="text"
          className="Search-input"
          placeholder="Search"
          autoFocus
          value={this.inputWord}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
