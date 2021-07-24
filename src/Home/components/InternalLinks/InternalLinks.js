import React from 'react'
import LinksModal from '../LinksModal/LinksModal'
import Banner from '../Banner/Banner'
import '../Links/Links.css'

const InternalLinks = (props) => {
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
      <LinksModal links={props.link} customFont={props.customFont}/>
  </div>
  :
      <LinksModal links={props.link} customFont={props.customFont}/>
  }
</div>
}

export default InternalLinks