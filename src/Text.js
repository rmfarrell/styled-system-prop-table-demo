import React from 'react'
import styled from 'styled-components'
import { color, fontSize, space, typography } from 'styled-system'

const Text = styled.p`
    margin: 0;
    ${fontSize};
    ${color};
    ${space};
    ${typography};
`

Text.defaultProps = {
    color: 'inherit',
    fontSize: 1
}

export default Text