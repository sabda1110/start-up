import { GrUserWorker } from 'react-icons/gr';
import { MdOutlineMail } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

const DataWorker = ({ handleOpen }: { handleOpen: Function }) => {
  return (
    <div className=" relative">
      <h4 className=" text-gray-600 text-[1rem] font-semibold border-b-2 border-gray-200">
        Data Worker
      </h4>
      <div className="Biodata mt-5">
        <section className=" flex items-center gap-4 ">
          <GrUserWorker size={20} className=" text-blue-400" />
          <p className=" text-[#4B5563] font-light">Name</p>
        </section>
        <p className=" text-[#4B5563] font-normal">Sabda Setiawan</p>
        <section className=" flex items-center gap-4 mt-3 ">
          <MdOutlineMail size={20} className=" text-blue-400" />
          <p className=" text-[#4B5563] font-light">Email</p>
        </section>
        <p className=" text-[#4B5563] font-normal">sabdasetiawan206@gmail.com</p>
        <section className=" flex items-center gap-4 mt-3 ">
          <FaWhatsapp size={20} className=" text-green-500" />
          <p className=" text-[#4B5563] font-light">Whatsapp</p>
        </section>
        <Link href={'https://wa.me/+6282278536416'} className=" text-[#4B5563] font-normal">
          +6282278536416
        </Link>
      </div>

      <p className="text-[#4B5563] font-semibold mt-5 text-[0.7rem] md:text-[0.9rem] ">
        Seluruh proses pengerjaan tugas anda dan pembayaran di harapkan melalui aplikasi tumutuku
        agar proses aman{' '}
      </p>

      <div
        onClick={() => handleOpen()}
        className=" w-full md:absolute md:bottom-0 h-[10%] md:py-0 py-6 text-center flex items-center justify-center font-bold text-white mt-6 bg-blue-400 rounded-md cursor-pointer hover:bg-blue-500"
      >
        Pembayaran
      </div>
    </div>
  );
};

export default DataWorker;
