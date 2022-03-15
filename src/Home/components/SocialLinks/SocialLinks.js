import React from 'react';
import PropTypes from 'prop-types';
import SocialLink from '../SocialLink/SocialLink';

const SocialLinks = ({ socialLinks }) => (
    <div>
        {socialLinks.group.map((link, i) => {
            return <SocialLink key={`social-link-${i + 1}`} link={link} />;
        })}
    </div>
);

SocialLinks.propTypes = {
    socialLinks: PropTypes.object,
};

export default SocialLinks;
