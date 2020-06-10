import React from 'react'
import { Modal, Button, Grid } from 'semantic-ui-react'
import ModalHeader from '../ModalHeader/ModalHeader'
import ModalMedia from '../ModalMedia/ModalMedia'
import ModalLinks from '../ModalLinks/ModalLinks'

const LinksModal = (props) => {
    return <div>
              <Modal trigger={<Button fluid>{props.links.name}</Button>} closeIcon>
                <Grid centered columns={2} >
                    <Grid.Column className="RCTitleFix">
                        <ModalHeader data={props.links} />
                    </Grid.Column>
                    <Grid.Row>
                        <Modal.Content image className='RCCenter'>
                            <ModalMedia link={props.links} />
                            {props.links.additionalLinks ? props.links.additionalLinks.map(element => {
                                return <ModalLinks link={element} />
                            })
                            : 
                            " "
                            }
                        </Modal.Content>
                    </Grid.Row>
                </Grid>
              </Modal>
    </div>
}

export default LinksModal