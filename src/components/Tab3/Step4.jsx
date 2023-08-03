import React from "react";
import "./Output.css";
import "./Step4.css"

const Step4 = ({ step0, step1, step2, step3, lines }) => {
  const storyHtml = step3.map((line, index) => (
    line === lines[index] ? <span>{line}.{" "}</span> :
      <mark>
        {line}.{" "}
      </mark>
    ))

  

  return (
    <div className="boxs">
        
      <table style={{ width: "100%"}}>
        <tr>
          <th style={{ width: "60%"}}>Altered Story</th>
          <th>Leads To...</th>
          <th>Which Likely Blocks...</th>
        </tr>
        <tr>
          <td>{storyHtml}</td>
          <td>{step2}</td>
          <td><span className="goal" style={{ color: "red", backgroundColor: "orange"}}>NEED TO GENERATE</span></td>
        </tr>
      </table>
    </div>
  );
};

export default Step4;
