import React from "react";
import data from "../input.json";
import "./Story.css";

const Story = () => {
  return (
    <div className="Story">
      <p>
        There is a story given below with its images. Every image has it's own
        caption.
      </p>

      <div className="story-flex-container">
        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 1</div>
          <img src={data.img0} alt={data.text0} />
          <div className="caption">{data.text0}</div>
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 2</div>
          <img src={data.img1} alt={data.text1} />
          <div className="caption">{data.text1}</div>
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 3</div>
          <img src={data.img2} alt={data.text2} />
          <div className="caption">{data.text2}</div>
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 4</div>
          <img src={data.img3} alt={data.text3} />
          <div className="caption">{data.text3}</div>
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 5</div>
          <img src={data.img4} alt={data.text4} />
          <div className="caption">{data.text4}</div>
        </div>
      </div>

      <h4>
        Entity: <span className="entity">{data.entity}</span>
      </h4>
      <h4>
        Goal: <span className="goal">{data.goal}</span>
      </h4>
    </div>
  );
};

export default Story;
