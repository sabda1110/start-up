'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ModalRiwayat = ({ children }: { children: React.ReactNode }) => {
  const refModal = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const close: React.MouseEventHandler = (e) => {
    if (e.target === refModal?.current) {
      router.back();
    }
  };

  return (
    <div
      ref={refModal}
      onClick={close}
      className=" fixed  z-50 top-0 left-0 right-0 bottom-0 mx-auto bg-black/60"
    >
      <div className="absolute overflow-scroll top-1/2 left-1/2 bg-white  -translate-x-1/2 -translate-y-1/2 p-6 rounded-md h-[650px] w-[80%]  ">
        {children}
      </div>
    </div>
  );
};

export default ModalRiwayat;
