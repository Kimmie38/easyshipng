import Image from "next/image";
import Cards from "./UI/Cards";

const HowEastShipWorks = () => {
  return (
    <main className='mb-[37px]'>
      <h1 className='text-center text-[#000] mt-[76px] text-[27px] font-extrabold max-sm:text-[20px]'>
        How EasyShip Works
      </h1>
      <section className='flex flex-wrap justify-center gap-6 mt-10'>
        <Cards>
          <Image src='/assets/images/find my.png' alt='' width={54} height={54} />
          <h1 className='text-[#000] font-extrabold text-[21px]'>Find Your Product</h1>
          <p className='text-[#000]/65 text-[15px] font-light'>
            Browse and select from trusted vendors.
          </p>
        </Cards>
        <Cards>
          <Image src='/assets/images/place an.png' alt='Place Order' width={54} height={54} />
          <h1 className='text-[#000] font-extrabold text-[21px]'>Place an Order</h1>
          <p className='text-[#000]/65 text-[15px] font-light'>
            Securely pay and confirm your purchase.
          </p>
        </Cards>
        <Cards>
          <Image src='/assets/images/we pick.png' alt='We Pick & Deliver' width={54} height={54} />
          <h1 className='text-[#000] font-extrabold text-[21px]'>We Pick & Deliver</h1>
          <p className='text-[#000]/65 text-[15px] font-light'>
            Safe and fast delivery to your doorstep.
          </p>
        </Cards>
      </section>
    </main>
  );
};

export default HowEastShipWorks;
