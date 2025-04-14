// app/components/tracking-map/page.tsx
"use client";

import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Explicitly declare the Props interface
interface TrackingMapProps {
  location: {
    lat: number;
    lng: number;
  } | null;
}

// Define the component with the correct typing
const TrackingMap: React.FC<TrackingMapProps> = ({ location }) => {
  // Use the API key from environment variables
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",  // Correct way to access the API key
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
