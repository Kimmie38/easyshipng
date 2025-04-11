import Image from 'next/image';
import { useState, useEffect } from 'react';

const Sidebar = () => {
  const [isMobile, setIsMobile] = useState(null); // ✅ JS-friendly

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    if (typeof window !== "undefined") {
      handleResize();
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isMobile === null) return null; // Prevents flicker

  return (
    <>
      {isMobile ? (
        // Mobile Bottom Navbar
        <div className="fixed bottom-0 left-0 w-full bg-white shadow-lg p-4 flex justify-around items-center border-t z-50">
          <NavItem href="#" src="/icons/dashs.svg" label="Dashboard" />
          <NavItem href="#" src="/icons/tracks.svg" label="Tracking" />
          <NavItem href="#" src="/icons/pay.svg" label="Payment" />
          <NavItem href="#" src="/icons/delivery.svg" label="Delivery" />
          <div className="flex flex-col items-center">
            <Image src="/icons/frame.svg" alt="User" width={32} height={32} className="rounded-full border border-gray-300" />
            <p className="text-xs font-bold mt-1">Jane A.</p>
          </div>
        </div>
      ) : (
        // Desktop Sidebar
        <div className="w-20 md:w-16 lg:w-20 h-auto md:h-screen flex flex-col bg-white text-gray-900 shadow-lg border-r border-gray-200 overflow-y-auto transition-all duration-300">
          <div className="mt-8 mb-12 flex justify-center">
            <Image src="/icons/logo.svg" alt="Logo" width={40} height={40} />
          </div>

          <nav className="flex flex-col space-y-8 w-full flex-grow mt-12">
            <NavItem href="#" src="/icons/dashs.svg" label="Dashboard" />
            <NavItem href="#" src="/icons/tracks.svg" label="Tracking" />
            <NavItem href="#" src="/icons/pay.svg" label="Payment" />
            <NavItem href="#" src="/icons/delivery.svg" label="Delivery" />
          </nav>

          <div className="pb-8 text-center mt-auto md:mt-10">
            <Image src="/icons/frame.svg" alt="User" width={32} height={32} className="mx-auto rounded-full border border-gray-300" />
            <p className="text-xs font-bold mt-2">Jane A.</p>
          </div>
        </div>
      )}
    </>
  );
};

const NavItem = ({ href, src, label }) => (
  <a href={href} className="flex flex-col items-center text-gray-500 hover:text-blue-600 font-semibold">
    <Image src={src} alt={label} width={32} height={32} />
    <span className="text-xs mt-1 hidden md:block">{label}</span>
  </a>
);

export default Sidebar;
