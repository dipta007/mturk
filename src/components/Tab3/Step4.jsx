import React from "react";
import "./Output.css";
import "./Step4.css"

const Step4 = ({ step0, step1, step2, step3, lines }) => {
  const storyHtml = step3.map((line, index) => (
      <span
        style={{
          color: line === lines[index] ? "green" : "red",
        }}
      >
        {line}.{" "}
      </span>
    ))

  

  return (
    <div className="boxs">
        
      <table style={{ width: "100%"}}>
        <tr>
          <th style={{ width: "60%"}}>Story</th>
          <th>Leads To</th>
          <th>Blocks</th>
        </tr>
        <tr>
          <td>{storyHtml}</td>
          <td>{step2}</td>
          <td>{step0}</td>
        </tr>
      </table>
    </div>
  );
};

export default Step4;
