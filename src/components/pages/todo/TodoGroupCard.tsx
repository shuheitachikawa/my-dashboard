import React from 'react';
import styled from 'styled-components';
import { TodoGroup, TodoStatus } from 'API';
import {
  TodoGroupCardTitle,
  DoingTodoList,
  DoneTodoList,
  TodoInputForm
} from 'components/pages/todo';

interface StyleProps {
  cardWidth: string;
}

interface ComponentProps {
  todoGroup: TodoGroup;
  onAddTodo: (title: string, todoGroupId: string) => void;
  onDeleteTodoGroup: (todoGroupId: string) => void;
  onToggleTodoStatus: (
    todoGroupId: string,
    todoIndex: number,
    todoStatus: TodoStatus
  ) => void;
  onDeleteTodo: (todoGroupId: string, todoIndex: number) => void;
  onChangeTodoGroupName: (todoGroupId: string, todoGroupName: string) => void;
}

type Props = StyleProps & ComponentProps;

const TodoGroupCardView = styled.div<StyleProps>`
  width: ${(props) => props.cardWidth};
  background: #263238;
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 24px;
`;

export const TodoGroupCard: React.FC<Props> = ({
  todoGroup,
  cardWidth,
  onAddTodo,
  onDeleteTodoGroup,
  onToggleTodoStatus,
  onDeleteTodo,
  onChangeTodoGroupName
}) => {
  // 未完了Todo一覧
  const doingTodos = todoGroup.todos.filter((_) => _.status === 'DOING');

  // 完了済Todo一覧
  const doneTodos = todoGroup.todos.filter((_) => _.status === 'DONE');

  return (
    <TodoGroupCardView cardWidth={cardWidth}>
      <TodoGroupCardTitle
        todoGroup={todoGroup}
        onDeleteTodoGroup={onDeleteTodoGroup}
        onChangeTodoGroupName={onChangeTodoGroupName}
      />
      <DoingTodoList
        todoGroup={todoGroup}
        doingTodos={doingTodos}
        onToggleTodoStatus={onToggleTodoStatus}
      />
      <TodoInputForm todoGroup={todoGroup} onAddTodo={onAddTodo} />
      <DoneTodoList
        todoGroup={todoGroup}
        doneTodos={doneTodos}
        onToggleTodoStatus={onToggleTodoStatus}
        onDeleteTodo={onDeleteTodo}
      />
    </TodoGroupCardView>
  );
};
