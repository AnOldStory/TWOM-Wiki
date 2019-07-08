import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainContainer from "app/service/main/MainContainer";
import Title from "app/components/main/Title";

export default class router extends Component {
  render() {
    return (
      <BrowserRouter basename="">
        <>
          <Title />
          <Route exact path="/" component={MainContainer} />
          <Switch>
            <Route path="/hello" />
          </Switch>
        </>
      </BrowserRouter>
    );
  }
}
