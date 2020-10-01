import React from 'react'
import { Image, Header } from 'semantic-ui-react'
import Banner from '../Banner/Banner'

const Still_External = (props) => {
    
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
            <a href={props.link.link}>
            <Image wrapped size='medium' src={props.link.mainMedia.link} />
            <Header as='h3' textAlign='center' className='RCborderNone RCtopPushoff'>{props.link.modalAlternativeText.text ? props.link.modalAlternativeText.text : props.link.mainMedia.mediaText}</Header>
            </a>
        </div>
        :
        <div>
        <Image wrapped size='medium' src={props.link.mainMedia.link} />
        <Header as='h3' textAlign='center' className='RCborderNone RCtopPushoff'>{props.link.modalAlternativeText.text ? props.link.modalAlternativeText.text : props.link.mainMedia.mediaText}</Header>
        </div>
    }
    </div>
}

export default Still_External