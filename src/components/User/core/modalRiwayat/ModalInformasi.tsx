'use client';
import Image from 'next/image';
import { useRef } from 'react';

const ModalInformasi = ({
  setOpen
}: {
  setOpen: React.Dispatch<React.SetStateAction<Boolean>>;
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const close: React.MouseEventHandler = (e) => {
    if (e.target === modalRef?.current) {
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div
      ref={modalRef}
      onClick={close}
      className="  flex items-center justify-center w-full h-full   z-50 fixed top-0 left-0 right-0 bottom-0 bg-transparent"
    >
      <div className=" md:w-[30%] w-[60%] h-[450px] p-4 flex flex-col gap-y-5 items-center justify-center  md:ml-[18rem] bg-white rounded-lg shadow-2xl  ">
        <Image
          src={'/Images/avatar-laptop.png'}
          alt="Avatar"
          width={200}
          height={200}
          style={{ objectFit: 'contain' }}
        />
        <h2 className=" text-[1.2rem] text-[#212B36] font-semibold">Pekerjaan Sedang Diproses</h2>
        <p className=" text-center text-[0.8rem] font-normal text-[#212B36]">
          Mohon bersabar, ya. Tim Tumutuku butuh waktu maksimal 1 x 24 jam untuk memverifikasi
          pekerjaan yang baru saja Anda buat.
        </p>
        <button
          onClick={handleClose}
          className=" rounded-xl w-full bg-[#1E88E5] hover:bg-[#1f74be] p-4 font-semibold text-white text-[0.8rem]"
        >
          Baik Mengerti
        </button>
      </div>
    </div>
  );
};

export default ModalInformasi;
