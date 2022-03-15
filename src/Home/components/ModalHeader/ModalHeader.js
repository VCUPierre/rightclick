import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import './ModalHeader.css';

const ModalHeader = ({ link }) => {
    return (
        <Header
            as="h1"
            textAlign="center"
            className="RCborderNone RCtopPushoff"
        >
            {link.modalAlternativeText.text
                ? link.modalAlternativeText.text
                : link.name}
        </Header>
    );
};

ModalHeader.propTypes = {
    link: PropTypes.object,
};

export default ModalHeader;
