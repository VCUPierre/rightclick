import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Grid } from 'semantic-ui-react';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalMedia from '../ModalMedia/ModalMedia';
import ModalLinks from '../ModalLinks/ModalLinks';
import useCustomFont from '../../hooks/useCustomFont';
import './LinkModal.css';
import './button.css';

const LinksModal = ({ link, deviceSize, ...props }) => {
    const classes = useCustomFont(props);
    const coloredButton = link.buttonColor;
    const colorProp = {};

    if (coloredButton) {
        colorProp.color = coloredButton;
    }

    return (
        <div>
            <Modal
                size="small"
                trigger={
                    <Button
                        fluid
                        size="big"
                        className={`RCPadding ${
                            coloredButton
                                ? `fontColor ${link.fontColor}`
                                : 'RCWhiteBG'
                        } ${classes.customFont}`}
                        {...colorProp}
                    >
                        {link.name}
                    </Button>
                }
                closeIcon
            >
                <Grid centered columns={2}>
                    {link.modalAlternativeText.removed ? (
                        ''
                    ) : (
                        <Grid.Row className="RCTitleFix">
                            <ModalHeader link={link} />
                        </Grid.Row>
                    )}
                    <Grid.Row>
                        <Modal.Content image className="RCCenter RCPushDown">
                            <ModalMedia link={link} deviceSize={deviceSize} />
                            {link.additionalLinks
                                ? link.additionalLinks.map((element, i) => {
                                      return (
                                          <ModalLinks
                                              key={`links-modal-${i + 1}`}
                                              link={element}
                                          />
                                      );
                                  })
                                : ' '}
                        </Modal.Content>
                    </Grid.Row>
                </Grid>
            </Modal>
        </div>
    );
};

LinksModal.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
};

export default LinksModal;
