import React, { useState } from "react";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Rate from "../Rate";

const Output = () => {
  const [selected, setSelected] = useState("");

  const handleCheckboxChange = (event) => {
    setSelected(event.target.value);
  };

  const [step0, setStep0] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState("");
  const [step4, setStep4] = useState("");

  const handleStep0Change = (event) => {
    setStep0(event.target.value);
  };
  const handleStep1Change = (event) => {
    setStep1(event.target.value);
  };
  const handleStep2Change = (event) => {
    setStep2(event.target.value);
  };
  const handleStep3Change = (event) => {
    setStep3(event.target.value);
  };
  const handleStep4Change = (event) => {
    setStep4(event.target.value);
  };

  console.log(step1, step2, step3, step4);

  return (
    <div className="Output">
      <Step0 step0={step0} handleStep0Change={handleStep0Change} />
      <div style={{ height: "20px" }}></div>
      <Step1 step1={step1} handleStep1Change={handleStep1Change} />
      <div style={{ height: "20px" }}></div>
      <Step2 step2={step2} handleStep2Change={handleStep2Change} />
      <div style={{ height: "20px" }}></div>
      <Step3
        step2={step2}
        selected={selected}
        handleCheckboxChange={handleCheckboxChange}
        step3={step3}
        handleStep3Change={handleStep3Change}
      />
      <div style={{ height: "20px" }}></div>
      {selected && selected.length > 0 && (
        <>
          <Step4
            step2={step2}
            chosen={selected}
            step3={step3}
            step4={step4}
            handleStep4Change={handleStep4Change}
          />
          <div style={{ height: "20px" }}></div>
        </>
      )}
      <Rate />

      <p className="bold">Done! Please go ahead and Submit.</p>
    </div>
  );
};

export default Output;
