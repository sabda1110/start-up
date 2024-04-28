const SkeletonRiwayat = () => {
  return (
    <div className=" animate-pulse border rounded p-2">
      <div className="flex justify-between  mb-2 items-center">
        <div className=" w-[60%]">
          <div className="h-2 bg-slate-700 rounded "></div>
          <div className="h-2 bg-slate-700 rounded mt-3 "></div>
        </div>
        <div className="h-2 w-[80px] bg-slate-700 rounded "></div>
      </div>

      <hr />

      <div className=" flex items-center py-2 ">
        <div className=" w-[40%] h-[10vh] bg-slate-700 rounded-md"></div>
        <div className=" ml-4 w-[60%] ">
          <div className="h-2  bg-slate-700 rounded "></div>
          <div className="h-2  bg-slate-700 rounded mt-3 "></div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonRiwayat;
