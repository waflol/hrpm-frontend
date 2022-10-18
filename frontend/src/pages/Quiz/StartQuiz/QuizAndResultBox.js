import React from "react";

const question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

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
};

function QuizBox() {

  return (
    <div className="container">
      <div className="question-box">
        <div className="fs-3">
          <h1>Question. {question.currentQuestion + 1}</h1>
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
  );
}

function ResultBox() {
  return (
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
            <h1>CONGRATULATIONS</h1>
            <br />
            <hr />
          </div>
        </div>

        <div className="text-center d-flex flex-column">
          <h4>
            {score}/{questions.length}
          </h4>
          <br />
          <h4>You passed the quiz</h4>
        </div>
        <br />
        <div className="d-flex justify-content-center">
          <div className="w-25">
            <Link
              to="/quizgrid"
              data-bs-toggle="modal"
              className="btn btn-primary btn-hover w-100 mt-2"
            >
              Confirm
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export { QuizBox };
