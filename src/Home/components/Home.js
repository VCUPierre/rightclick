import React from 'react';
import { Grid, GridColumn, Segment, Image } from 'semantic-ui-react';
import Profile from './Profile/Profile';
import LinkGroup from './LinkGroup/LinkGroup';
import LogoColor from '../../assets/Logo.png';
import LogoWhite from '../../assets/LogoWhite.png';
import './Home.css';

const whichLogo = (logo) => {
    if (logo === 'white') {
        return LogoWhite;
    }
    return LogoColor;
};

const Home = (props) => {
    return (
        <Grid centered className="RCMarginTop-1">
            <Grid.Row className="RCMarginBottom-2">
                <GridColumn>
                    <Profile
                        links={props.socialLinks}
                        deviceSize={props.deviceSize}
                        profileImg={props.profileImage}
                        profileTitle={props.profileTitle}
                    />
                </GridColumn>
            </Grid.Row>
            {props.linkGroups.map((linkData, index) => {
                return (
                    <Grid.Row
                        key={`linkgroup-${index + 1}`}
                        className="RCNoTopPadding RCMarginBottom-2"
                    >
                        <LinkGroup
                            key={index}
                            links={linkData}
                            deviceSize={props.deviceSize}
                            customFont={props.customFont}
                        />
                    </Grid.Row>
                );
            })}
            <div>
                {props.background.logoLink ? (
                    <Grid.Row className="RCLogoZeroBottom">
                        <Segment basic className="RCLogoZeroBottom">
                            <Image
                                className="RCLogoZeroBottom"
                                src={props.background.logoLink}
                                as="a"
                                size="tiny"
                                href={props.background.logoActiveLink}
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
                        props.background.logoLink
                            ? 'RCDoubleLogo'
                            : 'RCMarginBottom-1'
                    }`}
                >
                    <Image
                        src={whichLogo(props.logo)}
                        as="a"
                        size="small"
                        href="https://rightclickrva.com/business"
                        target="_blank"
                        spaced
                    />
                </Segment>
            </div>
        </Grid>
    );
};
export default Home;
