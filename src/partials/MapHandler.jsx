import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const MapWithGeoJSON = () => {
  const [geoJsonData, setGeoJsonData] = useState(null);

  useEffect(() => {
    // Fetch GeoJSON data (replace with your own URL or import a local file)
    fetch("/assets/final.geojson")
      .then((response) => response.json())
      .then((data) => setGeoJsonData(data))
      .then((err) => console.log(err));
    console.log(data);
  }, []);

  // Set initial map view (coordinates and zoom level)
  const position = [39.5, -98.35];
  const zoom = 4;

  return (
    <MapContainer
      className="h-100 w-full"
      center={position}
      zoom={zoom}
      style={{ width: "100%", height: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {geoJsonData && <GeoJSON data={geoJsonData} />}
    </MapContainer>
  );
};

export default MapWithGeoJSON;
