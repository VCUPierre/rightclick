import React from 'react'
import { Button, Label } from 'semantic-ui-react'

const ExternalLinks = (props) => {
    return <div>
        {props.link.featured 
        ?
        <div>
            <Label as='a' color='green' ribbon className="bannerPosition">
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