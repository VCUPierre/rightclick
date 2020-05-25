import React from 'react'
import InternalLinks from '../InternalLinks/InternalLinks'
import ExternalLinks from '../ExternalLinks/ExternalLinks'
import { Segment, Label } from 'semantic-ui-react'
import './Links.css'

const isInternalLink = (element) => {
    return <div>
        {element.internal 
        ? 
        <Segment color='green' className="pushDown">
            <InternalLinks link={element}/> 
        </Segment>
        : 
        <Segment color='green' className="pushDown">
            <ExternalLinks link={element}/>
        </Segment>}
    </div>
}

const featuredLink = (element) => {
    return <div>
        <Label as='a' color='green' ribbon className="bannerPosition">
          {element.featuredText}
        </Label>
        {isInternalLink(element, element.featured)}
    </div>
}
// const pinnedLink = (element) => {
//     return <Segment 
//     color='green' 
//     className="pushDown">
//         {isInternalLink(element, )}
//     </Segment>
// }

const Links = (props) => (
    <div>
        {props.link.featured 
        ? 
        featuredLink(props.link) 
        :
        isInternalLink(props.link) 
        // (
        //     props.link.pinned 
        //     ?
        //     pinnedLink(props.link)
        //     :
        //     isInternalLink(props.link)
        // )
        }
    </div>    
)

export default Links