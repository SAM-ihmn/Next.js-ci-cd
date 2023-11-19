import Layout from "@/app/_components/Layout/layout";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout>

    <section className="fullSize p-5">
        {children}
    </section>
    </Layout>
  );
};

export default layout;
