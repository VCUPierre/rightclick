import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react'
import Profile from './Profile/Profile'
import ProfilePic from './ProfilePic/ProfilePic'
import LinkGroup1 from './LinkGroup/LinkGroup'

const Home = () => (
    <Grid centered columns={2}>
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
        <LinkGroup1 />
    </Grid>
)
export default Home