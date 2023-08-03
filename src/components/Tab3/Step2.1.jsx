import React from "react";
import "./Output.css";

const Step2_1 = ({ step2, handleStep2_1Change, data }) => {
  return (
    <div className="box">
      <p className="title">Step 3: What Could Lead to this Changed Condition?</p>
      <p>
        Identify an event or property involving the <span className="entity">"{data.entity}"</span> that could lead to the changed condition you wrote in Step 2.
      </p>
      <textarea cols={80} value={step2} onChange={handleStep2_1Change} />
    </div>
  );
};

export default Step2_1;
