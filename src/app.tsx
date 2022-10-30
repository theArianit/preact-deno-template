import { h, render, Component } from "preact";
import { Router, Route } from "router";
import { Home } from "./pages/Home.tsx";

export function App() {
  return(
    <div>
      <Router>
        <Home path="/" />
      </Router>
    </div>
  );
}