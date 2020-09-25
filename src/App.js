import React from "react";
import Button from "./Button";
import { Route } from "react-router-dom";
import Navigation from "./Layouts/Navigation";
import Want from "./Screens/Want";

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/" component={Navigation}></Route>

        <Route exact="/want" component={Want}></Route>
      </div>
    );
  }
}

export default App;
