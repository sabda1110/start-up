const createProjectPage = () => {
  return (
    <div className=" w-full h-screen p-4 overflow-y-scroll b bg-[#f4f6f8]">
      <h2 className=" text-[2rem] text-[#212B36] font-bold">Buat Article</h2>
      <section className=" w-[200px] h-[30px] flex items-center">
        <p className="w-[60px] ">Article</p>
        <p className="w-[30px]  pb-2 text-[26px] font-bold flex items-center justify-center">.</p>
        <p className=" w-[90px] ">Form Regis</p>
      </section>
    </div>
  );
};

export default createProjectPage;
