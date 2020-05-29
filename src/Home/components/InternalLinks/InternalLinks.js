import React from 'react'
import { Label } from 'semantic-ui-react'
import LinksModal from '../LinksModal/LinksModal'
import '../Links/Links.css'

const ModalModalExample = (props) => {
  
  return <div>
    {props.link.featured 
    ?
    <div>
      <Label as='a' color='green' ribbon className={props.deviceSize === 'xs' ? "bannerPositionS" : props.deviceSize === "md" ? "bannerPositionM" : props.deviceSize === "lg" ? "bannerPositionL" : "bannerPositionXL"}>
              {props.link.featuredText}
      </Label>
      <LinksModal links={props.link}/>
  </div>
  :
      <LinksModal links={props.link}/>
  }
</div>
}

export default ModalModalExample