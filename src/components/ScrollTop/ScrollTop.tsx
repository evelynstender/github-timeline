import React from 'react';

import { Zoom, useScrollTrigger } from '@material-ui/core';
import { useStyles } from '../../styles';

interface Props {
  children: React.ReactElement;
}

const ScrollTop = ({ children }: Props) : JSX.Element => {
  const classes = useStyles();

  const trigger = useScrollTrigger({
    target: window,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        onClick={handleClick}
        role="presentation"
        className={classes.scrollTop}
      >
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollTop;
