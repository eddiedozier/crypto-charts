import Head from "next/head";
import React from "react";

type Props = {
  title?: string;
  children?: React.ReactNode;
};
export function PageHead({ title, children }: Props) {
  return (
    <Head>
      <title>{`Crypto Charts - ${title}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {children}
    </Head>
  );
}

export default PageHead;
