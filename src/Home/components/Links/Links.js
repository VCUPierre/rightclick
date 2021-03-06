import React from 'react'
import InternalLinks from '../InternalLinks/InternalLinks'
import ExternalLinks from '../ExternalLinks/ExternalLinks'
import ItemLinks from '../ItemLinks/ItemLinks'
import StillExternal from '../Still_External/Still_External'
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
    let spaced = props.link.linkSpaced;
    let colored = props.link.colored;

    return <div>
    {props.link.type === "internal" 
    ? 
    <Segment color={props.link.color} {...(colored ? {inverted: true}: {})} {...(spaced ? {raised:true, className: `pushDown ${props.link.additionalStyle} ${props.link.color ? "" : props.link.colorOveride }`}: {})}>
        <InternalLinks link={props.link} deviceSize={props.deviceSize}/> 
    </Segment>
    : 
    props.link.type === "item" 
        ?
        <Segment color={props.link.color} {...(colored ? {inverted: true}: {})} {...(spaced ? {raised:true, className: `pushDown ${props.link.additionalStyle} ${props.link.color ? "" : props.link.colorOveride }`}: {})}>
            <ItemLinks link={props.link} deviceSize={props.deviceSize}/>
        </Segment>
        :
        props.link.type === "still/external"
            ?
            <Segment color={props.link.color} {...(colored ? {inverted: true}: {})} {...(spaced ? {raised:true, className: `pushDown ${props.link.additionalStyle} ${props.link.color ? "" : props.link.colorOveride }`}: {})}>
                <StillExternal link={props.link} deviceSize={props.deviceSize}/>
            </Segment>
            :
            <Segment color={props.link.color} {...(colored ? {inverted: true}: {})} {...(spaced ? {raised:true, className: `pushDown ${props.link.additionalStyle} ${props.link.color ? "" : props.link.colorOveride }`}: {})}>
                <ExternalLinks link={props.link} deviceSize={props.deviceSize}/>
            </Segment>
    }
</div>
}

export default Links