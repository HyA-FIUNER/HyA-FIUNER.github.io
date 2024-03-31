import React, { useState } from 'react';
import styles from './styles.module.css';
import ModalGallery from '../ModalGallery';

const Gallery = ({ images }) => {

    if (!images || images.length == 0) return null;

    const [slideIndex, setSlideIndex] = useState();

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

            {slideIndex && <ModalGallery images={images} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />}
        </div>
    );
};

export default Gallery;