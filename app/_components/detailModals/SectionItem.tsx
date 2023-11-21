import { ItemProps } from "../driver/DriverDetail";

const sectionItems = (props: ItemProps) => {
  const { title, value } = props;
  return (
    <div className="w-full lg:w-1/2 flex flex-row-reverse gap-2">
      <div className="flex-1 text-right">:{title}</div>
      <div className="flex-1 text-right">{value}</div>
    </div>
  );
};

export default sectionItems;