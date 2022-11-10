import React from "react";
import HornedBeast from "./HornedBeast";
import data from "./data.json";
import './Main.css'

class main extends React.Component {
  render() {
   let beastsArr = data.map((beast) => 
      <HornedBeast
        class= {beast._id}
        image_url={beast.image_url}
        title={beast.title}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        />
    );
    // console.log(beastsArr);
    return (
      <main>
      {beastsArr}
      </main>
    )
  }
}

export default main;
