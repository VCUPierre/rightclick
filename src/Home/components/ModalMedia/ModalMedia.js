import React from 'react'
import { Modal, Image } from 'semantic-ui-react'
import './ModalMedia.css'

const ModalMedia = () => {
    return <div>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
            <h3>Hello World</h3>
        </Modal.Description>
    </div>
}

export default ModalMedia