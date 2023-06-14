import React from "react";
import "./Output.css";

const Step0 = ({ step0, handleStep0Change }) => {
  return (
    <div className="box">
      <p className="title">
        Step 0: Identify the <span className="entity">Entity</span>
      </p>
      <p>
        Identify a visually salient <span className="entity">entity</span>{" "}
        (person/object) necessary to complete the{" "}
        <span className="goal">goal</span>
      </p>
      <textarea cols={80} value={step0} onChange={handleStep0Change} />
    </div>
  );
};

export default Step0;
