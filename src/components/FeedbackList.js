import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import './FeedbackList.css';

export default function FeedbackList() {
  return (
    <List>
      <ListItem>
        <ListItemText
          primary="Vardas"
          secondary="informacinis tekstas"
        />
      </ListItem>
    </List>
  );
}