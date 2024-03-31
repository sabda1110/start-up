'use client';
import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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
      <div className=" absolute overflow-hidden  top-1/2 left-2/3  -translate-x-1/2 -translate-y-1/2 p-6 rounded-md md:w-[689px] md:h-[629px] w-[200px] h-[200px]">
        <section className="w-full h-full relative rounded-md">
          <Image
            src={'/Images/logo.png'}
            alt="Logo"
            width={200}
            height={200}
            style={{ objectFit: 'contain' }}
            className=" absolute z-50 right-6"
          />
          <Image
            src={'/Images/modalBackground.jpg'}
            alt="profile-icon"
            fill
            loading="lazy"
            className=" rounded-2xl"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          {children}
        </section>
      </div>

      <div className=" md:w-[500px] md:h-[500px] flex  flex-col items-center justify-center shadow-2xl bg-white absolute overflow-auto top-1/2 left-[32%] rounded-3xl -translate-x-1/2 -translate-y-1/2">
        <Image src={'/Images/iconDocument.jpg'} alt="Document" width={350} height={350} />
        <section className=" flex absolute bottom-0 p-4 gap-4 items-center  w-full ">
          <Image src={'/Images/google.png'} alt="Google Icon" width={30} height={30} />
          <p className=" texxt-[#242424]">tumutuku@gmail.com</p>
        </section>
      </div>
    </div>
  );
};

export default Modal;
