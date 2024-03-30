/*
Markdown Gallery
-- v1.0 2016
-- Created by Lee Penney
-- Released under GPLv3
*/

import React, { useState } from 'react';
import styles from './styles.module.css';


const Gallery = ({ images }) => {

    if (!images || images.length == 0) return null;

    const [slideIndex, setSlideIndex] = useState();

    // Next/previous controls
    const plusSlides = (n) => {
        console.log('slideIndex', slideIndex, n);
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

    return (
        <div className={styles.container}>
            {/* Thumbnail images */}
            <div className={styles.row} >
                {
                    images.map((image, index) => (
                        <div key={index} className={styles.column} style={{ width: imageWith }} >
                            <img className={styles.hoverShadow} src={image.src} onClick={() => setSlideIndex(index + 1)} />
                            <div className={styles.caption}>{image.caption}</div>
                        </div>
                    ))
                }
            </div>

            {slideIndex &&
                <div className={styles.modal}>
                    <span className={styles.close} onClick={() => setSlideIndex(undefined)}>&times;</span>
                    <div className={styles.modalContent}>
                        <div className={styles.slide}>
                            <div className={styles.numbertext} >{slideIndex} / {images.length}</div>
                            <img className={styles.modalImage} src={images[slideIndex - 1].src} alt={images[slideIndex - 1].caption} />
                        </div>

                        <a className={styles.prev} onClick={() => plusSlides(-1)}>&#10094;</a>
                        <a className={styles.next} onClick={() => plusSlides(1)}>&#10095;</a>

                        <div className={styles.captionContainer}>
                            <p id="caption">{images[slideIndex - 1].caption}</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Gallery;