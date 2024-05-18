'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useState, useEffect } from 'react';

const SkeletonRiwayat = dynamic(() => import('../Skeleton_Riwayat/SkeletonRiwayat'));
const ModalRiwayat = dynamic(() => import('../Modal_Riwayat/ModalRiwayat'));

const History = ({ time, data }: { time: Boolean; data: DataBackEnd }) => {
  const [waktu, setWaktu] = useState<Boolean>(true);
  const [item, setItem] = useState<dataParams[]>([]);

  useEffect(() => {
    setWaktu(true);
    if (data.status) {
      setItem(data.data as dataParams[]);
      setWaktu(false);
    }
    setWaktu(false);
  }, [data]);

  useEffect(() => {
    setWaktu(time);
  }, [time]);

  return (
    <section className="grid md:grid-cols-2 gap-2">
      {!waktu && item.map((item: dataParams, index) => <ModalRiwayat key={index} />)}
      {waktu &&
        Array.from({ length: 2 }, (_, index) => {
          return <SkeletonRiwayat key={index} />;
        })}
    </section>
  );
};

export default History;
