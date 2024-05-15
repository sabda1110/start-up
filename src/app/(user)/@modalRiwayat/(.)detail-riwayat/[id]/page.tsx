'use client';

import { FaArrowLeft, FaRegHeart, FaHeart } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const ModalRiwayat = dynamic(() => import('@/components/User/core/modalRiwayat/ModalRiwayat'));
const ModalDetail = dynamic(() => import('@/components/User/core/modalRiwayat/ModalDetail'));
const ModalPembayaran = dynamic(
  () => import('@/components/User/core/modalRiwayat/ModalPembayaran')
);
const ModalPageRiwayat = (props: any) => {
  const { params } = props;
  const [open, setOpen] = useState<Boolean>(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <ModalRiwayat open={open} setOpen={setOpen}>
      <ModalDetail handleOpen={handleOpen} />
    </ModalRiwayat>
  );
};

export default ModalPageRiwayat;
