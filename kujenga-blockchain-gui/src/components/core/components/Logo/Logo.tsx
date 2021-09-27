import React from 'react';
import styled from 'styled-components';
import { Box, BoxProps } from '@material-ui/core';
import { Kujenga } from '@kujenga/icons';

const StyledKujenga = styled(Kujenga)`
  max-width: 100%;
  width: auto;
  height: auto;
`;

export default function Logo(props: BoxProps) {
  return (
    <Box {...props}>
      <StyledKujenga />
    </Box>
  );
}
