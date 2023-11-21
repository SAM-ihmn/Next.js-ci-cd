import { Divider } from "@mui/material";
import { sectionHeaderPropTypes } from "../types/generalTypes";

export const SectionHeader = (props: sectionHeaderPropTypes) => {
  const {
    onClickFunction,
    headerTitle,
    buttonTitle,
    hiddenButton,
    buttonStyle,
  } = props;

  return (
    <div className="w-full flex flex-col gap-2 pb-1">
      <div className="w-full flex flex-row">
        <div
          className={`w-1/2 rounded-md bg-salmonPink text-center shadow-md shadow-grayText ${!hiddenButton && 'hidden'}`}
          onClick={onClickFunction}
        >
          {buttonTitle}
        </div>
        <div className={`w-1/2 text-right ${!hiddenButton && 'w-full'}`}>{headerTitle}</div>
      </div>
      <Divider />
    </div>
  );
};
