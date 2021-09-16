import React from "react";
import styled from "styled-components";

interface Props {
  type: "submit" | "button";
  block?: boolean;
}

const ButtonView = styled.button<Props>`
  width: ${(props) => (props.block ? "100%" : "auto")};
  padding: 0.6em 0 0.6em 0.7em;
  border-radius: 6px;
  background: #f1f5f9;
  border: 1px solid #5c93bb2b;
  font-size: 15px;
  outline: none;
  cursor: pointer;
`;

export const Button: React.FC<Props> = ({ type = "submit", block = false, children }) => {
  return (
    <ButtonView type={type} block={block}>
      {children}
    </ButtonView>
  );
};
