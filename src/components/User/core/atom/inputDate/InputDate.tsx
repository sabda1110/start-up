'use client';

import { useRef, useState, useEffect } from 'react';

const InputDate = () => {
  const [active, setActive] = useState<Boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);
  const [tanggal, setTanggal] = useState('');

  const handleActive = () => {
    setActive(true);
    inputRef.current?.focus();
  };

  useEffect(() => {
    const handle = (e: any) => {
      if (!inputRef.current?.contains(e.target) && tanggal === '') {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handle);

    return () => {
      document.removeEventListener('mousedown', handle);
    };
  }, [tanggal]);

  return (
    <div
      onClick={handleActive}
      className={` ${
        active ? ' border-blue-200' : 'border-gray-200'
      } border w-[20%] flex items-center h-[50px] px-4 mt-2 rounded-md  relative`}
    >
      <span
        className={`${
          active
            ? '  top-[-0.65rem] text-[0.8rem] text-blue-500 font-semibold'
            : ' top-[0.7rem] text-[1rem] text-gray-400 '
        }  transition-all  absolute  ease-in-out duration-500  bg-white  `}
      >
        Jam Selesai
      </span>
      <input
        ref={inputRef}
        type="date"
        onChange={(e) => setTanggal(e.target.value)}
        value={tanggal}
        className={` ${active ? 'block' : 'hidden'} w-full  outline-none border-none text-gray-600`}
      />
    </div>
  );
};

export default InputDate;
