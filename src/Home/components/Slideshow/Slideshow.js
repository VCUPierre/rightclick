import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import Banner from '../Banner/Banner';
import ImageCarousel from './ImageCarousel';

const Slideshow = ({ link, deviceSize, customFont }) => {
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
                    <ImageCarousel
                        collection={link.mainMedia.collection}
                        linkType={link.mainMedia.linkType}
                        link={link.link}
                        name={link.mainMedia.mediaText}
                        additionalLinks={link.additionalLinks}
                    />
                    <Header
                        as="h3"
                        textAlign="center"
                        className="RCborderNone RCtopPushoff"
                    >
                        {link.modalAlternativeText.text
                            ? link.modalAlternativeText.text
                            : link.mainMedia.mediaText}
                    </Header>
                </div>
            ) : (
                <div>
                    <ImageCarousel
                        collection={link.mainMedia.collection}
                        link={link.link}
                        linkType={link.mainMedia.linkType}
                        name={link.mainMedia.mediaText}
                        additionalLinks={link.additionalLinks}
                    />
                    <Header
                        as="h3"
                        textAlign="center"
                        className="RCborderNone RCtopPushoff"
                    >
                        {link.modalAlternativeText.text
                            ? link.modalAlternativeText.text
                            : link.mainMedia.mediaText}
                    </Header>
                </div>
            )}
        </div>
    );
};

Slideshow.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
    customFont: PropTypes.string,
};

export default Slideshow;
