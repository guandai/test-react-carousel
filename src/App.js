import React from "react";
import "./index.css";
import Carousel from "./carousel";

function App() {
  return (
    <div className="container">
      <h1>My Best App</h1>
      {/* <Carousel delay={2000} /> */}
      {/* <Carousel delay={2000} children={[1, 2, 3]} /> */}
      <Carousel delay={2000} children={["test", 42, <span>I'm a span</span>]} />
    </div>
  );
}
export default App;
