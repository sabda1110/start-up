import React from 'react';
import Image from 'next/image';
import {
  MdMenuOpen,
  MdDashboard,
  MdAccountBox,
  MdOutlineKeyboardDoubleArrowRight,
  MdWorkHistory
} from 'react-icons/md';
import { BsHandbagFill, BsPeopleFill } from 'react-icons/bs';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

const Menu = ({ open, setOpen }: { open: Boolean; setOpen: Function }) => {
  const pathname = usePathname();

  return (
    <div
      className={` ${
        open ? 'top-0 z-50  ' : ' -translate-x-full '
      } overflow-hidden  md:hidden z-50    w-screen h-screen absolute `}
    >
      {open && (
        <section
          onClick={() => setOpen(false)}
          className={`${
            open ? 'translate-x-0' : ' -translate-x-full'
          } absolute top-0 left-0   w-screen h-screen bg-gradient-to-r z-10 from-[#F8F8F8]/50 to-[#000]/85 `}
        ></section>
      )}

      <section
        className={`${
          open ? 'translate-x-0' : '-translate-x-full  '
        } absolute top-0 left-0 transition-all ease-in-out duration-500 w-[60vw]  h-screen bg-white z-50 shadow-lg border flex flex-col items-center`}
      >
        <Image src={'/Images/logo.png'} alt="Logo" width={104} height={41} className="" />
        <div className="profile w-[80%] h-[25%] flex flex-col items-center gap-2 py-2  mt-8 box-border  rounded-md bg-[#f2f9ff]">
          <div className="flex gap-x-2 w-full items-center p-4">
            <Image
              src={'/Images/hero.png'}
              alt="profile-icon"
              width={50}
              height={50}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="  rounded-full"
            />
            <p className=" text-[0.7rem] font-semibold text-[#212b36]   w-full flex flex-wrap">
              Aldly sitomorang
            </p>
          </div>
          <p className=" w-[80%] bg-[#E6F2FC] text-[#212B36] font-semibold text-center text-[0.9rem] p-2 rounded-md">
            See your profile
          </p>
        </div>

        <section className=" menu w-full flex flex-col mt-8  gap-y-3 py-2 box-border">
          {navItem.map((item: { link: string; name: string; icon: any }, index) => (
            <Link
              href={item.link}
              key={index}
              onClick={() => setOpen(false)}
              className={` ${
                pathname === item.link
                  ? 'text-blue-500 bg-[#E6F2FC] font-semibold'
                  : ' text-[#637381]'
              } flex items-center gap-x-3 p-3 rounded-md`}
            >
              <item.icon size={25} />
              <p className=" text-[0.9rem] ">{item.name}</p>
            </Link>
          ))}
        </section>
      </section>
    </div>
  );
};

export default Menu;
