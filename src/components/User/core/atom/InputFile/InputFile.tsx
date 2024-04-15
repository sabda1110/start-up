'use client';

import { useState, useRef, useEffect } from 'react';

const InputFile = ({
  judul,
  name,
  Icon,
  prioritas,
  formik
}: {
  judul: string;
  name: string;
  Icon: any;
  prioritas: boolean;
  formik: any;
}) => {
  const [active, setActive] = useState<Boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState('');

  const handleActive = () => {
    inputRef.current?.click();
    setActive(true);
  };

  useEffect(() => {
    const handle: any = (e: React.MouseEvent<any, MouseEvent>) => {
      if (!inputRef.current?.contains(e.target as HTMLButtonElement) && file === '') {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handle);

    return () => document.removeEventListener('mousedown', handle);
  }, [file]);

  return (
    <div
      onClick={handleActive}
      className={`w-full relative h-[50px] px-4 flex justify-between items-center md:w-[30%] border rounded-md ${
        active ? 'border-blue-200' : 'border-gray-400'
      }`}
    >
      <input ref={inputRef} type="file" hidden accept="application/pdf,application/vnd.ms-excel" />
      <span
        className={`${
          active
            ? '  top-[-0.65rem] left-3 text-[0.8rem] text-blue-500 font-semibold'
            : ' top-[0.7rem] w-[50%]  text-[1rem] text-gray-400 '
        }  transition-all  absolute    ease-in-out duration-500  bg-white  `}
      >
        {judul}
      </span>
      <span>Pilih File</span>
      <Icon size={30} className={`w-[20%] ${active ? 'text-blue-500' : 'text-gray-400'}`} />
    </div>
  );
};

export default InputFile;
