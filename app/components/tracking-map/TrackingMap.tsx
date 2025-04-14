"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

interface TrackingMapProps {
  location: {
    lat: 6.5244,
    lng: 3.3792,
  } ;
}

const TrackingMap = ({ location }: TrackingMapProps) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
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
};

export default TrackingMap;
