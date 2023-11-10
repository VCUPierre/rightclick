import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Modal, Image } from 'semantic-ui-react';
import ReactPlayer from 'react-player';
import MediaMP4 from './MediaMP4';
import './ModalMedia.css';

// use react-player for video that doesn't need to auto play

const useStyles = createUseStyles({
    customFont: {
        'font-family': (props) =>
            props.customFont
                ? [props.customFont, '!important']
                : ['Lato', '!important'],
    },
});

function whichMedia(type, link, dSize, vidPoster) {
    if (type === 'still') {
        return <Image wrapped size="medium" src={link} />;
    } else if (type === 'mp4') {
        return dSize === 'xs' || 'md' ? (
            <MediaMP4 video={link} w="100%" h="100%" poster={vidPoster} />
        ) : (
            <MediaMP4 video={link} w="50%" h="50%" />
        );
    }
    return <ReactPlayer url={link} width="100%" height="100%" />;
}

const ModalMedia = ({ link, deviceSize, ...props }) => {
    const classes = useStyles(props);

    return (
        <div className="center">
            {whichMedia(
                link.mainMedia.type,
                link.mainMedia.link,
                deviceSize,
                link.mainMedia.videoPoster
            )}
            <Modal.Description className="pushOff-y">
                <h3 className={classes.customFont}>
                    {link.mainMedia.mediaText}
                </h3>
            </Modal.Description>
        </div>
    );
};

ModalMedia.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
};

export default ModalMedia;
