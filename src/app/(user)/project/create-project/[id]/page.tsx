import FormInput from '@/components/User/core/formInput/FormInput';

const createProjectPage = () => {
  return (
    <div className=" w-full h-screen p-4 overflow-y-scroll bg-[#f4f6f8]">
      <h2 className=" text-[2rem] text-[#212B36] font-bold">Buat Article</h2>
      <section className=" w-[200px] h-[30px] flex items-center">
        <p className="w-[60px] ">Article</p>
        <p className="w-[30px]  pb-2 text-[26px] font-bold flex items-center justify-center">.</p>
        <p className=" w-[90px] ">Form Regis</p>
      </section>

      <section className=" w-full relative  h-[50px] flex items-center justify-center text-[#242424] ">
        <div className=" flex flex-col gap-2 items-center">
          <span className=" w-[30px] h-[30px] block  pt-[0.18rem] bg-green-400 text-white    text-center rounded-full">
            1
          </span>
          <p>Informasi Tugas</p>
        </div>
        <span className="w-[200px] h-[5px] bg-gray-600 ml-[-2.55rem] -mt-8 border"></span>
        <div className=" flex flex-col gap-2 items-center -ml-7">
          <span className=" w-[30px] h-[30px] block  pt-[0.18rem] bg-gray-400 text-white    text-center rounded-full">
            2
          </span>
          <p>Konfirmasi</p>
        </div>
      </section>
      <FormInput />
    </div>
  );
};

export default createProjectPage;
