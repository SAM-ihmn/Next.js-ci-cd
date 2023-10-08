// sidebar

export type sidebarDataType = {
  id: number;
  name: string;
  path: string;
  icon: React.ReactElement;
  subItems?: subItemType[];
};

export type subItemType = {
  id: number;
  name: string;
  path: string;
  icon: React.ReactElement;
};


// -------------- ModalItemsOptions -------------- //

export type ApiOutPut = {
  name: string,
  value: string,
  classes?: string
}