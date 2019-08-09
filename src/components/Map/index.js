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

function Map() {
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
      {bootcampData.bootcamps.map(camp => {
        console.log(categoryUrl.default);
        return (
          <Marker
            position={{
              lat: camp.geometry.coordinates[0],
              lng: camp.geometry.coordinates[1]
            }}
            onClick={() => {
              setSelectedCamp(camp);
            }}
            icon={{
              url: categoryUrl.default[camp.properties.catagory],
              scaledSize: new window.google.maps.Size(50, 50)
            }}
          />
        );
      })}

      {selectedCamp && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedCamp(null);
          }}
          position={{
            lat: selectedCamp.geometry.coordinates[0],
            lng: selectedCamp.geometry.coordinates[1]
          }}
        >
          <div>
            <img src={selectedCamp.properties.logo} width="100" height="auto" />
            <h2>{selectedCamp.properties.name}</h2>
            <p>{selectedCamp.properties.description}</p>
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
        height: "35vh"
      }}
    >
      <Typography
        style={{
          paddingTop: 100,
          paddingBottom: 100,
          textAlign: "left",
          fontWeight: "bold",
          color: "rgb(179, 179, 179)"
        }}
        variant="h3"
      >
        Up Coming Bootcamps
      </Typography>
      <MapWrapped
        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyAGc1xiJdOewKwtysI7MBfk3D77y3n6Yq8`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100%` }} />}
        mapElement={<div style={{ height: `100%` }} />}
      />
    </div>
  );
}
