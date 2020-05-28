import React from 'react';
import {Grid, GridColumn} from 'semantic-ui-react'
import Profile from './Profile/Profile'
import LinkGroup from './LinkGroup/LinkGroup'
import { SOCIAL_LINKS, LINK_GROUP_1, LINK_GROUP_2 } from '../../constants.js'

const Home = (props) => (
    <Grid centered columns={2}>
        <Grid.Row>
            <GridColumn>
                <Profile links={SOCIAL_LINKS}/>
            </GridColumn>
        </Grid.Row>
        <Grid.Row>
            <LinkGroup links={LINK_GROUP_1} deviceSize={props.deviceSize}/>
        </Grid.Row>
        <Grid.Row>
            <LinkGroup links={LINK_GROUP_2} deviceSize={props.deviceSize}/>
        </Grid.Row>
    </Grid>
)
export default Home