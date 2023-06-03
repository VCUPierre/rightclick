import React from 'react';
import PropTypes from 'prop-types';
import { Header, Grid } from 'semantic-ui-react';
import SocialLinks from '../SocialLinks/SocialLinks';
import ProfilePic from '../ProfilePic/ProfilePic';
import useCustomFont from '../../hooks/useCustomFont';
import './profile.css';

const Profile = ({ socialLinks, profileImage, profileTitle, ...props }) => {
    const classes = useCustomFont(props);

    return (
        <div>
            {profileTitle.title && (
                <Header
                    as="h1"
                    textAlign="center"
                    className={`RCTopPadding RCMarginBottom ${profileTitle.color} ${classes.customFont}`}
                    style={{
                        fontSize: '2.5em',
                    }}
                >
                    {profileTitle.title}
                </Header>
            )}
            {/* <Header as="h2" textAlign="center" className="RCMarginTop"> */}
            <Grid centered columns={2} className="RCSpace-5">
                {socialLinks.position === 'top' && (
                    <Grid.Row>
                        <Header as="h2" textAlign="center">
                            <SocialLinks socialLinks={socialLinks} />
                        </Header>
                    </Grid.Row>
                )}
                <Grid.Row>
                    {/* <Grid.Column textAlign="center">  */}
                    <ProfilePic src={profileImage} />
                    {/* </Grid.Column> */}
                </Grid.Row>
            </Grid>
            {/* </Header> */}
        </div>
    );
};

Profile.propTypes = {
    socialLinks: PropTypes.object,
    profileImage: PropTypes.string,
    profileTitle: PropTypes.object,
};

export default Profile;
