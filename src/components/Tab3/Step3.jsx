import React from "react";
import "./Output.css";
import WhichImage from "./WhichImage";

const Step3 = ({
  step2,
  selected,
  handleCheckboxChange,
  step3,
  handleStep3Change,
  data,
}) => {
  return (
    <div className="box">
      <p className="title">Step 3: Write Alternate Stroy</p>
      <p>Write the alternate story with minimal changes to the original one.</p>
      <p>This can or might contradict the images.</p>
      {step3 &&
        step3.map((line, index) => (
          <div
            style={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <p style={{ marginRight: "10px" }}>Line {index + 1}</p>{" "}
            <textarea
              cols={100}
              rows={2}
              value={line}
              onChange={handleStep3Change}
              name={index}
            />
            <div style={{ height: "20px" }}></div>
          </div>
        ))}
    </div>
  );
};

export default Step3;
