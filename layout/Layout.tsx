import Head from "next/head";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Head>
        <title>NGENI AI</title>
        <meta name="description" content="Unlocking The Future" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Place you <Navbar /> here */}
      <main>{children}</main>
      {/* Place you <Footer /> here */}
    </>
  );
}
