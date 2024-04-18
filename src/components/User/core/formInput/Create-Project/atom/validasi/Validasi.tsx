import { MdShield, MdPhoneInTalk } from 'react-icons/md';
import { BiSolidLike } from 'react-icons/bi';
import { FaMoneyBills } from 'react-icons/fa6';
import { FaStopCircle } from 'react-icons/fa';
import { IoMdHeart } from 'react-icons/io';

const itemValidasi = [
  {
    icon: <MdShield size={30} className=" text-[#EAB308]" />,
    desc: 'Buat Article Anda tampak meyakinkan dengan mencantumkan Judul Article, detail & Tanggal. Deatline yang Anda harapkan secara jelas'
  },
  {
    icon: <BiSolidLike size={30} className=" text-[#3B82F6]" />,
    desc: 'Pastikan informasi & keterangan yang Anda cantumkan pada Article telah sesuai & tidak mengandung unsur penipuan atau pemalsuan.'
  },
  {
    icon: <MdPhoneInTalk size={30} className=" text-[#22C55E]" />,
    desc: 'Balaslah pesan Whatsapp atau email yang dikirimkan oleh para worker terkai tugas Anda.'
  },
  {
    icon: <IoMdHeart size={30} className=" text-[#FCA5A5]" />,
    desc: 'Responslah para worker yang tertarik bekerja sama dengan Anda secara sopan.'
  },
  {
    icon: <FaMoneyBills size={30} className=" text-[#166534]" />,
    desc: 'Sebaiknya Anda sesuai mengenakan biaya/charge pada perjanjian. Namun jika ada biaya yang memang diwajibkan, mohon jelaskan dan diskusikan pada worker'
  },
  {
    icon: <FaStopCircle size={30} className=" text-[#EF4444]" />,
    desc: 'Tutuplah tugas jika proses pekerjaan telah selesai atau Anda telah mendapatkan tugas yang sesuai'
  }
];

const ValidasiPage = () => {
  return (
    <div>
      <h1 className="text-xl font-bold text-[#212B36]">Kode Etika Tumutuku</h1>
      <section className=" w-full p-4 rounded-md bg-[#DBEAFE] text-[0.7rem] md:text-[0.9rem] mt-5 text-[#6B7280]">
        Selamat, Anda sudah berhasil mengisi formulir lowongan! Sebelum memposting-nya, yuk
        aplikasikan tips berikut agar lowongan Anda diminati banyak pelamar.
      </section>

      <section className=" flex flex-col w-full gap-8 mt-5 border-b-2 pb-4">
        {itemValidasi.map((item: { icon: any; desc: string }, index: any) => (
          <div className=" flex gap-x-4 w-full items-center">
            {item.icon}
            <p className=" text-[#374151] text-[0.7rem] md:text-[0.9rem]">{item.desc}</p>
          </div>
        ))}
      </section>

      <section className="input mt-3 flex gap-6 items-center">
        <input type="checkbox" name="validasi" id="validasi" />
        <label htmlFor="validasi" className=" text-[0.7rem] md:text-[0.9rem] font-semibold">
          Menyetujui kode etik pekerjaan yang diajukan Tumutuku
        </label>
      </section>
    </div>
  );
};

export default ValidasiPage;
