import Image from "next/image";
import Button from "./Button";
import ButtonBorderStroke from "./UI/ButtonBorderStroke";
import Link from "next/link"; // Import Link from next/link for navigation

const HeroSection = () => {
  return (
    <main>
      <section className='relative w-full h-[696.75px] min-h-screen'>
        <Image
          src='/assets/images/blank-cargo-truck-road 1.png'
          alt='Hero'
          fill
          className='object-cover'
          priority
        />

        <div className='absolute inset-0 bg-gradient-to-r from-black/80 to-transparent'></div>

        <section className='absolute top-1/2 left-[5%] sm:left-[10%] md:left-[10%] lg:left-[30%] transform -translate-y-1/2 sm:translate-x-0 lg:-translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] lg:w-[50%] max-w-[650px] text-white z-10'>
          <h1 className='font-semibold text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-tight'>
            Fast, Reliable, and <br /> Hassle-Free Deliveries!
          </h1>
          <p className='font-medium text-gray-300 text-[14px] sm:text-[16px] mt-2'>
            Bridging the gap between vendors and customers with seamless
            logistics solutions. Get your orders delivered swiftly and securely.
          </p>
          <section className='flex flex-col sm:flex-row sm:space-x-4 mt-4'>
          <Link href="/delivery">
            <Button className='w-full sm:w-[180px] md:w-[219px] font-bold h-[44px]'>
              Book Delivery
            </Button>
            </Link>
            <Link href="/track">
            <ButtonBorderStroke className='w-full sm:w-[180px] md:w-[219px] h-[44px] mt-2 sm:mt-0'>
              Track Shipment
            </ButtonBorderStroke>
            </Link>
          </section>
        </section>
      </section>
    </main>
  );
};

export default HeroSection;
