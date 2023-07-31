import React from "react";
import "./Output.css";
import WhichImage from "./WhichImage";

const Step3 = ({
  step2,
  selected,
  handleCheckboxChange,
  step3,
  handleStep3Change,
}) => {
  return (
    <div className="box">
      <p className="title">
        Step 3: Write Alternate Stroy
      </p>
      <p>
        Write the alternate story with minimal changes to the original one.
      </p>
      <p>This can or might contradict the images.</p>
      <textarea cols={80} rows={16} value={step3} onChange={handleStep3Change} />
      {/* {step2 && step3 && (
        <h2 style={{ textAlign: "center" }}>{step3} &rarr; {step2}</h2>
      )} */}

      {/* {selected === "attribute" && (
        <div>
          <p>What image(s) would be most affected by this causal connection?</p>
          <WhichImage />
        </div>
      )}

      {selected === "event" && (
        <div>
          <p>What image(s) would be most affected by this causal connection?</p>
          <WhichImage />
        </div>
      )} */}
    </div>
  );
};

export default Step3;
