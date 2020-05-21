import React from 'react'
import { Header, Grid } from 'semantic-ui-react'
import { TITLE } from '../../../constants'
import SocialLinks from '../SocialLinks/SocialLinks'

const Profile = () => (
    <div>
        <Header as='h1' textAlign='center'>
            {TITLE}
            <Grid textAlign='center'>
                <Grid.Row>
                    <SocialLinks />
                </Grid.Row>
            </Grid>
        </Header>
    </div>
)

export default Profile
