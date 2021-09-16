import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import BarChartIcon from '@material-ui/icons/BarChart';
import Check from '@material-ui/icons/Check';
import LayersIcon from '@material-ui/icons/Layers';
import PeopleIcon from '@material-ui/icons/People';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Link from 'next/link';
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

export const ListItems = (
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
  </div>
);
