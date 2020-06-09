import React from 'react'
import { Modal, Image } from 'semantic-ui-react'
import './ModalMedia.css'

const mediaText = "Stream Now"

const ModalMedia = (props) => {
    return <div>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description className="pushOff-y">
            <h3>{mediaText}</h3>
        </Modal.Description>
    </div>
}

export default ModalMedia