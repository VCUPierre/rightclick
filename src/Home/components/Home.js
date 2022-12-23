import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridColumn, Segment, Image, Header } from 'semantic-ui-react';
import Profile from './Profile/Profile';
import LinkGroup from './LinkGroup/LinkGroup';
import SocialLinks from './SocialLinks/SocialLinks';
import LogoColor from '../../assets/Logo.png';
import LogoWhite from '../../assets/LogoWhite.png';
import './Home.css';

const whichLogo = (logo) => {
    return logo === 'white' ? LogoWhite : LogoColor;
};

const Home = ({ deviceSize, socialLinks, linkGroups, profile }) => {
    const RLLogoLink = 'https://rightclickrva.com/business';

    return (
        <Grid centered className="RCMarginTop-1">
            <Grid.Row className="RCMarginBottom-2">
                <GridColumn>
                    <Profile
                        socialLinks={socialLinks}
                        profileImage={profile.profilePic}
                        profileTitle={profile.title}
                        customFont={profile.title.font}
                    />
                </GridColumn>
            </Grid.Row>
            {linkGroups.map((linkData, index) => {
                return (
                    <Grid.Row
                        key={`linkgroup-${index + 1}`}
                        className="RCNoTopPadding RCMarginBottom-2"
                    >
                        <LinkGroup
                            key={index}
                            links={linkData}
                            deviceSize={deviceSize}
                            customFont={linkData.groupFont}
                        />
                    </Grid.Row>
                );
            })}
            {socialLinks.position === 'bottom' ? (
                <Grid.Row className="RCLogoZeroBottom">
                    <Segment basic className="RCLogoZeroBottom">
                        <Header
                            as="h2"
                            textAlign="center"
                            className="RCMarginTop"
                        >
                            <SocialLinks socialLinks={socialLinks} />
                        </Header>
                    </Segment>
                </Grid.Row>
            ) : null}
            {profile.background.logoLink ? (
                <Grid.Row className="RCLogoZeroBottom">
                    <Segment basic className="RCLogoZeroBottom">
                        <Image
                            className="RCLogoZeroBottom"
                            src={profile.background.logoLink}
                            as="a"
                            size="tiny"
                            href={profile.background.logoActiveLink}
                            target="_blank"
                            spaced
                        />
                    </Segment>
                </Grid.Row>
            ) : null}
            <Segment
                basic
                className={`${
                    profile.background.logoLink
                        ? 'RCDoubleLogo'
                        : 'RCMarginBottom-1'
                }`}
            >
                <Image
                    src={whichLogo(profile.TRCLogo)}
                    as="a"
                    size="small"
                    href={RLLogoLink}
                    target="_blank"
                    spaced
                />
            </Segment>
        </Grid>
    );
};

Home.propTypes = {
    deviceSize: PropTypes.string,
    socialLinks: PropTypes.object,
    profileTitle: PropTypes.object,
    profileImage: PropTypes.string,
    linkGroups: PropTypes.array,
    logo: PropTypes.string,
    background: PropTypes.object,
    customFont: PropTypes.string,
};

export default Home;
