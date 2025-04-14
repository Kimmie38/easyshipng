// app/tracking/tracking-map/page.tsx
"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

type Props = {
  location: {
    lat: number;
    lng: number;
  } | null;
};

export default function MyMapComponent({ location }: Props) {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBD9sp8VGqCElzC9D50bJ_bEMwRVHeKLrg", // 🔁 Replace with your real key
  });

  if (!isLoaded) return <div>Loading map...</div>;
  if (!location) return <div>Fetching location...</div>;

  return (
    <GoogleMap
      mapContainerStyle={{ width: "100%", height: "100%" }}
      center={location}
      zoom={15}
    >
      <Marker position={location} />
    </GoogleMap>
  );
}
