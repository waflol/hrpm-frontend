import { useState, useEffect, useRef, React } from "react";
import { Link } from "react-router-dom";
import questions from "../SubSection/Questions";
import "../assets/sass/quiz.scss";

function QuizDetails() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [passed, setPassed] = useState(false);

  function allDeSelect() {
    let ele = document.getElementsByClassName("option");
    for (const element of ele) {
      if (element.type === "radio") {
        element.checked = false;
      }
    }
  }

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
      if ((score / questions.length) * 100 > 80) {
        setPassed(true);
      }
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const markQuestion = () => {
    if (questions[currentQuestion].mark === true) {
      questions[currentQuestion].mark = false;
    } else {
      questions[currentQuestion].mark = true;
    }
  };

  // TIMER

  // We need ref in this, because we are dealing
  // with JS setInterval to keep track of it and
  // stop it when needed
  const Ref = useRef(null);

  // The state for our timer
  const [timer, setTimer] = useState("00:00:00");
  const [endTimer, setEndTimer] = useState(false);

  // Custom time
  const [second, setSecond] = useState(3600);
  const [questionTimer, setQuestionTimer] = useState("00:60:00");

  // We can use useEffect so that when the component
  // mount the timer will start as soon as possible

  // We put empty array to act as componentDid
  // mount only
  useEffect(() => {
    const getTimeRemaining = (e) => {
      const total = Date.parse(e) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / 1000 / 60 / 60) % 24);
      return {
        total,
        hours,
        minutes,
        seconds,
      };
    };

    const startTimer = (e) => {
      let { total, hours, minutes, seconds } = getTimeRemaining(e);
      if (total >= 0) {
        // update the timer
        // check if less than 10 then we need to
        // add '0' at the beginning of the variable
        setTimer(
          (hours > 9 ? hours : "0" + hours) +
            ":" +
            (minutes > 9 ? minutes : "0" + minutes) +
            ":" +
            (seconds > 9 ? seconds : "0" + seconds)
        );

        if (total === 0) {
          setEndTimer(true);
        }
      }
    };

    const clearTimer = (e) => {
      // If you adjust it you should also need to
      // adjust the Endtime formula we are about
      // to code next
      setTimer(questionTimer);

      // If you try to remove this line the
      // updating of timer Variable will be
      // after 1000ms or 1sec
      if (Ref.current) clearInterval(Ref.current);
      const id = setInterval(() => {
        startTimer(e);
      }, 1000);
      Ref.current = id;
    };

    const getDeadTime = () => {
      let deadline = new Date();

      // This is where you need to adjust if
      // you entend to add more time
      deadline.setSeconds(deadline.getSeconds() + second);
      return deadline;
    };

    clearTimer(getDeadTime());
  }, []);

  const submit = () => {
    setEndTimer(true);
  };

  return (
    <div>
      {endTimer !== true ? (
        <div className="container">
          <div className="d-flex justify-content-end">
            <div className="timer">
              <h4>Time left: {timer}</h4>
            </div>
          </div>
          <div className="question-box mb-3">
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
                  onClick={submit}
                  type="submit"
                  className="btn btn-primary btn-hover btn-submit"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              padding: "10",
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
      ) : (
        <div className="container">
          <div
            style={{
              background: "#fff",
              borderRadius: "7px",
              boxShadow: "0 2px 5px #ccc",
              padding: "10px",
              width: "100%",
              float: "left",
              marginTop: "5%",
            }}
          >
            <div className="d-flex justify-content-center">
              <div className="fs-3">
                <div
                  style={{
                    fontSize: "50px",
                  }}
                >
                  {passed ? "CONGRATULATIONS" : "GOODLUCK NEXT TIME"}
                </div>
                <br />
                <hr />
              </div>
            </div>
            <div className="text-center d-flex flex-column">
              <div
                className="mt-3"
                style={{
                  fontSize: "24px",
                }}
              >
                You scored {score} out of {questions.length}
              </div>
              <br />
              <div
                className="mt-3"
                style={{
                  fontSize: "30px",
                }}
              >
                {passed ? "You passed the quiz" : "You failed the quiz"}
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <div className="w-25">
                <Link
                  to="/quizgrid"
                  className="btn btn-primary btn-hover w-100 my-4"
                >
                  Confirm
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuizDetails;
