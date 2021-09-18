import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { makeStyles } from '@mui/styles';
import { NextPage } from 'next';
import React from 'react';
// import styled from "styled-components";
import { ListItems, Header } from 'components/organisms';

const drawerWidth = 170;

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth
  },
  appBar: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'none',
    color: '#CFD8DC'
  },
  content: {
    flexGrow: 1,
    marginLeft: drawerWidth
  },
  container: {
    paddingTop: '16px'
  }
});

export const Dashboard: NextPage = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Header drawerWidth={drawerWidth} />
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <List>
          <ListItems />
        </List>
      </Drawer>
      <main className={classes.content}>
        <Container maxWidth={false}>
          <div className={classes.container}>{children}</div>
        </Container>
      </main>
    </div>
  );
};
