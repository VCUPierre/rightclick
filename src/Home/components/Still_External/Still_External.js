import React from 'react';
import PropTypes from 'prop-types';
import { Image, Header } from 'semantic-ui-react';
import Banner from '../Banner/Banner';
import useCustomFont from '../../hooks/useCustomFont';

const Still_External = ({ link, deviceSize, ...props }) => {
    const classes = useCustomFont(props);

    return (
        <div>
            {link.featured ? (
                <div>
                    <Banner
                        text={link.featuredText}
                        color={link.featuredColor}
                        bannerSide={link.bannerSide}
                        deviceSize={
                            deviceSize === 'xs'
                                ? 'bannerPositionS'
                                : deviceSize === 'md'
                                ? 'bannerPositionM'
                                : deviceSize === 'lg'
                                ? 'bannerPositionL'
                                : 'bannerPositionXL'
                        }
                        timer={link.featuredTimerDate}
                        completeText={link.featuredTimerText}
                        altColor={link.featuredAltStyle}
                    />
                    <a href={link.link}>
                        <Image
                            wrapped
                            size="medium"
                            src={link.mainMedia.link}
                        />
                        <Header
                            as="h3"
                            textAlign="center"
                            className={`RCborderNone RCtopPushoff ${classes.customFont}`}
                        >
                            {link.modalAlternativeText.text
                                ? link.modalAlternativeText.text
                                : link.mainMedia.mediaText}
                        </Header>
                    </a>
                </div>
            ) : (
                <a href={link.link}>
                    <Image wrapped size="medium" src={link.mainMedia.link} />
                    <Header
                        as="h3"
                        textAlign="center"
                        className={`RCborderNone RCtopPushoff TEST ${classes.customFont}`}
                    >
                        {link.modalAlternativeText.text
                            ? link.modalAlternativeText.text
                            : link.mainMedia.mediaText}
                    </Header>
                </a>
            )}
        </div>
    );
};

Still_External.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
};

export default Still_External;
