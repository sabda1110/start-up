import Image from 'next/image';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaArchive, FaChevronDown } from 'react-icons/fa';

const page = () => {
  return (
    <div className="my-8 p-4">
      <div className="bg-[#F9FAFB] rounded border px-4">
        <section className="w-full flex justify-center my-8">
          <Image src="/Images/logo.png" alt="Logo" width={200} height={100} />
        </section>
        <hr />
        <section>
          <div className="mt-8 flex gap-2 flex-col sm:flex-row">
            <div className="flex-1 text-[#9CA3AF] border flex justify-between py-2 items-center rounded px-2">
              <p>Semua Status</p>
              <FaChevronDown />
            </div>
            <div className="flex-1 text-[#9CA3AF] border flex justify-between py-2 items-center rounded px-2">
              <p>Semua Jangka Waktu</p>
              <FaChevronDown />
            </div>
          </div>
          <div className="flex items-center justify-between border rounded mt-2 p-2 mb-4">
            <div className="flex items-center gap-2">
              <FaArchive className="text-blue-400" />
              <p className="text-[#9CA3AF]">Diarsipkan</p>
            </div>
            <FaChevronDown className="text-[#9CA3AF]" />
          </div>
        </section>
        <section className="grid md:grid-cols-2 gap-2">
          {Array.from({ length: 10 }, (_, index) => {
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
          })}
          ;
        </section>
      </div>
    </div>
  );
};

export default page;
