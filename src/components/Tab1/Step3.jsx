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
        Step 3: Connect the <span className="entity">Entity</span> to the
        perturbed condition.
      </p>
      <p>
        What can be changed about the <span className="entity">entity</span> that 
        will lead to the perturbed condition? Call this{" "}
        {/* Describe how the entity can lead to the perturbed condition. Call this */}
        the <span className="causal">causal connection</span>.
      </p>
      <p>This can or might contradict the images.</p>
      <textarea cols={80} value={step3} onChange={handleStep3Change} />
      {step2 && step3 && (
        <h2 style={{ textAlign: "center" }}>{step3} &rarr; {step2}</h2>
      )}
      <p>
        Is this <span className="causal">causal connection</span> changing
        attribute of <span className="entity">entity</span> (beer expired) or describing an event (bike broke down)?
      </p>
      <div>
        <input
          type="radio"
          value="attribute"
          checked={selected === "attribute"}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="yesCheckbox">
          Attribute
          {/* Attribute: The condition in step 3 describes some characteristic or
          attribute of someone / something. */}
        </label>
        {"         "}
        {/* <br></br>
        <br></br> */}
        <input
          type="radio"
          value="event"
          checked={selected === "event"}
          onChange={handleCheckboxChange}
        />
        <label htmlFor="noCheckbox">
          Event
          {/* Event: The condition in step 2 describes something someone/something
          does or experiences. */}
        </label>
      </div>

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
