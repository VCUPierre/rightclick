import React from 'react';
import {createUseStyles} from 'react-jss';
import { Image, Header } from 'semantic-ui-react';
import Banner from '../Banner/Banner';

const useStyles = createUseStyles({
    customFont: {
        'font-family': props => props.customFont ? [props.customFont, '!important'] : ''
    },
});

const Still_External = (props) => {
    const classes = useStyles(props)

    return <div>
        {props.link.featured 
        ?
        <div>
            <Banner 
                text={props.link.featuredText} 
                color={props.link.featuredColor} 
                bannerSide={props.link.bannerSide} 
                deviceSize={props.deviceSize === 'xs' ? "bannerPositionS" : props.deviceSize === "md" ? "bannerPositionM" : props.deviceSize === "lg" ? "bannerPositionL" : "bannerPositionXL"} 
                timer={props.link.featuredTimerDate}
                completeText={props.link.featuredTimerText}
                altColor={props.link.featuredAltStyle}
            />
            <a href={props.link.link}>
            <Image wrapped size='medium' src={props.link.mainMedia.link} />
            <Header as='h3' textAlign='center' className={`RCborderNone RCtopPushoff ${classes.customFont}`}>{props.link.modalAlternativeText.text ? props.link.modalAlternativeText.text : props.link.mainMedia.mediaText}</Header>
            </a>
        </div>
        :
        <a href={props.link.link}>
        <Image wrapped size='medium' src={props.link.mainMedia.link} />
        <Header as='h3' textAlign='center' className={`RCborderNone RCtopPushoff TEST ${classes.customFont}`}>{props.link.modalAlternativeText.text ? props.link.modalAlternativeText.text : props.link.mainMedia.mediaText}</Header>
        </a>
    }
    </div>
}

export default Still_External