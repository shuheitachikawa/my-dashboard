import Button from '@material-ui/core/Button';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Dashboard } from 'components/templates';

export default function Todo() {
  return (
    <Dashboard>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Todoです。" />
      </Head>
      <main></main>
    </Dashboard>
  );
}
