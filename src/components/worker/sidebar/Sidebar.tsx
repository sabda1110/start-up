'use client';

import Image from 'next/image';

import {
  MdMenuOpen,
  MdWorkHistory,
  MdDashboard,
  MdAccountBox,
  MdOutlineKeyboardDoubleArrowRight
} from 'react-icons/md';
import { BsHandbagFill } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const navItem = [
  {
    name: 'Dashboard',
    link: '/dashboard-worker',
    icon: MdDashboard
  },
  {
    name: 'Project',
    link: '/project-worker',
    icon: BsHandbagFill
  },
  {
    name: 'Riwayat',
    link: '/riwayat-user',
    icon: MdWorkHistory
  },
  {
    name: 'Pengaturan Akun',
    link: '/setting-account',
    icon: MdAccountBox
  }
];

const SidebarWorker: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isHover, setIsHover] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const pathname = usePathname();

  // Handle Button Sidebar
  const handleSidebar = () => {
    setOpen(true);
    setOpenMenu(true);
  };

  const handleClickClose = () => {
    setOpen(false);
    setIsHover(false);
    setOpenMenu(false);
  };

  // Handle Mouse in Container
  const onMouseEnter = () => {
    setIsHover(true);
    if (open && openMenu) {
      setOpen(false);
    }
  };

  //Handle Mouse out contaier
  const onMouseLeave = () => {
    setIsHover(false);
    if (!open && openMenu) {
      setOpen(true);
    }
  };

  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`  ${open ? 'w-1/12' : 'w-1/8'} ${
        open && isHover ? 'w-1/8' : ''
      }  p-4 border-r-2 transition-width duration-300 border-dotted  flex-col gap-y-5 border-gray-200 md:flex hidden `}
    >
      <div className=" flex items-center justify-between">
        <Image
          src={'/Images/logo.png'}
          alt="Logo"
          width={104}
          height={41}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        {open || openMenu ? (
          <MdOutlineKeyboardDoubleArrowRight
            size={30}
            onClick={handleClickClose}
            className={` ${open ? 'hidden' : 'block'} text-gray-600  cursor-pointer`}
          />
        ) : (
          <MdMenuOpen size={30} onClick={handleSidebar} className=" text-gray-600 cursor-pointer" />
        )}
      </div>

      {open && (
        <div className=" flex  h-20 rounded-full  overflow-hidden  justify-center">
          <Image
            src={'/Images/hero.png'}
            alt="profile-icon"
            width={100}
            height={100}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
            className=""
          />
        </div>
      )}

      {!open && (
        <div className=" bg-[#F9FAFB] w-full h-[124px]  rounded-md flex flex-col items-center justify-center">
          <section className=" flex items-center gap-x-5">
            <Image
              src={'/Images/hero.png'}
              alt="profile-icon"
              width={50}
              height={50}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="  rounded-full"
            />
            <p className=" text-[0.9rem] font-semibold text-[#212b36]">Aldly sitomorang</p>
          </section>
          <p className=" w-[80%] bg-[#E6F2FC] mt-5 text-[#212B36] font-semibold text-center text-[0.9rem] p-2 rounded-md">
            See your profile
          </p>
        </div>
      )}

      <div className=" menu w-full flex flex-col mt-8  gap-y-3 py-2 box-border">
        {navItem.map((item: { link: string; name: string; icon: any }, index) => (
          <Link
            href={item.link}
            key={index}
            className={` ${
              pathname === item.link
                ? 'text-blue-500 bg-[#E6F2FC] font-semibold'
                : ' text-[#637381]'
            } ${open && 'justify-center'} flex items-center gap-x-3 p-3 rounded-md`}
          >
            <item.icon size={25} />
            {!open && <p className=" text-[0.9rem] ">{item.name}</p>}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SidebarWorker;
