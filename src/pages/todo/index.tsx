import Head from 'next/head';
import { AddTodoGroupButton } from 'components/molecules';

export default function Todo() {
  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Todoです。" />
      </Head>
      <div className="">
        <AddTodoGroupButton />
      </div>
    </>
  );
}
