import React from 'react';
import axios from 'axios';
import styles from '../styles/app.css';
import Redirect from './Redirect.jsx';
import Navbar from './navbar.jsx';
import Details from './details.jsx';
import Gallery from './gallery.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listing: []
    }
    this.nextListing = this.nextListing.bind(this);
    this.previousListing = this.previousListing.bind(this);
  }

  componentDidMount() {
    //udpate to axios get request to get the dummy data from the server side
    //this.setState({groceries: dummyData})
    axios.get(`${window.location}homesData`)
    //http://localhost:8040/listings/1/
    .then((res) => {
      this.setState({listing: res.data})
    })
    .catch((err) => {
      console.log(err);
    });
  }

  nextListing(event) {
    let url = window.location.href
    console.log('HREF: ', url, '     ',this.state.listing[0].listing_id);
    let id = this.state.listing[0].listing_id
    if (id === 100) {
      id = 1;
    } else {
      id++;
    }
    window.location.assign(`http://localhost:8040/gallery/${id}/`)
    console.log('URL: ', `http://localhost:8040/gallery/${id}/`)
    axios.get(`http://localhost:8040/gallery/${id}/db`)
    //http://localhost:8040/listings/1/
    .then((res) => {
      this.setState({listing: res.data})
    })
    .catch((err) => {
      console.log(err);
    });
  }
  previousListing(event) {
    let url = window.location.href
    console.log('HREF: ', url, '     ',this.state.listing[0].listing_id);
    let id = this.state.listing[0].listing_id - 1;
    if (id === 0) {
      id = 100;
    }
    window.location.assign(`http://localhost:8040/gallery/${id}/`)
    console.log('URL: ', `http://localhost:8040/gallery/${id}/`)
    axios.get(`http://localhost:8040/gallery/${id}/db`)
    //http://localhost:8040/listings/1/
    .then((res) => {
      this.setState({listing: res.data})
    })
    .catch((err) => {
      console.log(err);
    });
  }


  render() {
    if (this.state.listing.length === 0) {
      return <div><Redirect /></div>
    }

    return (
      <div>
        <Navbar />
        <Details listing={this.state.listing}/>
        <Gallery listing={this.state.listing}/>
        <div className={styles['navbar']}>
          <div className={styles['nav-btn-box']}>
          <button className={styles['nav-btn']} onClick={this.previousListing}>Previous</button>
          </div>
          <div className={styles['nav-btn-box']}>
            <button className={styles['nav-btn']} onClick={this.nextListing}>Next</button>
          </div>
        </div>
      </div>
    )
  }
}


export default App;