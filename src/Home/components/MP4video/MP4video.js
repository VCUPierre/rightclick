import React from 'react'

const MP4video = (props) => (
    <div
        dangerouslySetInnerHTML={{
            __html:`
            <video
            loop
            muted
            playsinline
            autoplay
            style="width:${props.w}; height:${props.h}"
            poster="${props.poster}"
            >
            <source type="video/mp4" src="${props.video}" />
            </video>`
        }}
    />
)

export default MP4video