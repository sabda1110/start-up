'use client';

import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';
import { CiBank } from 'react-icons/ci';
import { IoPerson } from 'react-icons/io5';

const ItemPembayaran = ({ name, link }: { name: string; link: string }) => {
  const [show, setShow] = useState<Boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: any) => {
      if (!modalRef?.current?.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div
      ref={modalRef}
      onClick={() => setShow(true)}
      className={` ${
        show ? 'h-[120px]' : 'h-[50px]'
      }  transition-all ease-in  duration-100 hover:bg-gray-100 flex flex-col gap-y-5  pembayaran-item w-full  bg-white rounded-lg p-4 border border-gray-200 cursor-pointer`}
    >
      <div className=" flex items-center gap-x-8">
        <Image src={link} alt="Logo" width={50} height={50} />
        <p className=" md:text-[1rem] text-[0.8rem] text-[#424242]"> {name}</p>
      </div>
      {show && (
        <div className=" grid grid-cols-3  items-center md:w-[60%] w-full ">
          <CiBank size={25} className=" text-blue-500" />
          <p className=" col-span-2 font-semibold md:text-[1rem] text-[0.8rem] text-[#424242]">
            1051687744
          </p>
          <IoPerson size={25} className=" text-blue-500" />
          <p className=" col-span-2 font-semibold md:text-[1rem] text-[0.8rem] text-[#424242]">
            Sabda Setiawan
          </p>
        </div>
      )}
    </div>
  );
};

export default ItemPembayaran;
