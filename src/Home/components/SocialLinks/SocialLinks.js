import React from 'react'
import SocialLink from '../SocialLink/SocialLink'

const SocialLinks = (props) => (
    <div>
        {props.links.group.map(element => {
            return <SocialLink link={element}/>
        })}
       {/* <a href="https://instagram.com"><Icon name='instagram' color="black" /></a>
       <a href="https://twitter.com"><Icon name='twitter' color="black" /></a>
       <a href="https://facebook.com"><Icon name='facebook f' color="black" /></a>
       <a href="https://soundcloud.com"><Icon name='soundcloud' color="black" /></a> */}
    </div>
)

export default SocialLinks