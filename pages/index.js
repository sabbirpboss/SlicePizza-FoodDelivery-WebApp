import Head from "next/head";
import css from "../styles/Home.module.css";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import { client } from "../lib/client";
import Menu from "../Components/Menu";

export default function Home({pizzas}) {

  // console.log(pizzas);
  return (
    <>
      <Header />
      <div className={css.container}>
        <Head>
          <title>SLICEPIZZA ✔ More than Faster</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/Logo.png" />
        </Head>
        {/* body */}
        <main>
          <Hero />
          <Services />
          <Menu pizzas={pizzas} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type == "pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: { pizzas },
  };
};
