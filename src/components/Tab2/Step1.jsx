import React from "react";
import "./Output.css";

const Step1 = ({ step1, handleStep1Change }) => {
  return (
    <div className="box">
      <p className="title">Step 1: Necessary Attribute for Goal Completion</p>
      <p>
        Choose one of the physical attributes of the{" "}
        <span className="entity">entity</span> that is visible on the images and
        is necessary for <span className="goal">goal</span> completion.
      </p>
      <textarea cols={80} value={step1} onChange={handleStep1Change} />
    </div>
  );
};

export default Step1;
