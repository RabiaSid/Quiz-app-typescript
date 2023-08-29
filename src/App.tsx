import "./App.css";
import Quizcard from "./components/card";
import Quizbutton from "./components/button";

function App() {

  // const questions = [
  //   {
  //     question: `"Write the following statement in the form of an equation. “The sum
  //     of three times x and 10 is 23."`,
  //     options: ["3x – 10 = 23", "3x + 23 = 10", "3x + 10 = 2", "3x – 23 = 10"],
  //     correctAnswer: "3x + 10 = 2",
  //   },
  // ];
  const handleButtonClick = () => {
    // Handle button click logic
  };

  return (
    <>
      <div className="row m-0 p-0 align-items-center ">
        <div
          className="col-11 col-md-4 col-lg-4 col-xl-6 justify-content-center align-items-center"
          style={{
            background: "transparent",
            textAlign: "center",
            color: "white",
          }}
        >
          <div className="row">
          <text className="heading-1">Quiz App</text>
          <text className="heading-2">Let's Play</text>
          </div>
        </div>
        <div className="col-12 col-md-8 col-lg-8 col-xl-6  justify-content-center align-items-center text-center">
          <div className="row justify-content-center align-items-center">
            <div
              className="col-11 col-lg-10 col-xl-10 pt-4 pb-4 px-2 shadow"
              style={{
                background: "rgb(5, 6, 45)",
                textAlign: "center",
                color: "white",
                borderRadius: "20px",
              }}
            >
              <Quizcard />
              <Quizbutton onClick={handleButtonClick} label="Next" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
