import React, { useState } from "react";
import "./scss/Style.scss";
import "./App2.scss";

import PlayerBox from "./components/PlayerBox"
import PlayerQuizModal from "./components/playerQuizModal"

function App2() {
  

  return(
<div className="App">
  {/*  */}
  <div className="Container">
    <div className="Inner">
      <div className="banner-nav">
        <h1>Manchester United</h1>
      </div>
      <div class ="player_goalkeeper_section">
        <PlayerBox />
        
      </div>
      
      <PlayerQuizModal />
    </div>
  </div>
  {/*  */}
</div>
  )
}


export default App2