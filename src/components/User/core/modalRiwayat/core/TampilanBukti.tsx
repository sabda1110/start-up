'use client';

import { FaArrowLeft } from 'react-icons/fa';
import { FaRegFolderClosed, FaTrash } from 'react-icons/fa6';
import { TiTicket } from 'react-icons/ti';
import { CiMoneyBill, CiBank, CiTrash } from 'react-icons/ci';
import { useRef } from 'react';

import Image from 'next/image';

const TampilanBukti = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<Boolean>> }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleActive = () => {
    inputRef?.current?.click();
  };
  return (
    <>
      <div className="header py-4 border-b border-gray-200 sticky -top-2 bg-white flex justify-between w-full items-center mb-4">
        <FaArrowLeft
          onClick={() => setOpen(false)}
          className="text-[#424242] md:text-[1.5rem] text-[1.2rem] cursor-pointer"
        />
        <h2 className=" text-[#424242] font-semibold text-[1rem]">Kirim Bukti</h2>
        <span></span>
      </div>

      <div className="photo w-full mt-5 flex items-center justify-center ">
        <Image
          src={'/Images/bukti.png'}
          alt="Gambar OTP"
          width={100}
          height={100}
          onClick={handleActive}
          className=" cursor-pointer"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>

      <div className=" mt-6 p-4 bg-[#FFF6EA] rounded-md text-[0.8rem] text-[#424242]">
        <p>
          Pastikan bukti transfer terlihat jelas dan dapat dilihat oleh pihak tumutuku unutuk
          memvalidasi pembayaran anda
        </p>
      </div>

      <div className="description w-full mt-3   bg-[#F8F8F8] p-2 flex flex-col gap-y-2 rounded-md">
        <section className=" w-[60%] flex items-center gap-x-10">
          <TiTicket size={35} className=" text-blue-400  " />
          <p className=" text-[#4B5563] font-semibold text-[0.8rem] md:text-[0.9rem]  ">
            Article Fisioterapi
          </p>
        </section>
        <section className=" w-[60%] flex items-center gap-x-10">
          <CiMoneyBill size={35} className=" text-blue-400  " />
          <p className=" text-[#4B5563] font-semibold  text-[0.8rem] md:text-[0.9rem]  ">
            Rp. 100.000
          </p>
        </section>
        <section className=" w-[60%] flex items-center gap-x-10">
          <CiBank size={35} className=" text-blue-400  " />
          <p className=" text-[#4B5563] font-semibold text-[0.8rem] md:text-[0.9rem]   ">
            Bank BCA
          </p>
        </section>
      </div>

      <div className="description w-full mt-5   bg-[#F8F8F8] p-2 flex flex-col gap-y-2 rounded-md">
        <section
          onClick={handleActive}
          className=" w-[60%] flex items-center gap-x-3 cursor-pointer"
        >
          <FaRegFolderClosed size={20} className=" text-gray-500  " />
          <p className=" text-[#4B5563] font-normal text-[0.7rem] md:text-[0.8rem]  ">
            Pilih dari galeri
          </p>
          <input ref={inputRef} type="file" name="bukti" id="bukti" hidden />
        </section>
        <section className=" w-[60%] flex items-center gap-x-3">
          <FaTrash size={20} className=" text-gray-500  " />
          <p className=" text-[#4B5563] font-normal text-[0.7rem] md:text-[0.8rem]  ">Hapus Foto</p>
        </section>
      </div>

      <div className=" w-full flex items-center justify-center font-semibold bg-[#3B82F6] hover:bg-[#4176cc] cursor-pointer mt-8 rounded-md p-4 text-white">
        Kirim Bukti
      </div>
    </>
  );
};

export default TampilanBukti;
