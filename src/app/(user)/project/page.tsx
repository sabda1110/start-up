import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const dataItem = [
  {
    name: 'Front End Developer',
    src: '/Images/front-end.png'
  },
  {
    name: 'Back End Developer',
    src: '/Images/back-end.png'
  },
  {
    name: 'Article',
    src: '/Images/article-icon.png'
  },
  {
    name: 'Turnitin',
    src: '/Images/turnitin-icon.png'
  },
  {
    name: 'Skripsi',
    src: '/Images/article-icon.png'
  },
  {
    name: 'Lainnya',
    src: '/Images/project-lainnya.png'
  }
];

const ProjectUserPage = () => {
  return (
    <div className="w-full h-screen border p-4  mb-28  overflow-y-scroll overflow-scroll  grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 bg-[#f4f6f8] gap-4 items-center justify-center mx-auto ">
      {dataItem.map((item: { name: string; src: string }, index) => (
        <section
          key={index}
          className="lg:w-[380px] md:w-[300px] mx-auto  w-[380px] h-[260px] shadow-lg bg-white rounded-lg flex flex-col items-center justify-center gap-2 "
        >
          <h2 className="text-[#4A4A4A] text-[1rem] font-semibold">{item.name}</h2>
          <Image
            src={item.src}
            alt="Logo"
            width={100}
            height={100}
            style={{ objectFit: 'contain', objectPosition: 'center' }}
          />
          <button className=" border w-[60%] h-[35px] rounded-2xl bg-[#4a4a4a] font-semibold text-white text-[0.8rem]">
            Buat Project
          </button>
          <Link
            href={'/detail/123'}
            className=" text-[#4a4a4a] font-semibold text-[0.8rem] cursor-pointer hover:underline"
          >
            Lihat Detail
          </Link>
        </section>
      ))}
    </div>
  );
};

export default ProjectUserPage;
