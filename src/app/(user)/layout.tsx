'use client';

import Header from '@/components/User/Header/Header';
import Menu from '@/components/User/Header/Menu';
import Sidebar from '@/components/User/Sidebar/Sidebar';
import { useState } from 'react';
import useMediaQuery from '@/utils/hooks/useMediaQuery';

export default function DashboardUserLayout({
  children,
  modal,
  modalRiwayat
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
  modalRiwayat: React.ReactNode;
}) {
  const [open, setOpen] = useState<Boolean>(false);
  const handleClick = () => {
    setOpen(!open);
    document.body.classList.toggle('overflow-hidden');
  };

  const isDesktop = useMediaQuery('(min-width: 768px)');
  if (isDesktop && open) {
    document.body.classList.remove('overflow-hidden');
  } else if (!isDesktop && open) {
    document.body.classList.add('overflow-hidden');
  }
  return (
    <div className=" w-svw overflow-x-hidden h-screen flex  ">
      <Sidebar />
      <div className=" w-full relative overflow-y-scroll">
        <Header open={handleClick} />
        <Menu open={open} setOpen={setOpen} />
        {modal}
        {children}
        {modalRiwayat}
      </div>
    </div>
  );
}
