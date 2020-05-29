import React from 'react'
import { Header } from 'semantic-ui-react'

const ModalHeader = (props) => {
    return <Header as='h2' textAlign='center'>{props.data.name}</Header>
}

export default ModalHeader