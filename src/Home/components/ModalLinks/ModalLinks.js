import React from 'react'
import { Button } from 'semantic-ui-react'
import './ModalLinks.css'

const ModalLinks = (props) => {
    return <Button 
            as='a' 
            href={props.link.link}
            fluid
            className="pushoffButtom"
            >
                {props.link.name}
            </Button>
}

export default ModalLinks