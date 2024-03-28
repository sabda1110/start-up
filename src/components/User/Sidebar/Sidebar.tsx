'use client';
import Image from 'next/image';
import {
  MdMenuOpen,
  MdDashboard,
  MdAccountBox,
  MdOutlineKeyboardDoubleArrowRight
} from 'react-icons/md';
import { BsHandbagFill, BsPeopleFill } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItem = [
  {
    name: 'Dashboard',
    link: '/dashboard-user',
    icon: MdDashboard
  },
  {
    name: 'Project',
    link: '/project',
    icon: BsHandbagFill
  },
  {
    name: 'Customer',
    link: '/customer',
    icon: BsPeopleFill
  },
  {
    name: 'Pengaturan Akun',
    link: '/setting-account',
    icon: MdAccountBox
  }
];

const Sidebar = () => {
  const [miniSize, setMiniSize] = useState<Boolean>(false);
  const [isHovering, setIsHovering] = useState<Boolean>(false);
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const pathname = usePathname();

  const onMouseEnter = () => {
    setIsHovering(true);
    if (miniSize && isOpen) {
      setMiniSize(false);
    }
  };

  const onMouseLeave = () => {
    setIsHovering(false);
    if (!miniSize && isOpen) {
      setMiniSize(true);
    }
  };

  const handleClickOpen = () => {
    setMiniSize(true);
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setMiniSize(false);
    setIsOpen(false);
    setIsHovering(false);
  };

  return (
    <div
      className={` ${miniSize ? 'w-[88px]' : 'w-[280px]'} ${
        miniSize && isHovering ? 'w-[280px]' : ''
      }   p-4 py-6 border-r-[1px] transition-width duration-300 lg:block md:block hidden `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <section className=" w-full flex justify-between items-center">
        <Link href={'/'}>
          <Image src={'/Images/logo.png'} alt="Logo" width={104} height={41} />
        </Link>
        {miniSize || isOpen ? (
          <MdOutlineKeyboardDoubleArrowRight
            size={30}
            onClick={handleClickClose}
            className=" text-gray-600 cursor-pointer"
          />
        ) : (
          <MdMenuOpen
            size={30}
            onClick={handleClickOpen}
            className=" text-gray-600 cursor-pointer"
          />
        )}
      </section>

      {miniSize && (
        <Image
          src={'/Images/hero.png'}
          alt="profile-icon"
          width={50}
          height={50}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="  rounded-full mt-5"
        />
      )}

      {!miniSize && (
        <section className="profile w-full flex flex-col items-center gap-2 py-2  mt-8 box-border  rounded-md bg-[#f2f9ff]">
          <div className="flex gap-x-2 items-center p-4">
            <Image
              src={'/Images/hero.png'}
              alt="profile-icon"
              width={50}
              height={50}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="  rounded-full"
            />
            <p className=" text-[0.9rem] font-semibold text-[#212b36]">Aldly sitomorang</p>
          </div>
          <p className=" w-[80%] bg-[#E6F2FC] text-[#212B36] font-semibold text-center text-[0.9rem] p-2 rounded-md">
            See your profile
          </p>
        </section>
      )}

      <section className=" menu w-full flex flex-col mt-8  gap-y-3 py-2 box-border">
        {navItem.map((item: { link: string; name: string; icon: any }, index) => (
          <Link
            href={item.link}
            key={index}
            className={` ${
              pathname === item.link
                ? 'text-blue-500 bg-[#E6F2FC] font-semibold'
                : ' text-[#637381]'
            } flex items-center gap-x-3 p-3 rounded-md`}
          >
            <item.icon size={25} />
            {!miniSize && <p className=" text-[0.9rem] ">{item.name}</p>}
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Sidebar;
