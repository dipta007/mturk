import React from "react";
import "./Output.css";
import WhichImageWithCaption from "./WhichImageWithCaption";

const Step2 = ({ step2, handleStep2Change }) => {
  return (
    <div className="box">
      <p className="title">Step 2: Change the Attribute of the <span className="entity">Entity</span></p>
      <p>
        Perturb the attribute you wrote in Step 1 in a way that will make
        successful <span className="goal">goal</span> completion unlikely.{" "}
        <span className="bold">
          The new attribute may and likely to introduce new information about the{" "}
          <span className="entity">entity</span>.
        </span>
      </p>
      <textarea cols={80} value={step2} onChange={handleStep2Change} />

      <WhichImageWithCaption />
    </div>
  );
};

export default Step2;
