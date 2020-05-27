import React from 'react'
import { Button, Header, Image, Modal, Label } from 'semantic-ui-react'
import { useMediaPredicate } from "react-media-hook";
import '../Links/Links.css'

const ModalModalExample = (props) => {
  const xsScreen = useMediaPredicate("(max-width: 375px)");
  const mdScreen = useMediaPredicate("(max-width: 768px)");
  const lgScreen = useMediaPredicate("(max-width: 1024px)");

  return <div>
    {props.link.featured 
    ?
    <div>
      <Label as='a' color='green' ribbon className={xsScreen ? "bannerPositionS" : mdScreen ? "bannerPositionM" : lgScreen ? "bannerPositionL" : "bannerPositionXL"}>
              {props.link.featuredText}
      </Label>
      
      <Modal trigger={<Button fluid>{props.link.name}</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  </div>
  :
    <Modal trigger={<Button fluid>{props.link.name}</Button>}>
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        <Image wrapped size='medium' src='https://react.semantic-ui.com/images/avatar/large/rachel.png' />
        <Modal.Description>
          <Header>Default Profile Image</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  }
</div>
}

export default ModalModalExample