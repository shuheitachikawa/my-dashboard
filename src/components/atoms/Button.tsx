import React from 'react';
import styled from 'styled-components';
import { Loader } from 'components/atoms';

interface Props {
  type: 'submit' | 'button';
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
}

const ButtonView = styled.button<Props>`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  padding: 0.6em 0 0.6em 0.7em;
  border-radius: 6px;
  background: #f1f5f9;
  border: 1px solid #5c93bb2b;
  font-size: 15px;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
  color: #333333;
  :hover {
    border: 1px solid #fff;
    background: #CFD8DC;
  }
`;

export const Button: React.FC<Props> = ({
  type = 'submit',
  block = false,
  loading = false,
  disabled = false,
  children
}) => {
  return (
    <ButtonView type={type} block={block} disabled={disabled}>
      {loading ? <Loader /> : children}
    </ButtonView>
  );
};
