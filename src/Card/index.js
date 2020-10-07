import React from 'react'
import styled from 'styled-components'
import { border, color, space, layout } from 'styled-system'

const Card = (props = {}) => {
    return <StyledCard />
}

const StyledCard = styled.div`
    ${border};
    ${color};
    ${space};
    ${layout};
`

StyledCard.defaultProps = {
    borderRadius: 2,
    bg: 'white',
    p: 3
}

export default StyledCard