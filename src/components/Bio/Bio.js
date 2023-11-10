import React from 'react';
import PropTypes from 'prop-types';
import BioModal from './BioModal';
import Banner from '../Banner/Banner';
import '../../base/LinkBlocks/Links/Links.css';

const Bio = ({ link, deviceSize, customFont }) => {
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
                    <BioModal link={link} customFont={customFont} />
                </div>
            ) : (
                <BioModal link={link} customFont={customFont} />
            )}
        </div>
    );
};

Bio.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
    customFont: PropTypes.string,
};

export default Bio;
