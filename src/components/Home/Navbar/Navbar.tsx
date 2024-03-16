'use client';

import Style from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch } from 'react-icons/fi';
import { TiThMenuOutline } from 'react-icons/ti';
import { useState } from 'react';

const navItem = [
  { name: 'Home', link: '/' },
  { name: 'Service', link: '/' },
  { name: 'Our Customer', link: '/' },
  { name: 'Team', link: '/' },
  { name: 'Career', link: '/' },
  { name: 'Contact', link: '/' }
];

const Navbar = () => {
  const [menu, setMenu] = useState<boolean>(false);
  const [active, setActive] = useState<string>('');

  return (
    <div className="container w-screen h-[100px] flex justify-between items-center  mx-auto box-border">
      <div className={Style.container__img}>
        <Image
          src={'/Images/logo.png'}
          alt="logo Whatsabb"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div className={Style.container__item}>
        {navItem.map((item) => (
          <Link key={item.name} href={item.link} onClick={() => setActive(item.name)}>
            <p
              className={`${Style.item} ${active === item.name ? 'border-b-2 border-black' : ''} `}
            >
              {item.name}
            </p>
          </Link>
        ))}
        <FiSearch size={20} className=" ml-9" />
      </div>
      <TiThMenuOutline size={25} className={Style.menu} onClick={() => setMenu(!menu)} />
      <div
        className={` ${
          menu ? 'translate-x-0' : ' -translate-x-full'
        }  absolute transition-all ease-in-out delay-300 right-0 top-[6.4rem]  bg-gray-100/80 gap-6 flex flex-col items-center w-screen h-[85vh]`}
      >
        {navItem.map((item) => (
          <Link key={item.name} href={item.link}>
            <p className={Style.item}>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
