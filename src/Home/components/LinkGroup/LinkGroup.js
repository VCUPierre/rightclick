import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import Links from '../Links/Links';
import './LinkGroup.css';

const LinkGroup = ({ links, deviceSize, customFont }) => (
    <div className="stretched">
        <Header
            as="h2"
            color={
                links.groupColor.startsWith('RL') ? 'black' : links.groupColor
            }
            className={
                links.groupColor.startsWith('RL') ? links.groupColor : ''
            }
        >
            <span>{links.groupName}</span>
        </Header>

        <div>
            {links.group.map((element, i) => {
                return (
                    <Links
                        key={`Social-links-${i + 1}`}
                        link={element}
                        deviceSize={deviceSize}
                        customFont={customFont}
                    />
                );
            })}
        </div>
    </div>
);

LinkGroup.propTypes = {
    links: PropTypes.object,
    deviceSize: PropTypes.string,
    customFont: PropTypes.string,
};

export default LinkGroup;
