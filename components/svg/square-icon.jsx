import * as React from 'react'
import { createIcon, defaultProps, Icon } from '@chakra-ui/react';


const SquareBase = createIcon({
  defaultProps,
  displayName: 'SquareLogo',
  viewBox: '0 0 24 24',
  path: (
    <rect
      strokeWidth="1.5px"
      strokeLinecap="round"
      strokeLinejoin="round"
      stroke="currentcolor"
      height="12.5px"
      width="12.5px"
      rx="1"
      x="5.75px"
      y="5.75px"
    />
  )
})


function SquareIcon({ boxSize="3rem", ...props}) {
  return (
    <Icon
      {...props}
      boxSize={boxSize}
      as={SquareBase}
    />
  )
}

export {SquareIcon}
