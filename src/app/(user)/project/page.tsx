import React from 'react';
import Image from 'next/image';

const ProjectUserPage = () => {
  return (
    <div className="w-full h-screen border p-4  mb-28  overflow-y-scroll overflow-scroll  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-[#f4f6f8] gap-4 items-center justify-center mx-auto ">
      <section className="lg:w-[380px] md:w-[300px] mx-auto  w-[380px] h-[260px] shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-2 ">
        <h2 className="text-[#4A4A4A] text-[1rem] font-semibold">Front End Developer</h2>
        <Image
          src={'/Images/front-end.png'}
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        <button className=" border w-[60%] h-[35px] rounded-2xl bg-[#4a4a4a] font-semibold text-white text-[0.8rem]">
          Buat Project
        </button>
        <p className=" text-[#4a4a4a] font-semibold text-[0.8rem] cursor-pointer hover:underline">
          Lihat Detail
        </p>
      </section>
      <section className="lg:w-[380px] mx-auto md:w-[300px] w-[380px] h-[260px] shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-2 ">
        <h2 className="text-[#4A4A4A] text-[1rem] font-semibold">Back End Developer</h2>
        <Image
          src={'/Images/back-end.png'}
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        <button className=" border w-[60%] h-[35px] rounded-2xl bg-[#4a4a4a] font-semibold text-white text-[0.8rem]">
          Buat Project
        </button>
        <p className=" text-[#4a4a4a] font-semibold text-[0.8rem] cursor-pointer hover:underline">
          Lihat Detail
        </p>
      </section>
      <section className="lg:w-[380px] mx-auto md:w-[300px] w-[380px] h-[260px] shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-2 ">
        <h2 className="text-[#4A4A4A] text-[1rem] font-semibold">Article</h2>
        <Image
          src={'/Images/article-icon.png'}
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        <button className=" border w-[60%] h-[35px] rounded-2xl bg-[#4a4a4a] font-semibold text-white text-[0.8rem]">
          Buat Project
        </button>
        <p className=" text-[#4a4a4a] font-semibold text-[0.8rem] cursor-pointer hover:underline">
          Lihat Detail
        </p>
      </section>
      <section className="lg:w-[380px] mx-auto md:w-[300px] w-[380px] h-[260px] shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-2 ">
        <h2 className="text-[#4A4A4A] text-[1rem] font-semibold">Turnitin</h2>
        <Image
          src={'/Images/turnitin-icon.png'}
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        <button className=" border w-[60%] h-[35px] rounded-2xl bg-[#4a4a4a] font-semibold text-white text-[0.8rem]">
          Buat Project
        </button>
        <p className=" text-[#4a4a4a] font-semibold text-[0.8rem] cursor-pointer hover:underline">
          Lihat Detail
        </p>
      </section>

      <section className="lg:w-[380px] mx-auto md:w-[300px] w-[380px] h-[260px] shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-2 ">
        <h2 className="text-[#4A4A4A] text-[1rem] font-semibold">Skripsi</h2>
        <Image
          src={'/Images/article-icon.png'}
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        <button className=" border w-[60%] h-[35px] rounded-2xl bg-[#4a4a4a] font-semibold text-white text-[0.8rem]">
          Buat Project
        </button>
        <p className=" text-[#4a4a4a] font-semibold text-[0.8rem] cursor-pointer hover:underline">
          Lihat Detail
        </p>
      </section>
      <section className="lg:w-[380px] mx-auto md:w-[300px] w-[380px] h-[260px] shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-2 ">
        <h2 className="text-[#4A4A4A] text-[1rem] font-semibold">Lainnya</h2>
        <Image
          src={'/Images/project-lainnya.png'}
          alt="Logo"
          width={100}
          height={100}
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        <button className=" border w-[60%] h-[35px] rounded-2xl bg-[#4a4a4a] font-semibold text-white text-[0.8rem]">
          Buat Project
        </button>
        <p className=" text-[#4a4a4a] font-semibold text-[0.8rem] cursor-pointer hover:underline">
          Lihat Detail
        </p>
      </section>
    </div>
  );
};

export default ProjectUserPage;
