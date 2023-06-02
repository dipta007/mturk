import React, { useState } from "react";

const WhichImage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label>
        <input
          type="radio"
          value="image1"
          checked={selectedOption === "image1"}
          onChange={handleOptionChange}
        />
        Image 1
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="image2"
          checked={selectedOption === "image2"}
          onChange={handleOptionChange}
        />
        Image 2
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="image3"
          checked={selectedOption === "image3"}
          onChange={handleOptionChange}
        />
        Image 3
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="image4"
          checked={selectedOption === "image4"}
          onChange={handleOptionChange}
        />
        Image 4
      </label>
      <br />
      <label>
        <input
          type="radio"
          value="image5"
          checked={selectedOption === "image5"}
          onChange={handleOptionChange}
        />
        Image 5
      </label>
    </div>
  );
};

export default WhichImage;
