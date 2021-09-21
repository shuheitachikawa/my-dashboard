import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoGroup } from 'API';
import { TextField } from 'components/parts';

interface StyleProps {
  cardWidth: string;
}

interface ComponentProps {
  todoGroup: TodoGroup;
  onAddTodo: (title: string, todoGroupId: string) => void;
  onDelete: (todoGroupId: string) => void;
}

type Props = StyleProps & ComponentProps;

const TodoGroupCardView = styled.div<StyleProps>`
  width: ${(props) => props.cardWidth};
  background: #263238;
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 24px;
  .title-area {
    display: flex;
    align-items: top;
    justify-content: space-between;
    margin-bottom: 8px;
    p {
      margin: 0;
      font-weight: 600;
    }
    .close-icon {
      cursor: pointer;
    }
  }
  ul {
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
      align-items: top;
      justify-content: space-between;
      :last-child {
        margin-bottom: 16px;
      }
      .check-icon {
        cursor: pointer;
        margin-left: 2px;
      }
    }
  }
`;

export const TodoGroupCard: React.FC<Props> = ({
  todoGroup,
  cardWidth,
  onAddTodo,
  onDelete
}) => {
  const [newTodoTitle, setNewTodoTitle] = useState('');

  /**
   * todoタイトルとIDを親に渡す
   */
  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodoTitle) return;
    onAddTodo(newTodoTitle, todoGroup.id);
    setNewTodoTitle('');
  };

  return (
    <TodoGroupCardView cardWidth={cardWidth}>
      <div className="title-area">
        <p>{todoGroup.name}</p>
        <CloseIcon
          className="close-icon"
          onClick={() => onDelete(todoGroup.id)}
        />
      </div>
      <ul>
        {todoGroup.todos.map((todo, i) => {
          return (
            <li key={`todo-${i}`}>
              <span>{todo.title}</span>
              <CheckIcon className="check-icon" />
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmitTodo}>
        <TextField
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          block
        />
      </form>
    </TodoGroupCardView>
  );
};
