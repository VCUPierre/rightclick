import React from 'react';
import PropTypes from 'prop-types';
import Countdown, { zeroPad } from 'react-countdown';

const BannerTimer = ({ dateTime, completeText }) => {
    // Random component
    const Completionist = () => <span>{completeText}</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
        if (completed) {
            // Render a completed state
            return <Completionist />;
        } else {
            // Render a countdown
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
