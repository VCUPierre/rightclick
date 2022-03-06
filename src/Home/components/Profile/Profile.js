import React from 'react';
import { Header, Grid } from 'semantic-ui-react';
import SocialLinks from '../SocialLinks/SocialLinks';
import ProfilePic from '../ProfilePic/ProfilePic';
import './profile.css';

const Profile = (props) => (
    <div>
        <Header
            as="h1"
            textAlign="center"
            className={`RCTopPadding RCMarginBottom ${props.profileTitle.color}`}
            style={{
                fontSize: '2.5em',
            }}
        >
            {props.profileTitle.title}
        </Header>
        <Header as="h2" textAlign="center" className="RCMarginTop">
            <Grid textAlign="center" className="RCSpace-5">
                <Grid.Row
                    className={`RCNoTopPadding ${
                        // will need to enforce 'all or nothing' on surrounding social links
                        props.links.group[0].surrounded
                            ? 'RCMarginBottom-2'
                            : ''
                    }`}
                >
                    <SocialLinks links={props.links} />
                </Grid.Row>
                <Grid.Row className="RCNoTopPadding">
                    <Grid.Column textAlign="center">
                        <ProfilePic src={props.profileImg} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Header>
    </div>
);

export default Profile;
