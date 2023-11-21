import React from "react";

type Props = {
  sectionTitle: string;
  sectionStatus?: string;
  userStatus?: string;
  sectionData: any;
};

const Section = (props: Props) => {
  // const { sectionTitle, sectionStatus, userStatus, sectionData } = props;
  const userId = 2578
  const sectionTitle = 'test'
  const sectionStatus = ''
  const userStatus = ''

  return (
    <div className="w-full rounded-md border border-solid border-grayBackgroundDarker">
      {/* Title of section */}
      <div>
        <div className="text-right">{sectionTitle}</div>
        <div className={`px-2 rounded-md bg-salmonPink ${sectionStatus}`}>
          {userStatus}
        </div>
      </div>
    </div>
  );
};

export default Section;