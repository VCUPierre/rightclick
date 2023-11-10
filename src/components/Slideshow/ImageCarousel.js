import React, { useState } from 'react';
import PropTypes from 'prop-types';
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

const ImageCarousel = ({
    collection,
    linkType,
    link,
    additionalLinks,
    name,
    modalAlternativeText,
}) => {
    const [open, setOpen] = useState(false);
    const modalProps = {
        modalAlternativeText,
        name,
    };

    return (
        <>
            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={110}
                totalSlides={collection.length}
                interval={collection.speed}
                isPlaying
            >
                {linkType === 'internal' ? (
                    <Slider>
                        {collection.map((img, i) => (
                            <Slide
                                key={`Slide-image-${i + 1}`}
                                index={i}
                                onClick={() => setOpen(true)}
                            >
                                <Image src={img} />
                            </Slide>
                        ))}
                    </Slider>
                ) : linkType === 'external' ? (
                    <Slider>
                        {collection.map((img, i) => (
                            <Slide
                                key={`Slide-image-${i + 1}`}
                                index={i}
                                tag="a"
                                href={link}
                            >
                                <Image src={img} />
                            </Slide>
                        ))}
                    </Slider>
                ) : (
                    <Slider>
                        {collection.map((img, i) => (
                            <Slide key={`Slide-image-${i + 1}`} index={i}>
                                <Image src={img} />
                            </Slide>
                        ))}
                    </Slider>
                )}

                <Divider />
                {collection.length > 7 ? (
                    <>
                        <ButtonBack className={'ui button'}>Back</ButtonBack>
                        <ButtonNext className={'ui button'}>Next</ButtonNext>
                    </>
                ) : (
                    <CustomDotGroup slides={collection.length} />
                )}
            </CarouselProvider>
            {linkType === 'internal' ? (
                <Modal
                    size="small"
                    onClose={() => setOpen(false)}
                    onOpen={() => setOpen(true)}
                    open={open}
                    closeIcon
                >
                    <Grid centered columns={2}>
                        <Grid.Row className="RCTitleFix">
                            <ModalHeader link={modalProps} />
                        </Grid.Row>
                        <Grid.Row>
                            <Modal.Content
                                image
                                className="RCCenter RCPushDown"
                            >
                                {additionalLinks
                                    ? additionalLinks.map((element, i) => {
                                          return (
                                              <ModalLinks
                                                  key={`links-modal-${i + 1}`}
                                                  link={element}
                                              />
                                          );
                                      })
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

ImageCarousel.propTypes = {
    collection: PropTypes.array,
    linkType: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    additionalLinks: PropTypes.array,
};

export default ImageCarousel;
