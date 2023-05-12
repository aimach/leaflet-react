import L from "leaflet";
import marker from "../assets/rest.png";

const myIcon = new L.Icon({
  iconUrl: marker,
  iconRetinaUrl: marker,
  popupAnchor: [-0, -30],
  iconSize: [40, 40],
});

export { myIcon };

// const iconRestaurant = new L.Icon({
//   iconUrl: require("../assets/restaurant.svg"),
//   iconRetinaUrl: require("../assets/restaurant.svg"),
//   // iconAnchor: null,
//   // popupAnchor: null,
//   // shadowUrl: null,
//   // shadowSize: null,
//   // shadowAnchor: null,
//   iconSize: new L.Point(60, 75),
//   className: "leaflet-div-icon",
// });
