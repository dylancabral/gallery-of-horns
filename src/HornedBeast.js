import React from "react";

import Card from 'react-bootstrap/Card'
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: '',
    };
  }

  HandleClick = () => {
    this.setState({
      favorites: this.state.favorites + '😍'
    });
  };

  render() {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img 
          onClick= {() => this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)} 
          src={this.props.image_url} 
          alt={this.props.title}
          title={this.props.title} 
          />
          <Card.Body className='cardBody'>
          <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>{this.props.description}</Card.Text>
            <Card.Text>{this.state.favorites}</Card.Text>
            {/* <Button onClick={this.HandleFavorite}>favorite</Button> */}
            {/* {this.state.helpMe ? 'I Need Help' : ' '}  */}
            {/* /<Button onClick={this.needsHelp}>I Need Help</Button>  */}
          </Card.Body>
        </Card>
    )
  }
}

export default HornedBeast;
