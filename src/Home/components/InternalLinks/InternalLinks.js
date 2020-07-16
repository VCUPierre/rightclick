import React from 'react'
import LinksModal from '../LinksModal/LinksModal'
import Banner from '../Banner/Banner'
import '../Links/Links.css'

const ModalModalExample = (props) => {
  return <div>
    {props.link.featured 
    ?
    <div>
      <Banner 
        text={props.link.featuredText} 
        color={props.link.color} 
        bannerSide={props.link.bannerSide} 
        deviceSize={props.deviceSize === 'xs' ? "bannerPositionS" : props.deviceSize === "md" ? "bannerPositionM" : props.deviceSize === "lg" ? "bannerPositionL" : "bannerPositionXL"}
        timer={props.link.featuredTimerDate}
        completeText={props.link.featuredTimerText}
      />
      <LinksModal links={props.link}/>
  </div>
  :
      <LinksModal links={props.link}/>
  }
</div>
}

export default ModalModalExample