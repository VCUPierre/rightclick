import React from 'react';
import PropTypes from 'prop-types';
import LinksModal from '../LinksModal/LinksModal';
import Banner from '../Banner/Banner';
import '../Links/Links.css';

const InternalLinks = ({ link, deviceSize, customFont }) => {
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
                    <LinksModal
                        link={link}
                        customFont={customFont}
                        deviceSize={deviceSize}
                    />
                </div>
            ) : (
                <LinksModal
                    link={link}
                    customFont={customFont}
                    deviceSize={deviceSize}
                />
            )}
        </div>
    );
};

InternalLinks.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
    customFont: PropTypes.string,
};

export default InternalLinks;
