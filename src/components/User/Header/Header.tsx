import { FaHeadset } from 'react-icons/fa6';
import { HiMenuAlt2 } from 'react-icons/hi';
import Image from 'next/image';

const Header = ({ open }: { open: Function }) => {
  return (
    <div className=" p-4  py-6 w-full h-[92px] flex lg:justify-end md:justify-end justify-between items-center ">
      <HiMenuAlt2
        onClick={() => open(true)}
        className=" lg:hidden md:hidden block text-[#637381] cursor-pointer"
        size={25}
      />
      <section className=" flex  items-center gap-x-3 justify-center text-[#637381]">
        <FaHeadset size={25} />
        <p className="text-[0.8rem] lg:block md:block hidden ">Hubungin Tim Tumutuku</p>
        <Image
          src={'/Images/Button.png'}
          alt="profile-icon"
          width={45}
          height={45}
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="  rounded-full "
        />
      </section>
    </div>
  );
};

export default Header;
