import React from 'react';
import PropTypes from 'prop-types';
import { Image, Header } from 'semantic-ui-react';
import Banner from '../Banner/Banner';
import StillInternalModal from './StillInternalModal';
import useCustomFont from '../../hooks/useCustomFont';

const StillInternal = ({ link, deviceSize, customFont, ...props }) => {
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
                    <StillInternalModal
                        link={link}
                        customFont={customFont}
                        deviceSize={deviceSize}
                    >
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
                    </StillInternalModal>
                </div>
            ) : (
                <StillInternalModal
                    link={link}
                    customFont={customFont}
                    deviceSize={deviceSize}
                >
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
                </StillInternalModal>
            )}
        </div>
    );
};

StillInternal.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
};

export default StillInternal;
