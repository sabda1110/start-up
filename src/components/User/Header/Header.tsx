import { FaHeadset } from 'react-icons/fa6';
import { HiMenuAlt2 } from 'react-icons/hi';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';

const Header = ({ open }: { open: Function }) => {
  const [isShowUserMenu, setIsShowUserMenu] = useState<Boolean>(false);

  const menuRef = useRef<HTMLDivElement>(null);

  // console.log(menuRef.current.contains(menuRef.current));

  useEffect(() => {
    const handler = (e: any) => {
      // Mengecek apakan di container section ada image di dalamnya
      if (!menuRef?.current?.contains(e.target)) {
        setIsShowUserMenu(false);
      }
    };
    //Melakukan event mousedown = mengclick dimana saja
    document.addEventListener('mousedown', handler);

    // Mengembalikan event mousedown
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);
  return (
    <div className=" p-4 sticky shadow-lg bg-white border-b z-30 border-gray-200 top-0 right-0   py-6 w-full h-[92px] flex lg:justify-end md:justify-end justify-between items-center ">
      <HiMenuAlt2
        onClick={() => open(true)}
        className=" lg:hidden md:hidden block text-[#637381] cursor-pointer"
        size={25}
      />
      <section className=" flex  items-center gap-x-3 justify-center text-[#637381]" ref={menuRef}>
        <FaHeadset size={25} />
        <p className="text-[0.8rem] lg:block md:block hidden ">Hubungin Tim Tumutuku</p>
        <Image
          src={'/Images/Button.png'}
          alt="profile-icon"
          width={45}
          height={45}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className={` ${
            isShowUserMenu ? 'brightness-60 ' : ''
          }rounded-full hover:brightness-90 z-30 cursor-pointer`}
          onClick={() => setIsShowUserMenu(!isShowUserMenu)}
        />
        <div
          className={`absolute top-20 right-8 bg-white shadow-xl border rounded-md p-4 z-20 ${
            isShowUserMenu ? 'block' : 'hidden'
          }`}
        >
          <div className="pb-2">
            <p className="text-lg text-gray-900 font-medium px-2 py-1">Zuma.id</p>
            <p className="px-2 pb-1 text-gray-500">rasodof6lkasdf123@gmail.com</p>
          </div>
          <hr className="py-2" />
          <div className="flex flex-col">
            <Link href="#" className="text-gray-800 hover:bg-gray-100 px-2 py-4 rounded">
              Akun perusahaan
            </Link>
            <Link href="#" className="text-gray-800 hover:bg-gray-100 px-2 py-4 rounded">
              Keluar Akun
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
