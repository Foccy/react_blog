import React, { useState } from "react";
import "../scss/Style.scss";

const PlayerBox = () => {
    const [like , likePlus] = useState(0)
    const [player , changePlayer] = useState(["David de Gea","Jack Butland","Tom Heaton","Lisandro Martínez"])

    function nameChanger (){
      const Array=[...player]
      Array[0]="VanDeSar"
      Array[1]="Evra"
      Array[2]="Park"
      Array[3]="Rooney"
      changePlayer(Array)
    }
    
    
    return(
      <>
      {player.map(function (a) {
        return(
        <>
          <div class = "player_box">
          <div class = "player_img">
            <img id="player_profile_img" src="./images/David_de_Gea_2017.jpg"  alt=""/>
          </div>
          <h2 id = "player_name" >{a}</h2>
          <p id= "player_backnumber">No :<span>1</span></p>
          <p id= "player_position">Position :<span>Goalkeeper</span></p>
          <p id= "player_age">Birth/Age :<span>Nov 7, 1990 (32)</span></p>
          <p id= "player_nat">Nation :<span>spain</span>
            <img id="player_nat_img" src="./images/spain.jpg" alt=""/>
          </p>
          <p id= "player_height">Height :<span>1,89m</span></p>
          <p id= "player_foot">Foot :<span>right</span></p>
          <p id= "player_value">Value :<span>€15.00m</span></p>
          <span class="player_like" onClick={()=>likePlus(like + 1)}>👍{like}</span>
          <button onClick={()=>{nameChanger()}}>선수이름바꾸기</button>
          <h2 class = "PlayerCard">{player[1]}</h2>
          <h2 class = "PlayerCard">{player[2]}</h2>
          <h2 class = "PlayerCard">{player[3]}</h2>
        </div>

        
        </>
        )
      })
    }
       
      </>
    )
    
  }

  export default PlayerBox;

