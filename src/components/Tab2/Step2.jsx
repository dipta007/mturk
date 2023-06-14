import React from "react";
import "./Output.css";

const Step2 = ({ step2, handleStep2Change }) => {
  return (
    <div className="box">
      <p className="title">Step 2: Change the Condition</p>
      <p>
        Perturb the condition you wrote in Step 1 in a way that will make
        successful <span className="goal">goal</span> completion unlikely.{" "}
        <span className="bold">
          The new condition may introduce new information about the{" "}
          <span className="entity">entity</span>, but it should not directly
          contradict what is shown about the{" "}
          <span className="entity">entity</span> in the images.
        </span>
      </p>
      <textarea cols={80} value={step2} onChange={handleStep2Change} />
    </div>
  );
};

export default Step2;
