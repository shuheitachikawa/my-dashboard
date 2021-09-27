import React from 'react';
import styled from 'styled-components';
import { Loader } from 'components/parts';

interface StyleProps {
  small?: boolean;
  dark?: boolean;
  block?: boolean;
}

interface ComponentProps {
  type?: 'submit' | 'button';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

type Props = StyleProps & ComponentProps;

const ButtonView = styled.button<StyleProps>`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  background: ${(props) => (props.dark ? '#455A64' : '#f1f5f9')};
  color: ${(props) => (props.dark ? '#fff' : '#333333')};
  padding: ${(props) => (props.small ? '0.4em 0.6em' : '0.6em 0.7em')};
  font-size: ${(props) => (props.small ? '14px' : '15px')};
  border-radius: ${(props) => (props.small ? '4px' : '6px')};
  font-weight: ${(props) => (props.small ? '400' : '600')};
  border: none;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  :hover {
    background: #37474f;
  }
`;

export const Button: React.FC<Props> = ({
  type = 'submit',
  block = false,
  loading = false,
  disabled = false,
  dark = true,
  small = false,
  onClick,
  children
}) => {
  return (
    <ButtonView
      type={type}
      block={block}
      disabled={disabled}
      dark={dark}
      small={small}
      onClick={onClick}
    >
      {loading ? <Loader /> : children}
    </ButtonView>
  );
};
