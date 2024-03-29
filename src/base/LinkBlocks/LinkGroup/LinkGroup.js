import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import Links from '../Links';
import useCustomFont from '../../../hooks/useCustomFont';
import './LinkGroup.css';

const LinkGroup = ({ links, deviceSize, ...props }) => {
    const classes = useCustomFont(props);
    const coloredHeader = links.groupColor;
    const colorProp = {};

    if (coloredHeader) {
        colorProp.color = coloredHeader.startsWith('RL')
            ? 'black'
            : links.groupColor;
    }

    return (
        <div className="stretched">
            <Header
                as="h2"
                // color={
                //     links.groupColor.startsWith('RL')
                //         ? 'black'
                //         : links.groupColor
                // }
                className={`
                ${classes.customFont} ${
                    // links.groupColor.startsWith('RL') ? links.groupColor : ''
                    coloredHeader ? colorProp.color : ''
                }
                `}
                {...colorProp}
            >
                {links.groupName}
            </Header>
            {links.group.map((element, i) => {
                return (
                    <Links
                        key={`Social-links-${i + 1}`}
                        link={element}
                        deviceSize={deviceSize}
                        customFont={props.customFont}
                    />
                );
            })}
        </div>
    );
};

LinkGroup.propTypes = {
    links: PropTypes.object,
    deviceSize: PropTypes.string,
};

export default LinkGroup;
