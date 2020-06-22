import React from 'react'
import { Header } from 'semantic-ui-react'
import Links from '../Links/Links'
import "./LinkGroup.css"

const LinkGroup = (props) => (
    <div className="stretched">
        <Header as='h2'>{props.links.groupName}</Header>
        <div>
            {props.links.group.map(element => {
                return <Links link={element} deviceSize={props.deviceSize}/>
            })}
        </div>
    </div>
)

export default LinkGroup