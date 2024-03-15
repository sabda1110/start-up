import Link from 'next/link';
import { AiFillAndroid } from 'react-icons/ai';
import { MdOutlineWeb } from 'react-icons/md';
import { GrCodeSandbox } from 'react-icons/gr';
const Main = () => {
  return (
    <div className=" w-[80%]  h-[480px] grid grid-cold-1 lg:grid-cols-2 mt-16 ">
      <section className="flex items-center lg:order-1 order-2 justify-center">
        <div className=" w-[380px] h-[457px] bg-[url('/Images/main.png')] bg-contain flex  rounded-md relative ">
          <Link
            href={'/'}
            className=" absolute top-[1.4rem] rounded-tr-lg shadow-lg  right-6 bg-white p-4 text-[1rem]"
          >
            View Detail
          </Link>
        </div>
      </section>
      <section className=" order-1 lg:order-2 flex flex-col items-center justify-center lg:w-full w-screen">
        <h2 className=" text-[2rem] ml-[80px] font-semibold text-center  text-[#414141]  ">
          What We Do ?
        </h2>

        <div className="main-content   flex flex-col  p-2 sm:w-screen lg:w-[100%]    gap-y-3 mt-5">
          <section className="flex gap-x-8   ">
            <AiFillAndroid size={28} />
            <div className="w-[80%]">
              <h3 className="text-[0.9rem]  text-[#414141] font-semibold">
                Mobile Apps
              </h3>
              <p className="text-[0.7rem] w-[100%] text-[#5E5B5B]">
                Building mobile applications is never easy. P2P lending app ?
                Logistic App ? E-Commerce App ? We have done them all. Done them
                all well. Done them all fast.{' '}
              </p>
            </div>
          </section>
          <section className="flex gap-x-8 ">
            <MdOutlineWeb size={28} />
            <div className="w-[80%]">
              <h3 className="text-[0.9rem]  text-[#414141] font-semibold">
                Web Application
              </h3>
              <p className="text-[0.7rem] w-[100%] text-[#5E5B5B]">
                We can build any web applications you need. A personal blog ?
                Company Profile ? E-commerce ? or any specific functionalities ?
                We got you covered! We have a strong team of web developers that
                can follow your stack and needs.
              </p>
            </div>
          </section>
          <section className="flex gap-x-8 ">
            <GrCodeSandbox size={28} />
            <div className="w-[80%]">
              <h3 className="text-[0.9rem]  text-[#414141] font-semibold">
                UI/UX Design
              </h3>
              <p className="text-[0.7rem] w-[100%] text-[#5E5B5B]">
                All things are designed. A few things are designed well. We try
                to elevate your ideas with great UI/UX design, suited to your
                taste, addressing the right pain points.
              </p>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
};

export default Main;
