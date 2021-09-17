
import React from 'react';
import styled from 'styled-components';
import { SignInForm } from 'components/organisms';

const SignInPageView = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eceff1;
`;

export default function Home() {
  return (
    <SignInPageView>
      <SignInForm />
    </SignInPageView>
  );
}
