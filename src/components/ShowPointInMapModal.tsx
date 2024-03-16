import { LatLngExpression } from "leaflet";
import { Modal } from "./ui/modal";
import { MapContainer, Marker, TileLayer } from "react-leaflet";
import L from "leaflet";

interface ShowPointInMapModalProps {
  point: LatLngExpression;
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}
const customIcon = L.icon({
  iconUrl: "/pin.png",
  iconSize: [35, 50],
  iconAnchor: [17, 50],
  popupAnchor: [0, -35],
});
const ShowPointInMapModal: React.FC<ShowPointInMapModalProps> = ({
  point,
  isOpen,
  setIsOpen,
}) => {
  return (
    <>
      <Modal
        className="min-w-[50%]"
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <MapContainer center={point} zoom={5}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={point} icon={customIcon}></Marker>
        </MapContainer>
      </Modal>
    </>
  );
};

export default ShowPointInMapModal;
