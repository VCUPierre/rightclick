import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';
import BannerTimer from '../BannerTimer/BannerTimer';
import './style.css';

const Banner = ({
    text,
    color,
    bannerSide,
    deviceSize,
    timer,
    completeText,
    altColor,
}) => {
    return (
        <div>
            {timer ? (
                <Label
                    as="a"
                    color={color}
                    ribbon={bannerSide ? true : false}
                    className={`${deviceSize} ${altColor}`}
                >
                    {text}{' '}
                    <BannerTimer dateTime={timer} completeText={completeText} />
                </Label>
            ) : (
                <Label
                    as="a"
                    color={color}
                    ribbon={bannerSide ? true : false}
                    className={`${deviceSize} ${altColor}`}
                >
                    {text}
                </Label>
            )}
        </div>
    );
};

Banner.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    bannerSide: PropTypes.string,
    deviceSize: PropTypes.string,
    timer: PropTypes.string,
    completeText: PropTypes.string,
    altColor: PropTypes.string,
};

export default Banner;
