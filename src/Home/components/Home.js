import React from 'react';
import {Grid, GridColumn, Segment, Image} from 'semantic-ui-react'
import Profile from './Profile/Profile'
import LinkGroup from './LinkGroup/LinkGroup'
import LogoColor from '../../assets/Logo.png'
import LogoWhite from '../../assets/LogoWhite.png'

const whichLogo = (logo) => {
    if (logo === 'white') {
        return LogoWhite
    }
    return LogoColor
}

const Home = (props) => {
    return <Grid centered>
        <Grid.Row>
            <GridColumn>
                <Profile links={props.socialLinks} deviceSize={props.deviceSize} profileImg={props.profileImage} profileTitle={props.profileTitle} />
            </GridColumn>
        </Grid.Row>
        { props.linkGroups.map((linkData, index) => {
            return  <Grid.Row>
                        <LinkGroup key={index} links={linkData} deviceSize={props.deviceSize} customFont={props.customFont}/>
                    </Grid.Row>
        })
        }
        <Segment basic>
            <Image
            src={whichLogo(props.logo)}
            as='a'
            size='small'
            href='https://rightclickrva.com/business'
            target='_blank'
            spaced
            />
        </Segment>
    </Grid>
    
}
export default Home