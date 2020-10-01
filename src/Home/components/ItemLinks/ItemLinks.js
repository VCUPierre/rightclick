import React from 'react'
import Banner from '../Banner/Banner'
import ModalMedia from '../ModalMedia/ModalMedia'
import '../Links/Links.css'


const ItemLinks = (props) => {
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
            <ModalMedia link={props.link} type={props.link.type} deviceSize={props.deviceSize}/>
    </div>
    :
    <ModalMedia link={props.link} type={props.link.type} deviceSize={props.deviceSize}/>
    }
    </div>
}

export default ItemLinks