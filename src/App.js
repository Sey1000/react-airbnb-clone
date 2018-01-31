import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import './App.css';
import Flat from "./components/flat";
import Marker from "./components/marker";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      allFlats: [],
      selectedFlat: null,
      search: "",
    }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/lewagon/flats-boilerplate/master/flats.json")
      .then(response => response.json())
      .then((data) => {
        this.setState({
          flats: data,
          allFlats: data,
        })
      })
  }

  selectFlat = (flat) => {
    console.log(flat);
    this.setState({
      selectedFlat: flat
    });
  };

  handleSearch = (e) => {
    this.setState({
      search: e.target.value,
      flats: this.state.allFlats.filter((flat) => new RegExp(e.target.value, 'i').exec(flat.name)),
    });
  };

  render() {
    const center = this.state.selectedFlat ?
      { lat: this.state.selectedFlat.lat, lng: this.state.selectedFlat.lng} :
      { lat: 48.8566, lng: 2.3522};

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <input type="text" placeholder="Search.." value={this.state.search} onChange={this.handleSearch}/>
          </div>
          <div className="flats">
            {this.state.flats.map((flat, i) => {
              return <Flat
                flat={flat}
                key={i}
                selectFlat={this.selectFlat} />
            })}
          </div>
        </div>
        <div className="map">
          <GoogleMapReact
            center={center}
            zoom={11}
          >
            {this.state.flats.map((flat, i) => {
              return <Marker lat={flat.lat} lng={flat.lng} text={flat.price} key={i} selected={flat === this.state.selectedFlat} />
            })}
          </GoogleMapReact>
        </div>
      </div>
  );
  }
}

export default App;
