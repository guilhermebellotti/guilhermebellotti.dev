import Head from "next/head";
import Header from "../components/Header";
import Menu from "../components/Menu";
export default function Home() {
  return (
    <>
      <Head>
        <title>Guilherme Bellotti - Dev front-end</title>
        <meta
          name="description"
          content="Desenvolvedor especializado no front-end. Torne seus projetos reais, deixe as pessoas impressionadas com sua ideia"
        />
        <link rel="icon" href="/logo-guilhermebellotti.ico" />
      </Head>
      <Menu />
      <Header />
    </>
  );
}
