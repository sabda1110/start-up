import { FaArrowLeft } from 'react-icons/fa';
import dynamic from 'next/dynamic';
import { link } from 'fs';

const ItemPembayaran = dynamic(() => import('./core/ItemPembayaran'));

const dataItemPembayaran = [
  { id: 1, name: 'BCA Virtual Accout', link: '/Images/bca.png' },
  {
    id: 2,
    name: 'BRI Virtual Accout',
    link: '/Images/bri.png'
  },
  {
    id: 3,
    name: 'Mandiri Virtual Accout',
    link: '/Images/mandiri.png'
  }
];
const ModalPembayaran = () => {
  return (
    <div className=" absolute  z-50 p-4 px-6 rounded-md bg-white shadow-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[30%] w-[80%] md:h-[650px] h-[580px] overflow-y-scroll">
      <div className="header py-4 border-b border-gray-200 sticky bg-white flex justify-between w-full items-center mb-4">
        <FaArrowLeft className="text-[#424242] md:text-[1.5rem] text-[1.2rem]" />
        <h2 className=" text-[#424242] font-semibold text-[1rem]">Pembayaran</h2>
        <span></span>
      </div>

      <div className=" w-full   bg-[#F8F8F8] p-2 mt-15 rounded-md">
        <h3 className=" md:text-[1rem] text-[0.9rem] text-[#424242] font-semibold">
          Rincian Pembelian
        </h3>
        <section className="mt-5 grid grid-cols-2  justify-between w-full">
          <p className=" md:text-[0.9rem] text-[0.8rem] text-[#424242]">Paket yang Dibeli</p>
          <p className=" md:text-[0.9rem] text-[0.7rem] text-[#424242] font-semibold  md:text-right text-left px-8">
            Article
          </p>
          <p className=" md:text-[0.9rem] text-[0.8rem] text-[#424242]">Total Bayar</p>
          <p className=" md:text-[0.9rem] text-[0.7rem] text-[#424242] font-semibold  md:text-right text-left px-8">
            Rp. 100.000
          </p>
        </section>
      </div>
      <div className=" w-full  bg-[#F8F8F8] p-2 mt-4 rounded-md">
        <h3 className=" md:text-[1rem] text-[0.9rem] text-[#424242] font-semibold">
          Informasi Pembeli
        </h3>
        <p className=" md:text-[0.9rem] text-[0.8rem]  mt-3 text-[#424242]">
          Pembelian paket Artcile ini menggunakan email yang terhubung dengan akun tumutuku-mu
        </p>
        <section className="mt-5 text-ellipsis grid grid-cols-3 justify-between w-full">
          <p className=" md:text-[0.9rem] text-[0.8rem] text-[#424242]">Email</p>
          <p className=" md:text-[0.9rem] text-[0.6rem] col-span-2 text-[#424242] font-semibold  text-right ">
            sabdasetiawan206@gmail.com
          </p>
          <p className=" md:text-[0.9rem] text-[0.8rem] text-[#424242]">Nama</p>
          <p className=" md:text-[0.9rem] text-[0.6rem] col-span-2 text-[#424242] font-semibold  text-right ">
            Sabda Setiawan
          </p>
        </section>
      </div>

      <div className=" w-full  bg-[#F8F8F8] p-2 mt-4 rounded-md">
        <h3 className=" md:text-[1rem] text-[0.9rem] text-[#424242] font-semibold">
          Silahkan transfer ke salah satu rekening berikut
        </h3>
        <section className=" flex flex-col gap-y-3">
          <h4 className=" md:text-[0.9rem] text-[0.8rem] mt-5 text-[#424242] font-semibold">
            Virtual Account
          </h4>

          {dataItemPembayaran.map((item: { id: Number; name: string; link: string }, index) => (
            <ItemPembayaran key={index} name={item.name} link={item.link} />
          ))}
        </section>
      </div>

      <div className=" w-full mt-6 h-[8vh] rounded-md bg-[#757575] hover:bg-[#5a5757] cursor-pointer font-semibold text-white flex items-center justify-center">
        Kirim Bukti
      </div>
    </div>
  );
};

export default ModalPembayaran;
