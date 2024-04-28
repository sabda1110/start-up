'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useState } from 'react';

const SkeletonRiwayat = dynamic(() => import('../Skeleton_Riwayat/SkeletonRiwayat'));
const ModalRiwayat = dynamic(() => import('../Modal_Riwayat/ModalRiwayat'));

const History = () => {
  const [waktu, setWaktu] = useState<Boolean>(true);

  setTimeout(() => {
    setWaktu(false);
  }, 3000);

  return (
    <section className="grid md:grid-cols-2 gap-2">
      {!waktu &&
        Array.from({ length: 10 }, (_, index) => {
          return <ModalRiwayat key={index} />;
        })}
      {waktu &&
        Array.from({ length: 2 }, (_, index) => {
          return <SkeletonRiwayat key={index} />;
        })}
    </section>
  );
};

export default History;
