import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Grid, Header } from 'semantic-ui-react';
import ModalHeader from '../ModalHeader/ModalHeader';
import useCustomFont from '../../hooks/useCustomFont';
import './BioModal.css';

const BioModal = ({ link, ...props }) => {
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
