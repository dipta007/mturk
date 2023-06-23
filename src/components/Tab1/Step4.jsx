import React from "react";
import "./Output.css";

const Step4 = ({ chosen, step2, step3, step4, handleStep4Change }) => {
  return (
    <div className="box">
      <p className="title">
        Step 4: Infer what enables the{" "}
        <span className="casual">causal connection</span>
      </p>
      {chosen === "attribute" && (
        <p>
          What event is likely to result in the{" "}
          <span className="causal">causal connection</span>, ({step3}) ,
          occurring?
          <br></br>
          <br></br>
          This event can be something that someone/something does in the past.
        </p>
      )}

      {chosen === "event" && (
        <p>
          What event is likely to result in the{" "}
          <span className="causal">causal connection</span>, ({step3}) ,
          occurring?
          <br></br>
          <br></br>
          This event can be something that someone/something does in the past.
        </p>
      )}
      <textarea cols={80} value={step4} onChange={handleStep4Change} />

      {step2 && step3 && step4 && (
        <h2 style={{ textAlign: "center" }}>
          {step4} &rarr; {step3} &rarr; {step2}
        </h2>
      )}
    </div>
  );
};

export default Step4;
