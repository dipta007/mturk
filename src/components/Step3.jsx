import React, { useState } from "react";
import "./Output.css";

const Step3 = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="box">
      <p className="title">Step 1: Necessary Condition for Goal Completion</p>
      <p>
        Did you change the <span className="entity">entity</span>'s Attribute?
      </p>
      <div>
        <label htmlFor="yesCheckbox">Yes</label>
        <input
          type="checkbox"
          id="yesCheckbox"
          name="yesno"
          value="yes"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="noCheckbox">No</label>
        <input
          type="checkbox"
          id="noCheckbox"
          name="yesno"
          value="no"
          checked={!isChecked}
          onChange={handleCheckboxChange}
        />
      </div>

      {isChecked && (
        <div>
          <p>
            What is the <span className="entity">entity</span>'s new Attribute?
          </p>
        </div>
      )}
    </div>
  );
};

export default Step3;
