'use client';

import { MdWeb, MdOutlinePersonOutline, MdPhoneEnabled } from 'react-icons/md';
import { FaRegFileAlt } from 'react-icons/fa';
import { useFormik } from 'formik';
import dynamic from 'next/dynamic';

const InputDate = dynamic(() => import('../../atom/inputDate/InputDate'));
const InputText = dynamic(() => import('../../atom/inputText/InputText'));
const InputFile = dynamic(() => import('../../atom/InputFile/InputFile'));
const InputTextArea = dynamic(() => import('../../atom/inputTextArea/InputTextArea'));
const DataInput = dynamic(() => import('./atom/dataInput/DataInput'));

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
    label: 'Type Web',
    desc: 'Buatlah Type web sesuai kata kunci yang umum digunakan seperti E-goverment, E-commerchant, dll. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'Type Web',
    name: 'typeWeb',
    input: InputText,
    icon: MdWeb,
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
    label: 'Phone Number',
    desc: 'Buatlah Nomor Telepon yang dapat dihubungi dan aktif WhatsApp. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'Phone Number',
    name: 'phoneNumber',
    input: InputText,
    icon: MdPhoneEnabled,
    prioritas: true
  },
  {
    label: 'File Tambahan (Optional)',
    desc: 'Jika ada file soal ataupun file yang membantu mungkin bisa dapat disertakan dalam satu PDF',
    judul: 'File Tambahan',
    name: 'file',
    input: InputFile,
    icon: FaRegFileAlt,
    prioritas: false
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

const FormInputWeb = ({
  page,
  setPage,
  handleNext
}: {
  page: number;
  setPage: Function;
  handleNext: Function;
}) => {
  const handleSubmit = () => {
    console.log('Oke aja deh');
  };

  const formik = useFormik({
    initialValues: {
      deadline: '',
      typeWeb: '',
      namaPengguna: '',
      phoneNumber: '',
      description: '',
      file: '',
      type: 'web'
    },
    onSubmit: handleSubmit
  });

  return (
    <div className="w-full  h-full mb-28 bg-white mt-5 ml-4 md:ml-0 p-4 rounded-xl shadow-md">
      <form action="" onSubmit={formik.handleSubmit} className="  flex flex-col gap-y-8">
        <DataInput dataInput={dataInput} formik={formik} />
        <section className="button  mt-3  flex justify-between w-full ">
          <span></span>
          <button
            type={`${page === 2 ? 'submit' : 'button'}`}
            onClick={() => {
              page === 2 ? handleSubmit() : handleNext();
            }}
            className=" border w-[40%] md:w-[20%] px-4 py-2  rounded-2xl bg-[#3B82F6] transition-all ease-in-out duration-300 hover:scale-110 font-semibold text-white text-[0.8rem] outline-blue-600"
          >
            {page === 2 ? 'Buat Pekerjaan' : 'Selanjutnya'}{' '}
            <span className=" ml-3 text-[1rem]">{`>`}</span>
          </button>
        </section>
      </form>
    </div>
  );
};

export default FormInputWeb;
