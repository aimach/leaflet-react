import { Popup } from "react-leaflet";
import capitole from "../assets/capitole.jpg";
import marker from "../assets/rest.png";
import { useState } from "react";

export default function POI() {
  const [favorite, setFavorite] = useState(false);
  const [style, setStyle] = useState("notFavorite");
  const handleClickFavorite = () => {
    setFavorite(!favorite);
    favorite ? setStyle("isFavorite") : setStyle("notFavorite");
  };

  const divStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  return (
    <Popup>
      <img src={capitole} alt="POI" width="100%" />
      <h3>Title</h3>
      <p>Address</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
        eligendi explicabo iure ullam? Asperiores provident alias, pariatur
        veniam rem soluta, debitis quaerat repellendus impedit fugiat modi
        labore, sit illum aperiam?
      </p>
      <div style={divStyle}>
        <div>
          <img src={marker} width="20px" /> Restaurant
        </div>
        <div id="favorite" className={style} onClick={handleClickFavorite} />
      </div>
    </Popup>
  );
}
