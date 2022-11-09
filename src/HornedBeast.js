import React from "react";


class HornedBeast extends React.Component {
  render() {
    console.log(this.props)
    return (
      <>
      <h2>{this.props.title}</h2>
      <img src={this.props.image_url} alt={this.props.description}/>
      <p>{this.props.description}</p>
      </>

/*description
: 
"A unicorn and a narwhal nuzzling their horns"
horns
: 
1
image_url
: 
"http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
keyword
: 
"narwhal"
title
: 
"UniWhal"
_id
: 
1*/
    )
  }
}

export default HornedBeast;
