'use client';

import { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';

const menuStatus = [
  {
    name: 'Semua Status',
    link: '/'
  },
  {
    name: 'Pertinjauan',
    link: '/'
  },
  {
    name: 'Dalam Proses',
    link: '/'
  },
  {
    name: 'Get Worker',
    link: '/'
  },
  {
    name: 'Pembayaran',
    link: '/'
  },
  {
    name: 'Pengerjaan Tugas',
    link: '/'
  },
  {
    name: 'Success',
    link: '/'
  }
];

const MenuStatus = () => {
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
      onClick={() => setShow(!show)}
      className="flex-1 cursor-pointer hover:text-black text-[#9CA3AF] border flex justify-between py-2 relative items-center rounded px-2"
    >
      <p>Semua Status</p>
      <FaChevronDown />
      <div
        ref={modalRef}
        className={` ${
          show ? 'flex' : 'hidden'
        } absolute z-50  w-full flex-col gap-y-3 transition-all ease-in-out delay-500 overflow-y-scroll h-[200px] bg-white border border-gray-300  top-[2.8rem] rounded-md p-4  left-0 `}
      >
        {menuStatus.map((item: { name: string; link: string }, index: any) => (
          <p
            key={index}
            className=" hover:text-[#000] text-[#9CA3AF]  border-b-2 border-white hover:border-gray-200 transition-all ease-in-out duration-300 cursor-pointer"
          >
            {item.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default MenuStatus;
