import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import { API } from 'aws-amplify';
import React, { useState } from 'react';
import styled from 'styled-components';
import { CreateTodoGroupInput } from 'API';
import { TextField, Button } from 'components/atoms';
import { createTodoGroup } from 'graphql/mutations';

const AddTodoGroupButtonView = styled.div`
  width: 320px;
  background: #263238;
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

  const handleCreateGroup = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!groupName) return;
    try {
      const input: CreateTodoGroupInput = {
        todos: [],
        name: groupName
      };
      await API.graphql({
        query: createTodoGroup,
        variables: { input }
      });
      setShowInput(false);
      setGroupName('');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <AddTodoGroupButtonView className="">
      {showInput ? (
        <form className="input-area" onSubmit={handleCreateGroup}>
          <TextField
            value={groupName}
            block
            dark
            placeholder="リストの名前"
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
