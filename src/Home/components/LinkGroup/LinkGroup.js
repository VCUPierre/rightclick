import React from 'react'
import { Segment, Header } from 'semantic-ui-react'
import "./LinkGroup.css"

const LinkGroup = (props) => (
    <div className="stretched">
        <Header>{props.links.groupName}</Header>
        <Segment.Group raised>
            {props.links.group.map(element => {
                return <Segment color='green' className="pushDown" >{element.name}</Segment>   
            })}
        </Segment.Group>
    </div>
)

export default LinkGroup