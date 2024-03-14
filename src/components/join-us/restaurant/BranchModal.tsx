import { LatLngExpression } from "leaflet";
import { IoCloseOutline } from "react-icons/io5";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { FormInput } from "@/components/FormInputs";
import { IBranch, IJoinUsRestaurantForm } from "@/types";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";
import { Modal } from "@/components/ui/modal";
import Button from "@/components/ui/button";
import countries from "world-countries";

interface BranchModalProps {
  setData: (
    updateFunction: (prev: IJoinUsRestaurantForm) => IJoinUsRestaurantForm
  ) => void;
  branch: IBranch;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}
interface LocationMarkerProps {
  position: LatLngExpression;
  setPosition: (value: number[]) => void;
}
const customIcon = L.icon({
  iconUrl: "/pin.png",
  iconSize: [35, 50],
  iconAnchor: [17, 50],
  popupAnchor: [0, -35],
});
const LocationMarker: React.FC<LocationMarkerProps> = ({
  position,
  setPosition,
}) => {
  const mapObject = useMap();

  useEffect(() => {
    if (position) {
      mapObject.flyTo(position, mapObject.getZoom());
    }
  }, [position, mapObject]);
  const map = useMapEvents({
    click(e) {
      setPosition([e.latlng.lat, e.latlng.lng]);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}></Marker>
  );
};

const BranchModal: React.FC<BranchModalProps> = ({
  branch,
  isModalOpen,
  setData,
  setIsModalOpen,
}) => {
  const text = useTranslations("joinUsPage");
  const [newBranch, setNewBranch] = useState<IBranch>(branch);
  const handelUpdateBranch = () => {
    if (newBranch) {
      setData((prev) => {
        const newData = prev;
        const index = newData.branches.findIndex(
          (branch) => branch.id === newBranch.id
        );
        newData.branches[index] = newBranch;
        return newData;
      });
      setIsModalOpen(false);
    }
  };
  const sortedCountries = useMemo(() => {
    return countries.sort((a, b) => {
      if (a.name.common === "Saudi Arabia") {
        return -1;
      }
      if (b.name.common === "Saudi Arabia") {
        return 1;
      }
      if (a.name.common < b.name.common) {
        return -1;
      }
      if (a.name.common > b.name.common) {
        return 1;
      }
      return 0;
    });
  }, []);
  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => {
        setIsModalOpen(false);
      }}
      className="md:w-[700px]"
    >
      <div className="flex justify-between mb-4">
        <h1 className="text-xl font-bold">{text("please_select_location")}</h1>
        <button className="w-6 h-6 rounded-lg text-lg   flex items-center justify-center border border-black">
          <IoCloseOutline />
        </button>
      </div>
      <MapContainer center={[newBranch.late, newBranch.long]} zoom={5}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker
          setPosition={(data: number[]) => {
            setNewBranch((prev) => ({ ...prev, late: data[0], long: data[1] }));
          }}
          position={[newBranch.late, newBranch.long]}
        />
      </MapContainer>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handelUpdateBranch();
        }}
        className="mt-6"
      >
        <div className="mb-4">
          <label className="sm:text-lg font-semibold mb-2 block">
            {text("country")}
          </label>
          <p className="text-sm text-gray-500 mb-2">
            {text("select_country_paragraph")}
          </p>
          <select
            onChange={(e) => {
              const [late, long] = e.target.value.split(",");
              setNewBranch((prev) => ({ ...prev, late: +late, long: +long }));
            }}
            className="flex items-center gap-4 w-full px-6 py-3 rounded-md bg-main-gray"
          >
            <option value="" disabled selected>
              {text("country")}
            </option>
            {sortedCountries.map((country, index) => (
              <option key={index} value={country.latlng.join(",")}>
                {country.name.common}
              </option>
            ))}
          </select>
        </div>
        <FormInput
          input={{
            slug: "late",
            name: "late",
            type: "number",
            required: true,
            min: -90,
            value: newBranch.late,
            max: 90,
          }}
          className="bg-main-gray"
          setData={setNewBranch}
        />
        <FormInput
          input={{
            slug: "long",
            name: "long",
            type: "number",
            required: true,
            value: newBranch.long,
            min: -180,
            max: 180,
          }}
          className="bg-main-gray"
          setData={setNewBranch}
        />
        {(newBranch.late < -90 || newBranch.late > 90) && (
          <p className="text-center text-main-red font-semibold mb-4">
            {text("late_error")}
          </p>
        )}
        {(newBranch.long < -180 || newBranch.long > 180) && (
          <p className="text-center text-main-red font-semibold mb-4">
            {text("long_error")}
          </p>
        )}
        <FormInput
          input={{
            slug: "branch_name",
            name: "name",
            type: "text",
            required: true,
            value: newBranch.name,
          }}
          className="bg-main-gray"
          setData={setNewBranch}
        />
        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
          <FormInput
            input={{
              slug: "from",
              name: "from",
              type: "time",
              value: newBranch.from,
              required: true,
            }}
            className="bg-main-gray"
            setData={setNewBranch}
          />
          <FormInput
            input={{
              slug: "to",
              name: "to",
              type: "time",
              value: newBranch.to,
              required: true,
            }}
            className="bg-main-gray"
            setData={setNewBranch}
          />
        </div>
        <Button className="w-3/4 mx-auto block" type="submit" isRounded>
          {text("save")}
        </Button>
      </form>
    </Modal>
  );
};

