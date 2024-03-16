import Image from 'next/image';

const Customer = () => {
  const dataImage = [
    { id: 1, url: '/Images/customer/logo1.png' },
    { id: 2, url: '/Images/customer/logo2.png' },
    { id: 3, url: '/Images/customer/logo3.png' },
    { id: 4, url: '/Images/customer/logo4.png' },
    { id: 5, url: '/Images/customer/logo5.png' },
    { id: 6, url: '/Images/customer/logo6.png' },
    { id: 7, url: '/Images/customer/logo7.png' },
    { id: 8, url: '/Images/customer/logo8.png' },
    { id: 9, url: '/Images/customer/logo9.png' },
    { id: 10, url: '/Images/customer/logo10.png' },
    { id: 11, url: '/Images/customer/logo11.png' },
    { id: 12, url: '/Images/customer/logo12.png' }
  ];
  return (
    <div className=" mt-[26rem] lg:mt-36 w-screen flex flex-col items-center ">
      <h2 className=" text-[25px] lg:text-[36px] font-semibold text-[#414141]">
        Our Customers
      </h2>
      <h2 className=" text-[25px] lg:text-[36px] font-semibold text-[#414141]">
        are our biggest fans
      </h2>

      <div className="customer w-screen lg:w-[817px] lg:h-[284px]  flex relative flex-wrap  items-center justify-center gap-x-6  mt-10 ">
        {dataImage.length > 0 &&
          dataImage.map((item) => {
            return (
              <Image
                key={item.id}
                src={item.url}
                alt="Logo Icon"
                width={150}
                height={150}
                objectFit="contain"
              />
            );
          })}
      </div>
    </div>
  );
};

export default Customer;
