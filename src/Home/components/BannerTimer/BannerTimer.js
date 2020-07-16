import React from 'react'
import Countdown, { zeroPad } from 'react-countdown';
                                                                                                                       

const BannerTimer = (props) => {
    // Random component
    const Completionist = () => <span>{props.completeText}</span>;

    // Renderer callback with condition
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a completed state
        return <Completionist />;
    } else {
        // Render a countdown
        return <span>{days} days {zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</span>;
  }
};

    return <Countdown date={props.dateTime} renderer={renderer} />
}

export default BannerTimer