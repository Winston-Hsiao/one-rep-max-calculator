import React, { useState } from "react";

const Calculator = () => {
  const [weight, setWeight] = useState(null);
  const [reps, setReps] = useState(null);
  const [oneRepMax, setOneRepMax] = useState("...");
  const [lift, setLift] = useState("squat");
  const [errorMessage, setErrorMessage] = useState("");

  const calculateMax = (event) => {
    event.preventDefault();
    if (weight == null || reps == null) {
        setErrorMessage("Please enter values for weight and reps");
    }
    else if (weight <= 0 || reps <= 0) {
        setErrorMessage("Please enter a value greater than 0");
    }
    else if (reps <= 1) {
        setErrorMessage("Please enter # of reps greater than 1");
    }
    else {
        setErrorMessage(null);
        switch (lift) {
            case "squat":
                setOneRepMax(Math.round(weight * (1 + reps / 30) * 10) / 10);
                break;
            case "bench":
                setOneRepMax(Math.round(weight * (1 + reps / 35) * 10) / 10);
                break;
            case "deadlift":
                setOneRepMax(Math.round(weight * (1 + reps / 25) * 10) / 10);
                break;
            default:
                setOneRepMax(0);
        }
    }
  };

  return (
    <div className="Calculator">
      <div className="Error">
        <p className="ErrorMessage">{errorMessage}</p>
      </div>
      <div className="Container">
        <form className="Form" onSubmit={calculateMax}>
          <label className="InputLabel">
            Weight (lbs):
            <br />
            <input
              className="Input"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </label>
          <br />
          <label className="InputLabel">
            # of Reps:
            <br />
            <input
              className="Input"
              type="number"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </label>
          <br />
          <label className="InputLabel">
            Lift:
            <br />
            <select
              className="selectLift"
              value={lift}
              onChange={(e) => setLift(e.target.value)}
            >
              <option value="squat">Squat</option>
              <option value="bench">Bench</option>
              <option value="deadlift">Deadlift</option>
            </select>
          </label>
          <br />
          <button className="btn" type="submit">
            Calculate
          </button>
        </form>
      </div>
      <div className="Container">
        <p className="Max">Your One Rep Max is: {oneRepMax} lbs</p>
      </div>
    </div>
  );
};

export default Calculator;
