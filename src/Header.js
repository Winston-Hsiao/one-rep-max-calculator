import React from "react";

export default function Header() {
  return (
    <div className="Header">
      <div className="Container">
        <h1 className="Title">One Rep Max Calculator</h1>
      </div>
      <div className="Container">
        <p>
          Calculate your 1 rep max for squat, bench, and deadlift. Enter weight
          in pounds (lbs), and reps done at that weight. Calculation works best
          in 3-8 rep range.
        </p>
      </div>
    </div>
  );
}
