import React from 'react';
import styled from 'styled-components';
import { TodoGroup } from 'API';

interface Props {
  todoGroup: TodoGroup;
  cardWidth: string;
}

const TodoGroupCardView = styled.div<{ cardWidth: string }>`
  width: ${(props) => props.cardWidth};
  background: #263238;
  padding: 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 24px;
`;

export const TodoGroupCard: React.FC<Props> = ({ todoGroup, cardWidth }) => {
  return (
    <TodoGroupCardView cardWidth={cardWidth}>
      {todoGroup.name}
    </TodoGroupCardView>
  );
};