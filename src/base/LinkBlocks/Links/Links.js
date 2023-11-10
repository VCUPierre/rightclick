import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import InternalLink from '../../../components/InternalLinks';
import ExternalLink from '../../../components/ExternalLinks';
import ItemLink from '../../../components/ItemLinks';
import ExternalImageLink from '../../../components/Still_External';
import InternalImageLink from '../../../components/Still_Internal';
import SlideshowLink from '../../../components/Slideshow';
import BioLink from '../../../components/Bio';
import '../Links/Links.css';

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
                    <InternalLink
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
                    <ItemLink
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
                    <ExternalImageLink
                        link={link}
                        deviceSize={deviceSize}
                        customFont={customFont}
                    />
                </Segment>
            ) : link.type === 'still/internal' ? (
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
                    <InternalImageLink
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
                    <SlideshowLink
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
                    <BioLink
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
                    <ExternalLink
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
