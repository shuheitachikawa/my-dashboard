import CheckIcon from '@mui/icons-material/Check';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import styled from 'styled-components';
import { TodoGroup, TodoStatus, Todo } from 'API';

interface ComponentProps {
  todoGroup: TodoGroup;
  doingTodos: Todo[];
  onToggleTodoStatus: (
    todoGroupId: string,
    todoIndex: number,
    todoStatus: TodoStatus
  ) => void;
}

type Props = ComponentProps;

const DoingTodoListView = styled.ul`
  margin: 0;
  padding: 0;
  li {
    word-break: break-all;
    padding: 3px 4px;
    background-color: #455a64;
    list-style: none;
    margin-bottom: 6px;
    border-radius: 4px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :last-child {
      margin-bottom: 16px;
    }
    .check-button {
      cursor: pointer;
      margin-left: 2px;
      /* color: inherit; */
    }
  }
`;

export const DoingTodoList: React.FC<Props> = ({
  todoGroup,
  doingTodos,
  onToggleTodoStatus
}) => {
  return (
    <DoingTodoListView>
      {doingTodos.map((todo, i) => {
        return (
          <li key={`todo-${i}`}>
            <span>{todo.title}</span>
            <IconButton
              size="small"
              className="check-button"
              onClick={() =>
                onToggleTodoStatus(todoGroup.id, todo.index, todo.status)
              }
            >
              <CheckIcon />
            </IconButton>
          </li>
        );
      })}
    </DoingTodoListView>
  );
};
