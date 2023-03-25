import React, { useState } from "react";
import "../scss/Style.scss";

const PlayerQuizModal = () => {
    const [modal, modalchange]= useState(false)
    

    return(
        <>
            <button onClick={()=>{modalchange(!modal)}}>Q . 이 선수에대해 알아보자! </button>
            <div className="modal_section">
            </div>
            {modal===true ? <Modal/>: null}
        </>
    )
}

function Modal(){
    return(
        <div className="modal">
            <p>이전 팀</p>
            <p>별명</p>
            <p>커리어</p>
        </div>
    )
}
export default PlayerQuizModal;