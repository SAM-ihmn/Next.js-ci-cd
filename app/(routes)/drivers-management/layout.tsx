import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="fullSize p-5">
        {children}
    </section>
  );
};

export default layout;
