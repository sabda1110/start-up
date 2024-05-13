import { FaArrowLeft } from 'react-icons/fa';
import { FaRegFolderClosed } from 'react-icons/fa6';
import { TiTicket } from 'react-icons/ti';
import { CiMoneyBill, CiBank, CiTrash } from 'react-icons/ci';

import Image from 'next/image';

const TampilanBukti = () => {
  return (
    <>
      <div className="header py-4 border-b border-gray-200 sticky -top-2 bg-white flex justify-between w-full items-center mb-4">
        <FaArrowLeft className="text-[#424242] md:text-[1.5rem] text-[1.2rem]" />
        <h2 className=" text-[#424242] font-semibold text-[1rem]">Kirim Bukti</h2>
        <span></span>
      </div>

      <div className="photo w-full mt-5 flex items-center justify-center ">
        <Image
          src={'/Images/bukti.png'}
          alt="Gambar OTP"
          width={100}
          height={100}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
      </div>

      <div className=" mt-6 p-4 bg-[#FFF6EA] rounded-md text-[0.8rem] text-[#424242]">
        <p>
          Pastikan bukti transfer terlihat jelas dan dapat dilihat oleh pihak tumutuku unutuk
          memvalidasi pembayaran anda
        </p>
      </div>

      <div className="description w-full mt-3   bg-[#F8F8F8] p-2 flex flex-col gap-y-2 rounded-md">
        <section className=" w-[60%] flex items-center gap-x-10">
          <TiTicket size={35} className=" text-blue-400  " />
          <p className=" text-[#4B5563] font-semibold  ">Article Fisioterapi</p>
        </section>
        <section className=" w-[60%] flex items-center gap-x-10">
          <CiMoneyBill size={35} className=" text-blue-400  " />
          <p className=" text-[#4B5563] font-semibold   ">Rp. 100.000</p>
        </section>
        <section className=" w-[60%] flex items-center gap-x-10">
          <CiBank size={35} className=" text-blue-400  " />
          <p className=" text-[#4B5563] font-semibold   ">Bank BCA</p>
        </section>
      </div>

      <div className="description w-full mt-5   bg-[#F8F8F8] p-2 flex flex-col gap-y-2 rounded-md">
        <section className=" w-[60%] flex items-center gap-x-3">
          <FaRegFolderClosed size={20} className=" text-gray-500  " />
          <p className=" text-[#4B5563] font-normal text-[0.8rem]  ">Pilih dari galeri</p>
        </section>
        <section className=" w-[60%] flex items-center gap-x-3">
          <CiTrash size={25} className=" text-gray-500  " />
          <p className=" text-[#4B5563] font-normal text-[0.8rem]  ">Hapus Foto</p>
        </section>
      </div>
    </>
  );
};

export default TampilanBukti;
