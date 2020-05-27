import React from 'react'
import { Button, Label } from 'semantic-ui-react'
import { useMediaPredicate } from "react-media-hook";
import '../Links/Links.css'

const ExternalLinks = (props) => {
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
            <Button 
            as='a' 
            href={props.link.link} 
            fluid>
                {props.link.name}
            </Button>
        </div>
        :     
        <Button 
        as='a' 
        href={props.link.link} 
        fluid>
            {props.link.name}
        </Button>
    }
    </div>
}

export default ExternalLinks