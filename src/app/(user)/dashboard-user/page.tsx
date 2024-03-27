import Image from 'next/image';

const DashboardUserPage = () => {
  return (
    <div className="w-full h-screen p-4 py-6 overflow-y-scroll">
      <section className=" grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  gap-3">
        <div className="border lg:w-[60%] flex flex-col p-4 py-8 items-center justify-center rounded-md bg-[#E6F2FC] text-[#212B36]">
          <h2 className=" text-[18px] font-bold">Selamat Datang</h2>
          <p className=" text-center text-[12px] font-normal">
            Yuk, kelola lowongan & proses lamaran yang masuk.
          </p>
        </div>
        <div className=" lg:w-[120%] lg:ml-[-10rem] px-4 flex justify-between items-center shadow-md rounded-md">
          <section>
            <h2 className=" text-[38px] font-bold text-[#212B36]">0</h2>
            <p className=" text-center text-[12px] font-normal text-[#637381]">Project</p>
          </section>
          <Image
            src={'/Images/iconProject.png'}
            alt="Project Icon"
            width={100}
            height={100}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
        <div className=" lg:w-[120%] lg:ml-[-5rem] px-4 flex justify-between items-center shadow-md rounded-md">
          <section>
            <h2 className=" text-[38px] font-bold text-[#212B36]">0</h2>
            <p className=" text-center text-[12px] font-normal text-[#637381]">Pekerjaan</p>
          </section>
          <Image
            src={'/Images/iconTugas.png'}
            alt="Project Icon"
            width={100}
            height={100}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </section>

      <section className=" w-full h-[330px] mt-3 rounded-md bg-[#FFC107]/10 grid lg:grid-cols-2 grid-cols-1 justify-between items-center text-[#212B36] ">
        <div className="px-7">
          <h2 className=" text-[1.5rem] font-semibold">Saatnya Mencoba </h2>
          <h2 className=" text-[1.5rem] font-semibold">Pekerjaan Pertama </h2>
          <p className=" text-[0.7rem] w-[50%] mt-3 ">
            Tumutuku akan mempertemukan Anda dengan potensi terbaik yang sesuai pekerjaan anda.
          </p>
          <section className="button mt-4 border  lg:w-[30%] w-full px-4 py-1 rounded-lg bg-[#919EAB]/25 text-[#919EAB]/80 hover:bg-orange-400 hover:text-white text-[14px] hover:scale-110 transition-all ease-in-out delay-100 text-center font-semibold cursor-pointer">
            + Buat Pekerjaan
          </section>
        </div>

        <div className=" relative hidden lg:flex w-full h-full  items-center justify-center ">
          <Image
            src={'/Images/heroDashboard.png'}
            alt="Hero Dashboard"
            width={399}
            height={292}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
        </div>
      </section>

      <section className=" w-full h-[120px] mb-20 px-7 bg-[#E6F2FC] rounded-lg mt-5 flex gap-x-5 items-center">
        <Image src={'/Images/workerIcon.png'} alt="Gambar Worker" width={100} height={100} />
        <div>
          <h2 className=" text-[#212B36] font-semibold">
            Nikmati keleluasaan penggunaan dengan paket premium.
          </h2>
          <section className="button mt-4 border  lg:w-[40%] w-full px-4 py-1 rounded-lg bg-[#919EAB]/25 text-[#919EAB]/80 hover:bg-blue-400 hover:text-white text-[14px] hover:scale-110 transition-all ease-in-out delay-100 text-center font-semibold cursor-pointer">
            Tertarik
          </section>
        </div>
      </section>
    </div>
  );
};

export default DashboardUserPage;
