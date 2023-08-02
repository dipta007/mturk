/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Story.css";

const Story = ({ data }) => {
  // let img1 = `file:///Users/dipta007/Library/CloudStorage/GoogleDrive-sroydip1@umbc.edu/My%20Drive/RA/multimodal/mturk/src/images/${data["Item ID#"]}_1.jpg`
  const img1 = `${process.env.PUBLIC_URL}/images/${data["Item ID#"]}_1.jpg`
  const img2 = `${process.env.PUBLIC_URL}/images/${data["Item ID#"]}_2.jpg`
  const img3 = `${process.env.PUBLIC_URL}/images/${data["Item ID#"]}_3.jpg`
  const story = data["Image1&2 - Narrative Facet"] + " " + data["Image1&2&3 - Narrative Facet"]
  return (
    <div className="Story">
      <p>
        In the following HIT, you will be presented with a collection of
        images and a story that is, in some manner, related to that goal.
        You will identify the <span className="goal">goal</span> of the story,
        and then identify the condition(s) that could prevent that goal and the
        counterfactual story that would result from that condition. 
        To aid this task, you will be given a
        specific <span className="entity">entity</span> (generally, person or
        object), and be asked to identify the goal and how either
        specific characteristics of that entity, or events that the entity may
        be involved in, could lead to the goal not being completed.
      </p>

      <div className="story-flex-container">
        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 1</div>
          <img src={img1} />
          {/* <div className="caption">{data.text0}</div>
          <div className="caption-sis">{data.sis0}</div> */}
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 2</div>
          <img src={img2} />
          {/* <div className="caption">{data.text1}</div>
          <div className="caption-sis">{data.sis1}</div> */}
        </div>

        <div style={{ padding: "10px" }}>
          <div className="image-no">Image 3</div>
          <img src={img3} />
          {/* <div className="caption">{data.text2}</div>
          <div className="caption-sis">{data.sis2}</div> */}
        </div>

      </div>

      <h4>
        Entity: <span className="entity">{data.entity}</span>
      </h4>

      <p style={{
        border: "1px solid black",
        padding: "10px",
        borderRadius: "5px",
        backgroundColor: "#f2f2f2",
        lineHeight: "1.5"
      }}>
        <span style={{ fontWeight: "bold" }}>Story:</span>{" "}
        {story}
      </p>
      {/* <h4>
        Goal: <span className="goal">{data.goal}</span>
      </h4> */}
    </div>
  );
};

export default Story;
