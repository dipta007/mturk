import React from "react";
import "./Output.css";

const Step1 = ({ step1, handleStep1Change, data }) => {
  return (
    <div className="box">
      <p className="title">
        Step 1: Identify a Condition Necessary for Goal Completion
      </p>
      <p>
        Identify a condition that is necessary for <span className="goal">goal</span> completion. This
        condition can be an action or a property / characteristic, but it must
        be connected to the <span className="entity">"{data.entity}", e.g., some action involving the "{data.entity}"{" "}
        or some physical, emotional, or situational characteristic of the
        "{data.entity}"</span>.
      </p>
      <textarea cols={80} value={step1} onChange={handleStep1Change} />
    </div>
  );
};

export default Step1;
