import React from 'react';
import { Flex, Box } from '@rebass/grid';
import {
  HeaderWrapper,
  HeaderLabel,
  HeaderSelectWrapper,
} from '../styles/Header';
import { Container } from '../styles/Grid';

interface HeaderProps {
  updateInputValue(): void;
  activeSort: string;
  copyFormat: string;
}

export default ({ updateInputValue, activeSort, copyFormat }: HeaderProps) => (
  <HeaderWrapper>
    <Container>
      <Box p="1rem 2rem">
        <Flex>
          <Box width={[1, 'auto']}>
            <Flex
              alignItems={['flex-start', 'center']}
              flexDirection={['column', 'row']}
            >
              <Box mr={[0, '0.5rem']} mb={['0.5rem', 0]}>
                <HeaderLabel htmlFor="sort">Sort:</HeaderLabel>
              </Box>
              <HeaderSelectWrapper>
                <select
                  onChange={updateInputValue}
                  name="activeSort"
                  id="sort"
                  value={activeSort}
                >
                  <option value="alphabetically">alphabetically</option>
                  <option value="byLuminosity">by luminosity</option>
                </select>
              </HeaderSelectWrapper>
            </Flex>
          </Box>

          <Box mx="0.5rem" />

          <Box width={[1, 'auto']}>
            <Flex
              alignItems={['flex-start', 'center']}
              flexDirection={['column', 'row']}
            >
              <Box mr={[0, '0.5rem']} mb={['0.5rem', 0]}>
                <HeaderLabel htmlFor="format">Copy format:</HeaderLabel>
              </Box>
              <HeaderSelectWrapper>
                <select
                  onChange={updateInputValue}
                  name="copyFormat"
                  id="format"
                  value={copyFormat}
                >
                  <option value="keyword">keyword</option>
                  <option value="hex">hex</option>
                  <option value="rgb">rgb</option>
                </select>
              </HeaderSelectWrapper>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Container>
  </HeaderWrapper>
);
