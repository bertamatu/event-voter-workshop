import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export default function ScoreIcon() {
  return (
    <Avatar
      variant="rounded"
      style={{ backgroundColor: '#a5d6a7' }}
    >
      <ThumbUpIcon />
    </Avatar>
  );
}