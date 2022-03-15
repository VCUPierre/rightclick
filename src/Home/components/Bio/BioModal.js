import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Grid, Header } from 'semantic-ui-react';
import ModalHeader from '../ModalHeader/ModalHeader';
import './BioModal.css';

const BioModal = ({ link }) => {
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
                                  className: `RCPadding fontColor ${link.fontColor}`,
                              }
                            : { className: 'RCPadding RCWhiteBG' })}
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
                    <Grid.Row className="RLBio">
                        <Modal.Content image className="RCCenter RCPushDown">
                            {link.bioContent.map((x, i) => (
                                <Header as="h2" key={`Bio-header-${i + 1}`}>
                                    {x.header}
                                    <Header.Subheader content={x.subHeader} />
                                </Header>
                            ))}
                        </Modal.Content>
                    </Grid.Row>
                </Grid>
            </Modal>
        </div>
    );
};

BioModal.propTypes = {
    link: PropTypes.object,
};

export default BioModal;
