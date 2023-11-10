import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'semantic-ui-react';
import Banner from '../Banner/Banner';
import useCustomFont from '../../hooks/useCustomFont';
import '../../base/LinkBlocks/Links/Links.css';
import './button.css';

const ExternalLinks = ({ link, deviceSize, ...props }) => {
    const classes = useCustomFont(props);
    const coloredButton = link.buttonColor;
    const colorProp = {};

    if (coloredButton) {
        colorProp.color = coloredButton;
    }

    return (
        <div>
            {link.featured ? (
                <div>
                    <Banner
                        text={link.featuredText}
                        color={link.featuredColor}
                        bannerSide={link.bannerSide}
                        deviceSize={
                            deviceSize === 'xs'
                                ? 'bannerPositionS'
                                : deviceSize === 'md'
                                ? 'bannerPositionM'
                                : deviceSize === 'lg'
                                ? 'bannerPositionL'
                                : 'bannerPositionXL'
                        }
                        timer={link.featuredTimerDate}
                        completeText={link.featuredTimerText}
                        altColor={link.featuredAltStyle}
                    />
                    <Button
                        as="a"
                        href={link.link}
                        className={`RCPadding ${classes.customFont} ${
                            !coloredButton ? 'RCWhiteBG' : ''
                        } ${
                            link.fontColor ? `fontColor ${link.fontColor}` : ''
                        }`}
                        // {...(coloredButton
                        //     ? {
                        //           className: `RCPadding ${classes.customFont} ${
                        //               link.fontColor
                        //                   ? `fontColor ${link.fontColor}`
                        //                   : ''
                        //           }`,
                        //       }
                        //     : {
                        //           className: `RCPadding RCWhiteBG ${
                        //               classes.customFont
                        //           } ${
                        //               link.fontColor
                        //                   ? `fontColor ${link.fontColor}`
                        //                   : ''
                        //           }`,
                        //       })}
                        // color={link.buttonColor}
                        size="big"
                        fluid
                        {...colorProp}
                    >
                        {link.name}
                    </Button>
                </div>
            ) : (
                <Button
                    as="a"
                    href={link.link}
                    className={`RCPadding ${classes.customFont} ${
                        !coloredButton ? 'RCWhiteBG' : ''
                    } ${link.fontColor ? `fontColor ${link.fontColor}` : ''}`}
                    // {...(coloredButton
                    //     ? {
                    //           className: `RCPadding ${classes.customFont} ${
                    //               link.fontColor
                    //                   ? `fontColor ${link.fontColor}`
                    //                   : ''
                    //           }`,
                    //       }
                    //     : {
                    //           className: `RCPadding RCWhiteBG ${
                    //               classes.customFont
                    //           } ${
                    //               link.fontColor
                    //                   ? `fontColor ${link.fontColor}`
                    //                   : ''
                    //           }`,
                    //       })}
                    // color={link.buttonColor}
                    size="big"
                    fluid
                    {...colorProp}
                >
                    {link.name}
                </Button>
            )}
        </div>
    );
};

ExternalLinks.propTypes = {
    link: PropTypes.object,
    deviceSize: PropTypes.string,
};

export default ExternalLinks;
