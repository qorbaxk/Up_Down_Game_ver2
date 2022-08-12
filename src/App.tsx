import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  //랜덤 번호 지정
  let [answerNum, setAnswerNum] = useState<number>(0);
  //기회 지정
  let [chances, setChances] = useState<number>(5);
  //유저가 적은 번호
  let [userInput, setUserInput] = useState<number | any>();
  //인풋 텍스트 값
  let [text, setText] = useState<string>("");
  //게임오버
  let [gameOver, setGameOver] = useState<boolean>(false);
  //히스토리 배열
  let [history, setHistory] = useState<number[] | any[]>([]);
  //멘트부분
  let [announcement, setAnnouncement] =
    useState<string>("내가 생각하는 숫자를 맞춰보게");

  //랜덤숫자 뽑는 함수
  useEffect(() => {
    setAnswerNum(Math.floor(Math.random() * 100) + 1);
  }, []);

  //게임 함수
  const gameStart = () => {
    //유저가 범위 밖의 번호를 쓰면 알려줌 기회는 그대로
    if (userInput < 1 || userInput > 100) {
      setText("");
      return setAnnouncement("1과 100사이의 값을 입력하게");
    }
    //유저가 이미 입력한 숫자를 또 입력하면 알려줌 기회는 그대로
    if (history.includes(userInput)) {
      setText("");
      return setAnnouncement("이미 입력한 값이네, 다른 값을 입력하게");
    }

    //플레이 할때마다 기회 1씩 줄어
    chances--;
    setChances(chances);

    //유저가 랜덤번호를 맞추는 과정
    if (userInput < answerNum) {
      setAnnouncement("틀렸네, 더 높은 값을 입력하게");
    } else if (userInput > answerNum) {
      setAnnouncement("틀렸네, 더 낮은 값을 입력하게");
    } else if (userInput == answerNum) {
      setAnnouncement("정답이네!!");
      setGameOver(true);
    }
    //유저가 입력한 값을 배열에 저장
    history.push(userInput);
    setHistory(history);

    //인풋값 초기화
    setText("");

    //게임오버
    if (chances < 1 && userInput != answerNum) {
      setAnnouncement(`끝났네! 정답은 ${answerNum}일세`);
      setGameOver(true);
    }
  };

  //리셋함수
  const reset = () => {
    window.location.reload();
  };

  return (
    <div className="background">
      <h1> 👍업 앤 다운👎</h1>

      <div className="main">
        <div className="ment">
          <p>{announcement}</p>
          {gameOver ? null : <p>기회는 총 {chances}번 일세</p>}
          <div>
            <div>
              <img src="https://mblogthumb-phinf.pstatic.net/MjAyMDA2MjhfMjQy/MDAxNTkzMzA5NjMwNTE0.gmsZfbWPdTmbkN_i6z2Ci91t-vwBnmqVtI_SKJeujv8g.5UqgTTALREXR--eOPGyIqRhcJD11QCFj74f-6jrL470g.GIF.dlswns020/attack1.gif?type=w2" />
            </div>

            {gameOver ? null : (
              <input
                className="user_input"
                type="number"
                placeholder="1부터 100중에 숫자 고르기!"
                value={text}
                onChange={(e) => {
                  setUserInput(e.target.value);
                  setText(e.target.value);
                }}
              />
            )}
          </div>
          <div>
            <button
              className={gameOver ? "unactivebtn" : "activebtn"}
              onClick={gameStart}
              disabled={gameOver}
            >
              이거 맞지?
            </button>
          </div>
          <div>
            <button className="btn2" onClick={reset}>
              다시 할래!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
