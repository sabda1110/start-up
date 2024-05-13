'use client';

import { FaArrowLeft } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { useState } from 'react';
const TampilanPembayaran = dynamic(() => import('./core/TampilanPembayaran'));
const TampilanBukti = dynamic(() => import('./core/TampilanBukti'));
const ModalPembayaran = ({
  backModal
}: {
  backModal: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const [open, setOpen] = useState<boolean>(true);
  return (
    <div className=" absolute  z-50 py-2 px-6 rounded-md bg-white shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[30%] w-[80%] md:h-[650px] h-[580px] overflow-y-scroll">
      {!open && <TampilanPembayaran backModal={backModal} />}
      {open && <TampilanBukti />}
    </div>
  );
};

export default ModalPembayaran;
