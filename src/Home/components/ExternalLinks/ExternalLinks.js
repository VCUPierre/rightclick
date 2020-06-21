import React from 'react'
import { Button, Label } from 'semantic-ui-react'
import '../Links/Links.css'
import './button.css'

const ExternalLinks = (props) => {
    return <div>
        {props.link.featured 
        ?
        <div>
            <Label as='a' color={props.link.color} ribbon={props.link.bannerSide} className={props.deviceSize === 'xs' ? "bannerPositionS" : props.deviceSize === "md" ? "bannerPositionM" : props.deviceSize === "lg" ? "bannerPositionL" : "bannerPositionXL"}>
              {props.link.featuredText}
            </Label>
            <Button 
            as='a' 
            href={props.link.link}
            className='RCWhiteBG' 
            fluid>
                {props.link.name}
            </Button>
        </div>
        :     
        <Button 
        as='a' 
        href={props.link.link}
        className='RCWhiteBG' 
        fluid>
            {props.link.name}
        </Button>
    }
    </div>
}

export default ExternalLinks