import { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@configs";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
