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
  if (name === 'variant') return {
    ...properties,
    description: <>
      <div><strong>Card variants</strong></div>
      <ul>
        <li><strong>product</strong> large card, lots of padding horizontally stacked</li>
        <li><strong>product-small</strong> small card for sidebars</li>
        <li><strong>info</strong> small card with sharp corners and no box-shadow</li>
      </ul>
    </>
  }
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main bg="champagne" py={4}>
        <Card maxWidth={950} mx="auto" my={2} px={0} py={2} bg="white">
          <PropsTable
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
