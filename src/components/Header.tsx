import React from 'react';
import { Box } from '@rebass/grid';
import {
  HeaderWrapper,
  HeaderLabel,
  HeaderSelectWrapper,
} from '../styles/Header';
import { Container } from '../styles/Grid';

interface HeaderProps {
  updateActiveSort(): void;
}

export default ({ updateActiveSort }: HeaderProps) => (
  <HeaderWrapper>
    <Container>
      <Box p="1rem 2rem">
        <HeaderLabel htmlFor="sort">Sort:</HeaderLabel>
        <HeaderSelectWrapper>
          <select onChange={updateActiveSort} name="sort" id="sort">
            <option value="alphabetically">alphabetically</option>
            <option value="byLuminosity">by luminosity</option>
          </select>
        </HeaderSelectWrapper>
      </Box>
    </Container>
  </HeaderWrapper>
);
