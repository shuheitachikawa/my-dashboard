import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoGroup } from 'API';
import { TextField } from 'components/parts';

interface ComponentProps {
  todoGroup: TodoGroup;
  onDeleteTodoGroup: (todoGroupId: string) => void;
  onChangeTodoGroupName: (todoGroupId: string, todoGroupName: string) => void;
}

type Props = ComponentProps;

const TodoGroupCardTitleView = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
  p {
    margin: 0;
    font-weight: 600;
    width: 100%;
  }
  .close-button {
    cursor: pointer;
    color: inherit;
  }
`;

export const TodoGroupCardTitle: React.FC<Props> = ({
  todoGroup,
  onDeleteTodoGroup,
  onChangeTodoGroupName
}) => {
  const [isEditMode, setIsEditMode] = useState(false);
  const [todoGroupName, setTodoGroupName] = useState(todoGroup.name);

  /**
   * 編集モードに併せてテキストとinput出し分ける
   * @param todoGroupName TodoGroupの名前
   */
  const handleSubmitTodoGroupName = (
    e: React.FormEvent<HTMLFormElement>,
    todoGroupName: string
  ) => {
    e.preventDefault();
    if (!todoGroupName) return;
    onChangeTodoGroupName(todoGroup.id, todoGroupName.trim());
    setIsEditMode(false);
  };

  /**
   * 編集モードに併せてテキストとinput出し分ける
   */
  const renderTitle = () => {
    if (isEditMode) {
      return (
        <form onSubmit={(e) => handleSubmitTodoGroupName(e, todoGroupName)}>
          <TextField
            value={todoGroupName}
            onChange={(e) => setTodoGroupName(e.target.value)}
            block
          />
        </form>
      );
    }
    return <p onDoubleClick={() => setIsEditMode(true)}>{todoGroup.name}</p>;
  };

  return (
    <TodoGroupCardTitleView>
      {renderTitle()}
      <IconButton
        className="close-button"
        onClick={() => onDeleteTodoGroup(todoGroup.id)}
      >
        <CloseIcon />
      </IconButton>
    </TodoGroupCardTitleView>
  );
};
