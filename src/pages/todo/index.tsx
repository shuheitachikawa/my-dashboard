import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { TodoGroup } from 'API';
import { AddTodoGroupButton } from 'components/molecules';
import { TodoGroupCard } from 'components/organisms';
import { TodoGroupModel } from 'models';

const TodoPageView = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export default function Todo() {
  const [todoGroups, setTodoGroups] = useState<TodoGroup[]>([]);
  const [showNewTodoGroupInput, setShowNewTodoGroupInput] = useState(false);
  const [groupName, setGroupName] = useState('');
  const cardWidth = '240px';
  const titleInput = useRef<null | HTMLInputElement>(null);

  /**
   * Group作成フォームを開く
   */
  const openGroupCreateForm = () => {
    setShowNewTodoGroupInput(true);
  };

  // Group作成フォームRender後にInputにフォーカス当てる
  useEffect(() => {
    titleInput.current?.focus();
  }, [showNewTodoGroupInput])

  /**
   * Group作成フォームを閉じる
   */
  const closeGroupCreateForm = () => {
    setShowNewTodoGroupInput(false);
    setGroupName('');
  };

  /**
   * Group作成
   */
  const handleCreateGroup = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!groupName) return;
    try {
      const input = {
        todos: [],
        name: groupName
      };
      const data = await TodoGroupModel.create(input);
      setShowNewTodoGroupInput(false);
      setGroupName('');
      setTodoGroups([...todoGroups, data]);
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Todo取得
   */
  useEffect(() => {
    const fetchTodoGroups = async () => {
      const data = await TodoGroupModel.index();
      setTodoGroups(data);
    };
    fetchTodoGroups();
  }, []);

  return (
    <>
      <Head>
        <title>Todo</title>
        <meta name="description" content="Todoです。" />
      </Head>
      <TodoPageView className="">
        {todoGroups.map((todoGroup, i) => {
          return (
            <TodoGroupCard
              key={`todoGroup-${i}`}
              todoGroup={todoGroup}
              cardWidth={cardWidth}
            />
          );
        })}
        <AddTodoGroupButton
          groupName={groupName}
          showNewTodoGroupInput={showNewTodoGroupInput}
          titleInput={titleInput}
          setGroupName={setGroupName}
          openForm={openGroupCreateForm}
          closeForm={closeGroupCreateForm}
          handleCreateGroup={handleCreateGroup}
          cardWidth={cardWidth}
        />
      </TodoPageView>
    </>
  );
}
