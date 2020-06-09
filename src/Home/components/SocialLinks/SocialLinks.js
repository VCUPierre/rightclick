import React from 'react'
import SocialLink from '../SocialLink/SocialLink'

const SocialLinks = (props) => (
    <div>
        {props.links.group.map(element => {
            return <SocialLink link={element}/>
        })}
    </div>
)

export default SocialLinks