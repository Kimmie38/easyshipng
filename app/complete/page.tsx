"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const BookingComplete = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 30,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 30); // 30 days from now

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate.getTime() - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      if (difference < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md text-center w-full">
        <h1 className="text-2xl font-bold text-green-600 mb-4">🎉 Booking Complete!</h1>
        <p className="text-gray-700 mb-6">
          Shipment delivery and tracking will be available in:
        </p>
        <div className="flex justify-center space-x-4 mb-6 text-[#2b2c4f] font-semibold">
          <div className="text-center">
            <div className="text-3xl">{timeLeft.days}</div>
            <div className="text-xs uppercase text-gray-500">Days</div>
          </div>
          <div className="text-center">
            <div className="text-3xl">{timeLeft.hours}</div>
            <div className="text-xs uppercase text-gray-500">Hours</div>
          </div>
          <div className="text-center">
            <div className="text-3xl">{timeLeft.minutes}</div>
            <div className="text-xs uppercase text-gray-500">Minutes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl">{timeLeft.seconds}</div>
            <div className="text-xs uppercase text-gray-500">Seconds</div>
          </div>
        </div>

        <Link
          href="./"
          className="inline-block mt-2 px-6 py-2 bg-gradient-to-r from-[#00aeef] to-[#2e3192] text-white rounded-xl font-semibold"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default BookingComplete;
