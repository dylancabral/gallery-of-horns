import React from 'react'
// import Button  from 'react-bootstrap/Button';
import Modal  from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{

  render(){
    return(
  <Modal
          show={this.state.isModalShown}
          onHide={this.props.onHide}
          className='modal'
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Title>{this.props.title}</Modal.Title>
          <Modal.Body>
            <img className='modalImg' 
            src={this.props.img_url} 
            alt={this.props.title}/>
            <p>{this.props.title}</p>
          </Modal.Body>
        </Modal>

);
  }
}

export default SelectedBeast;
