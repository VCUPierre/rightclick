import React from 'react';
import {Grid, GridColumn, Segment, Image} from 'semantic-ui-react'
import Profile from './Profile/Profile'
import LinkGroup from './LinkGroup/LinkGroup'
import { SOCIAL_LINKS, LINK_GROUP_1} from '../../assets/constants.js'
// import { SOCIAL_LINKS, LINK_GROUP_1, LINK_GROUP_2 } from '../../assets/data'
import Logo from '../../assets/Logo.png'

const Home = (props) => (
    <Grid centered>
        <Grid.Row>
            <GridColumn>
                <Profile links={SOCIAL_LINKS} deviceSize={props.deviceSize}/>
            </GridColumn>
        </Grid.Row>
        <Grid.Row>
            <LinkGroup links={LINK_GROUP_1} deviceSize={props.deviceSize}/>
        </Grid.Row>
        {/* <Grid.Row>
            <LinkGroup links={LINK_GROUP_2} deviceSize={props.deviceSize}/>
        </Grid.Row> */}
        <Segment basic>
            <Image
            src={Logo}
            as='a'
            size='small'
            href='https://rightclickrva.com/business'
            target='_blank'
            spaced
            />
        </Segment>
    </Grid>
    
)
export default Home