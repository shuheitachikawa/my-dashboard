import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Check from '@material-ui/icons/Check';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PeopleIcon from '@material-ui/icons/People';
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
          <ListItem key={menu.name} button>
            <Link href={menu.href}>
              <>
                <ListItemIcon>{menu.icon}</ListItemIcon>
                <ListItemText primary={menu.name} />
              </>
            </Link>
          </ListItem>
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
