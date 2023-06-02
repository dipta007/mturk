import React from "react";
import "./Output.css";

const Step1 = () => {
  return (
    <div className="box">
      <p className="title">Step 1: Necessary Condition for Goal Completion</p>
      <p>
        In your own words, find out an condition related to the{" "}
        <span className="entity">entity</span> that is necessary for successful{" "}
        <span className="goal">goal</span> completion
      </p>
      <textarea />
    </div>
  );
};

export default Step1;
