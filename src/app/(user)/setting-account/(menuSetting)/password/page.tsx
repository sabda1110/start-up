'use client';

import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { FaKey } from 'react-icons/fa';

const InputPassword = dynamic(
  () => import('@/components/User/core/atom/inputPassword/InputPassword')
);

const PasswordSettingPage = () => {
  const handleSubmit = () => {
    console.log('Submit');
    console.log(formik.values);
  };

  const formik = useFormik({
    initialValues: {
      currentPassword: '',
      password: '',
      rePassword: ''
    },
    onSubmit: handleSubmit
  });

  return (
    <div className=" wfull h-svh p-4 flex items-center gap-y-5 drop-shadow-md flex-col">
      <h1 className=" text-3xl font-bold text-[#232323]">Halaman Password</h1>
      <form
        onSubmit={formik.handleSubmit}
        className=" w-[80%] bg-[#F9FAFB] flex flex-col gap-y-5  p-4 border-2 border-gray-200 rounded-lg shadow-md"
      >
        <fieldset className=" flex flex-col gap-y-2">
          <label htmlFor="username" className=" font-semibold text-[1rem] text-[#1F2937]">
            Password Saat Ini <span className="text-red-500">*</span>
          </label>
          <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum et necessitatibus,
            laboriosam provident saepe magnam corrupti amet atque sapiente!
          </p>
          <InputPassword
            judul="Password"
            name="currentPassword"
            Icon={FaKey}
            prioritas={true}
            formik={formik}
          />
        </fieldset>

        <fieldset className=" flex flex-col gap-y-2">
          <label htmlFor="username" className=" font-semibold text-[1rem] text-[#1F2937]">
            Password Baru <span className="text-red-500">*</span>
          </label>
          <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum et necessitatibus,
            laboriosam provident saepe magnam corrupti amet atque sapiente!
          </p>
          <InputPassword
            judul="Password"
            name="password"
            Icon={FaKey}
            prioritas={true}
            formik={formik}
          />
        </fieldset>
        <fieldset className=" flex flex-col gap-y-2">
          <label htmlFor="username" className=" font-semibold text-[1rem] text-[#1F2937]">
            Konfirmasi Password <span className="text-red-500">*</span>
          </label>
          <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore rerum et necessitatibus,
            laboriosam provident saepe magnam corrupti amet atque sapiente!
          </p>
          <InputPassword
            judul="Password"
            name="rePassword"
            Icon={FaKey}
            prioritas={true}
            formik={formik}
          />
        </fieldset>
        <div className=" flex justify-end  mt-5">
          <button
            type="submit"
            className="  border p-2 px-10 bg-blue-500 hover:bg-blue-600  text-white font-semibold drop-shadow-lg text-xl rounded-md "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PasswordSettingPage;
