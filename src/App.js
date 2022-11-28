import React from "react";
import Header from './Header.js';
import Main from "./Main.js";
import Footer from "./Footer.js";
import './App.css';
import SelectedBeast from "./SelectedBeast.js";
import data from "./data.json";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShown: false,
      title: '',
      image_url:'',
      description:'',
      horns:''
    }
  }
  handleCloseModal = () => {
    this.setState({
      isModalShown: false
    })
  }

  handleOpenModal = (title,src,description,alt, horns) => {
    this.setState({
      isModalShown: true,
      title: title,
      image_url: src,
      description: description,
      alt: alt,
      horns:horns
    })
  }



  render() {
    return (
      <>
      <p>{this.state.isModalShown}</p>
        <Header />
        <Main
        data={data}
          handleOpenModal={this.handleOpenModal}
        />
        <Footer />
        <SelectedBeast
        isModalShown={this.state.isModalShown}
        onHide={this.handleCloseModal}
        title={this.state.title}
        image_url={this.state.image_url}
        description={this.state.description}
        >

        </SelectedBeast>

        
      </>
    );
  }
};

export default App;
