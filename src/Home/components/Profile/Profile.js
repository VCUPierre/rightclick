import React from 'react'
import { Header, Grid } from 'semantic-ui-react'
import { TITLE , PROFILE_PIC} from '../../../assets/constants'
// import { TITLE , PROFILE_PIC} from '../../../assets/data'
import SocialLinks from '../SocialLinks/SocialLinks'
import ProfilePic from '../ProfilePic/ProfilePic'
import './profile.css'

const Profile = (props) => (
    <div>
        <Header 
        as='h1' 
        textAlign='center' 
        className={`RCTopPadding RCMarginBottom ${TITLE.color}`}
        style={{
            fontSize: '2.5em' 
          }}
        >
            {TITLE.Title}
        </Header>
        <Header
        as='h2' 
        textAlign='center' 
        className='RCMarginTop'
        >
            <Grid textAlign='center' className='RCSpace-5'>
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
