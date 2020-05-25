import React from 'react'
import InternalLinks from '../InternalLinks/InternalLinks'
import ExternalLinks from '../ExternalLinks/ExternalLinks'
import { Segment, Label } from 'semantic-ui-react'
import './Links.css'

const isInternalLink = (element) => {
    return <div>
        {element.internal 
        ? 
        <InternalLinks link={element}/> 
        : 
        <Segment color='green' className="pushDown">
            <ExternalLinks link={element}/>
        </Segment>}
    </div>
}

const featuredLink = (element) => {
    return <Segment color='green' className="pushDown">
        <Label as='a' color='green' ribbon className="bannerPosition">
          {element.featuredText}
        </Label>
        {isInternalLink(element)}
    </Segment>
}
const pinnedLink = (element) => {
    return <Segment 
    color='green' 
    className="pushDown"
    label={{ as: 'a', corner: 'left', icon: 'chess king' }}>
        {isInternalLink(element)}
    </Segment>
}

const Links = (props) => (
    <div>
        {props.link.featured 
        ? 
        featuredLink(props.link) 
        : 
        (
            props.link.pinned 
            ?
            pinnedLink(props.link)
            :
            isInternalLink(props.link)
        )}
    </div>
    // return  <Segment color='green' className="pushDown" >
    //             {element.internal 
    //                         ?
    //                         <InternalLinks link={element}/> 
    //                         :
    //                         <Button as='a' href={element.link} fluid>
    //                             {element.name}
    //                         </Button>
    //                         }
    //                     </Segment>       
)

export default Links