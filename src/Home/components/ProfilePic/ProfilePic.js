import React from 'react'
import {Image} from 'semantic-ui-react'
import './style.css'
// import StockImg from './image.png'

const ProfilePic = (props) => (
    <Image src={props.src} className="RLFixCenter RLOneSize" rounded />
)

export default ProfilePic