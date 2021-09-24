import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import styled from 'styled-components';
import { TextField, Button } from 'components/parts';

interface StyleProps {
  cardWidth: string;
  showNewTodoGroupInput: boolean;
}

interface ComponentProps {
  groupName: string;
  titleInput: React.MutableRefObject<null | HTMLInputElement>;
  setGroupName: (value: string) => void;
  closeForm: () => void;
  openForm: () => void;
  handleCreateGroup: (event: React.MouseEvent<HTMLFormElement>) => void;
}

type Props = StyleProps & ComponentProps;

const AddTodoGroupButtonView = styled.div<StyleProps>`
  width: ${(props) => props.cardWidth};
  background: #263238;
  padding: ${(props) => (props.showNewTodoGroupInput ? '8px' : '0px')};
  border-radius: 4px;
  .button {
    padding: ${(props) => (props.showNewTodoGroupInput ? '0px' : '8px')};
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
    .close-button {
      margin-left: 8px;
      cursor: pointer;
      color: inherit;
    }
  }
`;

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
    <AddTodoGroupButtonView
      cardWidth={cardWidth}
      showNewTodoGroupInput={showNewTodoGroupInput}
    >
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
            <IconButton className="close-button" onClick={closeForm} >
              <CloseIcon />
            </IconButton>
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
