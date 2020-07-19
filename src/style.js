import React from 'react'
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
  backgroundImg: {
    'background-image': {
        url: 'https://res.cloudinary.com/rightlink/image/upload/v1594868601/p2pRich/logo_vcg55z.png'
    },
    'background-repeat': 'no-repeat',
    'background-position': '50% 45%',
    'background-attachment': 'fixed',
    'background-size': 'contain',
  }
})

export default useStyles