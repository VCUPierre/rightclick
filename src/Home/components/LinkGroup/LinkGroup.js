import React from 'react'
import { Segment, Header, Button } from 'semantic-ui-react'
import InternalLinks from '../InternalLinks/InternalLinks'
import "./LinkGroup.css"

const LinkGroup = (props) => (
    <div className="stretched">
        <Header>{props.links.groupName}</Header>
        <Segment.Group raised>
            {props.links.group.map(element => {
                return  <Segment color='green' className="pushDown" >
                            {element.internal 
                            ?
                            <InternalLinks link={element}/> 
                            :
                            <Button as='a' href={element.link} fluid>
                                {element.name}
                            </Button>
                            }
                        </Segment>       
            })}
        </Segment.Group>
    </div>
)

export default LinkGroup