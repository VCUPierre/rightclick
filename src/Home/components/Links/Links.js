import React from 'react'
import InternalLinks from '../InternalLinks/InternalLinks'
import ExternalLinks from '../ExternalLinks/ExternalLinks'
import { Segment } from 'semantic-ui-react'
import './Links.css'

// const pinnedLink = (element) => {
//     return <Segment 
//     color='green' 
//     className="pushDown">
//         {isInternalLink(element, )}
//     </Segment>
// }

const Links = (props) => {
    // isInternalLink(props.link )
    console.log(props.deviceSize)
    return <div>
    {props.link.internal 
    ? 
    <Segment color='green' >
        <InternalLinks link={props.link} deviceSize={props.deviceSize}/> 
    </Segment>
    : 
    <Segment color='green' >
        <ExternalLinks link={props.link} deviceSize={props.deviceSize}/>
    </Segment>}
</div>
}

export default Links