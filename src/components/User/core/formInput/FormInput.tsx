'use client';

import InputDate from '../atom/inputDate/InputDate';
import InputText from '../atom/inputText/InputText';
import { MdOutlineSubtitles, MdOutlinePersonOutline } from 'react-icons/md';
import InputTextArea from '../atom/inputTextArea/InputTextArea';

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
  }
];

const FormInput = () => {
  return (
    <div className=" w-full h-full    bg-white mt-5 ml-4 md:ml-0 p-4 rounded-xl shadow-md">
      <form action="" className=" flex flex-col gap-y-8">
        {dataInput.map((data: inputTypeForm, index: any) => (
          <section key={index} className=" flex flex-col gap-y-2">
            <label htmlFor={data.name} className=" font-semibold text-[1rem] text-[#1F2937]">
              {data.label} {data.prioritas ? <span className="text-red-500">*</span> : ''}
            </label>
            <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">{data.desc}</p>
            <data.input judul={data.judul} name={data.name} Icon={data.icon} />
          </section>
        ))}
      </form>
    </div>
  );
};

export default FormInput;
