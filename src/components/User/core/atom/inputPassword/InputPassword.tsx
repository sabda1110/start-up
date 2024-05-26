'use client';
import { useRef, useState, useEffect } from 'react';

const InputPassword = ({
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
  const inputRef = useRef<HTMLInputElement>(null);
  const [active, setActive] = useState<Boolean>(false);
  const handleActive = () => {
    inputRef.current?.focus();
    setActive(true);
  };

  useEffect(() => {
    const handle: any = (e: React.MouseEvent<any, MouseEvent>) => {
      if (
        !inputRef.current?.contains(e.target as HTMLButtonElement) &&
        formik.values?.[name] === ''
      ) {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handle);

    return () => document.removeEventListener('mousedown', handle);
  }, [formik.values[name]]);

  return (
    <div
      onClick={handleActive}
      onKeyUp={handleActive}
      onKeyDown={() => {
        if (formik.values?.[name] === '') setActive(false);
      }}
      className={` border ${
        active ? 'border-blue-200' : 'border-gray-400'
      } w-full md:w-[30%] rounded-md h-[50px] mt-2 relative flex justify-between items-center px-4`}
    >
      <span
        className={`${
          active
            ? '  top-[-0.65rem] left-3 text-[0.8rem] text-blue-500 font-semibold'
            : ' top-[0.7rem]  text-[1rem] text-gray-400 '
        }  transition-all  absolute  ease-in-out duration-500  bg-white  `}
      >
        {judul}
      </span>
      <input
        type="password"
        ref={inputRef}
        onChange={formik.handleChange}
        value={formik.values[name]}
        name={name}
        id={name}
        required={prioritas}
        className=" w-[80%] outline-none"
      />
      <Icon size={30} className={`w-[20%] ${active ? 'text-blue-500' : 'text-gray-400'}`} />
    </div>
  );
};

export default InputPassword;
