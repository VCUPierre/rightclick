import React from 'react'
import InternalLinks from '../InternalLinks/InternalLinks'
import ExternalLinks from '../ExternalLinks/ExternalLinks'
import { Segment } from 'semantic-ui-react'
import './Links.css'

const isInternalLink = (element) => {
    return <div>
        {element.internal 
        ? 
        <Segment color='green' >
            <InternalLinks link={element}/> 
        </Segment>
        : 
        <Segment color='green' >
            <ExternalLinks link={element}/>
        </Segment>}
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
    isInternalLink(props.link)
)

export default Links