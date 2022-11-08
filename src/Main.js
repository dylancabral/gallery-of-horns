import React from "react";
import HornedBeast from "./HornedBeast";

class main extends React.Component {
  render() {
    return (
      <HornedBeast name="Horn Guy" description="this is actually a guy in a costume"/>
        <HornedBeast name="Other Horn Guy" description="this is not a guy in a costume, who would have known"/>
)}
}

export default main;
