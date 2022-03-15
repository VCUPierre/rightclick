import React from 'react';
import PropTypes from 'prop-types';
import InternalLinks from '../InternalLinks/InternalLinks';
import ExternalLinks from '../ExternalLinks/ExternalLinks';
import ItemLinks from '../ItemLinks/ItemLinks';
import StillExternal from '../Still_External/Still_External';
import Slideshow from '../Slideshow/Slideshow';
import Bio from '../Bio/Bio';
import { Segment } from 'semantic-ui-react';
import './Links.css';

const Links = ({ link, deviceSize, customFont }) => {
    let spaced = link.linkSpaced;
    let colored = link.colored;

    return (
        <div>
            {link.type === 'internal' ? (
                <Segment
                    color={link.color}
                    {...(colored ? { inverted: true } : {})}
                    {...(spaced
                        ? {
                              raised: true,
                              className: `pushDown ${link.additionalStyle} ${
                                  link.color ? '' : link.colorOveride
                              }`,
                          }
                        : {})}
                >
                    <InternalLinks
                        link={link}
                        deviceSize={deviceSize}
                        customFont={customFont}
                    />
                </Segment>
            ) : link.type === 'item' ? (
                <Segment
                    color={link.color}
                    {...(colored ? { inverted: true } : {})}
                    {...(spaced
                        ? {
                              raised: true,
                              className: `pushDown ${link.additionalStyle} ${
                                  link.color ? '' : link.colorOveride
                              }`,
                          }
                        : {})}
                >
                    <ItemLinks
                        link={link}
                        deviceSize={deviceSize}
                        customFont={customFont}
                    />
                </Segment>
            ) : link.type === 'still/external' ? (
                <Segment
                    color={link.color}
                    {...(colored ? { inverted: true } : {})}
                    {...(spaced
                        ? {
                              raised: true,
                              className: `pushDown ${link.additionalStyle} ${
                                  link.color ? '' : link.colorOveride
                              }`,
                          }
                        : {})}
                >
                    <StillExternal
                        link={link}
                        deviceSize={deviceSize}
                        customFont={customFont}
                    />
                </Segment>
            ) : link.type === 'slideshow' ? (
                <Segment
                    color={link.color}
                    {...(colored ? { inverted: true } : {})}
                    {...(spaced
                        ? {
                              raised: true,
                              className: `pushDown ${link.additionalStyle} ${
                                  link.color ? '' : link.colorOveride
                              }`,
                          }
                        : {})}
                >
                    <Slideshow
                        link={link}
                        deviceSize={deviceSize}
                        customFont={customFont}
                    />
                </Segment>
            ) : link.type === 'bio' ? (
                <Segment
                    color={link.color}
                    {...(colored ? { inverted: true } : {})}
                    {...(spaced
                        ? {
                              raised: true,
                              className: `pushDown ${link.additionalStyle} ${
                                  link.color ? '' : link.colorOveride
                              }`,
                          }
                        : {})}
                >
                    <Bio
                        link={link}
                        deviceSize={deviceSize}
                        customFont={customFont}
                    />
                </Segment>
            ) : (
                <Segment
                    color={link.color}
                    {...(colored ? { inverted: true } : {})}
                    {...(spaced
                        ? {
                              raised: true,
                              className: `pushDown ${link.additionalStyle} ${
                                  link.color ? '' : link.colorOveride
                              }`,
                          }
                        : {})}
                >
                    <ExternalLinks
                        link={link}
                        deviceSize={deviceSize}
                        customFont={customFont}
                    />
                </Segment>
            )}
        </div>
    );
};

Links.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
    customFont: PropTypes.string,
};

export default Links;
