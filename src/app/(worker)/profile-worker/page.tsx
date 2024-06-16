const ProfilePageWorker: React.FC = () => {
  return (
    <div className=" w-full h-full overflow-hidden ">
      <div className="header w-full text-center">
        <h1 className=" text-2xl font-semibold">Profile Worker</h1>
      </div>
      <div className="container w-full flex mt-5 items-center justify-center gap-x-5 border mx-auto">
        <section className=" w-1/3 bg-red-500">1</section>
        <section className=" w-1/3">2</section>
      </div>
    </div>
  );
};

export default ProfilePageWorker;
