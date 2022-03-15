import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import './ModalLinks.css';

const ModalLinks = ({ link }) => {
    return (
        <Button as="a" href={link.link} fluid className="pushoffButtom">
            {link.name}
        </Button>
    );
};

ModalLinks.propTypes = {
    link: PropTypes.object,
};

export default ModalLinks;
