'use client';

import { MdOutlineSubtitles, MdOutlinePersonOutline } from 'react-icons/md';
import { FaRegFileAlt } from 'react-icons/fa';
import { Formik, useFormik } from 'formik';
import dynamic from 'next/dynamic';

const InputDate = dynamic(() => import('../../atom/inputDate/InputDate'));
const InputText = dynamic(() => import('../../atom/inputText/InputText'));
const InputFile = dynamic(() => import('../../atom/InputFile/InputFile'));
const InputTextArea = dynamic(() => import('../../atom/inputTextArea/InputTextArea'));

const dataInput: inputTypeForm[] = [
  {
    label: 'Tanggal deatline',
    desc: ' Tentukan batas jam tugas sesuai ketentuan Anda. Waktu Indonesia Barat(WIB) menjadi standar waktu',
    judul: 'Jam Deadline',
    name: 'deadline',
    input: InputDate,
    prioritas: true
  },
  {
    label: 'Judul Article',
    desc: 'Buatlah judul article sesuai kata kunci yang umum digunakan. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'Judul Article',
    name: 'article',
    input: InputText,
    icon: MdOutlineSubtitles,
    prioritas: true
  },
  {
    label: 'Nama Pengguna',
    desc: 'Buatlah Nama pengguna sesuai kata kunci yang umum digunakan. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'Pengguna',
    name: 'namaPengguna',
    input: InputText,
    icon: MdOutlinePersonOutline,
    prioritas: true
  },
  {
    label: 'Description (Optional)',
    desc: 'Buatlah description yang mudah dipahami. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'description',
    name: 'description',
    input: InputTextArea,
    prioritas: false
  },
  {
    label: 'File Tambahan (Optional)',
    desc: 'Jika ada file soal ataupun file yang membantu mungkin bisa dapat disertakan dalam satu PDF',
    judul: 'File Tambahan',
    name: 'file',
    input: InputFile,
    icon: FaRegFileAlt,
    prioritas: false
  }
];

const FormInput = ({ page }: { page: number }) => {
  const handleSubmit = () => {
    console.log('oke');
  };

  const formik = useFormik({
    initialValues: {
      deadline: '',
      article: '',
      namaPengguna: '',
      description: '',
      file: '',
      type: 'article'
    },
    onSubmit: handleSubmit
  });

  return (
    <div className=" w-full h-full    bg-white mt-5 ml-4 md:ml-0 p-4 rounded-xl shadow-md">
      <form action="" className=" flex flex-col gap-y-8">
        {dataInput.map((data: inputTypeForm, index: any) => (
          <section key={index} className=" flex flex-col gap-y-2">
            <label htmlFor={data.name} className=" font-semibold text-[1rem] text-[#1F2937]">
              {data.label} {data.prioritas ? <span className="text-red-500">*</span> : ''}
            </label>
            <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">{data.desc}</p>
            <data.input judul={data.judul} formik={formik} name={data.name} Icon={data.icon} />
          </section>
        ))}
      </form>
    </div>
  );
};

export default FormInput;
