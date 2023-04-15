import React from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import geojsonFeature from "../assets/updated.geojson";

function Map() {
  return (
    <MapContainer
      center={[39.75621, -104.99404]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <GeoJSON data={geojsonFeature} />
    </MapContainer>
  );
}

export default Map;
