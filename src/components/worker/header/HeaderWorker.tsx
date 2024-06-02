'use client';

import Image from 'next/image';
import { FaHeadset } from 'react-icons/fa6';
import { useState } from 'react';
import { HiMenuAlt2 } from 'react-icons/hi';
import MenuHeader from './MenuHeader';
import useMediaQuery from '@/utils/hooks/useMediaQuery';
const HeaderWorker: React.FC = () => {
  const [isShowUserMenu, setIsShowUserMenu] = useState<Boolean>(false);
  const [isMenu, setIsMenu] = useState<boolean>(false);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  if (isDesktop && isMenu) {
    document.body.classList.remove('overflow-hidden');
  } else if (!isDesktop && isMenu) {
    document.body.classList.add('overflow-hidden');
  }

  return (
    <div className=" w-full h-[10vh]   flex items-center justify-between px-5 ">
      <MenuHeader open={isMenu} setOpen={setIsMenu} />
      <span className=" hidden md:block"></span>
      <HiMenuAlt2
        onClick={() => setIsMenu(true)}
        className=" lg:hidden md:hidden block text-[#637381] cursor-pointer"
        size={25}
      />
      <section className=" flex  items-center gap-x-3 justify-center text-[#637381]">
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
      </section>
    </div>
  );
};

export default HeaderWorker;
