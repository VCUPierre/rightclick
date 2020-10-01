import React from 'react'
import { Modal, Button, Grid } from 'semantic-ui-react'
import ModalHeader from '../ModalHeader/ModalHeader'
import ModalMedia from '../ModalMedia/ModalMedia'
import ModalLinks from '../ModalLinks/ModalLinks'
import './LinkModal.css'
import './button.css'

const LinksModal = (props) => {
    const coloredButton = props.links.buttonColor;

    return <div>
              <Modal size='small' trigger={<Button fluid size='big' color={props.links.buttonColor} {...coloredButton ? {className: `RCPadding fontColor ${props.link.fontColor}`}: {className: 'RCPadding RCWhiteBG'}}>{props.links.name}</Button>} closeIcon>
                <Grid centered columns={2} >
                    {props.links.modalAlternativeText.removed ? "" :
                        <Grid.Row className="RCTitleFix">
                            <ModalHeader data={props.links} />
                        </Grid.Row>
                    }
                    <Grid.Row>
                        <Modal.Content image className='RCCenter RCPushDown'>
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