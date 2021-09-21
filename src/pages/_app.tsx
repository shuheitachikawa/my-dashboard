import '../styles/globals.css';
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles';
import { Amplify, Auth } from 'aws-amplify';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSetRecoilState, RecoilRoot } from 'recoil';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import awsExports from 'aws-exports';
import { Dashboard } from 'components/parts';
import { currentUserState } from 'states/user';

Amplify.configure({ ...awsExports, ssr: true });

// ログイン無しでしか見れないページ
const withoutSignInPaths = ['/', '/signup', '/signin'];

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const notNeedSignInPage = withoutSignInPaths.includes(router.pathname);

  // サーバーサイドとクライアントサイドのクラス名差異吸収
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    jssStyles?.parentElement?.removeChild(jssStyles);
  }, []);

  // ログインチェック
  const AppInit = () => {
    const setCurrentUser = useSetRecoilState(currentUserState);
    useEffect(() => {
      if (notNeedSignInPage) return;
      const f = async () => {
        try {
          const user = await Auth.currentAuthenticatedUser();
          setCurrentUser({ username: user.username });
        } catch (e) {
          setCurrentUser(null);
          await router.push('/signin');
        }
      };
      f();
    }, [setCurrentUser]);
    return null;
  };

  /**
   * ページに合わせてレイアウトだし分け
   */
  const Layout = () => {
    if (notNeedSignInPage) {
      return (
        <>
          <Component {...pageProps} />
          <AppInit />
        </>
      );
    }
    return (
      <>
        <Dashboard>
          <Component {...pageProps} />
          <AppInit />
        </Dashboard>
      </>
    );
  };

  return (
    <>
      <RecoilRoot>
        {/* MaterialUIとstyled-componentsに同じthemeを与える */}
        <MaterialThemeProvider theme={theme}>
          <StyledThemeProvider theme={theme}>
            <Layout />
          </StyledThemeProvider>
        </MaterialThemeProvider>
      </RecoilRoot>
    </>
  );
}
