import React, { useEffect } from 'react';
import { TransformWrapper, TransformComponent, useControls } from "react-zoom-pan-pinch";
import styles from './styles.module.css';

const ModalGallery = ({ images, slideIndex, setSlideIndex, closeModal }) => {
    if (!images || images.length === 0) return null;

    // Ensure slideIndex is within valid range
    const validIndex = Math.max(0, Math.min(slideIndex, images.length - 1));

    // Next/previous controls
    const plusSlides = (n) => {
        let newIndex = validIndex + n;
        if (newIndex >= images.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = images.length - 1;
        }
        setSlideIndex(newIndex);
    };

    // Reset image with based on number of images
    const imageWith = 100 / images.length + '%';

    const Controls = (validIndex) => {
        const { resetTransform } = useControls();
        useEffect(() => resetTransform(), [validIndex]);
    };

    return (
        <div className={styles.modal}>
            <span className={styles.close} onClick={closeModal}>×</span>
            <div className={styles.modalContent}>
                <div className={styles.slide}>
                    <div className={styles.numbertext}>{images[validIndex]?.caption || ''}</div>
                    <TransformWrapper>
                        {({ resetTransform, ...rest }) => (
                            <>
                                <Controls validIndex={validIndex} />
                                <TransformComponent>
                                    <img
                                        className={styles.modalImage}
                                        src={images[validIndex]?.src || ''}
                                        alt={images[validIndex]?.caption || 'Image'}
                                    />
                                </TransformComponent>
                            </>
                        )}
                    </TransformWrapper>
                </div>

                <a className={styles.prev} onClick={() => plusSlides(-1)}>❮</a>
                <a className={styles.next} onClick={() => plusSlides(1)}>❯</a>

                {
    images.map((image, index) => (
        <div key={index} className={styles.column} style={{ width: imageWith }}>
            <div
                className={`${styles.captionContainer} ${slideIndex === index ? styles.active : ''}`}
                onClick={() => setSlideIndex(index)}
            >
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
