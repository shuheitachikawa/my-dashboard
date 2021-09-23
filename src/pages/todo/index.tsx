import Head from 'next/head';
import React from 'react';
import styled from 'styled-components';
import { AddTodoGroupButton, TodoGroupCard } from 'components/pages/todo';
import { useTodoList } from 'hooks';

const TodoPageView = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export default function TodoPage() {
  const {
    todoGroups,
    groupName,
    showNewTodoGroupInput,
    titleInput,
    handleAddTodo,
    handleDeleteGroup,
    handleToggleTodoStatus,
    handleDeleteTodo,
    handleChangeTodoGroupName,
    setGroupName,
    openGroupCreateForm,
    closeGroupCreateForm,
    handleCreateGroup
  } = useTodoList();
  const cardWidth = '240px';

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
              onAddTodo={handleAddTodo}
              onDeleteTodoGroup={handleDeleteGroup}
              onToggleTodoStatus={handleToggleTodoStatus}
              onDeleteTodo={handleDeleteTodo}
              onChangeTodoGroupName={handleChangeTodoGroupName}
            />
          );
        })}
        <AddTodoGroupButton
          groupName={groupName}
          showNewTodoGroupInput={showNewTodoGroupInput}
          titleInput={titleInput}
          cardWidth={cardWidth}
          setGroupName={setGroupName}
          openForm={openGroupCreateForm}
          closeForm={closeGroupCreateForm}
          handleCreateGroup={handleCreateGroup}
        />
      </TodoPageView>
    </>
  );
}
