import React from 'react';
import axios from 'axios';
import Navbar from './navbar.jsx';
import Details from './details.jsx';
import Gallery from './gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: []
    }
  }
  componentDidMount() {
    //udpate to axios get request to get the dummy data from the server side
    //this.setState({groceries: dummyData})
    axios.get(`${window.location}db`)
    //http://localhost:8040/listings/1/
    .then((res) => {
      this.setState({listing: res.data[0]})
      console.log('res.data', res.data[0])
    })
    .catch((err) => {
      console.log(err);
    });
  }
getListing(id) {
  let listing = this.state;
  console.log('get listing function:', listing)
}

  render() {
    return (
      <div>
        <Navbar />
        <Details listing={this.state.listing}/>
        <Gallery listing={this.state.listing}/>
      </div>
    )
  }
}


export default App;