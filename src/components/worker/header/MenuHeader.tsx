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
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRef, useEffect } from 'react';

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

const MenuHeader: React.FC<MenuHeader> = ({ open, setOpen }) => {
  const pathname = usePathname();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!modalRef?.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handler);

    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div
      className={` ${
        open ? 'translate-x-0' : '-translate-x-full'
      } block  md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-50  `}
    >
      <div
        ref={modalRef}
        className={` ${
          open ? 'translate-x-0' : '-translate-x-full'
        }  transition-all ease-in duration-200 delay-200 w-2/4 bg-white h-svh px-4`}
      >
        <div className="image flex h-[60px]  justify-center items-center">
          <Image
            src={'/Images/logo.png'}
            alt="Logo"
            width={104}
            height={41}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <div className=" bg-[#F9FAFB] w-full mt-8 h-[124px] overflow-hidden text-ellipsis   rounded-md flex flex-col items-center justify-center">
          <section className=" flex items-center gap-x-5">
            <Image
              src={'/Images/hero.png'}
              alt="profile-icon"
              width={50}
              height={50}
              style={{ objectFit: 'cover', objectPosition: 'center' }}
              className="  rounded-full"
            />
            <p className=" text-[0.9rem] font-semibold truncate text-[#212b36]">Aldly sitomorang</p>
          </section>
          <p className=" w-[80%] bg-[#E6F2FC] overflow-hidden text-ellipsis mt-5 text-[#212B36] font-semibold text-center text-[0.9rem] p-2 rounded-md">
            See your profile
          </p>
        </div>
        <div className=" menu w-full flex flex-col mt-8  gap-y-3 py-2 box-border">
          {navItem.map((item: { link: string; name: string; icon: any }, index) => (
            <Link
              href={item.link}
              onClick={() => setOpen(false)}
              key={index}
              className={` ${
                pathname === item.link
                  ? 'text-blue-500 bg-[#E6F2FC] font-semibold'
                  : ' text-[#637381]'
              }  flex items-center gap-x-3 p-3 rounded-md`}
            >
              <item.icon size={25} />
              <p className=" text-[0.9rem] ">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuHeader;
