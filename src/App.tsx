import React, {useEffect, useState} from "react";
import "./App.css";

function App() {

  //랜덤 번호 지정
  let [answerNum,setAnswerNum] = useState<number>(0);
  //기회 지정
  let chances:number = 5;
  //유저가 적은 번호
  let [userInput,setUserInput] = useState<number | any>();
  //게임오버
  let gameOver:boolean = false;
  //히스토리 배열
  let history:number[] = [];

  //랜덤숫자 뽑는 함수
  useEffect(()=>{
    setAnswerNum(Math.floor(Math.random()*100)+1);
  },[]);
    
  console.log("정답",answerNum);
  console.log("내가 넣은 숫자",userInput);

  




  return (
    <div className="background">
      <h1> 👍업 앤 다운👎</h1>

      <div className="main">
        <div className="ment">
          <p>내가 생각하는 숫자를 맞춰보게</p>
          <p>기회는 총 다섯번 일세</p>
          <div>
            <input
              className="user_input"
              type="number"
              placeholder="1부터 100중에 숫자 고르기!"
              onChange={(e)=>setUserInput(e.target.value)}
            />
          </div>
          <div>
            <button className="btn">다음▶</button>
          </div>
          <div>
            <button className="btn2">리셋◀</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
