import icon from "./icon";
import { Marker, Popup, useMap } from "react-leaflet";
import { Address } from "./App";
import { useEffect, useMemo } from "react";

export default function Markerposition(props: null | Address) {
  const { address } = props;

  const position = useMemo(() => {
    return [address.location.lat, address.location.lng];
  }, [address.location.lat, address.location.lng]);

  const map = useMap();

  useEffect(() => {
    map.flyTo(position, 13, {
      animate: true,
    });
  }, [map, position]);

  return (
    <>
      <Marker icon={icon} position={position}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  );
}
