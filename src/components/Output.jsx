import React from "react";
import Step1 from "./Step1";
import Step2 from './Step2';
import Rate from "./Rate";
import Step3 from "./Step3";

const Output = () => {
  return (
    <div className="Output">
      <Step1 />
      <div style={{ height: "20px" }}></div>
      <Step2 />
      <div style={{ height: "20px" }}></div>
      <Step3 />
      <div style={{ height: "20px" }}></div>
      <Rate />

      <p className="bold">Done! Please go ahead and Submit.</p>
    </div>
  );
};

export default Output;
