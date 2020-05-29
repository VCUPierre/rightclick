import React from 'react'
import { Header } from 'semantic-ui-react'
import './ModalHeader.css'

const ModalHeader = (props) => {
    return <Header as='h2' textAlign='center' className='RCborderNone'>{props.data.name}</Header>
}

export default ModalHeader