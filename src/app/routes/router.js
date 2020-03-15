import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainContainer from "app/service/main/MainContainer";
import CalcContainer from "app/service/calc/CalcContainer";

import Title from "app/components/main/Title";

export default class router extends Component {
  render() {
    return (
      <BrowserRouter basename="/TWOM-Wiki">
        <>
          <Title />
          <Route exact path="/" component={MainContainer} />
          <Switch>
            <Route path="/calc" component={CalcContainer} />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
