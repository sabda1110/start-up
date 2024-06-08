import BreadCrumbs from '@/components/materialUI/BreadCrumbs';
import DateMaterial from '@/components/materialUI/Date';
import InputText from '@/components/materialUI/InputText';
import { MdOutlineSearch, MdDashboardCustomize } from 'react-icons/md';
import { FaRegStar } from 'react-icons/fa';

const ProjectPage: React.FC = () => {
  return (
    <div className=" w-full h-full overflow-hidden">
      <div className="container w-full h-full flex flex-col items-center">
        <div className=" w-full flex gap-4 items-center mb-5 px-4 ">
          <section className=" flex items-center gap-x-3 text-gray-500">
            <MdDashboardCustomize size={18} />
            <FaRegStar size={18} />
          </section>
          <BreadCrumbs />
        </div>
        <div className="search md:w-[50%] w-[80%] h-[80px] flex items-center py-2 px-4 overflow-hidden mb-3 rounded-3xl border">
          <input type="text " placeholder="Cari Project" className=" outline-none w-3/4  h-full" />
          <section className="w-1/3 flex justify-end ">
            <MdOutlineSearch size={35} className=" text-gray-500" />
          </section>
        </div>
        <div className="md:w-[50%] w-[65%]   flex md:flex-row flex-col     justify-center md:gap-10 ">
          <InputText />
          <DateMaterial />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
