import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import Links from '../Links/Links'
import "./LinkGroup.css"

const LinkGroup = (props) => (
    <div className="stretched">
        <Header>{props.links.groupName}</Header>
        <Segment.Group raised>
            {props.links.group.map(element => {
                return <Links link={element} deviceSize={props.deviceSize}/>
            })}
        </Segment.Group>
    </div>
)

export default LinkGroup