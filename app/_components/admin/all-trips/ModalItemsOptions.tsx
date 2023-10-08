import { ApiOutPut } from "@/types/types";

const ItemOptions = ({name, value, classes} : ApiOutPut ) => {
  return (
    <div className={`w-1/2 sm:w-full flex justify-end gap-2 ${classes}`}>
    <span className="flex items-center">{value}</span>
    <span className="flex items-center">{name}</span>
    </div>
  )
}

export default ItemOptions;