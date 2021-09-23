import React, { useState } from 'react';
import { TodoGroup } from 'API';
import { TextField } from 'components/parts';

interface ComponentProps {
  todoGroup: TodoGroup;
  onAddTodo: (title: string, todoGroupId: string) => void;
}

type Props = ComponentProps;

export const TodoInputForm: React.FC<Props> = ({ onAddTodo, todoGroup }) => {
  const [newTodoGroupName, setNewTodoGroupName] = useState('');

  /**
   * todoタイトルとIDを親に渡す
   */
  const handleSubmitTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!newTodoGroupName) return;
    onAddTodo(newTodoGroupName, todoGroup.id);
    setNewTodoGroupName('');
  };

  return (
    <form onSubmit={handleSubmitTodo}>
      <TextField
        value={newTodoGroupName}
        onChange={(e) => setNewTodoGroupName(e.target.value)}
        block
      />
    </form>
  );
};
