import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './style.css';

const ProfilePic = ({ src }) => (
    <div style={{ maxWidth: '250px' }}>
        <Image src={src} className="RLFixCenter RLOneSize" rounded />
    </div>
);

ProfilePic.propTypes = {
    src: PropTypes.string,
};

export default ProfilePic;
