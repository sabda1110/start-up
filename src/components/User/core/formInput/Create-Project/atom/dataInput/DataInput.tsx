const DataInput = ({ dataInput, formik }: { dataInput: inputTypeForm[]; formik: any }) => {
  const tampilan = dataInput.map((data: inputTypeForm, index: any) => (
    <fieldset key={index} className=" flex flex-col gap-y-2">
      <label htmlFor={data.name} className=" font-semibold text-[1rem] text-[#1F2937]">
        {data.label} {data.prioritas ? <span className="text-red-500">*</span> : ''}
      </label>
      <p className=" text-[0.7rem] md:text-[0.9rem] text-[#9CA3AF]">{data.desc}</p>
      <data.input judul={data.judul} formik={formik} name={data.name} Icon={data.icon} />
    </fieldset>
  ));

  return tampilan;
};

export default DataInput;
