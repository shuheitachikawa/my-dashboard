import React from 'react';
import styled from 'styled-components';
import { SignUpForm } from 'components/pages/signUp/SignUpForm';

const SignUpPageView = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SignUp() {
  return (
    <SignUpPageView>
      <SignUpForm />
    </SignUpPageView>
  );
}
