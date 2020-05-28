import React from "react"
import { Icon } from 'semantic-ui-react'

const SocialLink = (props) => {
    return <a href={props.link.link}><Icon name={props.link.iconName} color="black" /></a>
}

export default SocialLink