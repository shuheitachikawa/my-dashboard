import Check from '@mui/icons-material/Check';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleIcon from '@mui/icons-material/People';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import { makeStyles } from '@mui/styles';
import { Auth } from 'aws-amplify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const menus = [
  {
    name: 'Todo',
    icon: <Check />,
    href: '/todo'
  },
  {
    name: 'Setting',
    icon: <PeopleIcon />,
    href: '/setting'
  }
];

const useStyles = makeStyles({
  listItem: {
    padding: 0,
    height: '48px',
    display: 'flex',
    justifyContent: 'center'
  },
  signOutButton: {
    position: 'absolute',
    bottom: 0
  }
});

export const ListItems: React.FC = () => {
  const classes = useStyles();
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await Auth.signOut();
      await router.push('/signin');
    } catch (error) {
      console.log('error signing out: ', error);
    }
  };
  return (
    <div>
      {menus.map((menu) => {
        return (
          <Link key={menu.name} passHref={true} href={menu.href}>
            <Tooltip title={menu.name} arrow placement="right">
              <ListItem button className={classes.listItem}>
                {menu.icon}
              </ListItem>
            </Tooltip>
          </Link>
        );
      })}
      <Tooltip title="SignOut" arrow placement="right">
        <ListItem
          button
          className={(classes.listItem, classes.signOutButton)}
          onClick={handleSignOut}
        >
          <ExitToAppIcon />
        </ListItem>
      </Tooltip>
    </div>
  );
};
