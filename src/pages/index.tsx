import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

const TopPageView = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eceff1;
  .container {
    text-align: center;
  }
  button {
    background: #fff;
    display: inline-block;
    padding: 8px 16px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    border: none;
  }
`;

export default function Home() {
  const router = useRouter();
  return (
    <TopPageView>
      <div className="container">
        <h1>My Dashboard</h1>
        <button type="button" onClick={() => router.push('/signin')}>
          Sign In
        </button>
      </div>
    </TopPageView>
  );
}
