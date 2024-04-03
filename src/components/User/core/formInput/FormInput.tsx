import InputDate from '../atom/inputDate/InputDate';
import InputText from '../atom/inputText/InputText';

const FormInput = () => {
  return (
    <div className=" w-full h-[500px]  bg-white mt-5 p-4 rounded-xl shadow-md">
      <form action="" className=" flex flex-col gap-y-8">
        <section className=" flex flex-col gap-y-2">
          <label htmlFor="tanggal" className=" font-semibold text-[1rem] text-[#1F2937]">
            Tanggal deatline
          </label>
          <p className="text-[0.9rem] text-[#9CA3AF]">
            Tentukan batas jam tugas sesuai ketentuan Anda. Waktu Indonesia Barat(WIB) menjadi
            standar waktu
          </p>
          <InputDate />
        </section>
        <section className=" flex flex-col gap-y-2">
          <label htmlFor="tanggal" className=" font-semibold text-[1rem] text-[#1F2937]">
            Judul Article
          </label>
          <p className="text-[0.9rem] text-[#9CA3AF]">
            Buatlah judul article sesuai kata kunci yang umum digunakan. Ini akan memudahkan worker
            mengerjakan tugas Anda
          </p>
          <InputText />
        </section>
      </form>
    </div>
  );
};

export default FormInput;
