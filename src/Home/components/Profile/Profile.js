import React from 'react'
import { Header, Grid } from 'semantic-ui-react'
import { TITLE , PROFILE_PIC} from '../../../constants'
import SocialLinks from '../SocialLinks/SocialLinks'
import ProfilePic from '../ProfilePic/ProfilePic'
import './profile.css'

const Profile = (props) => (
    <div>
        <Header as='h1' textAlign='center' className='RCTopPadding customBG'>
            {TITLE}
            <Grid textAlign='center'>
                <Grid.Row>
                    <SocialLinks links={props.links}/>
                </Grid.Row>
                <Grid.Row className='RCNoTopPadding'>
                    <Grid.Column textAlign='center'>
                        <ProfilePic src={PROFILE_PIC}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Header>
    </div>
)

export default Profile
