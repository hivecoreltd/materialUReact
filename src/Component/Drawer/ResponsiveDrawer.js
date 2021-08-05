import React from 'react'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import List from '@material-ui/core/List';


export default function ResponsiveDrawer({routes}) {
  return (
    <div style={{height:'100%',width:'100%',display:'flex'}}>
      
      <List>
        {routes.map((item, index) => (
          <ListItem button key={index} onClick={()=>item.onclickf()}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.routename} />
          </ListItem>
        ))}
      </List>
    </div>
  )
}


