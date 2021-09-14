import Button from "@material-ui/core/Button";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Dashboard } from "components/Dashboard";

const Home: NextPage = () => {
  return (
    <Dashboard>
      <Head>
        <title>Create Next Appa</title>
        <meta name="description" content="ダッシュボードアプリです" />
      </Head>

      <main>aaa</main>
    </Dashboard>
  );
};

export default Home;
