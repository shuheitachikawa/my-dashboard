import React from 'react';
import styled from 'styled-components';

interface Props {
  value: string | number;
  type?: 'text' | 'number' | 'password' | 'email';
  block?: boolean;
  placeholder?: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldView = styled.input<Props>`
  width: ${(props) => (props.block ? '100%' : 'auto')};
  padding: 0.8em 0 0.8em 0.7em;
  border-radius: 6px;
  background: #f1f5f9;
  border: 1px solid #5c93bb2b;
  font-size: 15px;
  outline: none;
`;

export const TextField: React.FC<Props> = ({
  value,
  type = 'text',
  block = false,
  placeholder,
  onChange
}) => {
  return (
    <TextFieldView
      value={value}
      type={type}
      block={block}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};
