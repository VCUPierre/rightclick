import React from 'react';
import PropTypes from 'prop-types';
import { Header, Grid } from 'semantic-ui-react';
import SocialLinks from '../SocialLinks/SocialLinks';
import ProfilePic from '../ProfilePic/ProfilePic';
import './profile.css';

const Profile = ({ socialLinks, profileImage, profileTitle }) => (
    <div>
        <Header
            as="h1"
            textAlign="center"
            className={`RCTopPadding RCMarginBottom ${profileTitle.color}`}
            style={{
                fontSize: '2.5em',
            }}
        >
            {profileTitle.title}
        </Header>
        <Header as="h2" textAlign="center" className="RCMarginTop">
            <Grid textAlign="center" className="RCSpace-5">
                <Grid.Row
                    className={`RCNoTopPadding ${
                        // will need to enforce 'all or nothing' on surrounding social links
                        socialLinks.group[0].surrounded
                            ? 'RCMarginBottom-2'
                            : ''
                    }`}
                >
                    <SocialLinks socialLinks={socialLinks} />
                </Grid.Row>
                <Grid.Row className="RCNoTopPadding">
                    <Grid.Column textAlign="center">
                        <ProfilePic src={profileImage} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Header>
    </div>
);

Profile.propTypes = {
    socialLinks: PropTypes.object,
    // deviceSize: PropTypes.string,
    profileImage: PropTypes.string,
    profileTitle: PropTypes.object,
};

export default Profile;
