import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import { NextPage } from 'next';
import React from 'react';
import { ListItems, Header } from 'components/parts';

const drawerWidth = 48;
// なぜか初回ログイン時だけglobals.cssの以下スタイルが当たらないためここでも明示。
const fontColor = '#CFD8DC';
const backgroundColor = '#455A64';

const useStyles = makeStyles({
  dashboard: {
    color: fontColor
  },
  drawer: {
    width: drawerWidth
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  drawerPaper: {
    width: drawerWidth,
    background: backgroundColor,
    color: fontColor
  },
  list: {
    background: backgroundColor,
    padding: '38px 0 0 0',
    height: '100%',
    position: 'relative'
  },
  content: {
    flexGrow: 1,
    marginLeft: drawerWidth
  },
  container: {
    padding: '16px 8px',
    background: backgroundColor
  }
});

export const Dashboard: NextPage = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.dashboard}>
      <CssBaseline />
      <Header drawerWidth={drawerWidth} />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List className={classes.list}>
          <ListItems />
        </List>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth={false} className={classes.container}>
          <div>{children}</div>
        </Container>
      </main>
    </div>
  );
};
