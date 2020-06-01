import React from 'react'
import { Modal, Button, ModalContent } from 'semantic-ui-react'
import ModalHeader from '../ModalHeader/ModalHeader'
import ModalMedia from '../ModalMedia/ModalMedia'
import ExternalLinks from '../ExternalLinks/ExternalLinks'

const LinksModal = (props) => {
    return <div>
              <Modal trigger={<Button fluid>{props.links.name}</Button>} closeIcon>
                <ModalHeader data={props.links}/>
                <ModalContent image className='RCCenter'>
                    <ModalMedia />
                    <ExternalLinks />
                </ModalContent>
              </Modal>
    </div>
}

export default LinksModal