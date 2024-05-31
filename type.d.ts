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

type dataParams = {
  id: number;
  deadline: string;
  type: string;
  title: string;
  description: string;
  fileUtama: string;
  fileOptional?: string;
  status: string;
  emailUser: string;
  emailWorker?: string;
};

type DataBackEnd = {
  status: boolean;
  statusCode: number;
  data: dataParams[] | string;
};

type ProfileUser = {
  id?: number;
  name: string;
  email: string;
  phone: string;
  password: string;
};

type ReduxProfileUser = {
  data: ProfileUser[];
};

type MenuHeader = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
