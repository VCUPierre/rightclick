import React from 'react';
import PropTypes from 'prop-types';

const MediaMP4 = ({ w, h, poster, video }) => (
    <div
        dangerouslySetInnerHTML={{
            __html: `
            <video
            loop
            muted
            playsinline
            autoplay
            style="width:${w}; height:${h}"
            poster="${poster}"
            >
            <source type="video/mp4" src="${video}" />
            </video>`,
        }}
    />
);

MediaMP4.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
    poster: PropTypes.string,
    video: PropTypes.string,
};

export default MediaMP4;
