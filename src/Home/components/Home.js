import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react'
import Profile from './Profile/Profile'
import ProfilePic from './ProfilePic/ProfilePic'

const Home = () => (
    <Grid centered columns={3}>
        <Grid.Row>
            <GridColumn>
                <Profile />
            </GridColumn>
        </Grid.Row>
        <Grid.Row>
            <Grid.Column>
                <ProfilePic />
            </Grid.Column>
        </Grid.Row>
    </Grid>
)
export default Home