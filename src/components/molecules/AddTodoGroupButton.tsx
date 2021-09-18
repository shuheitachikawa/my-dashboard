import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Button } from 'components/atoms';

const AddTodoGroupButtonView = styled.div`
  width: 320px;
  background: #37474f;
  padding: 8px;
  border-radius: 4px;
  .button {
    display: flex;
    align-items: center;
    cursor: pointer;
    span {
      margin-left: 8px;
    }
  }
  .input-area {
  }
  .button-area {
    padding-top: 8px;
    display: flex;
    align-items: center;
    .close-icon {
      margin-left: 8px;
      cursor: pointer;
    }
  }
`;

export const AddTodoGroupButton: React.FC = () => {
  const [showInput, setShowInput] = useState(false);
  const [groupName, setGroupName] = useState('');

  const closeForm = () => {
    setShowInput(false);
    setGroupName('');
  };

  const handleCreateGroup = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(groupName)
  }

  return (
    <AddTodoGroupButtonView className="">
      {showInput ? (
        <form className="input-area" onSubmit={handleCreateGroup}>
          <TextField
            value={groupName}
            block
            dark
            placeholder='リストの名前'
            onChange={(e) => setGroupName(e.target.value)}
          />
          <div className="button-area">
            <Button small>リストを追加</Button>
            <CloseIcon className="close-icon" onClick={closeForm} />
          </div>
        </form>
      ) : (
        <div className="button" onClick={() => setShowInput(true)}>
          <AddIcon />
          <span>リストを追加</span>
        </div>
      )}
    </AddTodoGroupButtonView>
  );
};
