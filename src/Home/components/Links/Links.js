import React from 'react'
// import {createUseStyles} from 'react-jss'
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
// const useStyles = createUseStyles({
//     customFont: {
//         'font-family': props => props.customFont
//     },
//     //  'background-color': `${BACKGROUND.color}`
// })

const Links = (props) => {
    let spaced = props.link.linkSpaced;
    let colored = props.link.colored;
    // const classes = useStyles(props)

    // const useStyles = createUseStyles({
    //     customFont: {
    //         'font-family': `${props.customFont}`
    //     },
    //     //  'background-color': `${BACKGROUND.color}`
    // })

    return <div>
    {props.link.type === "internal" 
    ? 
    <Segment color={props.link.color} {...(colored ? {inverted: true}: {})} {...(spaced ? {raised:true, className: `pushDown ${props.link.additionalStyle} ${props.link.color ? "" : props.link.colorOveride }`}: {})}>
        <InternalLinks link={props.link} deviceSize={props.deviceSize} customFont={props.customFont}/> 
    </Segment>
    : 
    props.link.type === "item" 
        ?
        <Segment color={props.link.color} {...(colored ? {inverted: true}: {})} {...(spaced ? {raised:true, className: `pushDown ${props.link.additionalStyle} ${props.link.color ? "" : props.link.colorOveride }`}: {})}>
            <ItemLinks link={props.link} deviceSize={props.deviceSize} customFont={props.customFont}/>
        </Segment>
        :
        props.link.type === "still/external"
            ?
            <Segment color={props.link.color} {...(colored ? {inverted: true}: {})} {...(spaced ? {raised:true, className: `pushDown ${props.link.additionalStyle} ${props.link.color ? "" : props.link.colorOveride }`}: {})}>
                <StillExternal link={props.link} deviceSize={props.deviceSize} customFont={props.customFont}/>
            </Segment>
            :
            <Segment color={props.link.color} {...(colored ? {inverted: true}: {})} {...(spaced ? {raised:true, className: `pushDown ${props.link.additionalStyle} ${props.link.color ? "" : props.link.colorOveride }`}: {})}>
                <ExternalLinks link={props.link} deviceSize={props.deviceSize} customFont={props.customFont}/>
            </Segment>
    }
</div>
}

export default Links