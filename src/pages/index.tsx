import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import { sums } from '../../wasm/pkg/wasm_bg.wasm';

const TopPageView = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
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

console.log(sums(6));
console.log(232323);

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
