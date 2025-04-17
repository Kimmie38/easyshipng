"use client";

import React, { useState } from "react";
import Link from "next/link";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="flex flex-col lg:flex-row min-h-screen w-full overflow-hidden">

      {/* Left Section */}
      <div className="w-full flex flex-col justify-center items-center bg-gray-100 px-6 md:px-10 flex-grow">
        {/* Logo */}
        <section className="flex flex-col items-center lg:mr-12 mb-6 md:mb-10">
          <div
            className="bg-no-repeat bg-contain"
            style={{
              backgroundImage: "url('/assets/images/Easyship_111900.svg')",
              width: "120px",
              height: "100px",
            }}
          ></div>

          <h1 className="text-xl md:text-2xl font-bold text-[#2b2c4f] mt-6 text-center">
            Welcome to EasyShip.
          </h1>
          <p className="text-[#2b2c4f]/65 text-sm md:text-base text-center mt-1">
            Sign up to continue
          </p>
        </section>

        {/* Form */}
        <div className="w-full max-w-sm">
          {/* Email */}
          <div className="relative w-full mb-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full h-[40px] text-black placeholder:text-sm py-2 pl-11 pr-3 border border-[#9e9e9e]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div
              className="absolute top-2.5 left-3 w-5 h-5 bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/assets/images/iconamoon_profile-fill.png')" }}
            ></div>
          </div>

          {/* Password */}
          <div className="relative w-full mb-3">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full h-[40px] text-black placeholder:text-sm py-2 pl-11 pr-3 border border-[#9e9e9e]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 mb-4"
            />
            <div
              className="absolute top-2.5 left-3 w-5 h-5 bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/assets/images/majesticons_key.png')" }}
            ></div>
            <div
              className="absolute top-2.5 right-3 w-5 h-5 bg-no-repeat bg-contain cursor-pointer"
              style={{
                backgroundImage: showPassword
                  ? "url('/assets/images/eye-open.png')"
                  : "url('/assets/images/majesticons_eye-off.png')",
              }}
              onClick={() => setShowPassword(!showPassword)}
            ></div>
          </div>

          {/* Confirm Password */}
          <div className="relative w-full mb-3">
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm password"
              className="w-full h-[40px] text-black placeholder:text-sm py-2 pl-11 pr-3 border border-[#9e9e9e]/60 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div
              className="absolute top-2.5 left-3 w-5 h-5 bg-no-repeat bg-contain"
              style={{ backgroundImage: "url('/assets/images/majesticons_key.png')" }}
            ></div>
            <div
              className="absolute top-2.5 right-3 w-5 h-5 bg-no-repeat bg-contain cursor-pointer"
              style={{
                backgroundImage: showConfirmPassword
                  ? "url('/assets/images/eye-open.png')"
                  : "url('/assets/images/majesticons_eye-off.png')",
              }}
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            ></div>
          </div>

          {/* Terms */}
          <div className="flex items-center my-4 text-sm">
            <input type="checkbox" className="mr-2" />
            <span className="text-[#7f7f7f]">
              I agree with the
              <a href="#" className="text-[#2e3192] font-bold ml-1">
                terms and conditions
              </a>
            </span>
          </div>

          {/* Sign Up */}
          <Link href="./" className="text-[#2e3192] font-bold">
            <button className="w-full h-[40px] bg-gradient-to-r from-[#00aeef] to-[#2e3192] text-white font-semibold rounded-xl">
              Sign up
            </button>
          </Link>

          {/* Already have account */}
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account?{" "}
            <Link href="/login" className="text-[#2e3192] font-bold">
              Log in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side Image (desktop only) */}
      <div
        className="hidden lg:block lg:min-w-2/5 bg-no-repeat bg-cover bg-right h-screen"
        style={{ backgroundImage: "url('/assets/images/emmybest.png')" }}
      ></div>
    </div>
  );
};

export default SignUp;
