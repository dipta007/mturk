import React, { useState } from "react";
import "./Output.css";
import WhichImage from "./WhichImage";

const Step3 = () => {
  const [selected, setSelected] = useState('');

  const handleCheckboxChange = (event) => {
    setSelected(event.target.value);
  };
  return (
    <div className="box">
      <p className="title">
        Step 3: What is the effect on <span className="entity">Entity</span>'s
        attribute?
      </p>
      <p>
        Did the changed condition affect <span className="entity">Entity</span>
        's Attribute or Event?
      </p>
      <div>
        <label htmlFor="yesCheckbox">Attribute</label>
        <input
          type="checkbox"
          value="attribute"
          checked={selected == 'attribute'}
          onChange={handleCheckboxChange}
        />

        <label htmlFor="noCheckbox">Event</label>
        <input
          type="checkbox"
          value="event"
          checked={selected == 'event'}
          onChange={handleCheckboxChange}
        />
      </div>

      {(selected === 'attribute') && (
        <div>
          <p>
            Which event can can cause that change in{" "}
            <span className="entity">entity</span>'s Attribute?
          </p>
          <WhichImage />
          <div style={{ padding: "10px" }} />
          <textarea placeholder="What is changed in the event?" cols={40} />
        </div>
      )}

      {(selected === 'event') && (
        <div>
          <p>
            Which event has been changed?
          </p>
          <WhichImage />
          <div style={{ padding: "10px" }} />
          <textarea placeholder="What is the changed event?" cols={40} />
        </div>
      )}
    </div>
  );
};

export default Step3;
