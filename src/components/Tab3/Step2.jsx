import React from "react";
import WhichImage from "./WhichImage";
import "./Output.css";

const Step2 = ({ step2, handleStep2Change, data }) => {
  return (
    <div className="box">
      <p className="title">Step 2: Change the Condition</p>
      <p>
        Change the condition you wrote in Step 1 in
        a way that will make successful <span className="goal">goal</span> completion unlikely. While the new
        condition may introduce new information about the <span className="entity">"{data.entity}"</span>, and it may
        directly/indirectly contradict what is shown about the <span className="entity">"{data.entity}"</span> in the
        images, <span className="bold">please keep that new or potentially contradictory information
        plausible given the rest of the story and other images.</span>
      </p>
      <textarea cols={80} value={step2} onChange={handleStep2Change} />

      <WhichImage />
    </div>
  );
};

export default Step2;
