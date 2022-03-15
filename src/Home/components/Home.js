import React from 'react';
import PropTypes from 'prop-types';
import { Grid, GridColumn, Segment, Image } from 'semantic-ui-react';
import Profile from './Profile/Profile';
import LinkGroup from './LinkGroup/LinkGroup';
import LogoColor from '../../assets/Logo.png';
import LogoWhite from '../../assets/LogoWhite.png';
import './Home.css';

const whichLogo = (logo) => {
    return logo === 'white' ? LogoWhite : LogoColor;
};

const Home = ({
    deviceSize,
    socialLinks,
    profileTitle,
    profileImage,
    linkGroups,
    logo,
    background,
    customFont,
}) => {
    const RLLogoLink = 'https://rightclickrva.com/business';

    return (
        <Grid centered className="RCMarginTop-1">
            <Grid.Row className="RCMarginBottom-2">
                <GridColumn>
                    <Profile
                        socialLinks={socialLinks}
                        deviceSize={deviceSize}
                        profileImage={profileImage}
                        profileTitle={profileTitle}
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
                            customFont={customFont}
                        />
                    </Grid.Row>
                );
            })}
            <div>
                {background.logoLink ? (
                    <Grid.Row className="RCLogoZeroBottom">
                        <Segment basic className="RCLogoZeroBottom">
                            <Image
                                className="RCLogoZeroBottom"
                                src={background.logoLink}
                                as="a"
                                size="tiny"
                                href={background.logoActiveLink}
                                target="_blank"
                                spaced
                            />
                        </Segment>
                    </Grid.Row>
                ) : (
                    ''
                )}
                <Segment
                    basic
                    className={`${
                        background.logoLink
                            ? 'RCDoubleLogo'
                            : 'RCMarginBottom-1'
                    }`}
                >
                    <Image
                        src={whichLogo(logo)}
                        as="a"
                        size="small"
                        href={RLLogoLink}
                        target="_blank"
                        spaced
                    />
                </Segment>
            </div>
        </Grid>
    );
};

Home.propTypes = {
    deviceSize: PropTypes.string,
    socialLinks: PropTypes.object,
    profileTitle: PropTypes.object,
    profileImage: PropTypes.string,
    linkGroups: PropTypes.object,
    logo: PropTypes.string,
    background: PropTypes.object,
    customFont: PropTypes.string,
};

export default Home;
