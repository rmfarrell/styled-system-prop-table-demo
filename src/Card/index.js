import styled from 'styled-components'
import { border, color, space, layout } from 'styled-system'
import PropTypes from 'prop-types'

const Card = styled.div`
    ${border};
    ${color};
    ${space};
    ${layout};
`

Card.propTypes = {
    name: PropTypes.string.isRequired,
    num: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

Card.defaultProps = {
    borderRadius: 2,
    bg: 'white',
    p: 3
}

export default Card