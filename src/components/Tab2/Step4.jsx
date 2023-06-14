import React from "react";
import "./Output.css";

const Step4 = ({ chosen, step3, step4, handleStep4Change }) => {
  return (
    <div className="box">
      <p className="title">
        Step 3: Infer how the attribute of the <span className="entity">entity</span> can be changed from the given story.
      </p>
      {/* {chosen === "attribute" && (
        <p>
          What event is likely to result in the{" "}
          <span className="causal">causal connection</span>, ({step3}) , being
          true?
        </p>
      )}

      {chosen === "event" && (
        <p>
          What is likely to result in the{" "}
          <span className="causal">causal connection</span>, ({step3}) ,
          occurring?
        </p>
      )} */}
      <textarea cols={80} value={step4} onChange={handleStep4Change} />
    </div>
  );
};

export default Step4;
