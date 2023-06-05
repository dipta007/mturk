import React from "react";
import "./Output.css";

const Step4 = ({ chosen, step2, step4, handleStep4Change }) => {
  return (
    <div className="box">
      <p className="title">
        Step 4: Infer what enables the{" "}
        <span className="casual">causal connection</span>
      </p>
      {chosen === "attribute" && (
        <p>
          What event is likely to result in the{" "}
          <span className="causal">causal connection</span>, ({step2}) , being
          true?
        </p>
      )}

      {chosen === "event" && (
        <p>
          What is likely to result in the{" "}
          <span className="causal">causal connection</span>, ({step2}) ,
          occurring?
        </p>
      )}
      <textarea cols={80} value={step4} onChange={handleStep4Change} />
    </div>
  );
};

export default Step4;
