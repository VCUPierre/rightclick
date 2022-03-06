import React from 'react';
import SocialLink from '../SocialLink/SocialLink';

const SocialLinks = (props) => (
    <div>
        {props.links.group.map((element, i) => {
            return <SocialLink key={`social-link-${i + 1}`} link={element} />;
        })}
    </div>
);

export default SocialLinks;
