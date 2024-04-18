const InputTextArea = ({ judul, name, formik }: { judul: String; name: string; formik: any }) => {
  return (
    <div className="w-full h-[30%] md:h-[80%]">
      <textarea
        className=" border-2 w-full h-[100px] rounded-lg md:h-full p-4 border-gray-200 outline-none "
        name={name}
        id={name}
        onChange={formik.handleChange}
        value={formik.values[name]}
        rows={5}
        cols={10}
        style={{ resize: 'none' }}
      />
    </div>
  );
};

export default InputTextArea;
