import React from 'react';
import PropTypes from 'prop-types';
import Countdown, { zeroPad } from 'react-countdown';

const BannerTimer = ({ dateTime, completeText }) => {
    const Completionist = () => <span>{completeText}</span>;

    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            return <Completionist />;
        } else {
            return (
                <span>
                    {days} days {zeroPad(hours)}:{zeroPad(minutes)}:
                    {zeroPad(seconds)}
                </span>
            );
        }
    };

    return <Countdown date={dateTime} renderer={renderer} />;
};

BannerTimer.propTypes = {
    dateTime: PropTypes.string,
    completeText: PropTypes.string,
};

export default BannerTimer;
