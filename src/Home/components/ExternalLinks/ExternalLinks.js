import React from 'react'
import { Button } from 'semantic-ui-react'

const ExternalLinks = (props) => (
    <Button as='a' href={props.link.link} fluid>
        {props.link.name}
    </Button>
)

export default ExternalLinks