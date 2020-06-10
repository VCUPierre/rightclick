import React from 'react'
import { Modal, Image } from 'semantic-ui-react'
import ReactPlayer from 'react-player'
import './ModalMedia.css'

function whichMedia(type, link) {
    if (type === "still"){
        return <Image wrapped size='medium' src={link} />
    }
    return <ReactPlayer url={link} />
} 

const ModalMedia = (props) => {
    console.log("modalMedia-", props.link)
    return <div>
        {whichMedia(props.link.mainMedia.type, props.link.mainMedia.link)}
        <Modal.Description className="pushOff-y">
            <h3>{props.link.mainMedia.mediaText}</h3>
        </Modal.Description>
    </div>
}

export default ModalMedia