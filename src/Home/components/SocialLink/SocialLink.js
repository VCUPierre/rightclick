import React from "react"
import { Icon } from 'semantic-ui-react'

function circled(surrounded) {
    if (surrounded === "circular") {
        return true
    } else {
        return false
    }
}

function boxed(surrounded) {
    if (surrounded === "bordered") {
        return true
    } else {
        return false
    }
}

const SocialLink = (props) => {
    return <a href={props.link.link}><Icon name={props.link.iconName} circular={circled(props.link.surrounded)} bordered={boxed(props.link.surrounded)} color={props.link.color} /></a>
}

export default SocialLink