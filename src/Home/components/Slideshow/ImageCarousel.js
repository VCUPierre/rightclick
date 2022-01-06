import React from "react";
import {
    CarouselProvider,
    Slide,
    Slider,
    Image,
    ButtonBack,
    ButtonNext,
} from "pure-react-carousel";
import { Divider } from "semantic-ui-react";
import CustomDotGroup from "./CustomDotGroup";
import "pure-react-carousel/dist/react-carousel.es.css";

const ImageCarousel = (props) => (
    <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={110}
        totalSlides={props.collection.length}
        interval={props.collection.speed}
        isPlaying
    >
        <Slider>
            {props.collection.map((img, i) => (
                <Slide index={i}>
                    <Image src={img} />
                </Slide>
            ))}
        </Slider>

        <Divider />
        {props.collection.length > 7 ? (
            <>
                <ButtonBack className={"ui button"}>Back</ButtonBack>
                <ButtonNext className={"ui button"}>Next</ButtonNext>
            </>
        ) : (
            <CustomDotGroup slides={props.collection.length} />
        )}
    </CarouselProvider>
);

export default ImageCarousel;
