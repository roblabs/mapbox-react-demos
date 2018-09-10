import React, { Component } from 'react';
import MapGL, {NavigationControl} from 'react-map-gl';

import logo from './logo.svg';
import './App.css';

const TOKEN = '';

const STYLE = "mapbox://styles/mapbox/streets-v9"

const initialState = {
  latitude: 37.785164,
  longitude: -100,
  zoom: 3.5,
  bearing: 0,
  pitch: 0,
  width: 500,
  height: 500
}

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      viewport: initialState,
      popupInfo: null
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
    this._resize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this._resize);
  }

  _resize = () => {
    this.setState({
      viewport: {
        ...this.state.viewport,
        width: this.props.width || window.innerWidth,
        height: this.props.height || window.innerHeight
      }
    });
  };

  _updateViewport = (viewport) => {
    this.setState({viewport});
  }

  render() {

    const {viewport} = this.state;

    return (
      <MapGL
        {...viewport}
        mapStyle={STYLE}
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={TOKEN} >

      </MapGL>
    );
  }
}
