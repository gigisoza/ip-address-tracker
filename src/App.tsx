import { useState, useEffect } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import arrow from "./images/icon-arrow.svg";
import background from "./images/pattern-bg-desktop.png";
import icon from "./icon";

type Address = {
  ip: string;
  location: {
    country: string;
    region: string;
    city: string;
    lat: number;
    lng: number;
    timezone: string;
  };
  domains: string[];
  as: {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
  };
  isp: string;
};

function App() {
  const [address, setAddress] = useState<null | Address>(null);
  const [ipAddress, setIpAddress] = useState<string>("");

  useEffect(() => {
    try {
      const getInitialData = async () => {
        const res = await fetch(
          `https://geo.ipify.org/api/v2/country,city?apiKey=${
            import.meta.env.VITE_REACT_APP_API_KEY
          }&ipAddress=192.212.174.101`
        );
        const data = await res.json();
        setAddress(data);
        console.log(data);
      };

      getInitialData();
    } catch (error) {
      console.trace(error);
    }
  }, []);

  return (
    <>
      <section>
        <div className="absolute w-full -z-10">
          <img
            src={background}
            alt="bg-image"
            className="w-full h-80 object-cover"
          />
        </div>
        <article className="p-8">
          <h1 className="text-2xl lg:text-3xl text-center text-white font-bold mb-8">
            IP Address Tracker
          </h1>
          <form className="flex justify-center max-w-xl mx-auto">
            <input
              type="text"
              name="ipaddress"
              id="ipaddress"
              placeholder="Search for any IP Address or domain"
              required
              className="py-2 px-4 rounded-l-lg w-full"
            />
            <button
              type="submit"
              className="bg-black py-4 px-4 hover:opacity-60 rounded-r-lg"
            >
              <img src={arrow} alt="arrow" />
            </button>
          </form>
        </article>

        {address && (
          <>
            <article
              className="bg-white rounded-lg shadow p-8 mx-8 grid grid-cols-1 gap-8 md:grid-cols-2 
          lg:grid-cols-4 max-w-6xl xl:mx-auto text-center md:text-left lg:-mb-16 relative"
              style={{ zIndex: 10000 }}
            >
              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                  Ip Address
                </h2>
                <p className="font-semibold text-slate-900 md:text-2xl xl:text-3xl">
                  {address.ip}
                </p>
              </div>

              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                  location
                </h2>
                <p className="font-semibold text-slate-900 md:text-2xl xl:text-3xl">
                  {address.location.country}, {address.location.city},{" "}
                  {address.location.region}
                </p>
              </div>

              <div className="lg:border-r lg:border-slate-400">
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                  Timezone
                </h2>
                <p className="font-semibold text-slate-900 md:text-2xl xl:text-3xl">
                  UTC {address.location.timezone}
                </p>
              </div>

              <div>
                <h2 className="uppercase text-sm font-bold text-slate-500 tracking-wider mb-3">
                  ISP
                </h2>
                <p className="font-semibold text-slate-900 md:text-2xl xl:text-3xl">
                  {address.isp}
                </p>
              </div>
            </article>

            <MapContainer
              center={[address.location.lat, address.location.lng]}
              zoom={13}
              scrollWheelZoom={true}
              style={{ height: "700px", width: "100vw" }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker
                icon={icon}
                position={[address.location.lat, address.location.lng]}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </>
        )}
      </section>
    </>
  );
}

export default App;
