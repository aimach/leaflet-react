import { MapContainer, TileLayer, Marker, useMap } from "react-leaflet";

import { useEffect } from "react";
import "./Map.css";
import "leaflet/dist/leaflet.css";
import POI from "./POI";
import { myIcon } from "./icon.ts";
import { SearchControl, OpenStreetMapProvider } from "leaflet-geosearch";
import "../../node_modules/leaflet-geosearch/dist/geosearch.css";

export default function Map() {
  // for search control
  const SearchField = () => {
    const searchControl = new SearchControl({
      notFoundMessage: "Sorry, that address could not be found.",
      provider: new OpenStreetMapProvider(),
      style: "button",
    });
    const map = useMap();
    useEffect(() => {
      map.addControl(searchControl);
      return () => map.removeControl(searchControl);
    }, []);

    return null;
  };
  return (
    <>
      <h2>City Guide Test</h2>
      <MapContainer id="map" center={[43.6, 1.43]} zoom={13} scrollWheelZoom>
        <SearchField />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        />
        <Marker position={[43.6, 1.43]} icon={myIcon}>
          <POI />
        </Marker>
        <Marker position={[43.603, 1.43546435]} icon={myIcon}>
          <POI />
        </Marker>
        <Marker position={[43.604429, 1.443812]} icon={myIcon}>
          <POI />
        </Marker>
        <Marker position={[43.6178, 1.43567]} icon={myIcon}>
          <POI />
        </Marker>
        <Marker position={[43.6125, 1.436]} icon={myIcon}>
          <POI />
        </Marker>
        <Marker position={[43.6122, 1.456]} icon={myIcon}>
          <POI />
        </Marker>
        <Marker position={[43.6254, 1.42]} icon={myIcon}>
          <POI />
        </Marker>
        <Marker position={[43.6159, 1.437863]} icon={myIcon}>
          <POI />
        </Marker>
      </MapContainer>
    </>
  );
}
