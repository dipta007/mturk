import React from "react";
import "./Output.css";

const Step1 = ({ step1, handleStep1Change }) => {
  return (
    <div className="box">
      <p className="title">Step 1: Necessary Condition for Goal Completion</p>
      <p>
        Find a condition that can be tied to the{" "}
        <span className="entity">entity</span> and necessary for{" "}
        <span className="goal">goal</span> completion
      </p>
      <textarea cols={80} value={step1} onChange={handleStep1Change} />
    </div>
  );
};

export default Step1;
