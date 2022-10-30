import { h, render, Component } from "preact";
import { Router, Route } from "router";
import { Home } from "./pages/Home.tsx";

export default class App extends Component{
  render(){
    return(
      <div>
        <Router>
          <Home path="/" />
        </Router>
      </div>
    );
  }
}