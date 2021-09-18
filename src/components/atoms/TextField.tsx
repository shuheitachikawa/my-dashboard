import React from 'react';
import styled from 'styled-components';

interface Props {
  value: string | number;
  type?: 'text' | 'number' | 'password' | 'email';
  block?: boolean;
  placeholder?: string;
  dark?: boolean;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldView = styled.input<Props>`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  background: ${(props) => (props.dark ? '#455A64' : '#f1f5f9')};
  color: ${(props) => (props.dark ? '#fff' : '#333333')};
  padding: 0.8em 0 0.8em 0.7em;
  border-radius: 6px;
  border: none;
  font-size: 15px;
  outline: none;
  ::placeholder {
    color: ${(props) => (props.dark ? '#90A4AE' : '#78909C')};
  }
`;

export const TextField: React.FC<Props> = ({
  value,
  type = 'text',
  block = false,
  dark = true,
  placeholder,
  onChange
}) => {
  return (
    <TextFieldView
      value={value}
      type={type}
      block={block}
      dark={dark}
      placeholder={placeholder}
      onChange={onChange}
      autoComplete="true"
    />
  );
};
