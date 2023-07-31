import React from "react";
import "./Output.css";

const Step0 = ({ step0, handleStep0Change }) => {
  return (
    <div className="box">
      <p className="title">
        Step 0: Identify the <span className="goal">Goal</span>
      </p>
      <p>
        Identify a visually-salient goal related to the <span className="entity">entity</span>.
      </p>
      <textarea cols={80} value={step0} onChange={handleStep0Change} />
    </div>
  );
};

export default Step0;
