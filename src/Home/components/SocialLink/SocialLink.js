import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import './SocialLink.css';

function circled(surrounded) {
    return surrounded === 'circular' ? true : false;
}

function boxed(surrounded) {
    return surrounded === 'bordered' ? true : false;
}

const SocialLink = ({ link }) => {
    return (
        <a href={link.link}>
            <Icon
                className={`RLSocialPad ${
                    link.secondaryColor ? link.secondaryColor : ''
                }`}
                name={link.iconName}
                inverted={link.inverted}
                circular={circled(link.surrounded)}
                bordered={boxed(link.surrounded)}
                color={link.color}
            />
        </a>
    );
};

SocialLink.propTypes = {
    link: PropTypes.object,
};

export default SocialLink;
