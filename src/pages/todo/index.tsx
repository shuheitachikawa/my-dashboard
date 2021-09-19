import React, { useEffect } from 'react';
import Head from 'next/head';
import { AddTodoGroupButton } from 'components/molecules';

export default function Todo() {
  useEffect(()=> {
    
  }, [])

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
