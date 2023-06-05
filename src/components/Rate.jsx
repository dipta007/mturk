import React from "react";

const Rate = () => {
  return (
    <div className="box">
      <p className="title">Final: Rate the Task</p>

      <p>
        How difficult was it to understand the story, and answer the questions?
      </p>

      <div class="rating-container">
        <div style={{ marginBottom: "4px" }}>
          <input type="radio" id="rating1" name="rating" value="1" />
          <label for="rating1">very easy</label>
        </div>

        <div style={{ marginBottom: "4px" }}>
          <input type="radio" id="rating2" name="rating" value="2" />
          <label for="rating2">somewhat easy</label>
        </div>

        <div style={{ marginBottom: "4px" }}>
          <input type="radio" id="rating3" name="rating" value="3" />
          <label for="rating3">neutral (not easy, not difficult)</label>
        </div>

        <div style={{ marginBottom: "4px" }}>
          <input type="radio" id="rating4" name="rating" value="4" />
          <label for="rating4">somewhat difficult</label>
        </div>

        <div style={{ marginBottom: "4px" }}>
          <input type="radio" id="rating5" name="rating" value="5" />
          <label for="rating5">very difficult</label>
        </div>
      </div>
    </div>
  );
};

export default Rate;
