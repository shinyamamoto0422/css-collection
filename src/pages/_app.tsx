import "tailwindcss/tailwind.css";
import "@/styles/global.css";
import { MantineProvider } from "@mantine/core";

import { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ReactElement, ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Head>
        <title>css-collection</title>
      </Head>
      {getLayout(<Component {...pageProps} />)}
    </MantineProvider>
  );
};

export default MyApp;
