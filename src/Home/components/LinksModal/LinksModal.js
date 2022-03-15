import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Modal, Button, Grid } from 'semantic-ui-react';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalMedia from '../ModalMedia/ModalMedia';
import ModalLinks from '../ModalLinks/ModalLinks';
import './LinkModal.css';
import './button.css';

const useStyles = createUseStyles({
    customFont: {
        'font-family': (props) => props.customFont,
    },
});

const LinksModal = ({ link, customFont, deviceSize, ...props }) => {
    const classes = useStyles(props);
    const coloredButton = link.buttonColor;

    return (
        <div>
            <Modal
                size="small"
                trigger={
                    <Button
                        fluid
                        size="big"
                        color={link.buttonColor}
                        {...(coloredButton
                            ? {
                                  className: `RCPadding fontColor ${link.fontColor} ${classes.customFont}`,
                              }
                            : {
                                  className: `RCPadding RCWhiteBG ${classes.customFont}`,
                              })}
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
    customFont: PropTypes.string,
    deviceSize: PropTypes.string,
};

export default LinksModal;
