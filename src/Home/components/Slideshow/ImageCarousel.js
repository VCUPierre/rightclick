import React, { useState } from 'react';
import {
    CarouselProvider,
    Slide,
    Slider,
    Image,
    ButtonBack,
    ButtonNext,
} from 'pure-react-carousel';
import { Divider, Modal, Grid } from 'semantic-ui-react';
import ModalHeader from '../ModalHeader/ModalHeader';
import ModalLinks from '../ModalLinks/ModalLinks';
import CustomDotGroup from './CustomDotGroup';
import 'pure-react-carousel/dist/react-carousel.es.css';

const ImageCarousel = (props) => {
    const [open, setOpen] = useState(false);
    const dummyHeaderProps = {
        modalAlternativeText: {
            text: '',
        },
        name: props.name,
    };

    return (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={110}
                totalSlides={props.collection.length}
                interval={props.collection.speed}
                isPlaying
            >
                {props.linkType === 'internal' ? (
                    <Slider>
                        {props.collection.map((img, i) => (
                            <Slide
                                key={`Slide-image-${i + 1}`}
                                index={i}
                                onClick={() => setOpen(true)}
                            >
                                <Image src={img} />
                            </Slide>
                        ))}
                    </Slider>
                ) : props.linkType === 'external' ? (
                    <Slider>
                        {props.collection.map((img, i) => (
                            <Slide
                                key={`Slide-image-${i + 1}`}
                                index={i}
                                tag="a"
                                href={props.link}
                            >
                                <Image src={img} />
                            </Slide>
                        ))}
                    </Slider>
                ) : (
                    <Slider>
                        {props.collection.map((img, i) => (
                            <Slide key={`Slide-image-${i + 1}`} index={i}>
                                <Image src={img} />
                            </Slide>
                        ))}
                    </Slider>
                )}

                <Divider />
                {props.collection.length > 7 ? (
                    <>
                        <ButtonBack className={'ui button'}>Back</ButtonBack>
                        <ButtonNext className={'ui button'}>Next</ButtonNext>
                    </>
                ) : (
                    <CustomDotGroup slides={props.collection.length} />
                )}
            </CarouselProvider>
            {props.linkType === 'internal' ? (
                <Modal
                    size="small"
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    closeIcon
                >
                    <Grid centered columns={2}>
                        <Grid.Row className="RCTitleFix">
                            <ModalHeader data={dummyHeaderProps} />
                        </Grid.Row>
                        <Grid.Row>
                            <Modal.Content
                                image
                                className="RCCenter RCPushDown"
                            >
                                {/* <ModalMedia link={props.links} /> */}
                                {props.additionalLinks
                                    ? props.additionalLinks.map(
                                          (element, i) => {
                                              return (
                                                  <ModalLinks
                                                      key={`links-modal-${
                                                          i + 1
                                                      }`}
                                                      link={element}
                                                  />
                                              );
                                          }
                                      )
                                    : ' '}
                            </Modal.Content>
                        </Grid.Row>
                    </Grid>
                </Modal>
            ) : (
                ''
            )}
        </>
    );
};

export default ImageCarousel;
