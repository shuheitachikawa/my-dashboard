import Head from 'next/head';
import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import {
  TodoGroup,
  Todo,
  UpdateTodoGroupInput,
  TodoInput,
  TodoStatus
} from 'API';
import { AddTodoGroupButton, TodoGroupCard } from 'components/pages/todo';
import { TodoGroupModel } from 'models';

const TodoPageView = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

export default function TodoPage() {
  const [todoGroups, setTodoGroups] = useState<TodoGroup[]>([]);
  const [showNewTodoGroupInput, setShowNewTodoGroupInput] = useState(false);
  const [groupName, setGroupName] = useState('');
  const cardWidth = '240px';
  const titleInput = useRef<null | HTMLInputElement>(null);

  /**
   * TodoGroupIdからTodoGroup取得
   */
  const getTodoGroup = (todoGroupId: string): TodoGroup | never => {
    const todoGroup = todoGroups.find(
      (todoGroup) => todoGroup.id === todoGroupId
    );
    if (!todoGroup) throw new Error('更新エラー');
    return todoGroup;
  };

  /**
   * TodoGroup一覧取得
   */
  useEffect(() => {
    const fetchTodoGroups = async () => {
      const data = await TodoGroupModel.index();
      setTodoGroups(data);
    };
    fetchTodoGroups();
  }, []);

  /**
   * Group作成フォームを開く
   */
  const openGroupCreateForm = () => {
    setShowNewTodoGroupInput(true);
  };

  // Group作成フォームRender後にInputにフォーカス当てる
  useEffect(() => {
    titleInput.current?.focus();
  }, [showNewTodoGroupInput]);

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
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * Todo追加
   * @param title 新しいTodoタイトル
   * @param todoGroupId 所属するTodoGroupのID
   */
  const handleAddTodo = async (title: string, todoGroupId: string) => {
    try {
      // todoGroup取得
      const todoGroup = getTodoGroup(todoGroupId);

      // 更新用inputデータ成型
      const todo: TodoInput = {
        title,
        text: '',
        index: todoGroup.todos.length + 1,
        status: TodoStatus.DOING,
        createdAt: new Date().toISOString()
      };
      const { id, name, todos } = todoGroup;
      const input: UpdateTodoGroupInput = {
        id,
        name,
        todos: [...todos, todo]
      };

      // 更新
      const data = await TodoGroupModel.update(input);
      setTodoGroups(
        todoGroups.map((group) => {
          return group.id === data.id ? data : group;
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * TodoをDONEに更新
   * @param todoGroupId TodoGroupID
   * @param todoIndex Todoのindex
   */
  const handleDoneTodo = async (todoGroupId: string, todoIndex: number) => {
    try {
      console.log(todoIndex);
      // todoGroup取得
      const todoGroup = getTodoGroup(todoGroupId);

      // 更新用inputデータ成型(対象Todoステータス書き換えの後、indexを再割り当て)
      const todos: Todo[] = todoGroup.todos
        .map((todo) =>
          todo.index + 1 === todoIndex
            ? { ...todo, status: TodoStatus.DONE }
            : todo
        )
        .map((todo, index) => {
          return { ...todo, index };
        });
      const { id, name } = todoGroup;
      const input: UpdateTodoGroupInput = {
        id,
        name,
        todos
      };

      // 更新
      const data = await TodoGroupModel.update(input);
      setTodoGroups(
        todoGroups.map((group) => {
          return group.id === data.id ? data : group;
        })
      );
    } catch (e) {
      console.log(e);
    }
  };

  /**
   * Todo削除
   * @param todoGroupId TodoGroupID
   */
  const handleDeleteGroup = async (todoGroupId: string) => {
    // if (!confirm('削除しますか？')) return;
    try {
      await TodoGroupModel.delete(todoGroupId);
      setTodoGroups(todoGroups.filter((_) => _.id !== todoGroupId));
    } catch (error) {
      console.log(error);
    }
  };

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
              onDelete={handleDeleteGroup}
              onDoneTodo={handleDoneTodo}
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
