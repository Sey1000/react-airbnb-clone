import React from 'react';
import './marker.css';

class Marker extends React.Component {
  render() {
    return(
      <div className={this.props.selected ? "marker selected" : "marker"}>
        {this.props.text}€
      </div>
    );
  }
}

export default Marker;