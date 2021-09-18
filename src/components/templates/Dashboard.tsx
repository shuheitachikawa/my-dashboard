import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import { NextPage } from 'next';
import React from 'react';
// import styled from "styled-components";
import { ListItems } from 'components/organisms';

const drawerWidth = 200;

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
    color: '#fff'
  },
  content: {
    flexGrow: 1,
    marginLeft: drawerWidth
  },
});

export const Dashboard: NextPage = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Typography component="h1" variant="h6" color="inherit" noWrap>
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Container>
          <div className="">{children}</div>
        </Container>
      </main>
    </div>
  );
};
