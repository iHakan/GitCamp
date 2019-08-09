import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import mapStyles from "./mapStyles";
import * as categoryUrl from "./categoryUrl.json";




class MapFromApi extends React.Component {
  constructor() {
    super()
    this.fetchMapData()
  }
  state = {
    responseJson: null
  }
  async fetchMapData() {
    const response= await fetch("https://firestore.googleapis.com/v1/projects/bootcamp-7278d/databases/(default)/documents/bootcamps/")
    const responseJson = await response.json()
    this.setState({ responseJson: responseJson })
  } 
  render () {
    if (this.state.responseJson == undefined) {
      return <h1>Bekle ...</h1>
    }
    return <MapWrapped
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAGc1xiJdOewKwtysI7MBfk3D77y3n6Yq8`}
    loadingElement={<div style={{ height: `100%` }} />}
    containerElement={<div style={{ height: `100%` }} />}
    mapElement={<div style={{ height: `100%` }} />}
     data={this.state.responseJson}
     />
    
  }
}


function Map(props) {
  const [selectedCamp, setSelectedCamp] = useState(null);


  useEffect(() => {
    const listener = e => {
      if (e.key === "Escape") {
        setSelectedCamp(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <GoogleMap
      defaultZoom={6}
      defaultCenter={{ lat: 39.108888, lng: 35.584347 }}
      defaultOptions={{ styles: mapStyles }}
    >
      {props.data.documents.map(camp => {
        return (
        <Marker
          position={{
            lat: camp.fields.geometry.mapValue.fields.position.mapValue.fields.lat.stringValue,
            lng: camp.fields.geometry.mapValue.fields.position.mapValue.fields.lng.stringValue
          }}
          onClick={() => {
            setSelectedCamp(camp);
          }}
          icon={{
            url: categoryUrl.default[camp.fields.properties.mapValue.fields.category.stringValue],
            scaledSize: new window.google.maps.Size(50, 50)
          }}
        />
      )})}

      {selectedCamp &&  (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCamp(null);
          }}
          position={{
            lat: selectedCamp.fields.geometry.mapValue.fields.position.mapValue.fields.lat.stringValue,
            lng: selectedCamp.fields.geometry.mapValue.fields.position.mapValue.fields.lng.stringValue
          }}
        >
          <div>
            <img src={selectedCamp.fields.properties.mapValue.fields.logo.stringValue} width="100" height="auto" />
            <h2>{selectedCamp.fields.properties.mapValue.fields.name.stringValue}</h2>
            <p>{selectedCamp.fields.properties.mapValue.fields.description.stringValue}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div style={{ width: "100vw", height: "70vh" }}>
      <MapFromApi
      />
    </div>
  );
}
