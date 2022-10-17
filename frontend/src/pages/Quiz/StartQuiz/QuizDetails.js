import { useState, React } from "react";
import questions from "../SubSection/Questions";
import Timer from "../SubSection/Timer";
import "../assets/sass/quiz.scss";

function QuizDetails() {
  const [option, setOption] = useState("");
  const handleOption = (e) => {
    setOption(e.target.value);
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(5);
  const [count4, setCount4] = useState(6);

  function allDeSelect() {
    let ele = document.getElementsByClassName("option");
    for (const element of ele) {
      if (element.type === "radio") element.checked = false;
    }
  }

  function deSelect() {
    let ele = document.getElementsByClassName("option" + currentQuestion);
    for (const element of ele) {
      if (element.type === "radio") element.checked = false;
    }
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const markQuestion = () => {
    if (questions[currentQuestion].mark === true) {
      questions[currentQuestion]["mark"] = false;
    } else {
      questions[currentQuestion]["mark"] = true;
      
    }

    // return questions.map((obj) => {
    //   if (obj.questionText === questions[currentQuestion].questionText) {
    //     console.log("equal");
    //     if (obj.mark === true) {
    //       console.log("test");
    //       return {
    //         mark: "false",
    //       };
    //     }

    //     return {
    //       mark: "true",
    //     };
    //   }
    // });
  };

  function Increase() {
    setCount(count + 1);
  }
  function Increase1() {
    setCount1(count1 + 1);
  }
  function Increase2() {
    setCount2(count2 + 1);
  }
  function DIncrease() {
    if (count3 < questions.length) {
      setCount3(count3 - 1);
    } else {
      setCount3(count3 === 0);
    }
  }
  function DIncrease1() {
    setCount4(count4 - 1);
  }

  return (
    <div>
      <div className="d-flex justify-content-end">
        <Timer />
      </div>
      <div className="container">
        <div className="question-box">
          <div className="fs-3">
            <h1>Question. {currentQuestion + 1}</h1>
            <br />
            <hr />
          </div>
          <div className="questionchange">
            <p className="questiontext">
              {questions[currentQuestion].questionText}
            </p>
            <br />
            <div className="question-answer">
              {questions[currentQuestion].answerOptions.map(
                (answerOption, key) => (
                  <div key={key} className="mt-2">
                    <input
                      type="radio"
                      className="option"
                      name="option"
                      color="primary"
                      value={answerOption.answerText}
                    />
                    <label htmlFor={answerOption.answerText}>
                      &nbsp;
                      {answerOption.answerText}
                    </label>
                  </div>
                )
              )}
            </div>
          </div>
          <br />
          <div className="d-flex justify-content-center">
            <div className="buttons-box">
              <button
                onClick={(event) => [handleAnswerOptionClick()]}
                className="btn btn-primary btn-hover btn-save"
              >
                NEXT
              </button>
              <button
                onClick={allDeSelect}
                className="btn btn-primary btn-hover btn-clear"
              >
                CLEAR ALL
              </button>
              <button
                onClick={markQuestion}
                className="btn btn-primary btn-hover btn-mark"
              >
                MARK
              </button>
              <button
                type="submit"
                className="btn btn-primary btn-hover btn-submit"
              >
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div
          className="card-body mt-5"
          style={{
            display: "flex",
            padding: 10,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {questions.map((item, index) => (
            <div
              key={index}
              className={`questionNo${index}`}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
                marginRight: 19,
                marginBottom: 5,

                cursor: "pointer",
                backgroundColor:
                  index === currentQuestion
                    ? "#B4C6A6"
                    : item.mark === true
                    ? "#f5ba13"
                    : "#EAEAEA",
              }}
              onClick={() => setCurrentQuestion(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      {/* <div>{console.log(score)}</div> */}
    </div>
  );
}

export default QuizDetails;
