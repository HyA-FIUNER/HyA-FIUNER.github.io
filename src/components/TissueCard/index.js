import React, { useState } from 'react';
import styles from './styles.module.css';
import ModalGallery from '../ModalGallery';

const TissueCard = ({ title, description, images }) => {

    if (!images || images.length == 0) return null;

    const url = document.location.href;
    const imagePorta = images[0];

    const [slideIndex, setSlideIndex] = useState();

    return (
        <div className={styles.container}>
            <div className={styles.card} onClick={() => setSlideIndex(1)}>
                <div className={styles.cardText}>
                    <div className={styles.titleTotal} >
                        {/* <div className={styles.title}>{category}</div> */}
                        <h2>{title}</h2>
                        <div className={styles.description}>{description}</div>
                    </div>
                </div>
                <div className={styles.cardImage}>
                    <div className={styles.imagen} style={{ backgroundImage: 'url( ' + imagePorta.src + ')' }}>
                    </div>
                </div>
            </div>

            {slideIndex && <ModalGallery images={images} slideIndex={slideIndex} setSlideIndex={setSlideIndex} />}
        </div>
    );
};

export default TissueCard;