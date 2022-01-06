import React from "react";
import { Header } from "semantic-ui-react";
import Banner from "../Banner/Banner";
import ImageCarousel from "./ImageCarousel";
// import CardCarousel from "./CardCarousel";

const Slideshow = (props) => {
    return (
        <div>
            {props.link.featured ? (
                <div>
                    <Banner
                        text={props.link.featuredText}
                        color={props.link.featuredColor}
                        bannerSide={props.link.bannerSide}
                        deviceSize={
                            props.deviceSize === "xs"
                                ? "bannerPositionS"
                                : props.deviceSize === "md"
                                ? "bannerPositionM"
                                : props.deviceSize === "lg"
                                ? "bannerPositionL"
                                : "bannerPositionXL"
                        }
                        timer={props.link.featuredTimerDate}
                        completeText={props.link.featuredTimerText}
                        altColor={props.link.featuredAltStyle}
                    />
                    <ImageCarousel
                        collection={props.link.mainMedia.collection}
                    />
                    <Header
                        as="h3"
                        textAlign="center"
                        className="RCborderNone RCtopPushoff"
                    >
                        {props.link.modalAlternativeText.text
                            ? props.link.modalAlternativeText.text
                            : props.link.mainMedia.mediaText}
                    </Header>
                </div>
            ) : (
                <div>
                    <ImageCarousel
                        collection={props.link.mainMedia.collection}
                    />
                    <Header
                        as="h3"
                        textAlign="center"
                        className="RCborderNone RCtopPushoff"
                    >
                        {props.link.modalAlternativeText.text
                            ? props.link.modalAlternativeText.text
                            : props.link.mainMedia.mediaText}
                    </Header>
                </div>
            )}
        </div>
    );
};

export default Slideshow;
