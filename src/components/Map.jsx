import React from 'react'
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin'
		// import './map.css'

        const Map = ({ location, zoomLevel }) => (
            <div className="map">
            <h2 className="map-h2">Come Visit Us At Our Campus</h2>
            
            <div >
            <GoogleMapReact
            bootstrapURLKeys={{ key: '' }}
            defaultCenter={location}
            defaultZoom={zoomLevel}
            >
            <div>
            <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
            />
            </div>
            
            </GoogleMapReact>
            </div>
            </div>
            )

            export default Map