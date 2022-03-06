import React from 'react';
import { Header } from 'semantic-ui-react';
import Links from '../Links/Links';
import './LinkGroup.css';

const LinkGroup = (props) => (
    <div className="stretched">
        <Header as="h2" color={props.links.groupColor}>
            <span>{props.links.groupName}</span>
        </Header>

        <div>
            {props.links.group.map((element, i) => {
                return (
                    <Links
                        key={`Social-links-${i + 1}`}
                        link={element}
                        deviceSize={props.deviceSize}
                        customFont={props.customFont}
                    />
                );
            })}
        </div>
    </div>
);

export default LinkGroup;
