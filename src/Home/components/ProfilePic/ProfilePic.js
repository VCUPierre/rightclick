import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'semantic-ui-react';
import './style.css';
// import StockImg from './image.png'

const ProfilePic = ({ src }) => (
    <Image src={src} className="RLFixCenter RLOneSize" rounded />
);

ProfilePic.propTypes = {
    src: PropTypes.string,
};

export default ProfilePic;
