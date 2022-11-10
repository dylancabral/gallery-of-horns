import React from "react";
import HornedBeast from "./HornedBeast";
// import data from "./data.json";

import './Main.css'

class main extends React.Component {
  
  render() {
    return(
      <main>
   {this.props.data.map((beast,idx) => 
      <HornedBeast
        _id= {beast._id}
        image_url={beast.image_url}
        title={beast.title}
        description={beast.description}
        keyword={beast.keyword}
        horns={beast.horns}
        key={idx}
        handleOpenModal={this.props.handleOpenModal}

        />
        )
      }

      </main>
    )
  }
}

export default main;
