import React from "react";
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'
import './HornedBeast.css'

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: '',
      
      // helpMe:0

    };
  }


  HandleClick = () => {
    this.setState({
      favorites: this.state.favorites + '😍'
    });
  };

  /* needsHelp =()=>{
     this.setState({
       helpMe:true
     });
   };
 
   wasHelped = () =>{
     this.setState({
       helpMe:false
     });
   };
 */
  render() {
    /*console.log(this.props)*/
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Img variant='top' 
          src={this.props.image_url} 
          alt={this.props.title}
          title={this.props.title} 
          onClick= {() => this.props.handleOpenModal(this.props.title, this.props.image_url, this.props.description)} 
          />
          <Card.Body className='cardBody'>
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
