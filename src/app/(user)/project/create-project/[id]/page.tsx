'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';

const FormInput = dynamic(
  () => import('@/components/User/core/formInput/Create-Project/FormInput')
);
const FormInputWeb = dynamic(
  () => import('@/components/User/core/formInput/Create-Project/FormInputWeb')
);

const FormInputTurnitin = dynamic(
  () => import('@/components/User/core/formInput/Create-Project/FormInputTurnitin')
);

const FormInputSkripsi = dynamic(
  () => import('@/components/User/core/formInput/Create-Project/FormInputSkripsi')
);
const createProjectPage = (props: inputProps) => {
  const { params } = props;
  const [page, setPage] = useState<number>(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const handleClickNext = () => {
    setPage((prev) => prev + 1);
    containerRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    }); // Menggunakan optional chaining untuk memastikan elemen ref ada
  };

  const handleClickBack = () => {
    setPage((prev) => prev - 1);
    containerRef?.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest'
    });
  };

  return (
    <div ref={containerRef} className=" w-full  p-4 overflow-y-scroll bg-[#f4f6f8]">
      <h2 className=" text-[2rem] text-[#212B36] font-bold">Buat Tugas {params.id}</h2>
      <section className=" w-[200px] h-[30px] flex items-center">
        <p className="w-[60px] ">{params.id}</p>
        <p className="w-[30px]  pb-2 text-[26px] font-bold flex items-center justify-center">.</p>
        <p className=" w-[90px] ">Form Regis</p>
      </section>

      <section className=" w-full relative  h-[50px] flex items-center justify-center text-[#242424] md:mt-1 mt-5 ">
        <div className=" flex flex-col gap-2 items-center z-20">
          <span
            className={` ${
              page === 1 ? ' bg-green-400' : 'bg-gray-400'
            } w-[30px] h-[30px] block  pt-[0.18rem]  text-white    text-center rounded-full`}
          >
            1
          </span>
          <p>Informasi Tugas</p>
        </div>
        <span className="w-[200px] h-[5px] bg-gray-600 ml-[-3.5rem] z-10 -mt-8 border"></span>
        <div className=" flex flex-col gap-2 items-center -ml-10 z-20">
          <span
            className={` ${
              page === 2 ? ' bg-green-400' : 'bg-gray-400'
            } w-[30px] h-[30px] block  pt-[0.18rem]  text-white text-center rounded-full`}
          >
            2
          </span>
          <p>Konfirmasi</p>
        </div>
      </section>
      {params.id === 'Article' && (
        <FormInput page={page} setPage={setPage} handleNext={handleClickNext} />
      )}
      {params.id === 'Web' && (
        <FormInputWeb page={page} setPage={setPage} handleNext={handleClickNext} />
      )}
      {params.id === 'Turnitin' && (
        <FormInputTurnitin
          page={page}
          setPage={setPage}
          handleNext={handleClickNext}
          handleBack={handleClickBack}
        />
      )}
      {params.id === 'Skripsi' && (
        <FormInputSkripsi page={page} setPage={setPage} handleNext={handleClickNext} />
      )}
    </div>
  );
};

export default createProjectPage;
