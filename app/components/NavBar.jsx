"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonBorderStroke from "./UI/ButtonBorderStroke";
import Link from 'next/link';

const NavBar = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["Home", "Company", "Services", "Contact"];

  return (
    <header className='absolute top-0 left-0 w-full bg-white/70 backdrop-blur-lg shadow-md z-50'>
      <nav className='flex justify-between items-center px-8 md:px-16 py-[40px] h-[71.25px]'>
        <section className='flex items-center px-[30px] space-x-2 font-extrabold text-2xl md:text-4xl'>
          <Image src='/assets/images/Easyship 1.png' alt='EASY SHIP NG' width={40} height={40} />
          <h1 className='text-[14.22px] font-heavy sm:text-[16.22px] md:text-[18.22px] lg:text-[20.22px] xl:text-[24px]'>
            EasyShip
          </h1>
        </section>

        <ul className='hidden lg:flex items-center space-x-[55.29px] max-xl:space-x-7 text-[#000]/65 font-bold'>
          {menuItems.map((item) => (
            <li key={item}>
              <button
                className={`px-[16px] py-[3px] rounded-full transition ${
                  activeTab === item
                    ? "text-white  bg-[#1858BE]"
                    : "hover:text-black hover:bg-black/17"
                }`}
                onClick={() => setActiveTab(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>

        <Link href="/signup">
          <button className="bg-[#264AE5] hover:bg-[#1f3bcc] text-white px-6 py-3 rounded-[14px] text-[15px] font-medium">
            SignUp
          </button>
        </Link>
      </nav>

      {/* Mobile menu (always visible on smaller screens) */}
      {isOpen && (
        <div className='lg:hidden bg-white/80 backdrop-blur-lg p-6 space-y-4 shadow-md'>
          <ul className='flex flex-col items-center space-y-4 text-gray-700 font-bold'>
            {menuItems.map((item) => (
              <li key={item} className='w-full text-center'>
                <button
                  className={`w-full px-4 py-2 rounded-full transition ${
                    activeTab === item
                      ? "text-white bg-[#1858BE]"
                      : "hover:text-black hover:bg-black/17"
                  }`}
                  onClick={() => setActiveTab(item)}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
          <div className='flex flex-col space-y-4 mt-4'>
            <ButtonBorderStroke className='h-10 w-full'>
              Get a Quote
            </ButtonBorderStroke>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
