import React from "react"
import { Icon } from 'semantic-ui-react'

const SocialLink = (props) => {
    return <a href={props.link.link}><Icon name={props.link.iconName} color={props.link.color} /></a>
}

export default SocialLink