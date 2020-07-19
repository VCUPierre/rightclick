import React from 'react'
import { Button } from 'semantic-ui-react'
import Banner from '../Banner/Banner'
import '../Links/Links.css'

const ItemLinks = (props) => {
    const coloredButton = props.link.buttonColor;

    return <div>
        {props.link.featured 
        ?
        <div>
            <Banner 
                text={props.link.featuredText} 
                color={props.link.featuredColor} 
                bannerSide={props.link.bannerSide} 
                deviceSize={props.deviceSize === 'xs' ? "bannerPositionS" : props.deviceSize === "md" ? "bannerPositionM" : props.deviceSize === "lg" ? "bannerPositionL" : "bannerPositionXL"}
                timer={props.link.featuredTimerDate}
                completeText={props.link.featuredTimerText}
            />
            <Button 
                {...coloredButton ? {className: 'RCPadding'}: {className: 'RCPadding RCWhiteBG'}}
                size='big'
                color={props.link.buttonColor}   
                fluid>
                    {props.link.name}
            </Button>
    </div>
    :
    <Button 
        {...coloredButton ? {className: 'RCPadding'}: {className: 'RCPadding RCWhiteBG'}}
        size='big'
        color={props.link.buttonColor} 
        fluid>
            {props.link.name}
    </Button>
    }
    </div>
}

export default ItemLinks