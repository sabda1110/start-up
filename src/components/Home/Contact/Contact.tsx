import Image from 'next/image';
const Contact = () => {
  return (
    <div className=" lg:mt-20 mt-[20rem] w-[99%] flex justify-end ">
      <div className="section lg:w-[750px] lg:h-[405px] relative ">
        <Image
          src={'/Images/contact.png'}
          fill
          objectFit="cover"
          objectPosition="center"
          alt="Gambar Contact"
        />

        <section className="bg-white flex flex-col p-7 rounded-md absolute lg:w-[508px] lg:h-[283px] top-14 -left-80 shadow-2xl">
          <h2 className="text-[36px] font-semibold text-[#414141]">
            How We Work?
          </h2>
          <p className="text-[18px] text-[#9F9F9F] w-[100%] lg:w-[50%] mt-5">
            Let's discuss what projects you have in mind
          </p>

          <button className="border mt-5 w-[203px] h-[60px] bg-[#4A4A4A] text-white text-[14px]">
            Let’s Have a Coffee
          </button>
        </section>
      </div>
    </div>
  );
};

export default Contact;
