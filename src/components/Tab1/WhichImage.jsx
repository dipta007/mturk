import React, { useState } from "react";

const WhichImage = () => {
  const [images, setImages] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
  });

  const handleImageChange = (event) => {
    const { name, checked } = event.target;
    console.log(name, checked);
    setImages((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="image1"
          checked={images.image1}
          onChange={handleImageChange}
        />
        Image 1
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="image2"
          checked={images.image2}
          onChange={handleImageChange}
        />
        Image 2
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="image3"
          checked={images.image3}
          onChange={handleImageChange}
        />
        Image 3
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="image4"
          checked={images.image4}
          onChange={handleImageChange}
        />
        Image 4
      </label>
      <br />
      <label>
        <input
          type="checkbox"
          name="image5"
          checked={images.image5}
          onChange={handleImageChange}
        />
        Image 5
      </label>
    </div>
  );
};

export default WhichImage;
