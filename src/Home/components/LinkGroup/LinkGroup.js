import React from 'react'
import { Segment, Header } from 'semantic-ui-react'

const numberOfLinks = 4;
const groupName = "Music Links";
const isNamed = true;
const LinkGroupTitle = <Header as='h3'>{groupName}</Header>
const calculateSegments = () => {
    for (let i = 0; i < numberOfLinks; i++){
     return <Segment>Link-{i}</Segment>
    }
}

const LinkGroup = () => (
    <div>
        {isNamed ? LinkGroupTitle : ""}
        <Segment.Group raised>
           {calculateSegments()}
        </Segment.Group>
    </div>
)

export default LinkGroup

// const LinkGroup = ({numberOfLinks, groupName, isNamed}) = {
// }