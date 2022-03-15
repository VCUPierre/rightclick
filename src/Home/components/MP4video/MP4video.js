import React from 'react';
import PropTypes from 'prop-types';

const MP4video = ({ w, h, poster, video }) => (
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

MP4video.propTypes = {
    w: PropTypes.string,
    h: PropTypes.string,
    poster: PropTypes.string,
    video: PropTypes.string,
};

export default MP4video;
