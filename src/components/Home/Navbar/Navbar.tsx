'use client';

import Style from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { TiThMenuOutline } from 'react-icons/ti';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className=" container shadow-md  w-screen h-[100px] flex justify-between items-center  mx-auto box-border">
      <div className={Style.container__img}>
        <Image
          src={'/Images/logo.png'}
          alt="logo Whatsabb"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className={Style.container__item}>
        <Link href={'/'}>
          <p className={Style.item}>Home</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Service</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Our Customer</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Team</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Career</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Contact</p>
        </Link>
        <FiSearch size={20} className=" ml-9" />
      </div>
      <TiThMenuOutline
        size={25}
        className={Style.menu}
        onClick={() => setMenu(!menu)}
      />
      <div
        className={` ${
          menu ? 'translate-x-0' : ' -translate-x-full'
        }  absolute transition-all ease-in-out delay-300 right-0 top-[6.4rem]  bg-gray-100/80 gap-6 flex flex-col items-center w-screen h-[85vh]`}
      >
        <Link href={'/'}>
          <p className={Style.item}>Home</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Service</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Our Customer</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Team</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Career</p>
        </Link>
        <Link href={'/'}>
          <p className={Style.item}>Contact</p>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
