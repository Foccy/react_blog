import React, { useState } from "react";
import "./App2.scss";

function App2() {
  const [like , likePlus] = useState(0)
  const [player , changePlayer] = useState(["David de Gea","Jack Butland"])


  return(
<div className="App">
  {/*  */}
  <div className="Container">
    <div className="Inner">
      <div className="banner-nav">
        <h1>Manchester United</h1>
      </div>
    </div>
    <div class = "player_box">
      <div class = "player_img"></div>
      <h2 class = "player_name" >{player[0]}</h2>
      <p class= "player_backnumber">1</p>
      <p class= "player_position">Goalkeeper</p>
      <p class= "player_age">Nov 7, 1990 (32)</p>
      <div class= "player_nat">spain
        <img src="../public/images/spain.jpg" alt=""/>
      </div>
      <p class= "player_height">1,89m</p>
      <p class= "player_foot">right</p>
      <p class= "player_value">€15.00m</p>
      <span class="player_like" onClick={()=>likePlus(like + 1)}>👍{like}</span>
    </div>


      <h2 class = "PlayerCard">{player[1]}</h2>
  </div>
  {/*  */}
</div>
  )
}


export default App2