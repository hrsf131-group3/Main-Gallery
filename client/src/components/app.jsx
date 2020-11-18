import React from 'react';
import axios from 'axios';
import Navbar from './navbar.jsx';
import Details from './details.jsx';
import Gallery from './gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}

  }

  // componentDidMount() {
  //   //udpate to axios get request to get the dummy data from the server side
  //   //this.setState({groceries: dummyData})
  //   axios.get('http://localhost:3000/groceries')
  //   .then((res) => {
  //     console.log(res);
  //     this.setState({groceries: res.data})
  //   })
  //   .catch((err) => {
  //     conosle.log(err);
  //   });
  // }

  render() {
    return (
      <div>
        <Navbar />
        <Details />
        <Gallery />
      </div>
    )
  }
}


export default App;