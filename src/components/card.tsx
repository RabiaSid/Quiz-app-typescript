// type cardProps = {
//   Question: string;
//   Option1: string;
//   Option2: string;
//   Option3: string;
//   Option4: string;
// };

// export default function Quizcard(props: cardProps) {
//   const { Question,  Option1,  Option2,  Option3,  Option4 } = props;
export default function Quizcard() {
  return (
    <div className="row justify-content-center align-items-center px-3 py-2">
      <div className="col-11 col-lg-6 col-xl-12">
        <div className="row text-center text-lg-start text-xl-center ">
          <h1 className="heading-3">Question</h1>
          <h3 className="text-1 pt-2">
            Write the following statement in the form of an equation. “The sum
            of three times x and 10 is 23.
          </h3>
        </div>
      </div>
      <div className="col-12 col-lg-6 col-xl-12">
        <div className="row justify-content-center align-items-center ">
          <div className="col-12 col-sm-6 col-lg-12 col-xl-6 ">
            <div className="option-border">
              <h6 className="text-2">3x – 10 = 23</h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
            <div className="option-border">
              <h6 className="text-2">3x + 23 = 10</h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
            <div className="option-border">
              <h6 className="text-2">3x + 10 = 23</h6>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-lg-12 col-xl-6">
            <div className="option-border">
              <h6 className="text-2">3x – 23 = 10</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
