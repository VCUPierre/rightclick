import React from 'react'
import { Modal, Image } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import MP4video from '../MP4video/MP4video'
import './ModalMedia.css'

// use react-player for video that doesn't need to auto play

function whichMedia(type, link, dSize) {
    if (type === "still"){
        return <Image wrapped size='medium' src={link} />
    } else if ( type === "mp4") {
        return dSize === 'xs' ? 
                <MP4video video={link} w="100%" h="100%"/>
                :
                <MP4video video={link} w="50%" h="50%"/>
    }
    return <ReactPlayer url={link} width='100%' height='100%' />
} 

const ModalMedia = (props) => {
    return <div className='center'>
        {whichMedia(props.link.mainMedia.type, props.link.mainMedia.link, props.deviceSize)}
        <Modal.Description className="pushOff-y">
            <h3>{props.link.mainMedia.mediaText}</h3>
        </Modal.Description>
    </div>
}

export default ModalMedia