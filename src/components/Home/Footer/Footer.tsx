import Image from 'next/image';
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaVoicemail
} from 'react-icons/fa';
import { MdOutlineMail } from 'react-icons/md';

const Footer = () => {
  return (
    <div className=" mt-20  ">
      <section className=" grid grid-cols-2 lg:grid-cols-3 items-center ">
        <div className="  flex flex-col col-span-2 order-3 lg:order-1 lg:col-span-1 mt-6 lg:mt-1 items-center">
          <h3 className=" text-[1.2rem] font-semibold text-[#414141]">
            Location
          </h3>
          <section className="w-[360px] h-[148px] relative mt-5 ">
            <Image
              src={'/Images/pekanbaru.png'}
              alt="location"
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              fill
            />
            <div className=" absolute w-[220px] h-[75px] p-4 bg-white left-3 top-3 shadow-lg">
              <h4 className="text-[1.2rem] font-semibold text-[#414141]">
                Whatsab
              </h4>
              <p className="text-[0.8rem] font-semibold text-[#414141]">
                Jl.Sudirman, Pekanbaru
              </p>
            </div>
          </section>
        </div>
        <div className=" flex flex-col items-center lg:order-2">
          <h3 className=" text-[1.2rem] font-semibold text-[#414141]">
            Company
          </h3>
          <ul className="  relativ -ml-8   mt-5 flex flex-col gap-y-3 text-[#9F9F9F] font-medium ">
            <li> - Jurnal</li>
            <li> - Article</li>
            <li> - UI/UX</li>
            <li> - Website</li>
          </ul>
        </div>
        <div className=" flex flex-col items-center lg:order-3">
          <h3 className=" text-[1.2rem] font-semibold text-[#414141]">
            Contact Us
          </h3>
          <div className="  relativ     mt-5 flex flex-col gap-y-3  ">
            <section className="flex items-center gap-x-6 ">
              <FaFacebookSquare size={30} />
              <p className="text-[#9F9F9F] text-[0.9rem]">Whatsab</p>
            </section>
            <section className="flex items-center gap-x-6 ">
              <FaInstagramSquare size={30} />
              <p className="text-[#9F9F9F] text-[0.9rem]">TumuTuku</p>
            </section>
            <section className="flex items-center gap-x-6 ">
              <FaVoicemail size={30} className="" />
              <p className="text-[#9F9F9F] text-[0.9rem]">whatsab@gmail.com</p>
            </section>
          </div>
        </div>
      </section>
      <section className="w-screen mt-5  p-4 shadow-[0_35px_60px_-15px_rgba(0,0,0)]">
        <h2 className=" font-semibold text-[18px]">TumuTuku | Whatsab 2024</h2>
      </section>
    </div>
  );
};

export default Footer;
