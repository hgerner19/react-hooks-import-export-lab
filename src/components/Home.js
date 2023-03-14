import React from "react";
import * as blank from "../data/user.js";
function Home() {
  return (
    <div id="home">
      <h1>
        {blank.username} is a Web Developer from {blank.city}
      </h1>
    </div>
  );
}
export default Home;