export default BranchModal;
// import { IoCloseOutline } from "react-icons/io5";

// import { FormInput } from "@/components/FormInputs";
// import { IBranch, IJoinUsRestaurantForm } from "@/types";
// import { useEffect, useState } from "react";
// import { useTranslations } from "next-intl";
// import { Modal } from "@/components/ui/modal";
// import Button from "@/components/ui/button";
// import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

// interface BranchModalProps {
//   setData: (
//     updateFunction: (prev: IJoinUsRestaurantForm) => IJoinUsRestaurantForm
//   ) => void;
//   branch: IBranch;
//   isModalOpen: boolean;
//   setIsModalOpen: (value: boolean) => void;
// }

// const options = {
//   disableDefaultUI: true,
//   zoomControl: true,
// };
// const mapContainerStyle = {
//   width: "100%",
//   height: "400px",
// };

// const LocationPicker = ({ position, onLocationChange }) => {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: "AIzaSyAw0V83QXS7QmALw9cwPHYRWmbUeeW8vsE",
//   });

//   const handleMapClick = (event) => {
//     onLocationChange({ lat: event.latLng.lat(), lng: event.latLng.lng() });
//   };

//   if (loadError) return <div>Error loading maps</div>;
//   if (!isLoaded) return <div>Loading Maps</div>;

//   return (
//     <GoogleMap
//       mapContainerStyle={mapContainerStyle}
//       zoom={8}
//       center={position}
//       options={options}
//       onClick={handleMapClick}
//     >
//       <Marker position={position} />
//     </GoogleMap>
//   );
// };

// const BranchModal: React.FC<BranchModalProps> = ({
//   branch,
//   isModalOpen,
//   setData,
//   setIsModalOpen,
// }) => {
//   const text = useTranslations("joinUsPage");
//   const [newBranch, setNewBranch] = useState<IBranch>(branch);
//   const handelUpdateBranch = () => {
//     if (newBranch) {
//       setData((prev) => {
//         const newData = prev;
//         const index = newData.branches.findIndex(
//           (branch) => branch.id === newBranch.id
//         );
//         newData.branches[index] = newBranch;
//         return newData;
//       });
//       setIsModalOpen(false);
//     }
//   };
//   return (
//     <Modal
//       isOpen={isModalOpen}
//       onClose={() => {
//         setIsModalOpen(false);
//       }}
//       className="md:w-[700px]"
//     >
//       <div className="flex justify-between mb-4">
//         <h1 className="text-xl font-bold">{text("please_select_location")}</h1>
//         <button className="w-6 h-6 rounded-lg text-lg   flex items-center justify-center border border-black">
//           <IoCloseOutline />
//         </button>
//       </div>
//       <LocationPicker
//         position={{ lat: newBranch.late, lng: newBranch.long }}
//         onLocationChange={({ lat, lng }) =>
//           setNewBranch((prev) => ({ ...prev, late: lat, long: lng }))
//         }
//       />

//       <form
//         onSubmit={(e) => {
//           e.preventDefault();
//           handelUpdateBranch();
//         }}
//         className="mt-6"
//       >
//         <FormInput
//           input={{
//             slug: "late",
//             name: "late",
//             type: "number",
//             required: true,
//             min: -90,
//             value: newBranch.late,
//             max: 90,
//           }}
//           className="bg-main-gray"
//           setData={setNewBranch}
//         />
//         <FormInput
//           input={{
//             slug: "long",
//             name: "long",
//             type: "number",
//             required: true,
//             value: newBranch.long,
//             min: -180,
//             max: 180,
//           }}
//           className="bg-main-gray"
//           setData={setNewBranch}
//         />
//         {(newBranch.late < -90 || newBranch.late > 90) && (
//           <p className="text-center text-main-red font-semibold mb-4">
//             {text("late_error")}
//           </p>
//         )}
//         {(newBranch.long < -180 || newBranch.long > 180) && (
//           <p className="text-center text-main-red font-semibold mb-4">
//             {text("long_error")}
//           </p>
//         )}
//         <FormInput
//           input={{
//             slug: "branch_name",
//             name: "name",
//             type: "text",
//             required: true,
//             value: newBranch.name,
//           }}
//           className="bg-main-gray"
//           setData={setNewBranch}
//         />
//         <div className="grid sm:grid-cols-2 gap-x-8 gap-y-0">
//           <FormInput
//             input={{
//               slug: "from",
//               name: "from",
//               type: "time",
//               value: newBranch.from,
//               required: true,
//             }}
//             className="bg-main-gray"
//             setData={setNewBranch}
//           />
//           <FormInput
//             input={{
//               slug: "to",
//               name: "to",
//               type: "time",
//               value: newBranch.to,
//               required: true,
//             }}
//             className="bg-main-gray"
//             setData={setNewBranch}
//           />
//         </div>
//         <Button className="w-3/4 mx-auto block" type="submit" isRounded>
//           {text("save")}
//         </Button>
//       </form>
//     </Modal>
//   );
// };

// export default BranchModal;
