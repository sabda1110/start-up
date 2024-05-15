'use client';

import Image from 'next/image';

import { FaArchive, FaChevronDown } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
const MenuStatus = dynamic(() => import('@/components/User/riwayat/Menu/Status/MenuStatus'));
const MenuWaktu = dynamic(() => import('@/components/User/riwayat/Menu/Waktu/MenuWaktu'));
const History = dynamic(() => import('@/components/User/riwayat/History/History'));
const ModalInformasi = dynamic(() => import('@/components/User/core/modalRiwayat/ModalInformasi'));

const page = (props: inputPropsMany) => {
  const { params } = props;
  const [open, setOpen] = useState<Boolean>(false);
  const [data, setData] = useState<DataBackEnd>({ status: false, statusCode: 0, data: [] });
  const port = process.env.API_BACKEND_URL;

  useEffect(() => {
    if (params.slug) {
      setOpen(true);
    }
  }, [params]);

  useEffect(() => {
    if (!port) {
      console.log('Port is not defined');
      return;
    }

    const fetcData = async () => {
      try {
        const res = await fetch(`${port}/pekerjaan/info-pekerjaan-user/fadilahramadiak@gmail.com`);
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const response: DataBackEnd = await res.json();

        if (!response.status) {
          throw new Error(response.data as string);
        } else {
          console.log(response);
          setData(response);
        }
      } catch (err) {
        console.log(err);
      }
    };

    fetcData();
  }, []);

  return (
    <div className="my-8 p-4 ">
      {open && <ModalInformasi setOpen={setOpen} />}
      <div className="bg-[#F9FAFB] rounded border px-4">
        <section className="w-full flex justify-center my-8">
          <Image src="/Images/logo.png" alt="Logo" width={200} height={100} />
        </section>
        <hr />
        <section>
          <div className="mt-8 flex gap-2 flex-col sm:flex-row">
            <MenuStatus />
            <MenuWaktu />
          </div>
          <div className="flex items-center justify-between border rounded mt-2 p-2 mb-4">
            <div className="flex items-center gap-2">
              <FaArchive className="text-blue-400" />
              <p className="text-[#9CA3AF]">Diarsipkan</p>
            </div>
            <FaChevronDown className="text-[#9CA3AF]" />
          </div>
        </section>
        <History />
      </div>
    </div>
  );
};

export default page;
