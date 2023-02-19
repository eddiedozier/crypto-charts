import Flex from "components/Flex";
import Footer from "components/Footer";
import Header from "components/Header";
import React from "react";

type Props = { children: React.ReactNode };
export function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Flex fullHeight as="main" direction="column" align="center" mt="base">
        {children}
      </Flex>
      <Footer />
    </>
  );
}

export default Layout;
