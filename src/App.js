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
import { color, layout, space, typography } from 'styled-system'
import { StyledSystemPropsTable as PropsTable } from 'styled-system-props-table'
import { CodeBlock, dracula } from "react-code-blocks";

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

const code = `


/* -----  Card.jsx -------*/

import { border, color, space, layout } from '@styled-system/prop-types';
import PropTypes from 'react'
 
// Apply proptypes from styled system + custom prop types
Card.propTypes = {
     id: PropTypes.string.isRequired,
     variant: PropTypes.string,
     ...border,
     ...color,
     ...space,
     ...layout,
}

// Apply default props
Card.defaultProps = {
  borderRadius: 2,
  bg: 'white',
  p: 2,
  variant: ""
}

/* -----  index.jsx -------*/

import Card from './Card'
import { StyledSystemPropsTable as PropsTable } from 'styled-system-props-table'

// This function will decorate the proptype data with additional info
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

return () => {
  <Card maxWidth={950} mx="auto" my={2} px={0} py={2} bg="white">
    <PropsTable
      component={Card}
      theme={theme}
      transformProps={transformProps}
    />
  </Card>
}

`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main bg="champagne" py={4}>
        <CodeContainer
          maxWidth={950}
          mx="auto"
          mb={4}
          font-family="monospace">
          <CodeBlock
            text={code}
            language="jsx"
            theme={dracula}
            showLineNumbers={false}
          />
        </CodeContainer>
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

const CodeContainer = styled.div`
  ${space};
  ${layout};
  ${typography}
`

const Main = styled.main`
  min-height: 100vh;
  ${color}
  ${space}
`

export default App;
