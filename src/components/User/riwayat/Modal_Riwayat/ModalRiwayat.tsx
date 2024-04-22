import { BsThreeDotsVertical } from 'react-icons/bs';
import Image from 'next/image';
const ModalRiwayat = () => {
  return (
    <div className="border rounded p-2">
      <div className="flex mb-2 items-center">
        <div className="text-[#9CA3AF] flex-1">
          <p>Status diperbarui pada</p>
          <p>dd/mm/yyyy</p>
        </div>
        <p className="py-2 px-8 bg-[#DBEAFE] text-[#3B82F6] rounded">x(10)</p>
        <BsThreeDotsVertical size={30} />
      </div>
      <hr />
      <div className="flex items-center py-2 flex-wrap">
        <Image
          src="/Images/transstudio.png"
          alt="Logo Transstudio Pekanbaru"
          width={200}
          height={100}
        />
        <div className="ml-4">
          <p className="text-xl font-semibold">X(25)</p>
          <p className="text-base text-[#6B7280]">Transstudio Mini Pekanbaru</p>
        </div>
      </div>
    </div>
  );
};

export default ModalRiwayat;
