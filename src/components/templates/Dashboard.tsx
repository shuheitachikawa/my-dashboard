import AppBar from '@material-ui/core/AppBar';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { NextPage } from 'next';
import React from 'react';
// import styled from "styled-components";
import { ListItems } from 'components/organisms';

const drawerWidth = 200;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    drawer: {
      width: drawerWidth
    },
    appBar: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`
    },
    drawerPaper: {
      width: drawerWidth
    },
    content: {
      flexGrow: 1,
      marginLeft: drawerWidth
    }
  })
);

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
        <List>{ListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <Container>
          <div className="">{children}</div>
        </Container>
      </main>
    </div>
  );
};
