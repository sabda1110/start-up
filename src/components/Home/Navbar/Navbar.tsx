'use client';

import Style from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { TiThMenuOutline } from 'react-icons/ti';
import { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import useMediaQuery from '@/utils/hooks/useMediaQuery';
import { signOut } from 'next-auth/react';
import { IoIosLogOut } from 'react-icons/io';
import { MdOutlineDashboard } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const navItem = [
  { name: 'Home', link: '/' },
  { name: 'Service', link: '/service' },
  { name: 'Our Customer', link: '/customer' },
  { name: 'Team', link: '/team' },
  { name: 'Career', link: '/career' },
  { name: 'Contact', link: '/contact' }
];

const Navbar = ({ session }: { session?: any }) => {
  const [menu, setMenu] = useState<boolean>(false);
  const [show, setShow] = useState<boolean>(false);
  const pathname = usePathname();
  const router = useRouter();

  const menuRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setMenu(!menu);
    document.body.classList.toggle('overflow-hidden');
  };

  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop && menu) {
    document.body.classList.remove('overflow-hidden');
  } else if (!isDesktop && menu) {
    document.body.classList.add('overflow-hidden');
  }

  useEffect(() => {
    const handler = (e: any) => {
      if (!menuRef?.current?.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  return (
    <div className="container w-screen h-[100px] flex justify-between items-center  mx-auto box-border">
      <Link href="/" className={Style.container__img}>
        <Image
          src={'/Images/logo.png'}
          alt="logo Whatsabb"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </Link>
      <div className={Style.container__item} ref={menuRef}>
        {navItem.map((item, index) => (
          <Link key={item.name} href={item.link}>
            <p
              className={`${index === 2 && 'text-center'}${
                item.link === pathname ? 'border-b-2 border-black' : ''
              }`}
            >
              {item.name}
            </p>
          </Link>
        ))}
        {session === null ? (
          <Link
            href={`/login`}
            className="bg-[#9FD685] font-medium px-4 py-2 text-[#123813] rounded-md"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={() => setShow(!show)}
            className="bg-[#9FD685] font-medium px-4 py-2 text-[#123813] rounded-md"
          >
            {session?.user?.name}
          </button>
        )}

        {show && (
          <section className=" absolute w-[200px] text-[#212B36]  rounded-lg flex-col bg-white shadow-md right-0 top-12 z-50  border flex items-center justify-center p-2 ">
            <div
              onClick={() => router.push('/dashboard-user')}
              className=" hover:bg-gray-200 cursor-pointer rounded-md flex items-center w-full justify-start gap-x-5 text-center p-4"
            >
              <MdOutlineDashboard size={23} />
              <p className=" text-[16px]">Dashboard</p>
            </div>
            <div
              onClick={() => signOut()}
              className=" hover:bg-gray-200 cursor-pointer rounded-md flex items-center w-full justify-start gap-x-5 text-center p-4"
            >
              <IoIosLogOut size={23} />
              <p className=" text-[16px]">Logout</p>
            </div>
          </section>
        )}
      </div>
      <TiThMenuOutline size={25} className={Style.menu} onClick={handleClick} />
      <div
        className={` ${
          menu ? 'translate-x-0' : ' -translate-x-full'
        } lg:hidden absolute transition-all ease-in-out delay-300 right-0 top-0 bg-gray-100/80 gap-6 flex flex-col items-center w-screen h-screen justify-center backdrop-blur-sm z-10`}
      >
        {navItem.map((item) => (
          <Link key={item.name} href={item.link}>
            <p className={`${item.link === pathname ? 'border-b-2 border-black' : ''}`}>
              {item.name}
            </p>
          </Link>
        ))}
        {session === null ? (
          <Link
            href={`/login`}
            className="bg-[#9FD685] font-medium px-4 py-2 text-[#123813] rounded-md"
          >
            Login
          </Link>
        ) : (
          <button
            onClick={() => signOut()}
            className="bg-[#9FD685] font-medium px-4 py-2 text-[#123813] rounded-md"
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
