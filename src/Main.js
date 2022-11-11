import React from "react";
import HornedBeast from "./HornedBeast";
// import data from "./data.json";
import Form from "react-bootstrap/Form";
import './Main.css'

class main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredData: this.props.data || []
    }
  }
  
  handleFilter = (event) => {
    let hornData = '';
    console.log(event.target.value);
    if (event.target.value === 1) {
      hornData = this.props.data.filter(beastHorns => beastHorns.horns === 1)
    } else if (event.target.value === 'two') {
      hornData = this.props.data.filter(beastHorns => beastHorns.horns === 2)
    } else if (event.target.value === 'three') {
      hornData = this.props.data.filter(beastHorns => beastHorns.horns === 3)
    }else if (event.target.value === 'hundred') {
      hornData = this.props.data.filter(beastHorns => beastHorns.horns === 100)
  } else {
    hornData = this.props.data;
  }
  this.setState({filteredData: hornData})
}


  render() {
    return (
      <main>
        <Form>
          <Form.Group>
            <Form.Label htmlFor='selector'>
              Filter by number of horns
            </Form.Label>
            <Form.Select id='selector' onChange={this.handleFilter}>
              <option>All</option>
              <option value='one'>1</option>
              <option value='two'>2</option>
              <option value='three'>3</option>
              <option value='hundred'>100</option>
            </Form.Select>
          </Form.Group>
        </Form>
        {this.state.filteredData.map((beast, idx) =>
          <HornedBeast
            _id={beast.name}
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
