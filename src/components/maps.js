import React from 'react';
import { GoogleMap, withScriptjs, withGoogleMap } from 'react-google-maps';

function MapSet(){
    const Venezia = [45.434341, 12.315515];
    const Gallarate = [45.660198, 8.793480];
    return(
        <GoogleMap 
            defaultZoom={14}
            defaultCenter={{lat :45.434341, lng :12.315515}}>
        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(MapSet));

function Map(){
    return(
        <div>
            <div style= {{ width: '100vw', height: '100vh' }}>
            <WrappedMap 
                googleMapURL ={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAPS_API}`}
                loadingElement  = {<div style={{ height:'100%' }}/>}
                containerElement = {<div style={{ height:'100%' }}/>}
                mapElement = {<div style={{ height:'100%' }}/>}
                />
            </div>
        </div>
    )
}


export default Map;
