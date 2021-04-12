import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [showPara,setShowPara]=useState(false);
  return (
    <div id="main">
      <button id="click" onClick={()=> setShowPara(!showPara)}>Show/Hide para</button>
      {showPara ? (
       <p>
        Hello, I've learnt to use the full-stack evaluation tool. This makes me
        so happy
      </p>):null
      } 

     
    </div>
  );
}


export default App;
