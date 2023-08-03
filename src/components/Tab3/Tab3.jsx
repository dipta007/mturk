import React from "react";
import Header from "../Header"
import Story from "./Story"
import Output from "./Output"
import allData from "../../data_story_0.8.json";

const Tab3 = () => {
  const random = Math.floor(Math.random() * allData.length);
  let data = allData[random];

  const preprocess = (data) => {
    // replace "//" with ""
    data["Image1&2 - Narrative Facet"] = data["Image1&2 - Narrative Facet"].replaceAll("\\", "");
    data["Image1&2&3 - Narrative Facet"] = data["Image1&2&3 - Narrative Facet"].replaceAll("\\", "");
    return data;
  }

  data = preprocess(data);

  return (
    <>
			<Header />
      <Story data={data}/>
      <Output data={data}/>
		</>
  );
};

export default Tab3;
