import { MapContainer } from "react-leaflet/MapContainer";
import { Marker } from "react-leaflet/Marker";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import { Popup } from "react-leaflet/Popup";
import { Icon } from "leaflet";

function Ride() {
  const icon = new Icon({
    iconUrl: "src/assets/pin.png",
    iconSize: [32, 32],
  });
  return (
    <div>
      <div>
        <h2>Get a Ride</h2>
        <input
          type="text"
          name=""
          id=""
        />
        <input
          type="text"
          name=""
          id=""
        />
        <button>Search</button>
      </div>
      <MapContainer
        style={{ height: "500px" }}
        zoom={10}
        center={[17.356831906, 78.471331448]}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}{r}.png"
          //   subdomains={["mt0", "mt1", "mt2", "mt3"]}
        ></TileLayer>
        <Marker
          position={[17.356831906, 78.471331448]}
          icon={icon}
        >
          <Popup>
            <div>A simple marker</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Ride;
