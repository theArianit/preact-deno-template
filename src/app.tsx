import { h, render, Component } from "preact";
import { Router, Route } from "router";
import { Home } from "./pages/Home.tsx";

export default function App() {
  return(
    <div>
      <Router>
        <Home />
      </Router>
    </div>
  );
}