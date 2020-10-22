import styled from 'styled-components'
import { border, color, space, layout } from 'styled-system'
import PropTypes from 'prop-types'
import SSPropTypes from '@styled-system/prop-types';

const Card = styled.div`
    ${border};
    ${color};
    ${space};
    ${layout};
`

Card.propTypes = {
    id: PropTypes.string.isRequired,
    variant: PropTypes.string,
    ...SSPropTypes.border,
    ...SSPropTypes.color,
    ...SSPropTypes.space,
    ...SSPropTypes.layout,
}

Card.defaultProps = {
    borderRadius: 2,
    bg: 'white',
    p: 2,
    variant: ""
}

export default Card