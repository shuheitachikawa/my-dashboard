import Check from '@mui/icons-material/Check';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PeopleIcon from '@mui/icons-material/People';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
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

export const ListItems: React.FC = () => {
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
            <ListItem button>
              <>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.name} />
              </>
            </ListItem>
          </Link>
        );
      })}
      <ListItem button onClick={handleSignOut}>
        <ListItemIcon>
          <ExitToAppIcon />
        </ListItemIcon>
        <ListItemText primary="SignOut" />
      </ListItem>
    </div>
  );
};
