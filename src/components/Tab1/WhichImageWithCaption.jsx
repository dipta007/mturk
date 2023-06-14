import React, { useState } from "react";

const WhichImageWithCaption = () => {
  const [images, setImages] = useState({
    image1: false,
    image2: false,
    image3: false,
    image4: false,
    image5: false,
  });

  const handleImageChange = (event) => {
    const { name, checked } = event.target;
    setImages((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

	const [imageCaptions, setImageCaptions] = useState({
		image1: "",
		image2: "",
		image3: "",
		image4: "",
		image5: "",
	});

	const handleImageCaptionChange = (event) => {
		const { name, value } = event.target;
		setImageCaptions((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

  return (
    <div>
      <div style={{ height: "20px" }}></div>
      <p className="title">Which image(s) are affected by it? Write the alternate captions for those</p>
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
			{images.image1 && (
        <>
				  <textarea placeholder="Write an alternate caption for Image 1" cols={80} name="image1" value={imageCaptions.image1} onChange={handleImageCaptionChange} />
          <br />
        </>
			)}
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
      {images.image2 && (
        <>
				  <textarea placeholder="Write an alternate caption for Image 2" cols={80} name="image2" value={imageCaptions.image2} onChange={handleImageCaptionChange} />
          <br />
        </>
			)}
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
      {images.image3 && (
        <>
				  <textarea placeholder="Write an alternate caption for Image 3" cols={80} name="image3" value={imageCaptions.image3} onChange={handleImageCaptionChange} />
          <br />
        </>
			)}
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
      {images.image4 && (
        <>
				  <textarea placeholder="Write an alternate caption for Image 4" cols={80} name="image4" value={imageCaptions.image4} onChange={handleImageCaptionChange} />
          <br />
        </>
			)}
      <label>
        <input
          type="checkbox"
          name="image5"
          checked={images.image5}
          onChange={handleImageChange}
        />
        Image 5
      </label>
      <br />
      {images.image5 && (
        <>
				  <textarea placeholder="Write an alternate caption for Image 5" cols={80} name="image5" value={imageCaptions.image5} onChange={handleImageCaptionChange} />
          <br />
        </>
			)}
    </div>
  );
};

export default WhichImageWithCaption;
