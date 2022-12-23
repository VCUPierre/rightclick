import React from 'react';
import PropTypes from 'prop-types';
import { Header, Grid } from 'semantic-ui-react';
import { createUseStyles } from 'react-jss';
import SocialLinks from '../SocialLinks/SocialLinks';
import ProfilePic from '../ProfilePic/ProfilePic';
import hasKey from '../../functions/hasKey';
import './profile.css';

const useStyles = createUseStyles({
    customFont: {
        'font-family': (props) => [props.customFont, '!important'],
    },
});

const Profile = ({ socialLinks, profileImage, profileTitle, ...props }) => {
    const classes = useStyles(props);

    return (
        <div>
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
            <Header as="h2" textAlign="center" className="RCMarginTop">
                <Grid textAlign="center" className="RCSpace-5">
                    {socialLinks.position === 'top' ||
                    !hasKey(socialLinks, ['position']) ? (
                        <SocialLinks socialLinks={socialLinks} />
                    ) : null}
                    <Grid.Row className="RCNoTopPadding">
                        <Grid.Column textAlign="center">
                            <ProfilePic src={profileImage} />
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Header>
        </div>
    );
};

Profile.propTypes = {
    socialLinks: PropTypes.object,
    profileImage: PropTypes.string,
    profileTitle: PropTypes.object,
};

export default Profile;
