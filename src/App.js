/* eslint-disable */ /* eslint 문법이 잡아주는거 가려줌*/

import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { isDisabled } from "@testing-library/user-event/dist/utils";

function App() {
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "강남 우동 맛집",
    "파이썬 독학",
  ]);
  let [따봉, 따봉변경] = useState(0);

  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  /* state는 변수대신 쓰는 데이터 저장공간, useState()이용해 만들어야함 */
  

  function 반복된UI (){
    var 어레이= [];
    for (var i =0; i<3; i++){
      어레이.push(<div>안녕</div>)
    }
    return 어레이
  }
  function 따봉더하기(){
    var ar = [...따봉]
    ar[0]
  }

  var 어레이 = [2, 3, 4];
  var 뉴어레이 = 어레이.map(function (a) {
    return a * 2;
  });

  let posts = "강남 고기 맛집";
  let postscolor = { color: "blue" };

  function 제목바꾸기() {
    var newArray = [...글제목];
    newArray[0] = "여자 코트 추천";
    newArray[1] = "어른 코트 추천";
    newArray[2] = "어린이 코트 추천";
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div className={posts} style={postscolor}>
          {" "}
          개발 blog{" "}
        </div>
      </div>
      <button onClick={() => {제목바꾸기();}}>
        버튼
      </button>

    {반복된UI()}

      {글제목.map(function(글 ,i){ 
        return(
        <>
          <div className="list">
          <h3 onClick={() => {누른제목변경(i)}}>{글}</h3>
          <span onClick={() => { 따봉변경(따봉 + 1);}}>
            👍
          </span>
          {따봉}
          <p>2월 19일 발행</p>
          <hr />
          </div>
        </>
        )
      })
    }
      <button onClick={()=>{누른제목변경(0)}}>버튼1</button>
      <button onClick={()=>{누른제목변경(1)}}>버튼2</button>
      <button onClick={()=>{누른제목변경(2)}}>버튼3</button>

      <button onClick={()=>{modal변경(!modal)}}>열고닫기</button>

      {modal === true 
      ? <Modal 프롭스={글제목} 누른제목={누른제목} 닫기버튼={modal변경}></Modal>
       : null}
    </div>
  );
  
  
}
function Modal(props) {
    return (
      <>
        <div className="modal">
          <h2>제목 : {props.프롭스[props.누른제목]}</h2>
          <p>날짜</p>
          <p>상세내용</p>
          <button
            onClick={() => {
              props.modal변경(false);
            }}
          >
            X
          </button>
        </div>
      </>
    );
  }
export default App;
