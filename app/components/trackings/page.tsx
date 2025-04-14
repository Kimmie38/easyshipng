// 'use client'; 
// import { useEffect, useState } from "react";
// import dynamic from "next/dynamic";
// import TopBar from "../components/TopBar";
// import Sidebar from "../components/Sidebar";

// const MyMapComponent = dynamic(() => import("../components/trackings/tracking-map/TrackingMap"), { ssr: false });

// export default function TrackingPage() {
//   const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         const res = await fetch("http://localhost:3001/location");
//         const data = await res.json();
//         setLocation(data);
//       } catch (error) {
//         console.error("Error fetching location:", error);
//       }
//     };

//     fetchLocation();
//     const interval = setInterval(fetchLocation, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="min-h-screen flex bg-gray-200">
//       <Sidebar />
//       <div className="flex-1 p-6 pb-24 md:pb-6">
//         <div className="text-sm text-gray-500 mb-4">Overview / <span className="font-semibold text-gray-800">Tracking</span></div>
//         <TopBar />
//         <div className="flex flex-col lg:flex-row gap-6">
//           <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden w-full lg:w-2/3 h-[500px]">
//             {/* Use default fallback location if location is null */}
//             <MyMapComponent location={location || { lat: 6.5244, lng: 3.3792 }} />
//             <div className="absolute bottom-4 left-4 bg-black/50 text-white p-3 rounded-lg backdrop-blur-md">
//               <div className="text-lg font-semibold">ESYSP 34HSBKI32</div>
//               <div className="text-sm">Expected delivery on 12 March 2025</div>
//               <div className="mt-1 px-2 py-1 text-xs bg-white text-black rounded-full w-fit">
//                 In transit
//               </div>
//             </div>
//           </div>

//           <div className="bg-white rounded-2xl shadow-lg p-6 w-full lg:w-1/3 flex flex-col justify-between mt-6 lg:mt-0">
//             <div>
//               <h3 className="text-xl font-bold mb-2 text-gray-800">Delivery Info</h3>
//               <div className="space-y-3 text-sm text-gray-700">
//                 <div>
//                   <p className="text-gray-500">Tracking ID</p>
//                   <p className="font-medium text-gray-900">ESYSP 34HSBKI32</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Status</p>
//                   <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-blue-600 rounded-full">
//                     In Transit
//                   </span>
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Expected Delivery</p>
//                   <p className="font-medium">12 March 2025</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Sender</p>
//                   <p className="font-medium">EasyShip Warehouse, Abuja</p>
//                 </div>
//                 <div>
//                   <p className="text-gray-500">Recipient</p>
//                   <p className="font-medium">Jane A. — Jos, Nigeria</p>
//                 </div>

//                 {location && (
//                   <div>
//                     <p className="text-gray-500">Live Coordinates</p>
//                     <p className="font-medium">
//                       {location.lat.toFixed(5)}, {location.lng.toFixed(5)}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//             <div className="mt-6">
//               <button className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
//                 Contact Support
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
