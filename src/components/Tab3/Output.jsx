import React, { useState } from "react";
import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Rate from "../Rate";

const Output = ({ data }) => {
  const [selected, setSelected] = useState("");

  const handleCheckboxChange = (event) => {
    setSelected(event.target.value);
  };

  const getSplittedStory = (data) => {
    const story =
      data["Image1&2 - Narrative Facet"] +
      " " +
      data["Image1&2&3 - Narrative Facet"];
    let lines = story.split(". ");
    lines = lines.map((line) => line.trim());
    return lines;
  }

  const lines = getSplittedStory(data);

  const isChanged = (data, step3) => {
    const lines = getSplittedStory(data);

    
    let original = lines.join(" ");
    original = original.replaceAll(/\s/g,'')
    original = original.toLowerCase();

    let changed = step3.join(" ")
    changed = changed.replaceAll(/\s/g,'')
    changed = changed.toLowerCase();

    return original !== changed;
  }

  const [step0, setStep0] = useState("");
  const [step1, setStep1] = useState("");
  const [step2, setStep2] = useState("");
  const [step3, setStep3] = useState(lines);
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
    console.log(event.target.name, event.target.value);
    const index = event.target.name;
    const newStep3 = [...step3];
    newStep3[index] = event.target.value;
    setStep3(newStep3);
  };

  const storyChanged = isChanged(data, step3);

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
        data={data}
      />
      <div style={{ height: "20px" }}></div>
      {step0 && step1 && step2 && storyChanged && (
        <>
          <Step4
            step0={step0}
            step1={step1}
            step2={step2}
            step3={step3}
            lines={lines}
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
