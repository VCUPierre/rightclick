import React from 'react';
import {createUseStyles} from 'react-jss';
import { Modal, Image } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import MP4video from '../MP4video/MP4video'
import './ModalMedia.css'

// use react-player for video that doesn't need to auto play

const useStyles = createUseStyles({
    customFont: {
        'font-family': props => props.customFont ? [props.customFont, '!important'] : ['Lato', '!important']
    },
})

function whichMedia(type, link, dSize, vidPoster) {
    if (type === "still"){
        return <Image wrapped size='medium' src={link} />
    } else if ( type === "mp4") {
        return dSize === 'xs' || 'md' ? 
                <MP4video video={link} w="100%" h="100%" poster={vidPoster}/>
                :
                <MP4video video={link} w="50%" h="50%"/>
    }
    return <ReactPlayer url={link} width='100%' height='100%' />
} 

const ModalMedia = (props) => {
    const classes = useStyles(props)

    return <div className='center'>
        {whichMedia(props.link.mainMedia.type, props.link.mainMedia.link, props.deviceSize, props.link.mainMedia.videoPoster)}
        <Modal.Description className="pushOff-y">
            <h3 className={classes.customFont}>{props.link.mainMedia.mediaText}</h3>
        </Modal.Description>
    </div>
}

export default ModalMedia