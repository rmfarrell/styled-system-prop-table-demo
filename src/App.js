import React from 'react';

// @TODO: 
// This import is required for this lib to work, apparently on each component
// PR against parse-prop-types to remove this dependency
// or write a new lib.
import 'parse-prop-types';
import logo from './logo.svg';
import Card from './Card'
import Text from './Text'
import { ThemeProvider } from 'styled-components'
import theme from './lib/theme'
import styled from 'styled-components'
import { color } from 'styled-system'
import { StyledSystemPropsTable as PropsTable } from './styled-system-props-table/src'
import { Flex, Box } from 'reflexbox'


// eggshell: '#f4f1de',
// terracotta: '#e07a5f',
// independence: '#3d405b',
// green: '#81b29a',
// champagne: '#f2cc8f',
// white: '#fff',
// black: '#000',

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main bg="champagne">
        <Flex alignItems="center" justifyContent="center" py={5}>
          <Card maxWidth="20em" name="test">
            <Text color="terracotta" mb={2} fontWeight="bold" fontSize={4}>Lorem Ipsum</Text>
            <Text mb={2}>
              Dolor sit amet, consectetur adipiscing elit. Aenean quis aliquet ipsum. Mauris risus nunc, volutpat at dapibus ac, ornare quis nulla. Aliquam non sagittis nisi, vitae vestibulum purus. Vestibulum vitae nibh sed ex hendrerit viverra et vitae erat. Fusce ac magna vitae velit semper facilisis. Nulla interdum ultrices sapien ut consectetur.
          </Text>
          </Card>
        </Flex>
        <PropsTable component={Card} />
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  min-height: 100vh;
  ${color}
`

export default App;
