'use client';

import { IoMdPerson } from 'react-icons/io';
import { MdOutlineMail, MdPhone } from 'react-icons/md';
import dynamic from 'next/dynamic';

const InputText = dynamic(() => import('@/components/User/core/atom/inputText/InputText'));
import { useFormik } from 'formik';

const ProfileSettingPage = () => {
  const handleSubmit = () => {
    console.log('Submit');
  };
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      phone: ''
    },
    onSubmit: handleSubmit
  });
  return (
    <div className=" w-full h-svh  p-4 flex items-center gap-y-5 drop-shadow-md flex-col">
      <h1 className=" text-3xl font-bold text-[#232323]">Halaman Profile</h1>
      <div className=" w-[80%] h-[80%] bg-[#F9FAFB] p-4 border-2 border-gray-200 rounded-lg shadow-md">
        <fieldset className=" flex flex-col gap-y-2">
          <label htmlFor="username" className=" font-semibold text-[1rem] text-[#1F2937]">
            Username <span className="text-red-500">*</span>
          </label>
          <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum et necessitatibus,
            laboriosam provident saepe magnam corrupti amet atque sapiente!
          </p>
          <InputText
            judul="Username"
            name="username"
            Icon={IoMdPerson}
            prioritas={true}
            formik={formik}
          />
        </fieldset>
        <fieldset className=" flex flex-col gap-y-2 mt-2">
          <label htmlFor="username" className=" font-semibold text-[1rem] text-[#1F2937]">
            Email <span className="text-red-500">*</span>
          </label>
          <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum et necessitatibus,
            laboriosam provident saepe magnam corrupti amet atque sapiente!
          </p>
          <InputText
            judul="Email"
            name="email"
            Icon={MdOutlineMail}
            prioritas={true}
            formik={formik}
          />
        </fieldset>
        <fieldset className=" flex flex-col gap-y-2 mt-2">
          <label htmlFor="username" className=" font-semibold text-[1rem] text-[#1F2937]">
            Phone <span className="text-red-500">*</span>
          </label>
          <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum et necessitatibus,
            laboriosam provident saepe magnam corrupti amet atque sapiente!
          </p>
          <InputText judul="Phone" name="phone" Icon={MdPhone} prioritas={true} formik={formik} />
        </fieldset>
        <div className=" w-full flex items-center mt-5">
          <button className=" w-[80%] border mx-auto p-2 bg-blue-500 hover:bg-blue-600  text-white font-semibold drop-shadow-lg text-xl rounded-md ">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileSettingPage;
