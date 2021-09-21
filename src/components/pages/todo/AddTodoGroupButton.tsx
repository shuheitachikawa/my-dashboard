import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from 'components/parts';

const AddTodoGroupButtonView = styled.div<{ cardWidth: string }>`
  width: ${(props) => props.cardWidth};
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

interface Props {
  groupName: string;
  showNewTodoGroupInput: boolean;
  cardWidth: string;
  titleInput: React.MutableRefObject<null | HTMLInputElement>
  setGroupName: (value: string) => void;
  closeForm: () => void;
  openForm: () => void;
  handleCreateGroup: (event: React.MouseEvent<HTMLFormElement>) => void;
}

export const AddTodoGroupButton: React.FC<Props> = ({
  groupName,
  showNewTodoGroupInput,
  cardWidth,
  titleInput,
  setGroupName,
  openForm,
  closeForm,
  handleCreateGroup
}) => {
  return (
    <AddTodoGroupButtonView cardWidth={cardWidth}>
      {showNewTodoGroupInput ? (
        <form className="input-area" onSubmit={handleCreateGroup}>
          <TextField
            reference={titleInput}
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
        <div className="button" onClick={openForm}>
          <AddIcon />
          <span>リストを追加</span>
        </div>
      )}
    </AddTodoGroupButtonView>
  );
};
