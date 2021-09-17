import React from 'react';
import styled from 'styled-components';
import { SignUpForm } from 'components/organisms';

const SignUpPageView = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eceff1;
`;

export default function SignUp() {
  return (
    <SignUpPageView>
      <SignUpForm />
    </SignUpPageView>
  );
}
