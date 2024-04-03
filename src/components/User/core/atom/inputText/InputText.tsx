'use client';
import { useRef, useState, useEffect } from 'react';
import { MdOutlineSubtitles } from 'react-icons/md';

const InputText = () => {
  const inputRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<Boolean>(false);
  const [title, setTitle] = useState<String>('');
  const handleActive = () => {
    inputRef.current?.focus();
    setActive(true);
  };

  useEffect(() => {
    const handle: React.MouseEventHandler = (e) => {
      if (!inputRef.current?.contains(e.target) && title === '') {
        setActive(false);
      }
    };

    document.addEventListener('mousedown', handle);

    return () => document.removeEventListener('mousedown', handle);
  }, [title]);
  return (
    <div
      onClick={handleActive}
      className={` border ${
        active ? 'border-blue-200' : 'border-gray-400'
      } w-[30%] rounded-md h-[50px] mt-2 relative flex justify-between items-center px-4`}
    >
      <span
        className={`${
          active
            ? '  top-[-0.65rem] left-3 text-[0.8rem] text-blue-500 font-semibold'
            : ' top-[0.7rem]  text-[1rem] text-gray-400 '
        }  transition-all  absolute  ease-in-out duration-500  bg-white  `}
      >
        Judul Article
      </span>
      <input
        type="text"
        ref={inputRef}
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className=" w-[80%] outline-none"
      />
      <MdOutlineSubtitles
        size={30}
        className={`w-[20%] ${active ? 'text-blue-500' : 'text-gray-400'}`}
      />
    </div>
  );
};

export default InputText;
