import React, { useState, useEffect } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";
import * as bootcampData from "./bootcamps.json";
import mapStyles from "./mapStyles";
import * as categoryUrl from "./categoryUrl.json";
import Typography from "@material-ui/core/Typography";


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
        console.log(camp.fields.coordinates)
        return (
        <Marker
          position={{
            lat: camp.fields.coordinates.geoPointValue.latitude, 
            lng: camp.fields.coordinates.geoPointValue.longitude
          }}
          onClick={() => {
            setSelectedCamp(camp);
          }}
          icon={{
            url: categoryUrl.default[camp.fields.category.stringValue],
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
            lat: selectedCamp.fields.coordinates.geoPointValue.latitude, 
            lng: selectedCamp.fields.coordinates.geoPointValue.longitude
          }}
        >
          <div>
            <img src={selectedCamp.fields.logo.stringValue} width="100" height="auto" />
            <h2>{selectedCamp.fields.name.stringValue}</h2>
            <p>{selectedCamp.fields.description.stringValue}</p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}

const MapWrapped = withScriptjs(withGoogleMap(Map));

export default function App() {
  return (
    <div
      style={{
        paddingBottom: 50,
        margin: "auto",
        paddigLeft: 0,
        width: "80%",
        height: "60vh"
      }}
    >
      <Typography
        id="map-location"
        style={{
          paddingTop: 100,
          paddingBottom: 50,
          textAlign: "left",
          fontWeight: "bold",
          color: "rgb(179, 179, 179)"
        }}
        variant="h3"
      >
        Location
      </Typography>
      <MapFromApi
      />
    </div>
  );
}
