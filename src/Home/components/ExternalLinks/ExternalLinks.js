import React from 'react'
import { Button } from 'semantic-ui-react'
import Banner from '../Banner/Banner'
import '../Links/Links.css'
import './button.css'

const ExternalLinks = (props) => {
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
                altColor={props.link.featuredAltStyle}
            />
            <Button 
            as='a' 
            href={props.link.link}
            {...coloredButton ? {
                className: `RCPadding ${props.link.fontColor ? `fontColor ${props.link.fontColor}` : ""}`
                } : {
                className: `RCPadding RCWhiteBG ${props.link.fontColor ? `fontColor ${props.link.fontColor}` : ""}`
            }}
            color={props.link.buttonColor} 
            size='big'
            fluid>
                {props.link.name}
            </Button>
        </div>
        :     
        <Button 
        as='a' 
        href={props.link.link}
        {...coloredButton ? {
            className: `RCPadding ${props.link.fontColor ? `fontColor ${props.link.fontColor}` : ""}`
            } : {
            className: `RCPadding RCWhiteBG ${props.link.fontColor ? `fontColor ${props.link.fontColor}` : ""}`
        }}
        color={props.link.buttonColor} 
        size='big'  
        fluid>
            {props.link.name}
        </Button>
    }
    </div>
}

export default ExternalLinks