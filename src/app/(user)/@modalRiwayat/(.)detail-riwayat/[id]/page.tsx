'use client';

import ModalRiwayat from '@/components/User/core/modalRiwayat/ModalRiwayat';
import { FaArrowLeft, FaRegHeart, FaHeart } from 'react-icons/fa';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ModalPageRiwayat = (props: any) => {
  const { params } = props;
  const [love, setLove] = useState<boolean>(false);
  const router = useRouter();

  return (
    <ModalRiwayat>
      <div className=" w-full mb-4 flex justify-between items-center">
        <section className=" flex items-center gap-x-4">
          <FaArrowLeft
            size={30}
            className=" text-gray-800 cursor-pointer"
            onClick={() => router.back()}
          />
          <h2 className=" text-2xl text-gray-800 font-bold">Detail Tugas</h2>
        </section>
        <BsThreeDotsVertical size={30} className=" text-gray-800" />
      </div>
      <hr />

      <div className=" w-full  px-2 mt-4 flex justify-between items-center">
        <section className=" flex items-center gap-x-4">
          <Image
            src={'/Images/transstudio.png'}
            alt="Logo Transmart"
            width={80}
            height={80}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
          <div className=" ">
            <h3 className=" text-xs text-gray-800 font-bold">Tugas Article</h3>
            <p className="text-gray-500 text-[0.8rem]">Article Fisioterapi Otot</p>
          </div>
        </section>
        <section onClick={() => setLove(!love)} className=" cursor-pointer">
          {love && <FaHeart size={25} className=" text-red-500 " />}
          {!love && <FaRegHeart size={25} className=" text-gray-400 " />}
        </section>
      </div>
    </ModalRiwayat>
  );
};

export default ModalPageRiwayat;
