import React from 'react';
import logo from './logo.svg';
import Card from './Card'
import Text from './Text'
import { ThemeProvider } from 'styled-components'
import theme from './lib/theme'
import styled from 'styled-components'
import { color } from 'styled-system'

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
        <Card maxWidth="20em">
          <Text color="terracotta" mb={2} fontWeight="bold" fontSize={4}>Lorem Ipsum</Text>
          <Text mb={2}>
            Dolor sit amet, consectetur adipiscing elit. Aenean quis aliquet ipsum. Mauris risus nunc, volutpat at dapibus ac, ornare quis nulla. Aliquam non sagittis nisi, vitae vestibulum purus. Vestibulum vitae nibh sed ex hendrerit viverra et vitae erat. Fusce ac magna vitae velit semper facilisis. Nulla interdum ultrices sapien ut consectetur.
          </Text>
        </Card>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  align-items: center;
  display: flex;
  min-height: 100vh;
  justify-content: center;
  ${color}
`

export default App;
