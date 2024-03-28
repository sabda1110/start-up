import { FaPlay } from 'react-icons/fa6';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className=" h-[572px] w-screen bg-[#F8F8F8]  grid grid-cols-1 lg:grid-cols-2">
      <section className="hero__desc flex flex-col items-center justify-center">
        <h1 className=" font-semibold text-[64px] text-[#414141]">We Code </h1>
        <h1 className=" font-semibold text-[64px] text-[#414141]">We Deliver</h1>
        <div className="desc__play items-center  gap-5 w-[60%] grid grid-cols-3 ">
          <Link
            href={'/dashboard-user'}
            className="w-[50px] h-[50px] sm:ml-5 lg:ml-20 bg-[#9FD685] rounded-full shadow-lg shadow-green-100 flex items-center justify-center"
          >
            <FaPlay size={25} className="text-white ml-1" />
          </Link>
          <p className=" col-span-2 text-[12px] lg:text-[1rem]  text-[#414141] text-start">
            Whatsab berspesialisasi dalam pengembangan seluler berperforma tinggi dan aplikasi web.
          </p>
        </div>
      </section>
      <section className="hero__img relative hidden  lg:flex items-center justify-center">
        <Image src={'/Images/vektor.png'} className=" " width={598} height={363} alt="Vektor" />
        <Image
          src={'/Images/hero.png'}
          width={656}
          height={525}
          className=" absolute w-[656px] h-[525px]"
          alt="Vektor"
        />
      </section>
    </div>
  );
};

export default Hero;
