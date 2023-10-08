import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="w-full h-full flex justify-center items-center">
      <div className="m-4 w-full h-[96%] flex flex-col border border-solid border-grayBorder rounded-2xl bg-whiteBg p-3 overflow-hidden">
        {children}
      </div>
    </section>
  );
};

export default layout;
