import React from "react";
import "./Output.css";

const Step2 = () => {
  return (
    <div className="box">
      <p className="title">Step 2: Change the Condition</p>
      <p>
        In your own words, change the previously found condition that will make successful{" "}
        <span className="goal">goal</span> completion impossible. 
        <span className="bold">The new condition should not 
        violet the <span className="entity">entity</span> as shown in images.</span>
      </p>
      <textarea />
    </div>
  );
};

export default Step2;
