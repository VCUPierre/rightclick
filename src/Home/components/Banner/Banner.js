import React from 'react'
import { Label } from 'semantic-ui-react'
import BannerTimer from '../BannerTimer/BannerTimer'
import './style.css'

const Banner = (props) => {
    return <div>
            {props.timer ? 
                <Label as='a' color={props.color} ribbon={props.bannerSide} className={props.deviceSize}>
                {props.text}  <BannerTimer dateTime={props.timer} text={props.completeText}/>
                </Label>
            :
                <Label as='a' color={props.color} ribbon={props.bannerSide} className={props.deviceSize}>
                    {props.text}
                </Label>
            }
    </div>
}

export default Banner