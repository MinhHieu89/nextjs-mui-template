import { Container } from '@mui/material';
import React from 'react';

const PublicLayout = (props: { children: React.ReactNode }) => {
  return <Container>{props.children}</Container>;
};

export default PublicLayout;
