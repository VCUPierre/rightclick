import React from 'react'
import { Modal, Image } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import './ModalMedia.css'

function whichMedia(type, link, dSize) {
    if (type === "still"){
        return <Image wrapped size='medium' src={link} />
    } else if ( type === "item") {
        return dSize === 'xs' ? <ReactPlayer 
                url={link} 
                playing 
                muted 
                className='RCCenter' 
                width='100%' 
                height='100%'
                />
                :
                <ReactPlayer 
                url={link} 
                playing 
                muted 
                className='RCCenter' 
                width='50%' 
                height='50%'
                />
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