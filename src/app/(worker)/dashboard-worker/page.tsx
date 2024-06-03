import LineComponent from '@/components/ChartJs/LineComponent/LineComponent';
import PieComponent from '@/components/ChartJs/PieComponent/PieComponent';
import Image from 'next/image';

const DashboardWorker: React.FC = () => {
  return (
    <div className=" w-full md:h-full h-screen md:overflow-hidden overflow-y-scroll  ">
      <div className="container-header flex border flex-col md:flex-row gap-4">
        <section className=" md:w-1/5 w-full  p-4 rounded-lg bg-[#E6F2FC] h-[175px] flex flex-col items-center text-center justify-center gap-y-3">
          <h2 className=" font-bold text-[24px] text-[#212B36]">Selamat Datang!</h2>
          <p className=" text-[#212B36] text-[14px]">
            Yuk, Kelola Pekerjaan & dapatkan proses penghasilan yang masuk
          </p>
        </section>
        <section className=" md:w-2/5 w-full h-[175px] rounded-lg shadow-md  p-4 flex items-center justify-between">
          <div className=" text-center">
            <h2 className=" font-bold text-[48px] text-[#212B36]">0</h2>
            <p className=" text-[#637381] text-[14px]">Project</p>
          </div>

          <Image
            src={'/Images/iconProject.png'}
            alt="Icon Project"
            width={150}
            height={150}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </section>
        <section className=" md:w-2/5 w-full h-[175px] rounded-lg shadow-md  p-4 flex items-center justify-between">
          <div className=" text-center">
            <h2 className=" font-bold text-[48px] text-[#212B36]">0</h2>
            <p className=" text-[#637381] text-[14px]">Tugas</p>
          </div>

          <Image
            src={'/Images/iconTugas.png'}
            alt="Icon Project"
            width={150}
            height={150}
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </section>
      </div>

      <div className="desc-data flex md:flex-row gap-4 flex-col items-center justify-center md:h-[356px] md:py-0 py-20 mt-4 rounded-lg p-4 bg-gray-100 border">
        <section className=" md:w-3/4 w-full h-full  relative   ">
          <LineComponent />
        </section>
        <section className="md:w-1/4  relative  w-full p-4 flex flex-col items-center ">
          <PieComponent />
          <div className=" grid grid-cols-2 mt-4  w-full gap-x-5 ">
            <div className=" border-l-4 border-[#559BED] pl-2">
              <p className=" font-bold text-[14px] text-[#0F3F62]">Rp. 200000</p>
              <p className=" text-[10px] text-[#7C8DB5]">Pendapatan</p>
            </div>
            <div className=" border-l-4 border-[#62D2FF] pl-2">
              <p className=" font-bold text-[14px] text-[#0F3F62]">Rp. 100000</p>
              <p className=" text-[10px] text-[#7C8DB5]">Pengeluaran</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DashboardWorker;
