import React from "react";
import allData from "../../input.json";
import "./Story.css";

const Story = () => {
  const random = Math.floor(Math.random() * allData.length);
  const data = allData[random];
  return (
    <div className="Story">
      <p>
        In the following HIT, you will be presented with the high-level
        description of a <span className="goal">goal</span>; a collection of
        images that are, in some manner, related to that goal; and captions
        describing each image. You will identify what could prevent that goal
        from being completed successfully. To aid this task, you will be given a
        specific <span className="entity">entity</span> (generally, person or
        object) related to that goal, and be asked to identify how either
        specific characteristics of that entity, or events that the entity may
        be involved in, could lead to the goal not being completed.
      </p>

      <div className="story-flex-container">
        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 1</div>
          <img src={data.img0} alt={data.text0} />
          <div className="caption">{data.text0}</div>
          <div className="caption-sis">{data.sis0}</div>
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 2</div>
          <img src={data.img1} alt={data.text1} />
          <div className="caption">{data.text1}</div>
          <div className="caption-sis">{data.sis1}</div>
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 3</div>
          <img src={data.img2} alt={data.text2} />
          <div className="caption">{data.text2}</div>
          <div className="caption-sis">{data.sis2}</div>
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 4</div>
          <img src={data.img3} alt={data.text3} />
          <div className="caption">{data.text3}</div>
          <div className="caption-sis">{data.sis3}</div>
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 5</div>
          <img src={data.img4} alt={data.text4} />
          <div className="caption">{data.text4}</div>
          <div className="caption-sis">{data.sis4}</div>
        </div>
      </div>

      {/* <h4>
        Entity: <span className="entity">{data.entity}</span>
      </h4> */}
      <h4>
        Goal: <span className="goal">{data.goal}</span>
      </h4>
    </div>
  );
};

export default Story;
