/* eslint-disable */ /* eslint 문법이 잡아주는거 가려줌*/

import React, { useState } from "react";
import logo from './logo.svg';
import './App.css';
import { isDisabled } from "@testing-library/user-event/dist/utils";

function App() {

  let [글제목,글제목변경] = useState(['남자 코트 추천','강남 우동 맛집','파이썬 독학']); 
  let [따봉, 따봉변경] = useState(0)

  let [modal, modal변경]= useState(false)
  /* state는 변수대신 쓰는 데이터 저장공간, useState()이용해 만들어야함 */

  let posts='강남 고기 맛집'
  let postscolor={color:'blue'}

  function 제목바꾸기 (){
    var newArray = [...글제목]
    newArray[0]= '여자 코트 추천'
    newArray[1]= '어른 코트 추천'
    newArray[2]= '어린이 코트 추천'
    글제목변경(newArray)
  }
  return (
    <div className="App">
      <div className='black-nav'>
        <div className={posts} style={postscolor}> 개발 blog </div>
      </div>
      <button onClick={()=>{제목바꾸기()}}>버튼</button>
      <div className='list'>
      <h3>{글제목 [0]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h3>
      <p>2월 18일 발행</p>
      <hr/>
      </div>
      <div className='list'>
      <h3>{글제목 [1]}</h3>
      <p>2월 19일 발행</p>
      <hr/>
      </div>
      <div className='list'>
      <h3 onClick={()=>{modal변경(true)}}>{글제목 [2]}</h3>
      <p>2월 20일 발행</p>
      </div>
      {
        modal === true
        ?<Modal></Modal>
        :null
      }
    </div>
  );
  function Modal (){
    return(
      <>
      <hr/>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
      </>
    )
  }
}

export default App;
