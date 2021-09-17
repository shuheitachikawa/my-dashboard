import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, TextField } from 'components/atoms';

const SignInFormView = styled.form`
  padding: 24px;
  border-radius: 8px;
  width: 400px;
  background: #fff;
  box-shadow: 5px 17px 40px -15px #00335d2e;
  h2 {
    text-align: center;
    margin-top: 0;
    color: #546e7a;
  }
  h3 {
    text-align: center;
    margin-bottom: 16px;
  }
  input {
    margin-bottom: 16px;
  }
  button {
    margin-bottom: 24px;
  }
  .link {
    text-align: center;
    font-size: 13px;
  }
  .error {
    color: red;
    font-size: 14px;
    font-weight: bold;
    text-align: center;
  }
`;

export const SignInForm: React.FC = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    try {
      setSubmitting(true);
      await Auth.signIn(email, password);
      router.push('/todo')
    } catch (error) {
      console.error(error);
      setError('エラー！');
    }
    setSubmitting(false);
  };

  return (
    <SignInFormView onSubmit={handleSubmit}>
      <h2>
        <Link href="/">My Dashboard</Link>
      </h2>
      <h3>SignIn😎</h3>
      <TextField
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        block
        type="email"
        placeholder="email"
      />
      <TextField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        block
        type="password"
        placeholder="password"
      />
      <Button block type="submit" loading={submitting} disabled={submitting}>
        SignIn
      </Button>
      {error && <p className="error">{error}</p>}
      <div className="link">
        <Link href="/signup">アカウント持ってない場合はこちら 😼</Link>
      </div>
    </SignInFormView>
  );
};
