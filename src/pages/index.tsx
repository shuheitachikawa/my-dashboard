import Amplify from "aws-amplify";
import React, { useState } from "react";
import awsconfig from "../aws-exports";
import { Button, TextField } from "components/atoms";

Amplify.configure(awsconfig);

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("aaaaa");
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={email} onChange={(e) => setEmail(e.target.value)} block type="email" placeholder="メールアドレス" />
      <TextField value={password} onChange={(e) => setPassword(e.target.value)} block type="password" placeholder="パスワード" />
      <Button block type="submit">
        登録
      </Button>
    </form>
  );
}
