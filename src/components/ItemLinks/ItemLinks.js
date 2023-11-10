import React from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import ModalMedia from '../ModalMedia/ModalMedia';
import '../../base/LinkBlocks/Links/Links.css';

const ItemLinks = ({ link, deviceSize, customFont }) => {
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
                    <ModalMedia
                        customFont={customFont}
                        link={link}
                        type={link.type}
                        deviceSize={deviceSize}
                    />
                </div>
            ) : (
                <ModalMedia
                    customFont={customFont}
                    link={link}
                    type={link.type}
                    deviceSize={deviceSize}
                />
            )}
        </div>
    );
};

ItemLinks.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
    customFont: PropTypes.string,
};

export default ItemLinks;
