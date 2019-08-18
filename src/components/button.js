import React from 'react'
import GastbyLink from 'gatsby-link'
import PropTypes from 'prop-types'

const DefaultButton = ({
  children = 'Button',
  to = 'https://www.balupurohit23.com/',
  customClass = '',
}) => (
  <GastbyLink to={to} customClass={`link ${customClass}`}>
    {children}
  </GastbyLink>
)

DefaultButton.propTypes = {
  children: PropTypes.any.isRequired,
  to: PropTypes.string,
  customClass: PropTypes.string,
}

export default DefaultButton