type inputTypeForm = {
  label: string;
  desc: string;
  judul: string;
  name: string;
  input: any;
  icon?: any;
  prioritas: boolean;
};

type inputParamsProject = {
  id: string;
};

type inputProps = {
  params: inputParamsProject;
};

type inputParamsArray = {
  slug: string[];
};

type inputPropsMany = {
  params: inputParamsArray;
};
