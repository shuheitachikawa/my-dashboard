import { NextPage } from 'next';
import React from 'react';
import styled from 'styled-components';
import { SignInForm } from 'components/pages/signIn/SignInForm';

const SignInPageView = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function SignIn() {
  return (
    <SignInPageView>
      <SignInForm />
    </SignInPageView>
  );
}
