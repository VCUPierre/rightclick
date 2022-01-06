import React from "react";
import { Modal, Button, Grid, Header } from "semantic-ui-react";
import ModalHeader from "../ModalHeader/ModalHeader";
import "./BioModal.css";

const LinksModal = (props) => {
    const coloredButton = props.links.buttonColor;

    return (
        <div>
            <Modal
                size="small"
                trigger={
                    <Button
                        fluid
                        size="big"
                        color={props.links.buttonColor}
                        {...(coloredButton
                            ? {
                                  className: `RCPadding fontColor ${props.link.fontColor}`,
                              }
                            : { className: "RCPadding RCWhiteBG" })}
                    >
                        {props.links.name}
                    </Button>
                }
                closeIcon
            >
                <Grid centered columns={2}>
                    {props.links.modalAlternativeText.removed ? (
                        ""
                    ) : (
                        <Grid.Row className="RCTitleFix">
                            <ModalHeader data={props.links} />
                        </Grid.Row>
                    )}
                    <Grid.Row className="RLBio">
                        <Modal.Content image className="RCCenter RCPushDown">
                            {props.links.bioContent.map((x) => (
                                <Header as="h2">
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

export default LinksModal;
