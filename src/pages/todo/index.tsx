import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { AddTodoGroupButton } from 'components/molecules';
import { TodoGroupCard } from 'components/organisms'
import { TodoGroupModel } from 'models'
import { TodoGroup } from 'API';

export default function Todo() {
  const [todoGroups, setTodoGroups] = useState<TodoGroup[]>([])
  useEffect(()=> {
    const fetchTodoGroups = async () => {
      const data = await TodoGroupModel.index();
      setTodoGroups(data)
    };
    fetchTodoGroups();
  }, []);

  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Todoです。" />
      </Head>
      <div className="">
        { todoGroups.map((todoGroup, i) => {
          return (
            <TodoGroupCard key={`todoGroup-${i}`} todoGroup={todoGroup} />
          )
        }) }
        <AddTodoGroupButton />
      </div>
    </>
  );
}
