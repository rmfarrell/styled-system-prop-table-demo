import React from 'react';

// @TODO: 
// This import is required for this lib to work, apparently on each component
// PR against parse-prop-types to remove this dependency
// or write a new lib.
import 'parse-prop-types';
import Card from './Card'
import { ThemeProvider } from 'styled-components'
import theme from './lib/theme'
import styled from 'styled-components'
import { color, space } from 'styled-system'
import { StyledSystemPropsTable as PropsTable } from './styled-system-props-table/src'

const transformProps = (name = '', properties = {}) => {
  if (name === 'num') return {
    ...properties,
    description: <div>test test test</div>
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main bg="champagne" py={4}>
        <Card maxWidth={950} mx="auto" my={2} px={0} py={2} bg="white">
          <PropsTable
            linkColor={theme.colors.link}
            component={Card}
            theme={theme}
            transformProps={transformProps}
          />
        </Card>
      </Main>
    </ThemeProvider>
  );
}

const Main = styled.main`
  min-height: 100vh;
  ${color}
  ${space}
`

export default App;
