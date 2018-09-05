import React, { Component } from 'react'
import GoogleMapReact from 'google-map-react'
import logo from '../img/marker.png'

const AnyReactComponent = ({ alt }) => <div><img alt={alt} src={logo} className="marker"/></div>;
export default class Map extends Component {
  static defaultProps = {
    center: { lat: 12.972442, lng: 77.580643 },
    zoom: 7.5,
    disableDefaultUI: true
  }
   createMapOptions () {
    var styles = [
        {
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#012621"
                },
                {
                    "weight": 0.8
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels",
            "stylers": [
                {
                    "color": "#012621","fontSize": '8px'
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#0c0000"
                }
            ]
        },
        {
            "featureType": "administrative.province",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "administrative.neighborhood",
            "elementType": "labels.text",
            "stylers": [
                {
                    "color": "#012621"
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": -7
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "all",
            "stylers": [
                {
                    "color": "#06c5a9"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "weight": 0.3
                },
                {
                    "lightness": 10
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#047968"
                },
                {
                    "lightness": "-7"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "visibility": "on"
                },
                {
                    "lightness": -15
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": "7"
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#06c5a9"
                },
                {
                    "lightness": -34
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#333739"
                }
            ]
        }
    ];
    return {
        featureType: "all",
        elementType: "labels.text.fill",
        styles: styles
    }
  }
render() {
    
    return (
      <div className='google-map'>
        <GoogleMapReact
          defaultCenter={ this.props.center }
          defaultZoom={ this.props.zoom }
          options={this.createMapOptions}
          bootstrapURLKeys={{
            key: 'AIzaSyA6yOitEUXdiHPOGhYiqKK8RNP7KCOb7jA', format: 'png', maptype: "roadmap", style: "feature:landscape.natural.landcover%7Celement:geometry.fill%7Ccolor:0x209fdf" }} >
          <AnyReactComponent
            lat={ 12.9712 }
            lng={ 77.7148 }
            src={logo}
          />
          {this.markers}
        </GoogleMapReact>
      </div>
    )
  }
}