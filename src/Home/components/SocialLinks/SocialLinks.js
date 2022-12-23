import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import SocialLink from '../SocialLink/SocialLink';

const SocialLinks = ({ socialLinks }) => (
    <Grid.Row
        className={`RCNoTopPadding  ${
            // will need to enforce 'all or nothing' on surrounding social links
            socialLinks.group[0].surrounded ? 'RCMarginBottom-2' : ''
        }`}
    >
        {socialLinks.group.map((link, i) => {
            return <SocialLink key={`social-link-${i + 1}`} link={link} />;
        })}
    </Grid.Row>
);

SocialLinks.propTypes = {
    socialLinks: PropTypes.object,
};

export default SocialLinks;
