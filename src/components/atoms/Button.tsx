import React from 'react';
import styled from 'styled-components';
import { Loader } from 'components/atoms';

interface Props {
  type?: 'submit' | 'button';
  block?: boolean;
  loading?: boolean;
  disabled?: boolean;
  dark?: boolean;
  small?: boolean;
}

const ButtonView = styled.button<Props>`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  background: ${(props) => (props.dark ? '#455A64' : '#f1f5f9')};
  color: ${(props) => (props.dark ? '#fff' : '#333333')};
  padding: ${(props) => (props.small ? '0.4em 0.6em' : '0.6em 0.7em')};
  font-size: ${(props) => (props.small ? '14px' : '15px')};
  border-radius: ${(props) => (props.small ? '4px' : '6px')};
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  font-weight: 600;
  :hover {
    background: #37474F;
  }
`;

export const Button: React.FC<Props> = ({
  type = 'submit',
  block = false,
  loading = false,
  disabled = false,
  dark = true,
  small = false,
  children
}) => {
  return (
    <ButtonView type={type} block={block} disabled={disabled} dark={dark} small={small}>
      {loading ? <Loader /> : children}
    </ButtonView>
  );
};
