import React from "react";
import BioModal from "./BioModal";
import Banner from "../Banner/Banner";
import "../Links/Links.css";

const Bio = (props) => {
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
                    <BioModal links={props.link} />
                </div>
            ) : (
                <BioModal links={props.link} />
            )}
        </div>
    );
};

export default Bio;
