'use client';

import { useFormik } from 'formik';
import dynamic from 'next/dynamic';
import { MdOutlinePersonOutline, MdPhoneEnabled } from 'react-icons/md';
import { FaRegFileAlt } from 'react-icons/fa';

const InputDate = dynamic(() => import('../../atom/inputDate/InputDate'));
const InputText = dynamic(() => import('../../atom/inputText/InputText'));
const InputFile = dynamic(() => import('../../atom/InputFile/InputFile'));
const InputTextArea = dynamic(() => import('../../atom/inputTextArea/InputTextArea'));
const DataInput = dynamic(() => import('./atom/dataInput/DataInput'));
const ValidasiPage = dynamic(() => import('./atom/validasi/Validasi'));

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
    label: 'File Skripsi/Jurnal/Article',
    desc: 'Kirim file skripsi/jurnal/article untuk menurunkan plagiarisme. Diharpkan mengirim format Word/PDF',
    judul: 'File Turnitin',
    name: 'file',
    input: InputFile,
    icon: FaRegFileAlt,
    prioritas: false
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
    label: 'Description (Optional)',
    desc: 'Buatlah description yang mudah dipahami. Ini akan memudahkan worker mengerjakan tugas Anda',
    judul: 'description',
    name: 'description',
    input: InputTextArea,
    prioritas: false
  }
];

const FormInputTurnitin = ({
  page,
  setPage,
  handleNext,
  handleBack
}: {
  page: Number;
  setPage: Function;
  handleNext: Function;
  handleBack: Function;
}) => {
  const handleSubmit = () => {
    console.log('Oke Aja Dah');
  };

  const formik = useFormik({
    initialValues: {
      deadline: '',
      file: '',
      namaPengguna: '',
      phoneNumber: '',
      description: '',
      type: 'turnitin'
    },
    onSubmit: handleSubmit
  });

  return (
    <div className="w-full  h-full mb-28 bg-white mt-5  p-4 rounded-xl shadow-md">
      <form action="" onSubmit={formik.handleSubmit} className="  flex flex-col gap-y-8">
        {page === 1 && <DataInput dataInput={dataInput} formik={formik} />}
        {page === 2 && <ValidasiPage />}

        <section className="button  mt-3  flex justify-between w-full ">
          {page === 1 && <span />}
          {page === 2 && (
            <button
              className=" flex items-center gap-3 font-semibold"
              onClick={handleBack()}
              type="button"
            >
              <span>{`<`}</span> Kembali
            </button>
          )}

          <button
            type={`${page === 2 ? 'submit' : 'button'}`}
            onClick={() => {
              page === 1 && handleNext();
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

export default FormInputTurnitin;
