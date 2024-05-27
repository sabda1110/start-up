import { IoMdPerson } from 'react-icons/io';
import { MdOutlineMailOutline, MdPhoneEnabled } from 'react-icons/md';
import { IoDocuments } from 'react-icons/io5';
import { FaKey } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const ProfilePage = () => {
  return (
    <div className=" w-full h-svh overflow-y-scroll  p-4">
      <div className=" flex flex-col h-full items-center">
        <h1 className=" text-2xl font-bold text-[#212B36]">Profile Page</h1>
        <div className=" w-[80%]  grid md:grid-cols-2 grid-cols-1  mt-5 gap-5">
          <section className=" flex flex-col gap-y-5 text-[#232323] items-center h-full bg-[#F9FAFB] border-2 border-gray-200 shadow-md rounded-lg p-4">
            <h2 className=" text-xl font-semibold">Detail Profile</h2>
            <div className=" w-[150px] h-[150px] relative overflow-hidden border-2 border-gray-200 rounded-full">
              <Image
                src={'/Images/transstudio.png'}
                alt="Profile Icon"
                fill
                style={{ objectFit: 'contain', objectPosition: 'center' }}
              />
            </div>
            <div className="desc w-[80%] shadow-md gap-y-5 border  grid grid-cols-3 items-center text-ellipsis p-2 rounded-md bg-white ">
              <IoMdPerson className=" text-blue-500 md:text-[2rem] text-[1.5rem]" />
              <p className=" col-span-2 md:text-[1rem] text-[0.9rem]">Sabda Setiawan</p>
              <MdOutlineMailOutline className=" text-blue-500 md:text-[2rem] text-[1.5rem]" />
              <p className=" col-span-2 md:text-[1rem] text-[0.9rem]  w-full overflow-hidden  text-ellipsis  text-wrap">
                sabdasetiawan206@gmail.com
              </p>
              <MdPhoneEnabled className=" text-blue-500 md:text-[2rem] text-[1.5rem]" />
              <p className=" col-span-2  w-full md:text-[1rem] text-[0.9rem] overflow-hidden  text-ellipsis  text-wrap">
                +62 82384394849
              </p>
            </div>
            <Link
              href={'/setting-account/profile'}
              className="button w-40 md:h-16 h-10 mb-3 bg-blue-500  cursor-pointer select-none
                         active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                         active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                        rounded-full  border-[1px] border-blue-400

  "
            >
              <span className="flex flex-col justify-center items-center h-full text-white font-bold text-lg ">
                Ubah Data
              </span>
            </Link>
          </section>
          <section className=" grid grid-rows-2 gap-y-5 ">
            <div className=" p-4 bg-[#F9FAFB] border-2 border-gray-200 gap-y-5 flex items-center justify-center flex-col shadow-md">
              <h2 className=" text-xl font-semibold">Detail Pekerjaan</h2>
              <IoDocuments size={70} className=" text-blue-500" />
              <p className=" text-[#232323] font-semibold text-[0.9rem]">10 Document Pekerjaan</p>
              <Link
                href={'/riwayat-user'}
                className="button w-40 h-10 bg-blue-500  cursor-pointer select-none
                         active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                         active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                        rounded-full  border-[1px] border-blue-400

  "
              >
                <span className="flex flex-col justify-center items-center h-full text-white font-bold text-sm ">
                  Go To Riwayat
                </span>
              </Link>
            </div>
            <div className=" p-4 bg-[#F9FAFB] border-2 border-gray-200 flex items-center justify-center gap-y-5 flex-col shadow-md">
              <h2 className=" text-xl font-semibold">Detail Password</h2>
              <FaKey size={70} className=" text-blue-500" />
              <p className=" text-[#232323] font-semibold text-xl">*******</p>
              <Link
                href={'/setting-account/password'}
                className="button w-40 h-10 bg-blue-500  cursor-pointer select-none
                         active:translate-y-2  active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841]
                         active:border-b-[0px]
                        transition-all duration-150 [box-shadow:0_10px_0_0_#1b6ff8,0_15px_0_0_#1b70f841]
                        rounded-full  border-[1px] border-blue-400

  "
              >
                <span className="flex flex-col justify-center items-center h-full text-white font-bold text-sm ">
                  Ubah Data
                </span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
