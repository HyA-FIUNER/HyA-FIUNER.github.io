import React, { useEffect } from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import styles from './styles.module.css';


const ModalGallery = ({ images, slideIndex, setSlideIndex }) => {

    if (!images || images.length == 0) return null;

    // Next/previous controls
    const plusSlides = (n) => {
        if (slideIndex + n > images.length) {
            setSlideIndex(1);
        } else if (slideIndex + n < 1) {
            setSlideIndex(images.length);
        } else {
            setSlideIndex(slideIndex + n);
        }
    };

    // set image with based on number of images
    const imageWith = 100 / images.length + '%';

    const Controls = (slideIndex) => {
        const { resetTransform } = useControls();
        useEffect(() => resetTransform(), [slideIndex]);
    };

    return (
        <div className={styles.modal}>
            <span className={styles.close} onClick={() => setSlideIndex(undefined)}>&times;</span>
            <div className={styles.modalContent}>
                <div className={styles.slide}>
                    <div className={styles.numbertext}>{images[slideIndex - 1].caption}</div>
                    <TransformWrapper>
                        {({ resetTransform, ...rest }) => (
                            <>
                                <Controls slideIndex={slideIndex} />
                                <TransformComponent >
                                    <img className={styles.modalImage} src={images[slideIndex - 1].src} alt={images[slideIndex - 1].caption} />
                                </TransformComponent>
                            </>
                        )}
                    </TransformWrapper>
                </div>


                <a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
                <a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>

                {
                    images.map((image, index) => (
                        <div key={index} className={styles.column} style={{ width: imageWith }}>
                            <div className={styles.captionContainer} onClick={() => setSlideIndex(index + 1)}>
                                <p id="caption">{image.caption}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ModalGallery;