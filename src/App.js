import React from "react";

import Header from './Header';
import HornedBeast from './HornedBeast';
import Footer from "./Footer";
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header/>
        
        <main>
        <HornedBeast name="Horn Guy" description="this is actually a guy in a costume"/>
        <HornedBeast name="Other Horn Guy" description="this is not a guy in a costume, who would have known"/>

        </main>
        <Footer/>
      </>
    )
  }
}

export default App;
