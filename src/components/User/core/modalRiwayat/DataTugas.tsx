import { FaRegCalendarAlt, FaMoneyBillWaveAlt, FaFile, FaAudioDescription } from 'react-icons/fa';
import { VscTypeHierarchySub } from 'react-icons/vsc';
import { MdOutlineMail } from 'react-icons/md';

const DataTugas = () => {
  return (
    <div>
      <h4 className=" text-gray-600 text-[1rem] font-semibold border-b-2 border-gray-200">
        Data Tugas
      </h4>

      <div className=" data-tugas mt-4 grid grid-cols-2  gap-y-5">
        <section>
          <div className="flex items-center gap-4">
            <FaRegCalendarAlt size={20} className=" text-blue-400" />
            <p className=" text-[#4B5563] font-light text-[0.9rem] md:text-[1.2rem]">Deadline</p>
          </div>
          <p className=" text-gray-800 font-normal mt-2 text-[0.8rem] md:text-[1rem]">
            23 Mei 2024
          </p>
        </section>
        <section>
          <div className="flex items-center gap-4">
            <VscTypeHierarchySub size={20} className=" text-blue-400" />
            <p className=" text-[#4B5563] font-light text-[0.9rem] md:text-[1.2rem]">Type tugas</p>
          </div>
          <p className=" text-gray-800 font-normal mt-2 text-[0.8rem] md:text-[1rem]">Article</p>
        </section>
        <section>
          <div className="flex items-center gap-4">
            <MdOutlineMail size={20} className=" text-blue-400" />
            <p className=" text-[#4B5563] font-light text-[0.9rem] md:text-[1.2rem]">Email user</p>
          </div>
          <p className=" text-gray-800 font-normal text-ellipsis mt-2 text-[0.8rem] md:text-[1rem]">
            rspn@gmail.com
          </p>
        </section>
        <section>
          <div className="flex items-center gap-4">
            <FaMoneyBillWaveAlt size={20} className=" text-blue-400" />
            <p className=" text-[#4B5563] font-light text-[0.9rem] md:text-[1.2rem]">Biaya</p>
          </div>
          <p className=" text-gray-800 font-normal mt-2 text-[0.8rem] md:text-[1rem]">Rp 100.000</p>
        </section>
        <section>
          <div className="flex items-center gap-4">
            <FaAudioDescription size={20} className=" text-blue-400" />
            <p className=" text-[#4B5563] font-light text-[0.9rem] md:text-[1.2rem]">Description</p>
          </div>
        </section>
        <section>
          <div className="flex items-center gap-4">
            <FaFile size={20} className=" text-blue-400" />
            <p className=" text-[#4B5563] font-light text-[0.9rem] md:text-[1.2rem]">File</p>
          </div>
          <p className=" text-gray-800 font-normal mt-2 text-[0.8rem] md:text-[1rem]">
            xyaxaat.pdf
          </p>
        </section>
      </div>

      <div className=" w-full h-[150px] border-2 border-blue-200 text-[#637381] rounded-md mt-3 p-2 overflow-y-scroll text-[0.8rem] md:text-[1rem]">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius nam voluptates, vel id
        commodi at. Porro magnam, minus laudantium temporibus voluptas culpa ducimus sapiente
        tenetur quo, amet, quos natus? Possimus, iure! Non quaerat aspernatur quibusdam quo, impedit
        sapiente, minima quam nemo molestiae necessitatibus amet dolor inventore quae fugiat,
        voluptate quisquam natus praesentium laudantium! Itaque assumenda ea pariatur! Ducimus
        nostrum nulla eos blanditiis odio accusamus expedita perspiciatis qui obcaecati quis libero
        sapiente deserunt, provident, molestias, laborum excepturi beatae atque animi placeat
        deleniti natus hic veniam aliquid? Impedit distinctio at reprehenderit magni quia delectus
        aut quo alias quod, sapiente dicta architecto ipsam!
      </div>
    </div>
  );
};

export default DataTugas;
