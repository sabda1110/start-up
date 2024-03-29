'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const Modal = ({ children }: { children: React.ReactNode }) => {
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
      className="fixed z-50 left-0 right-0 top-0 bottom-0 mx-auto bg-black/60"
    >
      <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-6 bg-white rounded-lg">
        {children}
      </div>
    </div>
  );
};

export default Modal;
