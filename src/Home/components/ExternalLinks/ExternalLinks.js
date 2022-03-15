import React from 'react';
import PropTypes from 'prop-types';
import { createUseStyles } from 'react-jss';
import { Button } from 'semantic-ui-react';
import Banner from '../Banner/Banner';
import '../Links/Links.css';
import './button.css';

const useStyles = createUseStyles({
    customFont: {
        'font-family': (props) => [props.customFont, '!important'],
    },
});

const ExternalLinks = ({ link, deviceSize, customFont, ...props }) => {
    const classes = useStyles(props);
    const coloredButton = link.buttonColor;

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
                        {...(coloredButton
                            ? {
                                  className: `RCPadding ${classes.customFont} ${
                                      link.fontColor
                                          ? `fontColor ${link.fontColor}`
                                          : ''
                                  }`,
                              }
                            : {
                                  className: `RCPadding RCWhiteBG ${
                                      classes.customFont
                                  } ${
                                      link.fontColor
                                          ? `fontColor ${link.fontColor}`
                                          : ''
                                  }`,
                              })}
                        color={link.buttonColor}
                        size="big"
                        fluid
                    >
                        {link.name}
                    </Button>
                </div>
            ) : (
                <Button
                    as="a"
                    href={link.link}
                    {...(coloredButton
                        ? {
                              className: `RCPadding ${classes.customFont} ${
                                  link.fontColor
                                      ? `fontColor ${link.fontColor}`
                                      : ''
                              }`,
                          }
                        : {
                              className: `RCPadding RCWhiteBG ${
                                  classes.customFont
                              } ${
                                  link.fontColor
                                      ? `fontColor ${link.fontColor}`
                                      : ''
                              }`,
                          })}
                    color={link.buttonColor}
                    size="big"
                    fluid
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
    customFont: PropTypes.string,
};

export default ExternalLinks;
