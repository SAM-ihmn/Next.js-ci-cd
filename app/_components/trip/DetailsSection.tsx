import { Divider } from "@mui/material";

type SectionProps = {
  sectionTitle: string;
  userStatus: boolean;
  children: React.ReactNode;
};

const DetailsSection = (props: SectionProps) => {
  const { sectionTitle, userStatus, children } = props;

  return (
    <section className="w-full flex flex-col grayBorder px-3 py-1">
      <div className="w-full flex flex-row-reverse justify-between ">
        <div className="text-right">{sectionTitle}</div>
        <div className={`${userStatus === false && "hidden"}`}>
          {userStatus}
        </div>
      </div>
      <Divider />
      <div className="w-full flex flex-row-reverse flex-wrap ">{children}</div>
    </section>
  );
};

export default DetailsSection