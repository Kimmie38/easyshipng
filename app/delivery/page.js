'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Listbox } from '@headlessui/react';
import Link from "next/link";
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';

import EasyShip from '/assets/images/Easyship 1 (1).png';
import Dashboard from '/assets/images/Dashboard.png';
import Delivery from '/assets/images/Delivery.png';
import Payment from '/assets/images/Payment.png';
import Person from '/assets/images/Person.png';
import Search from '/assets/images/Search.png';

const states = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa", "Benue", "Borno",
  "Cross River", "Delta", "Ebonyi", "Edo", "Ekiti", "Enugu", "FCT - Abuja", "Gombe",
  "Imo", "Jigawa", "Kaduna", "Kano", "Katsina", "Kebbi", "Kogi", "Kwara", "Lagos",
  "Nasarawa", "Niger", "Ogun", "Ondo", "Osun", "Oyo", "Plateau", "Rivers", "Sokoto",
  "Taraba", "Yobe", "Zamfara"
];

const DeliveryPage = () => {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState('');

  return (
    <div className="flex flex-col md:flex-row min-h-screen w-full font-inter bg-[#F7F8FA] overflow-x-hidden">
      {/* Sidebar */}
      <aside className="w-full md:w-[80px] bg-white shadow-md flex md:flex-col items-center justify-between md:justify-around px-4 py-4 md:py-6 md:order-first order-last">
        <Image src={EasyShip} alt="EasyShip Logo" className="w-8 h-8 md:w-auto md:h-auto" />
        <div className="flex md:flex-col gap-4">
          <div className="text-center">
            <Image src={Dashboard} alt="Dashboard" />
            <h3 className="text-[11px] text-black/75">Dashboard</h3>
          </div>
          <div className="text-center">
            <Image src={Payment} alt="Payment" />
            <h3 className="text-[11px] text-black/75">Payment</h3>
          </div>
          <div className="text-center">
            <Image src={Delivery} alt="Delivery" />
            <h3 className="text-[11px] text-black/75">Delivery</h3>
          </div>
        </div>
        <Image src={Person} alt="User" className="w-6 h-6 md:w-auto md:h-auto" />
      </aside>

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-8 md:px-16 pt-6 pb-10 overflow-auto">
        {/* Top bar */}
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-10 gap-4">
          <div className="text-sm text-[#A0A3BD] font-medium">
            <span>Overview</span>
            <span className="text-[#4E4B66] mx-1">•</span>
            <span className="text-[#4E4B66] font-semibold">Tracking</span>
          </div>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Search"
              className="pl-4 pr-10 py-2 border border-[#D9DBE9] rounded-lg text-sm w-full text-[#4E4B66] focus:outline-none"
            />
            <div className="absolute right-3 top-2.5 w-4 h-4">
              <Image src={Search} alt="Search" />
            </div>
          </div>
        </div>

        {/* Booking Section */}
        <div className="bg-white rounded-[20px] shadow-[0_8px_16px_rgba(0,0,0,0.06)] px-6 sm:px-10 py-10 max-w-5xl mx-auto">
          <h1 className="text-2xl sm:text-[28px] font-semibold text-center mb-3 tracking-tight">
            <span className="text-[#264AE5]">BOOK A DELIVERY</span>
          </h1>
          <p className="text-center text-[#6E7191] text-sm sm:text-[15px] mb-9 max-w-md mx-auto leading-relaxed">
            Pick where you’re leaving from and where you’re going using the dropdowns,
            then choose your travel date
          </p>

          {/* Dropdowns + Date Picker */}
          <div className="flex flex-col md:flex-row md:justify-center gap-5 mb-8">
            {/* From Dropdown */}
            <Listbox value={from} onChange={setFrom}>
              <div className="relative w-full md:w-[240px]">
                <Listbox.Button className="h-[55px] w-full border border-[#D9DBE9] rounded-[14px] bg-white py-[16px] pl-[18px] pr-10 text-sm text-[#4E4B66] text-left shadow-sm">
                  {from || "From"}
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[14px] bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {states.map((state) => (
                    <Listbox.Option
                      key={state}
                      className={({ active }) =>
                        `cursor-pointer select-none py-2 pl-4 pr-4 ${active ? 'bg-[#EDF0FD] text-[#264AE5]' : 'text-[#4E4B66]'}`
                      }
                      value={state}
                    >
                      {state}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* To Dropdown */}
            <Listbox value={to} onChange={setTo}>
              <div className="relative w-full md:w-[240px]">
                <Listbox.Button className="h-[55px] w-full border border-[#D9DBE9] rounded-[14px] bg-white py-[16px] pl-[18px] pr-10 text-sm text-[#4E4B66] text-left shadow-sm">
                  {to || "To"}
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                </Listbox.Button>
                <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-[14px] bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {states.map((state) => (
                    <Listbox.Option
                      key={state}
                      className={({ active }) =>
                        `cursor-pointer select-none py-2 pl-4 pr-4 ${active ? 'bg-[#EDF0FD] text-[#264AE5]' : 'text-[#4E4B66]'}`
                      }
                      value={state}
                    >
                      {state}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </div>
            </Listbox>

            {/* Date Picker */}
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full md:w-[240px] border border-[#D9DBE9] rounded-[14px] px-[18px] py-[16px] text-sm text-[#4E4B66] bg-white shadow-sm"
            />
          </div>

          {/* Submit Button */}
          <Link href="/complete">
            <button
              className="w-full sm:w-[280px] h-[53px] bg-[#264AE5] hover:bg-[#1f3bcc] text-white py-[16px] rounded-[14px] flex items-center justify-center gap-2 m-auto text-[15px] font-medium transition"
            >
              Book Now
            </button>
          </Link>
        </div>
      </main>
    </div>
  );
};

export default DeliveryPage;
