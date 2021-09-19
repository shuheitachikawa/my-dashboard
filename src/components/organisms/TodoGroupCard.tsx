import React from 'react';
import styled from 'styled-components';
import { TodoGroup } from 'API';

interface Props {
  todoGroup: TodoGroup;
}

// const HeaderView = styled.header<Props>`
//   flex-grow: 1;
//   margin-left: ${(props) => props.drawerWidth + 'px'};
//   background: #263238;
//   h1 {
//     text-align: center;
//     font-size: 20px;
//     margin: 0;
//     padding: 4px 0;
//     font-weight: 600;
//     user-select: none;
//   }
// `;

export const TodoGroupCard: React.FC<Props> = ({ todoGroup }) => {
  return (
    <div>
      {todoGroup.name}
    </div>
  );
};
