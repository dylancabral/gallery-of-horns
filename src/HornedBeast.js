import React from "react";
import img1 from "./images/Horns2.jpg";
// import img2 from "./images/beast-with-horns.jpg";


class HornedBeast extends React.Component {
  render() {
    console.log(this.props)
    return (
      <div>
      <h2>{this.props.name}</h2>
      
      <img src={img1} alt='horned beast'title="Horn Guy"/>
      <p>{this.props.description}</p>
      </div>
    )
  }
}

export default HornedBeast;
